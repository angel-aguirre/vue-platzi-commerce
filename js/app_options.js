import { Product } from './components/Product_options.js';
const { createApp } = Vue;

const app = createApp({
    data() {
        return {
            cartOpen: false,
            cart: []
        }
    },
    methods: {
    }
});

app.component('product', Product);

app.mount('#app');