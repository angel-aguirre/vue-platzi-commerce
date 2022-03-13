const { createApp, ref } = Vue;

const app = createApp({
    setup() {
        const product = ref({
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
        });

        const cartOpen = ref(false);

        const activeImage = ref(0);

        const cart = ref([]);

        const discountCodes = ref(['PLATZI2022', 'PLATZI20']);

        function applyDiscount(event) {
            const discountCodeIndex = discountCodes.value.indexOf(event.target.value);
            if ( discountCodeIndex >= 0 ) {
                product.value.price *= 50 / 100;
                discountCodes.value.splice(discountCodeIndex, 1);
            }
        }

        function addToCart() {
            const prodIndex = cart.value.findIndex(prod => prod.name === product.value.name);

            if ( prodIndex >= 0 ) {
                cart.value[prodIndex].quantity += 1;
            } else {   
                cart.value.push(product.value);
            }
            product.value.stock -= 1;
        }

        return {
            product,
            activeImage,
            cartOpen,
            cart,
            discountCodes,
            applyDiscount,
            addToCart,
        }
    },
    mounted() {
        console.log(this.product);
    }
})

app.mount('#app');