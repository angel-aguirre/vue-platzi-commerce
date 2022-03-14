import { Product } from './components/Product_options.js';
import { Badge } from './components/Badge.js';
const { createApp } = Vue;

const app = createApp({
    data() {
        return {
            cartOpen: false,
            cart: [],
            // total: 0,
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
                    new: true,
                    offer: true,
                    quantity: 1,
                },
            ],
        }
    },
    methods: {
        addToCart(product) {
            const prodIndex = this.cart.findIndex(prod=> prod.name === product.name);
            if ( prodIndex >= 0 ) {
                this.cart[prodIndex].quantity += 1;
            } else {   
                this.cart.push(product);
            }
            product.stock -= 1;
        }
    },
    watch: {
        // cart: {
        //     handler(cart) {
        //         this.total = cart.reduce((prev, curr) => {
        //             const prevPrice = prev.price || prev;
        //             const prevQuantity = prev.quantity || 1;
        //             return prevPrice * prevQuantity + curr.price * curr.quantity;
        //         }, 0);
        //     },
        //     deep: true,
        // }
    },
    computed: {
        total() {
            return this.cart.reduce((prev, curr) => {
                const prevPrice = prev.price || prev;
                const prevQuantity = prev.quantity || 1;
                return prevPrice * prevQuantity + curr.price * curr.quantity;
            }, 0);
        }
    }
});

app.component('badge', Badge);

app.component('product', Product);

app.mount('#app');