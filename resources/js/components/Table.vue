<template>
    <div>
        <h2 class="text-center">{{ title }}</h2>
        <b-table
            id="my-table"
            :items="items"
            :fields="properties"
            :per-page="perPage"
            :current-page="currentPage"
        >
            <template #cell(actions)="row">
                <div class="btn-group d-flex justify-content-center align-items-center" role="group">
                    <edit-button :item="row.item"></edit-button>
                    <show-button :item="row.item"></show-button>
                    <delete-button :item="row.item"></delete-button>
                </div>
            </template>
        </b-table>
        <b-pagination
            v-model="currentPage"
            :total-rows="rows"
            :per-page="perPage"
            aria-controls="my-table"
        ></b-pagination>
    </div>
</template>

<script>
import EditButton from "./EditButton";
import ShowButton from "./ShowButton";
import DeleteButton from "./DeleteButton";

export default {
    name: "Table",
    components: {DeleteButton, ShowButton, EditButton},
    data() {
        return {
            perPage: 25,
            currentPage: 1,
        }
    },
    props: {
        title: {required: true, type: String},
        properties: {required: true, type: Array},
        items: {required: true, type: Array}
    },
    computed: {
        rows() {
            return this.items.length
        }
    }
}
</script>

<style scoped>
    ::v-deep .sr-only{
        display:none !important
    }
</style>
