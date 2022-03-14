import { Product } from "./components/Product_composition.js";
import { Badge } from "./components/Badge.js";
const { createApp, ref, reactive, toRefs } = Vue;

const app = createApp({
    setup() {
        const products = ref([
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
                new: true,
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
        ])

        const cartState = reactive({
            cartOpen: false,
            cart: [],
        });

        function addToCart(product) {
            const prodIndex = cartState.cart.findIndex(prod => prod.name === product.name);

            if ( prodIndex >= 0 ) {
                cartState.cart[prodIndex].quantity += 1;
            } else {   
                cartState.cart.push(product);
            }
            product.stock -= 1;
        }

        return {
            ...toRefs(cartState),

            products,

            addToCart,
        }
    },
    mounted() {
        console.log('composition');
    }
})

app.component('Badge', Badge);

app.component('product', Product);

app.mount('#app');