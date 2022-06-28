<template>
    <div class="item">
        <div class="container">
            <div class="item__tag" v-if="item.offer">Oferta</div>
            <img class="item__image" src="@/assets/images/0001.png" alt="">
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
            item:{
                type:Object,
                default:() => ({})
            }
        }
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
            max-width: 100%;
            width: 120px;
            margin: 20px auto 0px;
        }

        &__name{
            font-weight: 600;
            font-size: 18px;
            margin: 8px auto;
        }

        &__description{
            font-weight: 300;
            color: @dark-grey;
            font-size: 12px;
            margin: 0;
        }

        &__price{
            color: @yellow;
            font-weight: 600;
            font-size: 18px;
            margin: 8px auto;
        }

        @media @tablets{
            width: 100%;
            height: fit-content;
            border: 1px solid @light-grey;
            display: flex;
            margin: 10px 0;
            padding: 5px 10px;

            .container{
                display: flex;
                flex-direction: column;
                align-items: center;
                margin-right: 10px;
            }

            &__image{
                height: 60px;
                order: 0;
                margin: 0 0 10px 0;
            }

            &__price{
                text-align: right;
                margin: 3px auto;
            }

            &__tag{
                position: static;
                order: 1;
                width: fit-content;
            }
        }
    }
</style>
