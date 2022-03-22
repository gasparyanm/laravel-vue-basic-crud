<template>
    <b-icon
        class="p-1"
        icon="trash"
        variant="danger"
        font-scale="1.4"
        @click="removeProduct(item.id)"
    ></b-icon>
</template>

<script>
import {mapActions} from "vuex";
export default {
    name: "DeleteButton",
    props: {
        item: {required: true, type: Object}
    },
    methods: {
        ...mapActions(['removeProduct']),
    }
}
</script>
