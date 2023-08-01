<template>
    <div class="info background"
    @scroll="scrollHandler"
    :style="{backgroundPositionY:  -0.1 * scrollDistance + 'px'}">
        <h1>Welcome in {{ selectedPlatform.icon }} {{ selectedPlatform.name }}</h1>
        <div class="info-button-list">
            <div class="button">Open WPS</div>
            <div class="button">Open Sprinter</div>
            <div class="button">+</div>
        </div>
        <div class="info-big-boxes"
            v-if="selectedPlatform.desc"
        >
            <div
                class="desc"
                style="white-space: pre-wrap;"
            >
                <h2>Description</h2>
                <p>
                    {{  selectedPlatform.desc }}
                </p>
            </div>
        </div>

        <div class="info-big-boxes">
            <div>
                <h2>DUT</h2>
                <div
                    class="info-flex-between"
                >   <div>IP</div>
                    <CopyPin text="ahah" />
                </div>
                <div
                    class="info-flex-between"
                >   <div>IP</div>
                    <CopyPin text="ahah" />
                </div>
                <div
                    class="info-flex-between"
                >   <div>IP</div>
                    <CopyPin text="ahah" />
                </div>
                <div
                    class="info-flex-between"
                >   <div>IP</div>
                    <CopyPin text="ahah" />
                </div>
                <div
                    class="info-flex-between"
                >   <div>IP</div>
                    <CopyPin text="ahah" />
                </div>
                <div
                    class="info-flex-between"
                >   <div>IP</div>
                    <CopyPin text="ahah" />
                </div>
            </div>
            <div>
                <h2>NUC</h2>
                <p>
                    some stuff in here
                </p>
                <div
                    class="info-flex-between"
                >   <div>IP</div>
                    <CopyPin text="ahah" />
                </div>
                <div
                    class="info-flex-between"
                >   <div>IP</div>
                    <CopyPin text="ahah" />
                </div>
                <div
                    class="info-flex-between"
                >   <div>IP</div>
                    <CopyPin text="ahah" />
                </div>
            </div>
            <div>
                <h2>WPS</h2>
                <p>
                    some stuff in here
                </p>
                <div
                    class="info-flex-between"
                >   <div>IP</div>
                    <CopyPin text="ahah" />
                </div>
                <div
                    class="info-flex-between"
                >   <div>IP</div>
                    <CopyPin text="ahah" />
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import CopyPin from '@/components/share/CopyPin.vue'
import { store } from '@/store'

export default {
    name: 'InfoView',
    data() {
        return {
            table_rows: store.table_rows,
            scrollDistance: 0
        }
    },
    components: {
        CopyPin
    },
    computed: {
        selectedId() {
            return +this.$route.params?.id
        },
        selectedPlatform() {
            return this.table_rows.filter(row => row.id === this.selectedId)[0]
        },
    },
    methods: {
        scrollHandler(e) {
        this.scrollDistance = e.target.scrollTop
        }
    }
}
</script>

<style lang="scss">
@import '@/scss/_config.scss';

.info {
    min-height: 100%;
    position: relative;
    overflow-y: auto;
    padding: 4rem;
    background-color: $bg_color;

    h1 {
        margin: 0;
        text-align: left;
        padding-block: 0;
    }

    h2 {
        padding-block: 0;
        margin-block: 0;
    }

    .info-big-boxes {
        display: flex;
        gap: 1rem;
        margin-top: 2rem;

        > div {
            flex: 1;
            background-color: rgba($black, .8);
            padding: $l_padding;
            border-radius: $border-radius_small;
            border: 0 solid rgba($white, .2);
        }
    }

    &.background {
        background-image: $info_image;
        background-position-y: bottom;
        background-size: 100% auto;
        background-repeat: no-repeat;
    }
}

.info-flex-between {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 1rem;
}

.info-button-list {
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    gap: 1rem;
    margin-top: 2rem;

    .button {
        padding: $l_padding;
        background-color: rgba($black, .8);
        border-radius: $border-radius_small;
        text-align: center;
    }
}
</style>