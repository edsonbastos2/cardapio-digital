<template>
  <div class="home">
    <div class="card__item" v-if="isMobile()">
      <font-awesome-icon icon="fa-solid fa-bag-shopping" />
    </div>
    <CategoryMenu/>
    <ItemLIst/>
    <Cart v-if="isDesktop()"/>
  </div>
</template>

<script>
// @ is an alias to /src
import CategoryMenu from '@/components/CategoryMenu.vue'
import ItemLIst from '@/components/ItemList.vue'
import Cart from '@/components/Cart.vue'
import Mixin from '@/mixins/mixins'
export default {
  name: 'HomeView',
  mixins:[Mixin],
  components: {
    CategoryMenu,
    ItemLIst,
    Cart
  }
}
</script>

<style lang="less" scoped>
.home{
  display: flex;

  .card__item{
    width: 42px;
    height: 42px;
    background-color: @pink;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 20px 20px 0px auto;

    svg{
            path {
                fill: white;
            }
        }
  }

  @media @tablets{
    flex-direction: column;
  }
}
</style>
