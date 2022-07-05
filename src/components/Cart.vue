<template>
    <div class="cart">
        <router-link to="/" class="cart__back-to-go">
            <font-awesome-icon icon="fa-solid fa-arrow-left-long" />
            Voltar
        </router-link>
        <h2 class="cart__title">Seu pedido</h2>
        <CartItem v-for="item in cartList" :key="item.id" :item="item"/>
        <div class="cart__total">
            <span class="cart__text-total">Total: </span>
            <span class="cart__price">{{getCartTotal | currency}}</span>
        </div>
    </div>
</template>

<script>
    import CartItem from '@/components/CartItem.vue'
    import { mapGetters } from 'vuex'
    export default {
        name:'CartComponent',
        components:{
            CartItem
        },
        filters:{
            currency(value){
                return `R$ ${value.toLocaleString('pt-br', {minimumFractionDigits:2})}`
            }
        },
        computed: {
            ...mapGetters([
                'getCartTotal'
            ]),
            cartList() {
                return this.$store.state.cartList
            }
        },
    }
</script>

<style lang="less" scoped>
    .cart{
        background-color: #fff;
        min-width: 643px;
        padding: 50px;

        &__back-to-go{
            text-decoration: none;
            color: #000;
            font-size: 18px;
            font-weight: 500;
            display: block;
            margin-bottom: 35px;
        }

        &__title{
            font-weight: 600;
            font-size: 24px;
        }

        &__total{
            margin-top: 30px;
            text-align: right;
        }

        &__text-total{
            font-size: 18px;
            font-weight: 600;
        }

        &__price{
            color: @yellow;
            font-weight: 600;
            margin-left: 5px;
        }

        @media @tablets {
            width: 100%;
            min-width: unset;
            margin: 30px 0;
        }
    }
</style>