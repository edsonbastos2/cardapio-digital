<template>
  <div class="home">
    <CategoryMenu/>
    <ItemLIst/>
  </div>
</template>

<script>
// @ is an alias to /src
import CategoryMenu from '@/components/CategoryMenu.vue'
import ItemLIst from '@/components/ItemList.vue'
export default {
  name: 'HomeView',
  components: {
    CategoryMenu,
    ItemLIst
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
