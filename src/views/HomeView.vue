<template>
  <div class="home">
    <CategoryMenu/>
    <ItemLIst/>
    <Cart/>
  </div>
</template>

<script>
// @ is an alias to /src
import CategoryMenu from '@/components/CategoryMenu.vue'
import ItemLIst from '@/components/ItemList.vue'
import Cart from '@/components/Cart.vue'
export default {
  name: 'HomeView',
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

  @media @tablets{
    flex-direction: column;
  }
}
</style>
