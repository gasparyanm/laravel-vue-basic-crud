import axios from 'axios';

const state = {
    products: [],
    product: {},
    message: '',
    errors: {},
    success: false
};

const getters = {
    products: (state) => state.products,
    product: (state) => state.product,
    message: (state) => state.message,
    errors: (state) => state.errors,
    success: (state) => state.success,
};

const actions = {
    async fetchProducts({ commit }) {
        const response = await axios.get('/api/products/');

        commit('SET_PRODUCTS', response.data.data);
    },
    async createProduct({ commit }, data) {
        const response = await axios.post('/api/products/', data)
            .then(response => commit('SET_MESSAGE', 'Created  successfully'))
            .catch(err => commit('SET_ERRORS', err.response))

    },
    async editProduct({ commit }, data) {
        const response = await axios.put(`/api/products/${data.id}`, data)
            .then(response => commit('SET_MESSAGE', 'Edited  successfully'))
            .catch(err => commit('SET_ERRORS', err.response))

    },
    async removeProduct({commit, dispatch}, id) {
        await axios.delete(`/api/products/${id}`)
            .then(response => {
                dispatch('fetchProducts')
            });
    },
    async fetchProduct({ commit }, id) {
        const response = await axios.get(`/api/products/${id}`);
        commit('SET_PRODUCT', response.data.data);
    },
}

const mutations = {
    SET_PRODUCTS: (state, products) => (state.products = products),
    SET_PRODUCT: (state, product) => (state.product = product),
    SET_MESSAGE: function (state, message) {
        state.success = true
        state.message = message;
    },
    SET_ERRORS: function (state, response) {
        state.success = false;
        state.errors = response.data.errors
    },
    CLEAN_MESSAGE: function (state) {
        state.success = false;
        state.message = '';
        state.errors = {}
    }
};


export default {
    state,
    getters,
    actions,
    mutations
};
