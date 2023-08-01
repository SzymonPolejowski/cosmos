import { reactive } from "vue";

export const store = reactive({
  // STARS

  // Stared platforms
  stars:
    localStorage.getItem("stars") === ""
      ? []
      : localStorage
          .getItem("stars")
          ?.split(";")
          ?.map((e) => +e) || [],
  // Add to stared platforms
  addId(id) {
    localStorage.setItem("stars", [...this.stars, id].join(";"));
    this.stars = [...this.stars, id];
  },
  // Remove from stared platforms
  removeId(id) {
    localStorage.setItem(
      "stars",
      this.stars.filter((e) => e != `${id}`).join(";")
    );
    this.stars = this.stars.filter((e) => e != `${id}`);
  },

  // TELESCOPE

  // Selected platform to view
  selectedToView: null,
  // Update selected platform to view
  updateSelectedToView(id) {
    this.selectedToView = id;
  },

  // TABLE

  // Show only avalible platforms in table view
  showAvalible: false,
  // Change showAvalible value
  changeShowAvalible(value) {
    this.showAvalible = value;
  },
  // Used filters
  usedFilters: [],
  // Add new filter
  addFilter(filter) {
    this.usedFilters = [...this.usedFilters, filter];
  },
  // Remove from used filters
  removeFilter(filter) {
    this.usedFilters = this.usedFilters.filter((e) => e !== filter);
  },
  sortBy: "name",
  changeSortBy(value) {
    this.sortBy = value;
  },
  orderAsc: false,
  changeOrderAsc(value) {
    this.orderAsc = value;
  },

  // SETTINGS

  // is user settings visible
  isUserSettingVisible: false,
  // Displays user settings
  showUserSetting() {
    this.isUserSettingVisible = true;
  },
  // Hides user settings
  hideUserSetting() {
    this.isUserSettingVisible = false;
  },
  // User icon
  userIcon: localStorage.getItem("userIcon") || "🧑‍🚀",
  // List of accessable user icons
  userIconList: ["🧑‍🚀", "🧑‍💻", "🧑‍🔬", "🗿", "👽", "👾"],
  // Set user icons
  setUserIcon(icon) {
    localStorage.setItem("userIcon", icon);
    this.userIcon = icon;
  },
  // All user settings in form of toggle
  userSettings: {
    // When turned on, backgrounds are visible
    showBackground: {
      title: "Show backgrounds",
      value:
        localStorage.getItem("showBackground") !== null
          ? localStorage.getItem("showBackground") === "true"
          : true,
      set(value) {
        localStorage.setItem("showBackground", value);
        this.value = value;
      },
    },
    clearOnRightClick: {
      // When turned on, clears inputs on right click
      title: "Clear on rigth click",
      value:
        localStorage.getItem("clearOnRightClick") !== null
          ? localStorage.getItem("clearOnRightClick") === "true"
          : false,
      set(value) {
        localStorage.setItem("clearOnRightClick", value);
        this.value = value;
      },
    },
  },
  // user ID
  userID: localStorage.getItem("userID") || "",
  // Change user ID
  changeUserID(newID) {
    localStorage.setItem("userID", newID);
    this.userID = newID;
  },

  // ALERT

  // Display alert about inaccessibility
  inaccessibilityAlert: null,

  // Table data
  // --- Will be replaced when backend will be ready
  table_rows: [
    {
      id: 0,
      icon: "🚀",
      name: "BRUH_01",
      project: "BRUH",
      status: 2,
      reserver: null,
      blocker: null,
      owner: "siekera",
      DUT: {
        IP: "13.123.123.123",
        SN: "MXDJ6042137",
        MAC: "d3:23:56:f1:32:a3",
        BMC: null,
        KVM: null,
      },
      Controller: {
        IP: "32.124.264.12",
        MAC: "12:32:54:21:c3:d3",
        SN: null,
      },
      WPS: {
        IP: "54.231.643.13",
        Socket: "8",
      },
      Inventory: [
        {
          name: "Tytanic",
        },
        {
          name: "LauterBach",
        },
      ],
      desc: "LinkPartner Tytanic - Interface name: ens6f0",
    }
  ],

  // Edited platform
  editedRow: {},

  // Copy platform to Edited platform
  createCopy(index) {
    this.editedRow = JSON.parse(
      JSON.stringify(this.table_rows.find((row) => row.id === index))
    );
  },

  updatePlatform(index) {
    const toChange = this.table_rows.find((e) => e.id === index);

    Object.assign(toChange, this.editedRow);

    this.createCopy(index);
  },

  verifyIP(IP) {
    const regex = /^(?!0)(?!.*\.$)((1?\d?\d|25[0-5]|2[0-4]\d)(\.|$)){4}$/;
    return regex.test(IP);
  },

  verifyMAC(MAC) {
    const regex = /^([0-9A-Fa-f]{2}[:-]){5}([0-9A-Fa-f]{2})$/;
    return regex.test(MAC);
  },

  verifySocket(Socket) {
    return Socket.trim() !== "" && Number.isInteger(+Socket);
  },

  verifyData(data, func, isRequired = false) {
    return (
      (!isRequired && (data?.trim() === "" || data === null)) || func(data)
    );
  },

  // table_rows statueses:
  // 0 - avalible
  // 1 - blocked
  // 2 - regression
  // 3 - reserved

  // CPK - 🚀
  // CVL - 📡
  // MEV - 🏔️
  // Race - 🏎️
});
