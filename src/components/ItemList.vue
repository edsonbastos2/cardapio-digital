<template>
    <div class="item__list">
        <Item
            v-for="item in itemList" :key="item.id" :item="item"
        />
    </div>
</template>

<script>
import axios from 'axios'
import Item from '@/components/item.vue'
    export default {
        components:{
            Item
        },
        data(){
            return{
                itemList:[]
            }
        },

        async created(){
            const list = await axios.get('http://localhost:3000/burguers')
            this.itemList = list.data
        }
    }
</script>

<style lang="less" scoped>
    .item__list{
        display: flex;
        margin: 10px;

        @media @tablets{
            flex-wrap: wrap;
            margin: 20px;
        }
    }
</style>