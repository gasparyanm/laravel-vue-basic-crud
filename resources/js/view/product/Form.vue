<template>
    <b-row class="m-auto d-flex justify-content-center mt-5">
        <b-alert :show="success && !!message">{{ message }}</b-alert>
        <b-col md="6">
            <b-form @submit.prevent.stop="submit" @reset="onReset">
                <b-form-group label="Name:" label-for="name" class="mb-2">
                    <b-form-input
                        v-model="product.name"
                        type="text"
                        id="name"
                        placeholder="Product name"
                    ></b-form-input>
                    <p v-if="!success && errors.name" class="text-danger">
                        {{ errors.name[0]}}
                    </p>
                </b-form-group>

                <b-form-group label="Quantity:" label-for="quantity" class="mb-2">
                    <b-form-input
                        v-model="product.quantity"
                        type="number"
                        step="1"
                    ></b-form-input>
                    <p v-if="!success && errors.quantity" class="text-danger">
                        {{ errors.quantity[0]}}
                    </p>
                </b-form-group>

                <b-form-group label="Amount:" label-for="amount" class="mb-2">
                    <b-form-input
                        id="amount"
                        v-model="product.amount"
                        placeholder="Enter amount for one product item"
                    ></b-form-input>
                    <p v-if="!success && errors.amount" class="text-danger">
                        {{ errors.amount[0]}}
                    </p>
                </b-form-group>

                <b-form-group label="Description:" label-for="description" class="mb-2">
                    <b-form-textarea
                        id="description"
                        v-model="product.description"
                        placeholder="Describe your product..."
                        rows="3"
                        max-rows="6"
                    ></b-form-textarea>
                    <p v-if="!success && errors.description" class="text-danger">
                        {{ errors.description[0]}}
                    </p>
                </b-form-group>

                <b-button type="submit" variant="primary">Submit</b-button>
                <b-button type="reset" variant="danger">Reset</b-button>
            </b-form>
        </b-col>
    </b-row>
</template>

<script>
import {mapActions, mapGetters} from "vuex";

export default {
    name: "Form",
    props: {
        product: {required: true, type: Object}
    },
    computed: {
        ...mapGetters(['errors','message', 'success'])
    },
    methods: {
        ...mapActions(['createProduct', 'editProduct']),

        submit: function () {
            if (this.product.id)
                this.editProduct(this.product);
            else
                this.createProduct(this.product);
        },
        onReset() {
            this.product = {};
            this.$store.commit("CLEAN_MESSAGE")
        }
    },
    created() {
        this.$store.commit("CLEAN_MESSAGE")
    }
}
</script>

<style scoped>

</style>
