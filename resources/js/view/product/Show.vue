<template>
    <div>
        <h3 class="text-center">Show Product</h3>
        <div class="row">
            <div class="col-md-6">
                <div class="form-group">
                    <label>Name:</label>
                    {{product.name}}
                </div>
                <div class="form-group">
                    <label>Amount:</label>
                    {{product.amount}}
                </div>
                <div class="form-group">
                    <label>Quantity:</label>
                    {{product.quantity}}
                </div>
                <div class="form-group">
                    <label>Description:</label>
                    {{product.description}}
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import {mapGetters, mapActions} from "vuex";

export default {
    created() {
        this.fetchProduct(this.$route.params.id)
    },
    computed: {
        ...mapGetters(['product'])
    },
    methods: {
        ...mapActions(['fetchProduct']),
    }
}
</script>
