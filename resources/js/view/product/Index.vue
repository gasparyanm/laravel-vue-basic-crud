<template>
    <Table
        title="Products List"
        :properties="properties"
        :items="products"
    ></Table>
</template>

<script>
import {mapActions, mapGetters} from "vuex";
import Table from "../../components/Table";

export default {
    components: {Table},
    data() {
        return {
            properties: [
                { key: 'id', sortable: true },
                { key: 'name', sortable: true },
                { key: 'quantity', sortable: true },
                { key: 'amount', sortable: true },
                { key: 'description', label: 'Details', sortable: false },
                { key: 'actions', label: 'Actions', sortable: false}
            ],
        }
    },
    created() {
        this.fetchProducts()
    },
    computed: {
        ...mapGetters(['products'])
    },
    methods: {
        ...mapActions(['fetchProducts']),
    }
}
</script>
