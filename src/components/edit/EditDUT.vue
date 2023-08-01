<template>
    <div class="edit-container">
        <div
            class="edit-inputs">
            <div class="edit-input">
                <label for="DUT.IP">IP</label>
                <input 
                    type="text" 
                    name="DUT.IP" 
                    id="DUT.IP"
                    placeholder="Insert IP of the platform"
                    :class="isIPValid || `invalid`"
                    @contextmenu="handleContextmenu"
                    v-model="platform.DUT.IP">
            </div>
            <div class="edit-input">
                <label for="DUT.MAC">MAC</label>
                <input 
                    type="text" 
                    name="DUT.MAC" 
                    id="DUT.MAC"
                    placeholder="Insert MAC"
                    :class="isMACValid || `invalid`"
                    v-model="platform.DUT.MAC">
            </div>
            <div class="edit-input">
                <label for="DUT.SN">SN</label>
                <input 
                    type="text" 
                    name="DUT.SN" 
                    id="DUT.SN"
                    placeholder="Insert serial number"
                    v-model="platform.DUT.SN">
            </div>
            <div class="edit-input">
                <label for="DUT.BMC">BMC</label>
                <input 
                    type="text" 
                    name="DUT.BMC" 
                    id="DUT.BMC"
                    placeholder="Insert BMC IP address"
                    :class="isBMCValid || `invalid`"
                    v-model="platform.DUT.BMC">
            </div>
            <div class="edit-input">
                <label for="DUT.KVM">KVM</label>
                <input 
                    type="text" 
                    name="DUT.KVM" 
                    id="DUT.KVM"
                    placeholder="Insert KVM IP address"
                    :class="isKVMValid || `invalid`"
                    v-model="platform.DUT.KVM">
            </div>
        </div>
    </div>
    </template>
    
    <script>
    import { store } from '@/store'

    export default {
        name: 'EditGeneral',
        data() {
            return {
                table_rows: store.table_rows
            }
        },
        computed: {
            platform() {
                return store.editedRow
            },
            selectedId() {
                return +this.$route.params?.id
            },
            isIPValid() {
                return store.verifyData(this.platform.DUT.IP, store.verifyIP, true)
            },
            isMACValid() {
                return store.verifyData(this.platform.DUT.MAC, store.verifyMAC, true)
            },
            isBMCValid() {
                return store.verifyData(this.platform.DUT.BMC, store.verifyIP)
            },
            isKVMValid() {
                return store.verifyData(this.platform.DUT.KVM, store.verifyIP)
            }
        },
        methods: {
            areDataValid() {
                if (
                    this.isIPValid && 
                    this.isMACValid && 
                    this.isBMCValid && 
                    this.isKVMValid
                )
                    return true

                const notValid = [
                    (this.isIPValid || 'IP'),
                    (this.isMACValid || 'MAC'),
                    (this.isBMCValid || 'BMC IP'),
                    (this.isKVMValid || 'KVM IP')
                ].filter(e => e !== true)

                const popoutText = `Please provide validable info for: ${notValid.join(", ")}`

                this.popPopout(popoutText)

                return false
            },
            handleContextmenu(e) {
            if (!store.userSettings.clearOnRightClick.value)
                return

            e.preventDefault()
            e.target.value = ''
            }
        },
        inject: ['popPopout'],
        beforeRouteLeave() {
            return this.areDataValid()
        }
    }
    </script>