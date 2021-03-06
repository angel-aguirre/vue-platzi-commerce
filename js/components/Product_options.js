export const Product = {
    template: `
        <section class="product">
            <div class="product__thumbnails">
                <div 
                    v-for="(image, index) in product.images"
                    :key="index"
                    :class="{ active: activeImage === index }" 
                    :style="{ backgroundImage: 'url('+image.thumbnail+')' }"
                    class="thumb" 
                    @click="activeImage = index"
                >
                </div>
            </div><!-- .product__thumbnails -->
            <div class="product__image">
                <img :src="product.images[activeImage].image" alt="">
            </div><!-- .product__image -->
        </section><!-- .product -->

        <section class="description">
            <h4>{{ product.name.toUpperCase() }}</h4>
            <badge :product="product"></badge>
            <p class="description__status" v-if="product.stock >= 2 && product.stock <=5">Quedan pocas unidades</p>
            <p class="description__status" v-else-if="product.stock === 1">Ultima unidad</p>
            <p class="description__status" v-else-if="product.stock === 0">Agotado</p>
            <p 
                class="description__price"
                :style="{ color: priceColor }"
            >$ {{ new Intl.NumberFormat('es-MX').format(product.price) }}</p>
            <div class="description__content">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem consequatur iure, quas voluptatem quasi ea reiciendis quam expedita placeat mollitia culpa labore nobis ab, et praesentium laudantium consectetur adipisci consequuntur!</div>

            <div class="discount">
                <span>Código de Descuento:</span>
                <input 
                    type="text" 
                    placeholder="Ingresa tu código"
                    @keyup.enter="applyDiscount"
                >
            </div>

            <button 
                :disabled="product.stock === 0"
                @click="sendToCart"
            >Agregar al carrito</button>
        </section><!-- .description -->
    `,
    props: {
        product: {
            type: Object,
            required: true
        }
    },
    data() {
        return {
            activeImage: 0,
            discountCodes: ['PLATZI2022', 'PLATZI20'],
            // priceColor: 'rgb(104, 104, 209)',
        }
    },
    emits: ['send-to-cart'],
    methods: {
        applyDiscount(event) {
            const discountCodeIndex = this.discountCodes.indexOf(event.target.value);
            if ( discountCodeIndex >= 0 ) {
                this.product.price *= 50 / 100;
                this.discountCodes.splice(discountCodeIndex, 1);
            }
        },
        sendToCart() {
            this.$emit('send-to-cart', this.product);
        }
    },
    watch: {
        // 'product.stock'(stock) {
        //     if ( stock <= 1 ) {
        //         this.priceColor = 'rgb(188, 30, 67)';
        //     }
        // }
    },
    computed: {
        priceColor() {
            if ( this.product.stock <= 1 ) {
                return 'rgb(188, 30, 67)';
            }
            
            return 'rgb(104, 104, 209)';
        }
    }
} 