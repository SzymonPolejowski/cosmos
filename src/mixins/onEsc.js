export default {
    created() {
        document.addEventListener('keyup', e => e.key === "Escape" && this.onEsc())
    }
}