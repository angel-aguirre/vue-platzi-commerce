const { createApp } = Vue;

const app = createApp({
    data() {
        return {
            product: {
                name: 'Camara',
                price: 5_500,
                stock: 0,
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
            },
            cartOpen: true,
            activeImage: 0,
            cart: [
                {
                    name: 'Camara 300',
                    price: 7_500,
                    stock: 0,
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
                },
                {
                    name: 'Camara 200',
                    price: 5_500,
                    stock: 0,
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
                },
                {
                    name: 'Camara 100',
                    price: 5_000,
                    stock: 0,
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
                },
            ]
        }
    }
});

app.mount('#app');