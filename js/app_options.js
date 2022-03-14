import { Product } from './components/Product_options.js';
const { createApp } = Vue;

const app = createApp({
    data() {
        return {
            cartOpen: false,
            cart: [],
            products: [
                {
                    name: 'Camara 1',
                    price: 5_500,
                    stock: 5,
                    content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem consequatur iure, quas voluptatem quasi ea reiciendis quam expedita placeat mollitia culpa labore nobis ab, et praesentium laudantium consectetur adipisci consequuntur!',
                    images: [
                        {
                            image: './img/camara.jpg',
                            thumbnail: './img/camara-thumb.jpg',
                        },
                        {
                            image: './img/camara-2.jpg',
                            thumbnail: './img/camara-2-thumb.jpg',
                        },
                    ],
                    new: false,
                    offer: true,
                    quantity: 1,
                },
                {
                    name: 'Camara 2',
                    price: 3_500,
                    stock: 8,
                    content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem consequatur iure, quas voluptatem quasi ea reiciendis quam expedita placeat mollitia culpa labore nobis ab, et praesentium laudantium consectetur adipisci consequuntur!',
                    images: [
                        {
                            image: './img/camara.jpg',
                            thumbnail: './img/camara-thumb.jpg',
                        },
                        {
                            image: './img/camara-2.jpg',
                            thumbnail: './img/camara-2-thumb.jpg',
                        },
                    ],
                    new: false,
                    offer: true,
                    quantity: 1,
                },
                {
                    name: 'Camara 3',
                    price: 8_500,
                    stock: 11,
                    content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem consequatur iure, quas voluptatem quasi ea reiciendis quam expedita placeat mollitia culpa labore nobis ab, et praesentium laudantium consectetur adipisci consequuntur!',
                    images: [
                        {
                            image: './img/camara.jpg',
                            thumbnail: './img/camara-thumb.jpg',
                        },
                        {
                            image: './img/camara-2.jpg',
                            thumbnail: './img/camara-2-thumb.jpg',
                        },
                    ],
                    new: false,
                    offer: true,
                    quantity: 1,
                },
            ],
        }
    },
    methods: {
    }
});

app.component('product', Product);

app.mount('#app');