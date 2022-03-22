<template>
    <b-row class="mt-2">
        <b-col sm="12">Create Product</b-col>
        <b-col sm="12">
            <Form :product="product"></Form>
        </b-col>
    </b-row>
</template>

<script>
import Form from "./Form";

export default {
    components: {Form},
    data() {
        return {
            product: {},
        }
    },
}
</script>
