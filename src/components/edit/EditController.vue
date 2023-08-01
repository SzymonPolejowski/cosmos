<template>
  <div class="edit-container">
    <div class="edit-inputs">
      <div class="edit-input">
        <label for="Controller.IP">IP</label>
        <input
          type="text"
          name="Controller.IP"
          id="Controller.IP"
          placeholder="Insert IP of the Controller"
          @input="handleIPAdress"
          :class="isIPValid || `invalid`"
          v-model="platform.Controller.IP"
        />
      </div>
      <div class="edit-input">
        <label for="Controller.MAC">MAC</label>
        <input
          type="text"
          name="Controller.MAC"
          id="Controller.MAC"
          placeholder="Insert MAC of Controller"
          @input="handleMACAdress"
          :class="isMACValid || `invalid`"
          v-model="platform.Controller.MAC"
        />
      </div>
      <div class="edit-input">
        <label for="Controller.SN">SN</label>
        <input
          type="text"
          name="Controller.SN"
          id="Controller.SN"
          placeholder="Insert serial number"
          v-model="platform.Controller.SN"
        />
      </div>
    </div>
  </div>
</template>

<script>
import { store } from "@/store";
export default {
  name: "EditController",
  data() {
    return {
      table_rows: store.table_rows,
    };
  },
  computed: {
    platform() {
      return store.editedRow;
    },
    selectedId() {
      return +this.$route.params?.id;
    },
    isIPValid() {
      return store.verifyData(
        this.platform.Controller.IP,
        store.verifyIP,
        true
      );
    },
    isMACValid() {
      return store.verifyData(this.platform.Controller.MAC, store.verifyMAC);
    },
  },
  methods: {
    areDataValid() {
      if (this.isIPValid && this.isMACValid) return true;

      const notValid = [
        this.isIPValid || "IP",
        this.isMACValid || "MAC",
      ].filter((e) => e !== true);

      const popoutText = `Please provide validable info for: ${notValid.join(
        ", "
      )}`;

      this.popPopout(popoutText);

      return false;
    },
  },
  inject: ["popPopout"],
  beforeRouteLeave() {
    return this.areDataValid();
  },
};
</script>
