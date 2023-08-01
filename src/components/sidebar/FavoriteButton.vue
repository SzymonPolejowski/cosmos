<template>
<div 
    class="favorite-button"
    tabindex="0">
    <div class="favorite-icon">
        {{  row.icon }}
    </div>
    <div>
        {{ row.name }}
    </div>
</div>
</template>

<script>
export default {
    name: 'FavoriteButton',
    props: ['row']
}
</script>

<style lang="scss">
@import '@/scss/config';

.favorite-button {
    @include outline;

    margin: 1rem 0;
    padding: 1rem;
    font-size: 1rem;
    font-weight: 500;
    display: flex;
    align-items: center;
    border-radius: $border_radius;
    cursor: pointer;
    border: 1px transparent solid;
    user-select: none;

    &:hover {
        background-color: rgba($white,.1);
    }

    .favorite-icon {
        margin-right: 1rem;
    }
}
</style>