<template>
    <div class="item">
        <div class="item__quantity">
            <button class="buttons" @click="decreaseQuantity(item.id)" :disabled="item.quantity === 0">-</button>
            <span class="number">{{item.quantity}}</span>
            <button class="buttons" @click="increaseQuantity(item.id)">+</button>
        </div>
        <div class="item__image-container">
            <img class="item__image" :src="imagePath" alt="">
        </div>
        <div class="content">
            <h3 class="item__name">{{item.name}}</h3>
            <a class="item__link">Adicionar observação</a>
        </div>
        <p class="item__price">{{item.price | currency}}</p>
    </div>
</template>

<script>
    import { mapActions } from 'vuex'

    export default {
        name:'CartItem',
        props:{
            item:{}
        },

        filters:{
            currency(value){
                return `R$ ${value.toLocaleString('pt-br', {minimumFractionDigits:2})}`
            }
        },

        computed: {
            imagePath() {
                return require(`@/assets/images/${this.item.id}.png`)
            }
        },
        methods: {
           ...mapActions([
            'increaseQuantity',
            'decreaseQuantity'
           ])
        },
    }
</script>

<style lang="less" scoped>
    .item{
        display: flex;
        align-items: center;
        padding: 20px 0;

        &__quantity{
            display: flex;
            align-items: center;
            padding-right: 40px;
        }

        .number{
            font-weight: 500;
            font-size: 18px;
            width: 28px;
            text-align: center;
            color: @yellow;
        }

        .buttons{
            font-size: 18px;
            font-weight: 600;
            cursor: pointer;
            background: transparent;
            border: none;
        }

        border-bottom: 1px solid @light-grey;

        &__image-container{
            width: 81px;
            height: 60px;
            background-color: @light-yellow;
            border-radius: 8px;
            display: flex;
            align-items: center;
        }

        &__name{
            font-weight: 600px;
            font-size: 18px;
        }

        &__link{
            color: @dark-grey;
            font-size: 12px;
            font-weight: 500;
            text-decoration: underline;
            cursor: pointer;
        }

        &__price{
            color: @yellow;
            font-weight: 600;
            font-size: 18px;
            line-height: 27px;
        }

        &__image{
            width: 65px;
            display: block;
            margin: auto;
        }

        .content{
            flex-grow: 1;
            padding: 0 20px;
        }
    }
</style>