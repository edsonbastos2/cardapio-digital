<template>
    <div class="item" @click="addToCart">
        <div class="container">
            <div class="item__tag" v-if="item.offer">Oferta</div>
            <img class="item__image" :src="imagePath" alt="">
        </div>
        <div class="content">
            <h2 class="item__name">{{item.name}}</h2>
            <p class="item__description">{{item.description}}</p>
            <p class="item__price">{{item.price | currency}}</p>
        </div>
    </div>
</template>

<script>
    export default {
        name:'PageItem',
        filters:{
            currency(value){
                return `R$ ${value.toLocaleString('pt-br', {minimumFractionDigits:2})}`
            }
        },
        props:{
            item:{}
        },
        computed:{
           
            imagePath(){
                return require(`@/assets/images/${this.item.id}.png`)
            },
        },
        methods: {
            addToCart() {
                this.$store.dispatch('addToCart', this.item)
            }
        },
    }
</script>

<style lang="less" scoped>
    .item{
        width: 215.95px;
        height: 290px;
        background-color: #fff;
        border-radius: 8px;
        position: relative;
        padding: 20px;
        margin: 20px;

        display: flex;
        flex-direction: column;

        &__tag{
            position: absolute;
            background-color: @pink;
            border-radius: 8px;
            color: #fff;
            top: 15px;
            right: 15px;
            font-size: 12px;
            font-weight: 500;
            padding: 3px 8px;
        }

        &__image{
            display: block;
            width: 100%;
            margin: auto;
        }

        &__name{
            font-weight: 600;
            font-size: 18px;
            margin: 0;
        }

        &__description{
            font-weight: 300;
            color: @dark-grey;
            font-size: 12px;
            margin: 0;
            display: -webkit-box;
            -webkit-line-clamp: 2;
            -webkit-box-orient: vertical;  
            overflow: hidden;
        }

        &__price{
            color: @yellow;
            font-weight: 600;
            font-size: 18px;
            margin: 0;
        }

        .content{
            height: 100%;
            max-height: 100%;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            margin-top: 10px;
        }

        @media @tablets{
            width: 100%;
            height: fit-content;
            border: 1px solid @light-grey;
            display: flex;
            margin: 10px 0;
            padding: 10px 20px;
            flex-direction: row;

            .container{
                display: flex;
                flex-direction: column;
                align-items: center;
                margin-right: 10px;
            }

            .content{
                flex-grow: 1;
            }

            &__image{
                width: 86px;
                order: 0;
                margin: 0 0 10px 0;
            }

            &__price{
                text-align: right;
                margin: 5px 0 0 auto;
            }

            &__tag{
                position: static;
                order: 1;
                width: fit-content;
            }
        }
    }
</style>
