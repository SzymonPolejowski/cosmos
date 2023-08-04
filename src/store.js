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
    },
    {
      id: 1,
      icon: "🚀",
      name: "BRUH_02",
      project: "BRUH",
      status: 0,
      reserver: null,
      blocker: null,
      owner: "ergaeg",
      DUT: {
        MAC: "a7:ce:39:1a:ff:98",
        IP: "93.185.244.68",
        SN: "HDSU0QC52A",
        BMC: null,
        KVM: null,
      },
      Controller: {
        MAC: "33:a7:a6:7d:1c:a3",
        IP: "125.143.52.207",
        SN: null,
      },
      WPS: {
        IP: "214.94.177.160",
        Socket: "2",
      },
      Inventory: [
        {
          name: "LauterBach",
        },
      ],
      desc: null,
    },
    {
      id: 2,
      icon: "🚀",
      name: "BRUH_04",
      project: "BRUH",
      status: 3,
      reserver: "hrthat",
      blocker: null,
      owner: "yrtath",
      DUT: {
        MAC: "7c:18:28:41:2e:13",
        IP: "123.196.110.98",
        BMC: null,
        KVM: null,
      },
      Controller: {
        MAC: "6e:3a:a3:fb:cd:9b",
        IP: "211.118.234.153",
        SN: null,
      },
      WPS: {
        IP: "95.151.118.38",
        Socket: "4",
      },
      Inventory: [
        {
          name: "Tytanic",
        },
      ],
      desc: "Regression",
    },
    {
      id: 3,
      icon: "🚀",
      name: "BRUH_05",
      project: "BRUH",
      status: 0,
      reserver: null,
      blocker: null,
      owner: "gerger",
      DUT: {
        IP: "188.24.229.191",
        SN: null,
        MAC: "7f:14:27:99:c8:1b",
        BMC: null,
        KVM: null,
      },
      Controller: {
        IP: "170.223.129.37",
        MAC: "74:f2:46:3c:f2:44",
        SN: null,
      },
      WPS: {
        IP: "83.200.27.95",
        Socket: "7",
      },
      Inventory: [
        {
          name: "LauterBach",
        },
      ],
      desc: "Lauterbach PowerSwitch: 76.51.243.196",
    },
    {
      id: 4,
      icon: "🚀",
      name: "CB_1",
      project: "BRUH",
      status: 0,
      reserver: null,
      blocker: null,
      owner: "wrytrfgh",
      DUT: {
        IP: "146.82.87.249",
        SN: null,
        MAC: "d5:85:2d:23:57:a2",
        BMC: null,
        KVM: null,
      },
      Controller: {
        IP: "146.82.87.249",
        MAC: "146.82.87.249",
        SN: null,
      },
      WPS: {
        IP: "146.82.87.249",
        Socket: "1",
      },
    },
    {
      id: 5,
      icon: "📡",
      name: "SIS_01",
      project: "SIS",
      status: 1,
      reserver: null,
      blocker: "espoleho",
      owner: null,
      DUT: {
        IP: "226.148.84.139",
        SN: null,
        MAC: "57:73:1d:49:32:5e",
        BMC: null,
        KVM: null,
      },
      Controller: {
        IP: "86.153.216.50",
        MAC: "45:24:2a:68:d9:72",
        SN: null,
      },
      WPS: {
        IP: "68.42.84.183",
        Socket: "1",
      },
    },
    {
      id: 6,
      icon: "📡",
      name: "SIS_03",
      project: "SIS",
      status: 0,
      reserver: null,
      blocker: null,
      owner: "jchuptys",
      DUT: {
        IP: "113.237.18.176",
        SN: null,
        MAC: "5d:4f:28:37:3d:79",
        BMC: "110.19.233.74",
        KVM: "111.132.237.185",
      },
      Controller: {
        IP: "213.66.183.5",
        MAC: "ba:d8:bc:6a:57:f7",
        SN: null,
      },
      WPS: {
        IP: "173.121.90.139",
        Socket: "3",
      },
      desc: "PLATFORM USED FOR NIGHTLY REGRESSION!\n\nleave the platform in the condition you would like to find it in",
    },
    {
      id: 7,
      icon: "📡",
      name: "SIS_04",
      project: "SIS",
      status: 0,
      reserver: null,
      blocker: null,
      owner: "barsitek",
      DUT: {
        IP: "251.106.131.73",
        SN: null,
        MAC: "a4:ee:b3:71:d9:61",
        BMC: null,
        KVM: null,
      },
      Controller: {
        IP: "114.195.193.11",
        MAC: "3b:e4:cd:ca:cf:3d",
        SN: null,
      },
      WPS: {
        IP: "161.96.142.202",
        Socket: "4",
      },
      Inventory: [
        {
          name: "Polonez",
        },
        {
          name: "Ardvaark",
        },
        {
          name: "Tytanic",
          info: "as LinkPartner",
        },
      ],
      desc: "ASUS MOTHERBOARD",
    },
    {
      id: 8,
      icon: "📡",
      name: "SIS_05",
      project: "SIS",
      status: 0,
      reserver: null,
      blocker: null,
      owner: "gonciarz",
      DUT: {
        IP: "46.98.172.209",
        SN: null,
        MAC: "44:f8:58:55:fc:81",
        BMC: null,
        KVM: null,
      },
      Controller: {
        IP: "159.23.242.24",
        MAC: "4c:6e:2d:4f:bd:dc",
        SN: null,
      },
      WPS: {
        IP: "251.174.9.52",
        Socket: "5",
      },
      Inventory: [
        {
          name: "Polonez",
          info: "/w SF600",
        },
        {
          name: "Bobuś",
        },
        {
          name: "Ardvaark",
        },
        {
          name: "Bizon",
        },
      ],
    },
    {
      id: 9,
      icon: "📡",
      name: "SIS_06",
      project: "SIS",
      status: 0,
      reserver: null,
      blocker: null,
      owner: "farciarz",
      DUT: {
        IP: "242.97.84.118",
        SN: null,
        MAC: "d6:76:ef:73:81:37",
        BMC: null,
        KVM: "128.17.81.228",
      },
      Controller: {
        IP: "102.14.172.153",
        MAC: "cf:45:32:9b:f2:ed",
        SN: null,
      },
      WPS: {
        IP: "144.31.123.99",
        Socket: "6",
      },
      Inventory: [
        {
          name: "Polonez",
          info: "/w SF600",
        },
        {
          name: "Bobuś",
        },
        {
          name: "Ardvaark",
        }
      ],
    },
    {
      id: 10,
      icon: "📡",
      name: "SIS_07",
      project: "SIS",
      status: 0,
      reserver: "jchuptys",
      blocker: null,
      owner: "barsitek",
      DUT: {
        IP: "109.50.49.114",
        SN: null,
        MAC: "d1:41:ec:98:9a:d7",
        BMC: null,
        KVM: null,
      },
      Controller: {
        IP: "245.241.206.242",
        MAC: "19:ce:44:e5:e9:84",
        SN: null,
      },
      WPS: {
        IP: "82.41.14.159",
        Socket: "8",
      },
      Inventory: [
        {
          name: "Polonez",
          info: "/w SF-100",
        },
        {
          name: "LatuerBach",
        },
        {
          name: "RURA",
        },
      ],
    },
    {
      id: 11,
      icon: "📡",
      name: "SIS_08",
      project: "SIS",
      status: 1,
      reserver: null,
      blocker: "espoleho",
      owner: null,
      DUT: {
        IP: "170.74.153.182",
        SN: null,
        MAC: "96:7a:e2:ab:bb:22",
        BMC: null,
        KVM: null,
      },
      Controller: {
        MAC: "7d:bc:8f:38:95:81",
        IP: "199.103.36.31",
        SN: null,
      },
      WPS: {
        IP: "28:dc:da:af:cc:1b",
        Socket: "7",
      },
      Inventory: [
        {
          name: "Polonez",
        },
        {
          name: "Dzwon Staw",
          info: "Quad Port",
        },
        {
          name: "RURA",
        },
      ],
    },
    {
      id: 12,
      icon: "📡",
      name: "SIS_09",
      project: "SIS",
      status: 1,
      reserver: null,
      blocker: "espoleho",
      owner: "potykowicz",
      DUT: {
        IP: "227.238.145.9",
        SN: null,
        MAC: "92:98:1e:97:66:7f",
        BMC: "227.238.145.9",
        KVM: null,
      },
      Controller: {
        MAC: "ef:e8:11:3c:a8:96",
        IP: "161.103.85.145",
        SN: null,
      },
      WPS: {
        IP: "162.69.217.253",
        Socket: "8",
      },
      Inventory: [
        {
          name: "Polonez",
        },
      ],
    },
    {
      id: 13,
      icon: "📡",
      name: "SIS_10",
      project: "SIS",
      status: 2,
      reserver: null,
      blocker: null,
      owner: "potykowicz",
      DUT: {
        IP: "114.167.81.153",
        SN: null,
        MAC: "82:41:74:1d:ba:8a",
        BMC: null,
        KVM: null,
      },
      Controller: {
        IP: "228.19.156.133",
        MAC: "a4:7a:3f:8b:a6:ea",
        SN: null,
      },
      WPS: {
        IP: "70.103.147.237",
        Socket: "8",
      },
      Inventory: [
        {
          name: "Polonez",
        },
        {
          name: "SMBus",
        },
        {
          name: "RURA",
        },
        {
          name: "LauterBach",
        },
      ],
      desc: "Used in Regression\nBefore start work on this setup please contact and check if platform is free\n\nDO NOT ANY HW CHANGES!",
    },
    {
      id: 14,
      icon: "📡",
      name: "SIS_11",
      project: "SIS",
      status: 3,
      reserver: "farciarz",
      blocker: null,
      owner: "barsitek",
      DUT: {
        IP: "23.60.244.130",
        SN: null,
        MAC: "6f:5c:82:4d:fe:2f",
        BMC: null,
        KVM: null,
      },
      Controller: {
        MAC: "f4:1d:24:23:3a:64",
        IP: "122.81.63.101",
        SN: null,
      },
      WPS: {
        IP: "175.178.128.183",
        Socket: "1",
      },
      Inventory: [
        {
          name: "Fedora",
          info: "37",
        },
        {
          name: "Salami Kanał",
          info: "/w EM100PRO-G2",
        },
        {
          name: "Mitosaur",
        },
        {
          name: "Ardvaark",
        },
        {
          name: "Beagle",
          info: "x2",
        },
        {
          name: "Polonez",
        },
      ],
      desc: "Salami config:\n1 - Polonez\n2 - Polonez\n3 - Polonez\n4 - Mitosaur with optical module",
    },
    {
      id: 15,
      icon: "📡",
      name: "SIS_12",
      project: "SIS",
      status: 3,
      reserver: "zadymiarz",
      blocker: null,
      owner: "potykowicz",
      DUT: {
        IP: "33.52.59.112",
        SN: null,
        MAC: "c1:a5:66:44:3d:19",
        BMC: null,
        KVM: null,
      },
      Controller: {
        MAC: "eb:d5:ce:a1:4a:cb",
        IP: "19.199.219.158",
        SN: null,
      },
      WPS: {
        IP: "78.224.213.152",
        Socket: "5",
      },
      Inventory: [
        {
          name: "Fedora",
          info: "26",
        },
        {
          name: "Polonez",
        },
        {
          name: "Dediprog",
        },
        {
          name: "SMBus",
        },
      ],
      desc: "Setup for zadymiarz only.\nPlease do not change!",
    },
    {
      id: 16,
      icon: "📡",
      name: "SIS_13",
      project: "SIS",
      status: 0,
      reserver: null,
      blocker: null,
      owner: "potykowicz",
      DUT: {
        IP: "235.187.6.52",
        SN: null,
        MAC: "b3:1c:a3:23:fa:94",
        BMC: null,
        KVM: null,
      },
      Controller: {
        IP: "30.252.135.60",
        MAC: "c1:7f:11:8c:f3:49",
        SN: null,
      },
      WPS: {
        IP: "110.73.54.97",
        Socket: "7",
      },
      Inventory: [
        {
          name: "Polonez",
          info: "/w SF600",
        },
        {
          name: "Bobuś",
        },
      ],
    },
    {
      id: 17,
      icon: "📡",
      name: "SIS_14",
      project: "SIS",
      status: 0,
      reserver: null,
      blocker: null,
      owner: "potykowicz",
      DUT: {
        IP: "191.53.123.233",
        SN: null,
        MAC: "b9:85:f9:98:53:c6",
        BMC: null,
        KVM: null,
      },
      Controller: {
        MAC: "68:e2:ae:8f:ee:b7",
        IP: "49.45.251.36",
        SN: null,
      },
      WPS: {
        IP: "113.34.203.79",
        Socket: "3",
      },
      Inventory: [
        {
          name: "Bogdan",
        },
        {
          name: "Bizon",
        },
        {
          name: "SMBus",
        },
        {
          name: "Aardvark",
        },
      ],
    },
    {
      id: 18,
      icon: "📡",
      name: "SIS_15",
      project: "SIS",
      status: 0,
      reserver: null,
      blocker: null,
      owner: "czolem",
      DUT: {
        IP: "103.223.126.87",
        SN: null,
        MAC: "bb:19:97:e9:19:6e",
        BMC: "10.211.236.110",
        KVM: null,
      },
      Controller: {
        MAC: "88:31:fa:c3:c2:2e",
        IP: "139.66.15.235",
        SN: null,
      },
      WPS: {
        IP: "55.75.123.166",
        Socket: "6",
      },
      Inventory: [
        {
          name: "Fedora",
          info: "33",
        },
        {
          name: "UART",
        },
        {
          name: "SMBus",
        },
      ],
      desc: "",
    },
    {
      id: 19,
      icon: "📡",
      name: "SIS_16",
      project: "SIS",
      status: 2,
      reserver: null,
      blocker: null,
      owner: "czolem",
      DUT: {
        IP: "236.222.188.55",
        SN: null,
        MAC: "b9:7f:3e:1a:a3:15",
        BMC: null,
        KVM: null,
      },
      Controller: {
        MAC: "9f:39:c3:dd:c8:5b",
        IP: "119.217.18.116",
        SN: null,
      },
      WPS: {
        IP: "85.98.107.98",
        Socket: "3",
      },
      Inventory: [
        {
          name: "Bogdan",
          info: "/w EM100",
        },
        {
          name: "SMBus",
        },
        {
          name: "UART",
        },
      ],
      desc: "REGRESSION SETUP",
    },
    {
      id: 20,
      icon: "📡",
      name: "SIS_17",
      project: "SIS",
      status: 0,
      reserver: null,
      blocker: null,
      owner: "czolem",
      DUT: {
        IP: "58.20.126.72",
        SN: null,
        MAC: "8c:a4:b2:39:f9:21",
        BMC: "205.6.132.87",
        KVM: null,
      },
      Controller: {
        MAC: "5e:94:c2:c8:85:2d",
        IP: "14.203.217.88",
        SN: null,
      },
      WPS: {
        IP: "36.245.152.99",
        Socket: "4",
      },
      Inventory: [
        {
          name: "Nowy Kanał",
          info: "/w EM100",
        },
        {
          name: "LTB",
        },
        {
          name: "SMBus",
        },
      ],
      desc: "SETUP MOVED TO LAWENDA",
    },
    {
      id: 21,
      icon: "📡",
      name: "SIS_18",
      project: "SIS",
      status: 1,
      reserver: null,
      blocker: "potykowicz",
      owner: "potykowicz",
      DUT: {
        IP: "106.56.105.201",
        SN: null,
        MAC: "36:77:8f:f8:98:51",
        BMC: null,
        KVM: "10.211.236.176",
      },
      Controller: {
        MAC: "ea:77:f9:7a:5f:c9",
        IP: "238.118.129.51",
        SN: null,
      },
      WPS: {
        IP: "2.44.225.249",
        Socket: "7",
      },
      Inventory: [
        {
          name: "Polonez",
        },
        {
          name: "FLYSWATTER",
        },
        {
          name: "UART",
        },
        {
          name: "Bobuś",
        },
      ],
      desc: "REGRESSION SETUP",
    },
    {
      id: 22,
      icon: "📡",
      name: "SIS_19",
      project: "SIS",
      status: 1,
      reserver: null,
      blocker: "potykowicz",
      owner: "potykowicz",
      DUT: {
        IP: "218.9.255.17",
        SN: null,
        MAC: "be:29:7f:9c:f5:3b",
        BMC: null,
        KVM: null,
      },
      Controller: {
        MAC: "6c:c8:8c:52:14:a5",
        IP: "156.10.18.129",
        SN: null,
      },
      WPS: {
        IP: "50.81.76.70",
        Socket: "6",
      },
      Inventory: [
        {
          name: "Windows",
        },
        {
          name: "Polonez",
        },
        {
          name: "FLYSWATTER",
        },
        {
          name: "UART",
        },
        {
          name: "Bobuś",
        },
      ],
      desc: "REGRESSION SETUP",
    },
    {
      id: 23,
      icon: "📡",
      name: "SIS_20",
      project: "SIS",
      status: 0,
      reserver: null,
      blocker: null,
      owner: "potykowicz",
      DUT: {
        IP: "122.38.116.90",
        SN: null,
        MAC: "59:55:e1:a3:57:5f",
        BMC: null,
        KVM: null,
      },
      Controller: {
        MAC: "e5:cb:ad:37:97:81",
        IP: "81.52.188.43",
        SN: null,
      },
      WPS: {
        IP: "149.163.150.42",
        Socket: "6",
      },
      Inventory: [
        {
          name: "Windows",
        },
        {
          name: "Polonez",
        },
        {
          name: "FLYSWATTER",
        },
        {
          name: "UART",
        },
        {
          name: "Bobuś",
        },
      ],
      desc: "REGRESSION SETUP",
    },
    {
      id: 24,
      icon: "📡",
      name: "SIS_21",
      project: "SIS",
      status: 1,
      reserver: null,
      blocker: "potykowicz",
      owner: "potykowicz",
      DUT: {
        IP: "17.176.173.14",
        SN: null,
        MAC: "a2:85:15:f3:9b:76",
        BMC: null,
        KVM: null,
      },
      Controller: {
        IP: "104.199.87.40",
        MAC: "67:b5:88:a4:d2:84",
        SN: null,
      },
      WPS: {
        IP: "255.2.49.20",
        Socket: "2",
      },
      Inventory: [
        {
          name: "Windows",
        },
        {
          name: "Polonez",
        },
        {
          name: "LTB",
          info: "WPS: 104.84.68.189",
        },
        {
          name: "UART",
        },
        {
          name: "Bobuś",
        },
      ],
      desc: "REGRESSION SETUP",
    },
    {
      id: 25,
      icon: "📡",
      name: "SIS_22",
      project: "SIS",
      status: 3,
      reserver: "mandarian",
      blocker: null,
      owner: "potykowicz",
      DUT: {
        IP: "36.122.112.229",
        SN: null,
        MAC: "c6:91:6c:fd:a1:1b",
        BMC: null,
        KVM: null,
      },
      Controller: {
        IP: "156.229.133.83",
        MAC: "d7:c4:41:b9:53:b5",
        SN: null,
      },
      WPS: {
        IP: "62.119.113.65",
        Socket: "8",
      },
      Inventory: [
        {
          name: "Polonez",
        },
        {
          name: "LTB",
          info: "WPS: 53.140.96.20",
        },
        {
          name: "UART",
        },
        {
          name: "Bobuś",
        },
      ],
      desc: "REGRESSION SETUP",
    },
    {
      id: 26,
      icon: "📡",
      name: "SIS_23",
      project: "SIS",
      status: 0,
      reserver: null,
      blocker: null,
      owner: "potykowicz",
      DUT: {
        IP: "53.140.96.20",
        SN: null,
        MAC: "34:2a:72:23:d2:c6",
        BMC: "6.173.139.212",
        KVM: null,
      },
      Controller: {
        MAC: "39:b9:b2:33:a5:e6",
        IP: "118.235.98.163",
        SN: null,
      },
      WPS: {
        IP: "202.229.143.137",
        Socket: "8",
      },
      Inventory: [
        {
          name: "Fedora",
          info: "36",
        },
        {
          name: "Bizon",
        },
        {
          name: "Ardvaark",
        },
      ],
      desc: "iDRAC:\nroot\nroot",
    },
    {
      id: 27,
      icon: "📡",
      name: "SIS_24",
      project: "SIS",
      status: 0,
      reserver: null,
      blocker: null,
      owner: "potykowicz",
      DUT: {
        MAC: "94:3b:c1:b5:64:94",
        IP: "158.136.240.11",
        SN: "5X544TL0FK",
        BMC: "148.133.226.197",
        KVM: null,
      },
      Controller: {
        MAC: "25:8f:4c:39:53:44",
        IP: "168.102.218.47",
        SN: null,
      },
      WPS: {
        IP: "77.90.118.252",
        Socket: "2",
      },
      Inventory: [
        {
          name: "Fedora",
          info: "36",
        },
      ],
    },
    {
      id: 28,
      icon: "📡",
      name: "SIS_25",
      project: "SIS",
      status: 3,
      reserver: "dyszka",
      blocker: null,
      owner: null,
      DUT: {
        MAC: "22:7a:77:ff:83:6d",
        IP: "11.82.161.6",
        SN: "5IVR6RVPXP",
        BMC: "116.32.174.235",
        KVM: null,
      },
      Controller: {
        MAC: "ed:f8:ed:cb:85:3f",
        IP: "1.56.66.71",
        SN: "78GL74A5FU",
      },
      WPS: {
        IP: "15.52.246.57",
        Socket: "8",
      },
      Inventory: [
        {
          name: "Polonez",
        },
        {
          name: "UART",
        },
        {
          name: "SF100",
        },
      ],
    },
    {
      id: 29,
      icon: "📡",
      name: "SIS_26",
      project: "SIS",
      status: 0,
      reserver: null,
      blocker: null,
      owner: null,
      DUT: {
        MAC: "75:e6:be:3f:12:fe",
        IP: "19.13.144.68",
        SN: "8OLVD5TUF7",
        BMC: "240.93.21.87",
        KVM: null,
      },
      Controller: {
        MAC: "19:b3:3f:35:44:13",
        IP: "103.188.74.153",
        SN: "X8UDIHDJ9W",
      },
      WPS: {
        IP: "252.105.135.64",
        Socket: "7",
      },
      desc: "FREE DUT",
    },
    {
      id: 30,
      icon: "📡",
      name: "SIS_27",
      project: "SIS",
      status: 0,
      reserver: null,
      blocker: null,
      owner: null,
      DUT: {
        MAC: "18:19:93:16:38:28",
        IP: "238.159.141.84",
        SN: "IGBHTFH3K1",
        BMC: "113.61.47.85",
        KVM: null,
      },
      Controller: {
        MAC: "4d:71:9f:c6:fb:8e",
        IP: "186.8.121.214",
        SN: "49WHH0JWIG",
      },
      WPS: {
        IP: "144.252.197.223",
        Socket: "1",
      },
      Inventory: [
        {
          name: "Karaluch",
        },
        {
          name: "Królik",
        },
        {
          name: "LauterBach",
        },
      ],
      desc: "FREE DUT",
    },
    {
      id: 31,
      icon: "📡",
      name: "SIS_28",
      project: "SIS",
      status: 0,
      reserver: null,
      blocker: null,
      owner: null,
      DUT: {
        MAC: "ac:ca:63:82:6d:e6",
        IP: "199.168.72.226",
        SN: "TKUP29BJ6J",
        BMC: "10.211.236.136",
        KVM: null,
      },
      Controller: {
        MAC: "df:1b:e9:9b:c8:94",
        IP: "50.94.113.102",
        SN: "ZB1ND5XZQR",
      },
      WPS: {
        IP: "59.57.112.131",
        Socket: "6",
      },
      Inventory: [
        {
          name: "Polonez",
        },
      ],
      desc: "Temporarly used for the SUS project",
    },
    {
      id: 32,
      icon: "🚀",
      name: "BRO_1",
      project: "BRUH",
      status: 0,
      reserver: null,
      blocker: null,
      owner: "siekera",
      DUT: {
        MAC: "72:1c:c4:7b:6a:17",
        IP: "192.94.236.143",
        SN: "R0MUSEXY6O",
        BMC: null,
        KVM: null,
      },
      Controller: {
        MAC: "e8:5b:fb:92:23:ef",
        IP: "192.232.87.135",
        SN: null,
      },
      WPS: {
        IP: "30.205.83.89",
        Socket: "1",
      },
    },
    {
      id: 33,
      icon: "🚀",
      name: "DUDE_1",
      project: "BRUH",
      status: 1,
      reserver: null,
      blocker: "siekera",
      owner: "siekera",
      DUT: {
        MAC: "39:e1:b1:6b:d1:da",
        IP: "166.160.52.191",
        SN: "VERG80UVMO",
        BMC: null,
        KVM: null,
      },
      Controller: {
        MAC: "1f:be:37:f3:ca:ea",
        IP: "22.168.162.128",
        SN: "CD21V9JHV2",
      },
      WPS: {
        IP: "165.38.204.143",
        Socket: "5",
      },
      desc: "regression",
    },
    {
      id: 34,
      icon: "🚀",
      name: "DUDE_2",
      project: "BRUH",
      status: 1,
      reserver: null,
      blocker: "siekera",
      owner: "siekera",
      DUT: {
        IP: "10.91.212.177",
        SN: null,
        MAC: "70:10:6f:ca:ef:28",
        BMC: null,
        KVM: null,
      },
      Controller: {
        IP: "10.91.212.46",
        MAC: "22:08:ae:e7:2c:de",
        SN: null,
      },
      WPS: {
        IP: "10.211.236.106",
        Socket: "2",
      },
      Inventory: [
        {
          name: "LauterBach",
          info: "WPS: 10.91.212.106",
        },
        {
          name: "LinkPartner",
          info: "ens5f0",
        },
      ],
      desc: "REGRESSION PLATFROM",
    },
    {
      id: 35,
      icon: "🚀",
      name: "DUDE_3",
      project: "BRUH",
      status: 0,
      reserver: null,
      blocker: null,
      owner: "siekera",
      DUT: {
        MAC: "32:1b:f6:17:c2:d2",
        IP: "204.10.59.172",
        SN: "XYWPIUOT52",
        BMC: null,
        KVM: null,
      },
      Controller: {
        MAC: "a3:7c:cb:d7:3a:d6",
        IP: "31.224.21.87",
        SN: "X3RCR2X2P8",
      },
      WPS: {
        IP: "164.163.222.196",
        Socket: "7",
      },
      Inventory: [
        {
          name: "Loopback",
        },
      ],
      desc: "Rework",
    },
    {
      id: 36,
      icon: "🚀",
      name: "DUDE_4",
      project: "BRUH",
      status: 0,
      reserver: null,
      blocker: null,
      owner: "siekera",
      DUT: {
        MAC: "46:8a:6d:3b:4f:32",
        IP: "15.62.209.214",
        SN: "B5XE11WTOU",
        BMC: null,
        KVM: null,
      },
      Controller: {
        MAC: "17:74:83:58:63:ae",
        IP: "202.102.65.200",
        SN: null,
      },
      WPS: {
        IP: "172.195.213.68",
        Socket: "5",
      },
      Inventory: [
        {
          name: "Loopback",
        },
      ],
    },
    {
      id: 37,
      icon: "🚀",
      name: "DUDE_5",
      project: "BRUH",
      status: 0,
      reserver: null,
      blocker: null,
      owner: null,
      DUT: {
        MAC: "86:a4:a4:51:7e:d7",
        IP: "37.168.110.199",
        SN: "0J29D8LROE",
        BMC: null,
        KVM: "240.231.3.252",
      },
      Controller: {
        MAC: "41:2f:bb:52:23:95",
        IP: "111.240.97.143",
        SN: "34Z1QTWHQS",
      },
      WPS: {
        IP: "35.13.50.72",
        Socket: "7",
      },
      Inventory: [
        {
          name: "LauterBach",
          info: "Same WPS as DUT",
        },
      ],
    },
    {
      id: 38,
      icon: "🚀",
      name: "OG_1",
      project: "BRUH",
      status: 0,
      reserver: null,
      blocker: null,
      owner: null,
      DUT: {
        MAC: "84:c8:ae:94:d9:98",
        IP: "93.248.128.1",
        SN: "RK7A3W337O",
        BMC: "20.152.117.105",
        KVM: null,
      },
      Controller: {
        MAC: "24:9e:8b:ca:7d:55",
        IP: "90.126.170.3",
        SN: "1KF3FFVB2F",
      },
      WPS: {
        IP: "229.42.131.24",
        Socket: "3",
      },
    },
    {
      id: 39,
      icon: "🚀",
      name: "FAM_01",
      project: "BRUH",
      status: 1,
      reserver: null,
      blocker: "espoleho",
      owner: null,
      DUT: {
        MAC: "4c:a1:57:7c:a3:47",
        IP: "102.240.225.209",
        SN: "6BW7DIMAUG",
        BMC: null,
        KVM: null,
      },
      Controller: {
        MAC: "32:fb:2c:f2:e8:16",
        IP: "170.65.27.242",
        SN: "V46T576TK1",
      },
      WPS: {
        IP: "243.62.197.151",
        Socket: "3",
      },
    },
    {
      id: 40,
      icon: "🚀",
      name: "FAM_02",
      project: "BRUH",
      status: 1,
      reserver: null,
      blocker: "espoleho",
      owner: null,
      DUT: {
        MAC: "4d:99:b2:f1:12:f5",
        IP: "225.215.72.211",
        SN: "LFKVDMCOWY",
        BMC: null,
        KVM: null,
      },
      Controller: {
        MAC: "73:ff:cc:a1:56:71",
        IP: "166.11.45.161",
        SN: "09ZMOV1KLU",
      },
      WPS: {
        IP: "138.58.140.86",
        Socket: "2",
      },
    },
    {
      id: 41,
      icon: "🚀",
      name: "FAM_03",
      project: "BRUH",
      status: 0,
      reserver: null,
      blocker: null,
      owner: "siekera",
      DUT: {
        MAC: "75:25:14:11:36:f8",
        IP: "210.202.218.175",
        SN: "DXC3DVBYO0",
        BMC: null,
        KVM: null,
      },
      Controller: {
        MAC: "35:ec:ec:be:e3:44",
        IP: "5.158.168.106",
        SN: "RD62C923TU",
      },
      WPS: {
        IP: "110.133.15.252",
        Socket: "1",
      },
      Inventory: [
        {
          name: "LauterBach",
          info: "WPS: 241.154.247.71",
        },
      ],
    },
    {
      id: 42,
      icon: "🚀",
      name: "FAM_04",
      project: "BRUH",
      status: 0,
      reserver: null,
      blocker: null,
      owner: "siekera",
      DUT: {
        MAC: "fa:3e:c7:8c:ea:2a",
        IP: "91.102.106.17",
        SN: "1D4XINLLKZ",
        BMC: null,
        KVM: null,
      },
      Controller: {
        MAC: "53:a2:62:ca:fe:fc",
        IP: "150.179.137.167",
        SN: "QETIQU5UVH",
      },
      WPS: {
        IP: "5.136.130.53",
        Socket: "8",
      },
      Inventory: [
        {
          name: "LauterBach",
          info: "WPS: 54.145.9.255",
        },
      ],
    },
    {
      id: 43,
      icon: "🚀",
      name: "FAM_05",
      project: "BRUH",
      status: 0,
      reserver: null,
      blocker: null,
      owner: "siekera",
      DUT: {
        MAC: "e8:13:b2:e5:d6:ba",
        IP: "95.191.127.238",
        SN: "ELWOE6PWZH",
        BMC: null,
        KVM: null,
      },
      Controller: {
        MAC: "2a:eb:4b:49:8c:7a",
        IP: "10.21.24.192",
        SN: "W2BPHH8G3S",
      },
      WPS: {
        IP: "156.171.105.192",
        Socket: "3",
      },
      Inventory: [
        {
          name: "LauterBach",
          info: "WPS: 82.1.209.241",
        },
      ],
    },
    {
      id: 44,
      icon: "🚀",
      name: "FAM_06",
      project: "BRUH",
      status: 1,
      reserver: null,
      blocker: "siekera",
      owner: "siekera",
      DUT: {
        MAC: "8d:98:e6:8f:d7:2e",
        IP: "126.60.230.14",
        SN: "KCTZHFL30Q",
        BMC: null,
        KVM: null,
      },
      Controller: {
        MAC: "61:d2:4d:2f:94:22",
        IP: "136.42.115.157",
        SN: "OCOXPFS4ED",
      },
      WPS: {
        IP: "192.123.97.188",
        Socket: "3",
      },
      Inventory: [
        {
          name: "LauterBach",
          info: "WPS: 42.171.29.92",
        },
      ],
      desc: "Regression",
    },
    {
      id: 45,
      icon: "🚀",
      name: "FAM_07",
      project: "BRUH",
      status: 0,
      reserver: null,
      blocker: null,
      owner: "siekera",
      DUT: {
        IP: "250.209.13.218",
        SN: null,
        MAC: "e6:e9:7c:71:2c:62",
        BMC: null,
        KVM: null,
      },
      Controller: {
        MAC: "ba:11:5b:9a:cf:ce",
        IP: "187.225.223.120",
        SN: "W6X9RC139H",
      },
      WPS: {
        IP: "126.198.84.80",
        Socket: "3",
      },
      Inventory: [
        {
          name: "LauterBach",
          info: "WPS: 71.3.198.160",
        },
      ],
    },
    {
      id: 46,
      icon: "🚀",
      name: "FAM_08",
      project: "BRUH",
      status: 1,
      reserver: null,
      blocker: "siekera",
      owner: "siekera",
      DUT: {
        MAC: "76:87:52:1e:cc:95",
        IP: "154.43.78.116",
        SN: null,
        BMC: null,
        KVM: null,
      },
      Controller: {
        MAC: "6a:7c:44:92:49:ac",
        IP: "255.227.115.232",
        SN: "ZUYY1LFYJF",
      },
      WPS: {
        IP: "8.166.246.222",
        Socket: "2",
      },
      desc: "regression",
    },
    {
      id: 47,
      icon: "🚀",
      name: "VNC_01",
      project: "BRUH",
      status: 0,
      reserver: null,
      blocker: null,
      owner: "siekera",
      DUT: {
        MAC: "f2:68:f2:ea:aa:1e",
        IP: "46.230.57.119",
        BMC: null,
        KVM: null,
      },
      Controller: {
        MAC: "85:76:1e:3f:12:fc",
        IP: "212.216.229.173",
        SN: "IJ8YXTY1C5",
      },
      WPS: {
        IP: "130.17.10.172",
        Socket: "5",
      },
      Inventory: [
        {
          name: "LauterBach",
          info: "WPS: 88.188.54.31",
        },
      ],
      desc: "regression",
    },
    {
      id: 48,
      icon: "🏔️",
      name: "BOMBA_01",
      project: "BOMBA",
      status: 0,
      reserver: null,
      blocker: null,
      owner: "siekera",
      DUT: {
        IP: "24.151.114.247",
        SN: null,
        MAC: "94:37:41:c9:7c:73",
        BMC: null,
        KVM: null,
      },
      Controller: {
        MAC: "4a:a2:b9:7a:4a:fa",
        IP: "131.62.119.203",
        SN: "DCB9JRDLUS",
      },
      WPS: {
        IP: "234.60.204.144",
        Socket: "4",
      },
      Inventory: [
        {
          name: "Granat",
          info: "",
        },
      ],
    },
    {
      id: 49,
      icon: "🏔️",
      name: "BOMBA_02",
      project: "BOMBA",
      status: 3,
      reserver: "openHMR",
      blocker: null,
      owner: null,
      DUT: {
        MAC: "e8:f1:3e:77:38:98",
        IP: "86.23.147.67",
        SN: null,
        BMC: "162.56.52.81",
        KVM: null,
      },
      Controller: {
        MAC: "6e:9a:b8:1e:a9:f5",
        IP: "131.38.188.10",
        SN: "AE895WPN7K",
      },
      WPS: {
        IP: "164.44.232.20",
        Socket: "5",
      },
      Inventory: [
        {
          name: "Granat",
          info: "",
        },
      ],
    },
    {
      id: 50,
      icon: "🏔️",
      name: "BOMBA_03",
      project: "BOMBA",
      status: 3,
      reserver: "mrblast",
      blocker: null,
      owner: null,
      DUT: {
        SN: null,
        MAC: "4b:b1:c4:4b:8e:4b",
        IP: "68.10.81.230",
        BMC: null,
        KVM: "208.118.105.18",
      },
      Controller: {
        MAC: "17:b9:c9:12:d4:78",
        IP: "243.98.149.199",
        SN: "1SZG1I9LVG",
      },
      WPS: {
        IP: "33.231.51.99",
        Socket: "8",
      },
      Inventory: [
        {
          name: "LTB",
          info: "",
        },
        {
          name: "UTAG4",
          info: "",
        },
        {
          name: "Aardvark",
          info: "",
        },
        {
          name: "Beagle",
          info: "",
        },
      ],
    },
    {
      id: 51,
      icon: "🏔️",
      name: "BOMBA_04",
      project: "BOMBA",
      status: 3,
      reserver: "kangkao",
      blocker: null,
      owner: null,
      DUT: {
        MAC: "52:43:ed:66:3b:b1",
        IP: "121.135.137.178",
        SN: null,
        BMC: null,
        KVM: null,
      },
      Controller: {
        MAC: "82:15:6b:af:85:a4",
        IP: "174.119.37.45",
        SN: null,
      },
      WPS: {
        IP: "217.62.71.113",
        Socket: "7",
      },
      Inventory: [
        {
          name: "LTB",
          info: "",
        },
        {
          name: "UTAG4",
          info: "",
        },
        {
          name: "Aardvark",
          info: "",
        },
        {
          name: "Beagle",
          info: "",
        },
      ],
    },
    {
      id: 52,
      icon: "🏔️",
      name: "BOMBA_05",
      project: "BOMBA",
      status: 0,
      reserver: null,
      blocker: null,
      owner: null,
      DUT: {
        MAC: "11:15:f4:58:22:4d",
        IP: "185.158.181.184",
        SN: null,
        BMC: null,
        KVM: null,
      },
      Controller: {
        MAC: "d4:6b:9b:37:e1:b7",
        IP: "27.214.72.160",
        SN: "QQHQGG15CT",
      },
      WPS: {
        IP: "95.105.159.82",
        Socket: "5",
      },
      Inventory: [
        {
          name: "LTB",
          info: "",
        },
        {
          name: "Aardvark",
          info: "",
        },
      ],
    },
    {
      id: 53,
      icon: "🏔️",
      name: "BOMBA_06",
      project: "BOMBA",
      status: 0,
      reserver: "serirzepa",
      blocker: null,
      owner: null,
      DUT: {
        MAC: "5b:e1:56:d5:4e:cb",
        IP: "42.224.87.43",
        SN: null,
        BMC: null,
        KVM: null,
      },
      Controller: {
        MAC: "71:b3:e1:7b:2e:cc",
        IP: "162.96.120.241",
        SN: "F8L8RV9J8B",
      },
      WPS: {
        IP: "215.173.91.36",
        Socket: "4",
      },
    },
    {
      id: 54,
      icon: "🏔️",
      name: "BOMBA_07",
      project: "BOMBA",
      status: 3,
      reserver: "drfetus",
      blocker: null,
      owner: null,
      DUT: {
        SN: null,
        MAC: "6f:76:bf:e8:85:51",
        IP: "153.226.126.62",
        BMC: null,
        KVM: null,
      },
      Controller: {
        MAC: "6f:76:bf:e8:85:51",
        IP: "153.226.126.62",
        SN: null,
      },
      WPS: {
        IP: "127.233.98.93",
        Socket: "7",
      },
      desc: "Regression Machine",
    },
    {
      id: 55,
      icon: "🏔️",
      name: "BOMBA_08",
      project: "BOMBA",
      status: 0,
      reserver: null,
      blocker: null,
      owner: null,
      DUT: {
        IP: "17.65.120.30",
        SN: null,
        MAC: "2d:82:83:57:fd:57",
        BMC: null,
        KVM: null,
      },
      Controller: {
        MAC: "5e:6c:d4:b1:e9:c3",
        IP: "191.24.157.210",
        SN: "LEY55IOSCC",
      },
      WPS: {
        IP: "223.218.209.227",
        Socket: "2",
      },
      Inventory: [
        {
          name: "LauterBach",
        },
        {
          name: "Dediprog",
        },
      ],
    },

    // tutaj

    {
      id: 56,
      icon: "🏎️",
      name: "SUV",
      project: "CARS",
      status: 0,
      reserver: null,
      blocker: null,
      owner: null,
      DUT: {
        MAC: "9c:f1:2e:d9:fe:7d",
        IP: "162.111.57.27",
        SN: "P9MKPHFK9P",
        BMC: "105.219.208.188",
        KVM: "38.127.246.216",
      },
      Controller: {
        MAC: "91:de:ba:1c:3e:16",
        IP: "160.106.31.218",
        SN: "HQH7ZAPLWB",
      },
      WPS: {
        IP: "231.225.86.220",
        Socket: "8",
      },
      Inventory: [
        {
          name: "Boxer",
          info: "/w EM100",
        },
      ],
    },
    {
      id: 57,
      icon: "🏎️",
      name: "MPV",
      project: "CARS",
      status: 0,
      reserver: null,
      blocker: null,
      owner: null,
      DUT: {
        MAC: "d2:9e:3c:f6:eb:de",
        IP: "6.105.131.112",
        SN: "8UY3O9VGUI",
        BMC: "123.31.96.42",
        KVM: "187.155.56.224",
      },
      Controller: {
        MAC: "79:3c:d2:d6:9e:21",
        IP: "55.93.219.154",
        SN: "8HJHA47QDB",
      },
      WPS: {
        IP: "166.144.65.231",
        Socket: "1",
      },
      Inventory: [
        {
          name: "Salami Kanał",
        },
        {
          name: "UART",
        },
        {
          name: "LauterBach",
        },
      ],
      desc: null,
    },
    {
      id: 58,
      icon: "🏎️",
      name: "HATCH",
      project: "CARS",
      status: 0,
      reserver: null,
      blocker: null,
      owner: null,
      DUT: {
        MAC: "db:3c:d1:5c:96:93",
        IP: "222.54.210.132",
        SN: "6RPCM2Y7JT",
        BMC: "95.205.44.230",
        KVM: null,
      },
      Controller: {
        MAC: "4d:bd:18:3c:64:ec",
        IP: "96.110.236.73",
        SN: "WHDK2EOLR9",
      },
      WPS: {
        IP: "244.42.139.21",
        Socket: "7",
      },
      desc: null,
    },
    {
      id: 59,
      icon: "🏎️",
      name: "CARS_001",
      project: "CARS",
      status: 2,
      reserver: null,
      blocker: null,
      owner: "xmyszkax",
      DUT: {
        MAC: "1e:75:7a:48:cd:41",
        IP: "82.56.189.15",
        SN: "ZOLCDUZ3FQ",
        BMC: null,
        KVM: null,
      },
      Controller: {
        MAC: "5f:c5:b3:f9:b8:28",
        IP: "9.246.97.130",
        SN: "9OWNX2MUVY",
      },
      WPS: {
        IP: "142.231.15.228",
        Socket: "2",
      },
      Inventory: [
        {
          name: "Spolier",
        },
        {
          name: "Bizon",
        },
        {
          name: "RURA",
        },
      ],
      desc: "PLATFORM USED IN REGRESSION\nDO NOT CHANGE",
    },
    {
      id: 60,
      icon: "🏎️",
      name: "CARS_002",
      project: "CARS",
      status: 2,
      reserver: null,
      blocker: null,
      owner: "kowalidlo",
      DUT: {
        MAC: "df:dc:a1:2c:7d:a7",
        IP: "230.195.215.9",
        SN: "4KXAPLUCFZ",
        BMC: null,
        KVM: null,
      },
      Controller: {
        MAC: "e1:72:23:9a:3f:ee",
        IP: "27.104.89.18",
        SN: "V6KKDX6C4P",
      },
      WPS: {
        IP: "38.227.98.187",
        Socket: "1",
      },
      Inventory: [
        {
          name: "Kapec",
        },
      ],
    },
    {
      id: 61,
      icon: "🏎️",
      name: "CARS_003",
      project: "CARS",
      status: 1,
      reserver: null,
      blocker: "espoleho",
      owner: null,
      DUT: {
        MAC: "b6:ef:6e:9e:f5:e9",
        IP: "100.24.117.68",
        SN: "0FEJCHCCS0",
        BMC: null,
        KVM: null,
      },
      Controller: {
        MAC: "4f:fc:f2:78:1f:26",
        IP: "224.186.122.186",
        SN: "4G3NXZ5WXX",
      },
      WPS: {
        IP: "65.119.121.191",
        Socket: "3",
      },
      desc: "Used sa Linkpartner DUT",
    },
    {
      id: 62,
      icon: "🏎️",
      name: "CARS_005",
      project: "CARS",
      status: 2,
      reserver: null,
      blocker: null,
      owner: null,
      DUT: {
        MAC: "f9:33:5b:81:8a:d9",
        IP: "24.130.225.236",
        SN: "F2QTXCO9BI",
        BMC: "6.189.131.25",
        KVM: "21.102.109.62",
      },
      Controller: {
        MAC: "57:84:e9:63:f5:76",
        IP: "70.177.115.122",
        SN: "NCH4O94IE9",
      },
      WPS: {
        IP: "17.221.244.123",
        Socket: "4",
      },
      Inventory: [
        {
          name: "Maska",
        },
        {
          name: "Tytanic",
          info: "Linkpartner",
        },
        {
          name: "Lauterbach",
        },
        {
          name: "RURA",
        },
        {
          name: "Beagle",
        },
      ],
      desc: "Rework for simulation",
    },
    {
      id: 63,
      icon: "🏎️",
      name: "CARS_007",
      project: "CARS",
      status: 2,
      reserver: null,
      blocker: null,
      owner: "ralliest",
      DUT: {
        MAC: "34:96:61:1d:68:de",
        IP: "116.76.113.148",
        SN: "9TID8CINXP",
        BMC: null,
        KVM: null,
      },
      Controller: {
        MAC: "34:96:61:1d:68:de",
        IP: "116.76.113.148",
        SN: "9TID8CINXP",
      },
      WPS: {
        IP: "207.32.39.179",
        Socket: "3",
      },
      Inventory: [
        {
          name: "Dzwon Staw",
          info: "129",
        },
        {
          name: "Dzwon Staw",
          info: "130",
        },
        {
          name: "RURA",
        },
      ],
      desc: "Platform used in Regression - DO NOT CHANGE HW",
    },
    {
      id: 64,
      icon: "🏎️",
      name: "CARS_008",
      project: "CARS",
      status: 2,
      reserver: null,
      blocker: null,
      owner: "ralliest",
      DUT: {
        MAC: "1b:45:d2:5a:b9:71",
        IP: "31.202.143.153",
        SN: "2BXYQQHVSF",
        BMC: null,
        KVM: null,
      },
      Controller: {
        MAC: "1b:45:d2:5a:b9:71",
        IP: "31.202.143.153",
        SN: "2BXYQQHVSF",
      },
      WPS: {
        IP: "247.64.110.236",
        Socket: "4",
      },
      desc: "DO NOT CHANGE HW\n\nDEBUG PLATFROM",
    },
    {
      id: 65,
      icon: "🏎️",
      name: "CARS_009",
      project: "CARS",
      status: 3,
      reserver: "miedzik",
      blocker: null,
      owner: "ralliest",
      DUT: {
        MAC: "48:2d:7d:bc:9d:ca",
        IP: "46.140.114.210",
        SN: "9X45INR3IG",
        BMC: null,
        KVM: null,
      },
      Controller: {
        MAC: "2f:cc:cd:b7:a2:52",
        IP: "35.123.179.58",
        SN: "A8CMNV2VF5",
      },
      WPS: {
        IP: "231.207.126.214",
        Socket: "8",
      },
      Inventory: [
        {
          name: "Fedora",
          info: "35",
        },
        {
          name: "Tytanic",
        },
        {
          name: "Maska",
        },
        {
          name: "LatuerBach",
        },
      ],
    },
    {
      id: 66,
      icon: "🏎️",
      name: "CARS_010",
      project: "CARS",
      status: 2,
      reserver: null,
      blocker: null,
      owner: null,
      DUT: {
        MAC: "ee:34:2c:79:b5:7e",
        IP: "86.155.141.30",
        BMC: null,
        KVM: "119.60.186.105",
      },
      Controller: {
        MAC: "54:1d:4b:c4:fb:e8",
        IP: "176.203.86.44",
        SN: "3DPWT5D0E6",
      },
      WPS: {
        IP: "194.188.26.102",
        Socket: "5",
      },
      Inventory: [
        {
          name: "Turbo",
        },
        {
          name: "Aardvark",
        },
        {
          name: "Bizon",
          info: "SMBus",
        },
        {
          name: "RURA",
        },
      ],
    },
    {
      id: 67,
      icon: "🏎️",
      name: "CARS_011",
      project: "CARS",
      status: 2,
      reserver: null,
      blocker: null,
      owner: null,
      DUT: {
        MAC: "31:52:fe:14:2d:54",
        IP: "152.25.235.143",
        SN: null,
        BMC: null,
        KVM: "10.211.236.75",
      },
      Controller: {
        MAC: "7a:33:45:de:9d:a9",
        IP: "44.27.151.84",
        SN: "RLF8DML6FM",
      },
      WPS: {
        IP: "108.231.252.174",
        Socket: "3",
      },
      Inventory: [
        {
          name: "Turbo M",
          info: "/w Tytanic",
        },
        {
          name: "Tytanic",
          info: "LinkPartner",
        },
        {
          name: "LauterBach",
        },
      ],
      desc: "PLATFORM USED IN REGRESSION",
    },
    {
      id: 68,
      icon: "🏎️",
      name: "CARS_012",
      project: "CARS",
      status: 0,
      reserver: null,
      blocker: null,
      owner: null,
      DUT: {
        IP: "95.238.8.60",
        SN: null,
        MAC: "ca:c3:41:9f:2a:8d",
        BMC: null,
        KVM: null,
      },
      Controller: {
        MAC: "12:84:b8:1b:ed:ef",
        IP: "181.137.151.191",
        SN: "KVF54KCR8X",
      },
      WPS: {
        IP: "155.69.6.57",
        Socket: "7",
      },
      desc: "Platform is broken",
    },
    {
      id: 69,
      icon: "🏎️",
      name: "CARS_016",
      project: "CARS",
      status: 3,
      reserver: "epicbruh",
      blocker: null,
      owner: null,
      DUT: {
        MAC: "79:d1:2e:a2:be:8e",
        IP: "46.243.242.220",
        SN: "CD6WR3UEQ4",
        BMC: null,
        KVM: null,
      },
      Controller: {
        MAC: "9c:3b:aa:c9:ef:a5",
        IP: "100.205.237.188",
        SN: "8HSKDG89LK",
      },
      WPS: {
        IP: "35.160.66.227",
        Socket: "8",
      },
      Inventory: [
        {
          name: "Dzwon Staw",
          info: "DUT",
        },
        {
          name: "Dzwon Staw",
          info: "LinkPartner",
        },
      ],
    },
    {
      id: 70,
      icon: "🏎️",
      name: "CARS_017",
      project: "CARS",
      status: 2,
      reserver: null,
      blocker: null,
      owner: null,
      DUT: {
        MAC: "6b:1b:a3:14:11:21",
        IP: "246.22.14.79",
        SN: "ISP4LAIA8P",
        BMC: null,
        KVM: "113.85.100.27",
      },
      Controller: {
        MAC: "9c:cc:62:f7:88:b5",
        IP: "173.242.56.68",
        SN: "3GZWVPWN3U",
      },
      WPS: {
        IP: "14.2.234.106",
        Socket: "6",
      },
      Inventory: [
        {
          name: "Tytanic",
          info: "2",
        },
        {
          name: "Harbor Kanał",
          info: "/w EM100 129",
        },
        {
          name: "RURA",
          info: "1",
        },
      ],
      desc: "Platform used in Regression - DO NOT CHANGE HW",
    },
    {
      id: 71,
      icon: "🏎️",
      name: "CARS_018",
      project: "CARS",
      status: 0,
      reserver: null,
      blocker: null,
      owner: null,
      DUT: {
        MAC: "51:af:82:38:fe:5a",
        IP: "55.39.145.118",
        SN: "FSJEOGQOZL",
        BMC: null,
        KVM: null,
      },
      Controller: {
        MAC: "d6:96:9d:e2:c7:6a",
        IP: "24.16.126.53",
        SN: "EUVVE0HZQR",
      },
      WPS: {
        IP: "75.243.20.219",
        Socket: "4",
      },
      Inventory: [
        {
          name: "Szampan",
        },
      ],
    },
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
