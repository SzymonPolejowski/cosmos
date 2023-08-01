<template>
    <span 
        class="copy_pin"
        @click.stop.prevent="copyText(text, $event)"
        @keyup.enter.stop.prevent="copyText(text, $event)"
        tabindex="0"
        >
            {{ text }}
        </span>
</template>

<script>
export default {
    name: 'CopyPin',
    props: ['text'],
    methods: {
        async copyText(text, event) {
            try {
                await navigator.clipboard.writeText(text);
                event.target.classList.add("clicked");
                console.log("add")
                setTimeout( () => {
                    event.target.classList.remove("clicked")
                    console.log("remove")
                }, 
                    1500
                );
                
            } catch($e) {
            alert('Cannot copy');
            }
        }
    }
}
</script>

<style lang="scss">
@import '@/scss/config';

.copy_pin {
    @include outline;

    cursor: pointer;
    position: relative;
    overflow: hidden;
    padding: .25rem 1rem;
    font-size: 1rem;
    border-radius: $border_radius;
    display: inline-flex;
    align-items: center;
    background-color: $copypin_color;
    color: $white;
    font-weight: 500;
    user-select: none;

    &::before {
        content: "";
        margin-right: .5rem;
        height: 1rem;
        width: 1rem;
        background-color: transparent;
        border-radius: 0;
        background-image: $clipboard_image;
        background-size: contain;
    }

    &::after {
        content: "COPIED!";
        position: absolute;
        left: 0;
        top: 0;
        bottom: 0;
        right: 0;
        display: flex;
        justify-content: center;
        align-items: center;
        color: $white;
        transform: translateY(100%);
    }

    &.clicked {
        animation: copy_pin 1s ease-in-out;

        &::after {
            animation: copy_pin__after 1s ease-in-out;
        }

        &::before {
            animation: copy_pin__before 1s ease-in-out;
        }
    }
}

@keyframes copy_pin {
    0% {
        color: #FFF;
        transform: scale(1);
    }

    10%, 90% {
        color: transparent;
        transform: scale(1.1);
    }

    100% {
        color: #FFF;
        transform: scale(1);
    }
}

@keyframes copy_pin__after {
    0% {
        transform: translateY(100%);
    }

    10%, 90% {
        transform: translateY(0);
    }

    100% {
        transform: translateY(-100%);
    }
}

@keyframes copy_pin__before {
    0% {
        opacity: 1;
    }

    10%, 90% {
        opacity: 0;
    }

    100% {
        opacity: 1;
    }
}

</style>