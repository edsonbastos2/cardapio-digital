<template>
  <div class="item__list">
    <Loadin v-if="isLoading"/>
    <Item v-for="item in itemList" :key="item.id" :item="item" />
  </div>
</template>

<script>
import axios from 'axios'
import Item from '@/components/item.vue'
import Loadin from '@/components/Loadung.vue'
export default {
  components: {
    Item,
    Loadin
  },
  data() {
    return {
      itemList: [],
      isLoading: false
    }
  },

  created() {},
  computed: {
    selectedCategory() {
        return this.$store.state.selectedCategory
    },
  },

  watch: {
    selectedCategory() {
      this.getItens()
    },
  },

  methods: {
     getItens() {
      this.itemList = []
      this.isLoading = true
      setTimeout(() => {
        axios.get(`http://localhost:3000/${this.selectedCategory}`).then((list) => {
          this.itemList = list.data
          this.isLoading = false
        })
      }, 500)
    },
  },
}
</script>

<style lang="less" scoped>
.item__list {
  display: flex;
  flex-wrap: wrap;
  margin: 50px;
  width: 100%;

  @media @tablets {
    flex-wrap: wrap;
    margin: 0px;
    padding: 20px;
  }
}
</style>
