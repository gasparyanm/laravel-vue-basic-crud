<template>
    <b-row class="mt-2">
        <b-col sm="12">Edit Product</b-col>
        <b-col sm="12">
            <Form :product="product"></Form>
        </b-col>
    </b-row>
</template>

<script>
import {mapActions, mapGetters} from "vuex";
import Form from "./Form";

export default {
    components: {
        Form,
    },
    computed: {
        ...mapGetters(['product'])
    },
    methods: {
        ...mapActions(['fetchProduct']),
    },
    created() {
        this.fetchProduct(this.$route.params.id);
    },
}
</script>
