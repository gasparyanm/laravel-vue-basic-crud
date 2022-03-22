<template>
    <router-link
        :to="{name: 'edit', params: { id: item.id }}"
        class="p-1"
    >
        <b-icon icon="pencil" variant="success"></b-icon>
    </router-link>
</template>

<script>
export default {
    name: "EditButton",
    props: {
        item: {required: true, type: Object}
    },
}
</script>
