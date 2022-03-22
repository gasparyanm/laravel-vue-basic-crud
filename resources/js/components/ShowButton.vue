<template>
    <router-link
        :to="{name: 'show', params: { id: item.id }}"
        class="p-1"
    >
        <b-icon icon="eye" variant="success"></b-icon>
    </router-link>
</template>

<script>
export default {
    name: "ShowButton",
    props: {
        item: {required: true, type: Object}
    }
}
</script>
