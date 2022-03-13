const { createApp } = Vue;

const app = createApp({
    data() {
        return {
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
                new: true,
                offer: true,
                quantity: 1,
            },
            cartOpen: false,
            activeImage: 0,
            discountCodes: ['PLATZI2022', 'PLATZI20'],
            cart: []
        }
    },
    methods: {
        applyDiscount(event) {
            const discountCodeIndex = this.discountCodes.indexOf(event.target.value);
            if ( discountCodeIndex >= 0 ) {
                console.log(event);
                this.product.price *= 50 / 100;
                this.discountCodes.splice(discountCodeIndex, 1);
            }
        },
        addToCart() {
            console.log('here');
            const prodIndex = this.cart.findIndex(product => product.name === this.product.name);
            if ( prodIndex >= 0 ) {
                this.cart[prodIndex].quantity += 1;
            } else {   
                this.cart.push(this.product);
            }
            this.product.stock -= 1;
        }
    }
});

app.mount('#app');