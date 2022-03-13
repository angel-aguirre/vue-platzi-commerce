const { createApp, ref, reactive, toRefs } = Vue;

const app = createApp({
    setup() {
        const productState = reactive({
            product: {
                name: 'Camara',
                price: 5_500,
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
            activeImage: 0,
        });

        const cartState = reactive({
            cartOpen: false,
            cart: [],
        });

        const discountCodes = ref(['PLATZI2022', 'PLATZI20']);

        function applyDiscount(event) {
            const discountCodeIndex = discountCodes.value.indexOf(event.target.value);
            if ( discountCodeIndex >= 0 ) {
                productState.product.price *= 50 / 100;
                discountCodes.value.splice(discountCodeIndex, 1);
            }
        }

        function addToCart() {
            const prodIndex = cartState.cart.findIndex(prod => prod.name === productState.product.name);

            if ( prodIndex >= 0 ) {
                cartState.cart[prodIndex].quantity += 1;
            } else {   
                cartState.cart.push(productState.product);
            }
            productState.product.stock -= 1;
        }

        return {
            ...toRefs(productState),
            ...toRefs(cartState),
            applyDiscount,
            addToCart,
        }
    },
    mounted() {
        console.log(this.product);
    }
})

app.mount('#app');