<template>
  <div class="edit-container">
    <div class="edit-inputs">
      <div class="edit-input">
        <label for="WPS.IP">IP</label>
        <input
          type="text"
          name="WPS.IP"
          id="WPS.IP"
          placeholder="Insert IP of the WPS"
          :class="isIPValid || `invalid`"
          v-model="platform.WPS.IP"
        />
      </div>
      <div class="edit-input">
        <label for="WPS.Socket">Socket</label>
        <input
          type="text"
          name="WPS.Socket"
          id="WPS.Socket"
          placeholder="Insert Socket in WPS"
          :class="isSocketValid || `invalid`"
          v-model="platform.WPS.Socket"
        />
      </div>
    </div>
  </div>
</template>

<script>
import { store } from "@/store";
export default {
  name: "EditWPS",
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
      return store.verifyData(this.platform.WPS.IP, store.verifyIP, true);
    },
    isSocketValid() {
      return store.verifyData(
        this.platform.WPS.Socket,
        store.verifySocket,
        true
      );
    },
  },
  methods: {
    areDataValid() {
      if (this.isIPValid && this.isSocketValid) return true;

      const notValid = [
        this.isIPValid || "IP",
        this.isSocketValid || "Socket",
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
