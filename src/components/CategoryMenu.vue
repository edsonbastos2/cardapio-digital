<template>
  <div class="category-menu">
    <ul>
      <li
        v-for="category in categoriesList"
        :key="category.id"
        @click="onCategoryClick(category.id)"
        :class="{active: isActive(category.id)}"
      >
        <font-awesome-icon :icon="category.icon" />
        <p>{{ category.label }}</p>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'CategoryMenu',
  data() {
    return {
      categoriesList: [
        { label: 'Pizza', icon: 'pizza-slice', id: 'pizza' },
        { label: 'Bebidas', icon: 'wine-glass', id: 'glass' },
        { label: 'Doces', icon: 'ice-cream', id: 'ice-cream' },
        { label: 'Combos', icon: 'bacon', id: 'burger-fries' },
        { label: 'Burgues', icon: 'burger', id: 'burger' },
      ],
      selectedCategory: 'pizza',
    }
  },
  methods: {
    onCategoryClick(id) {
      this.selectedCategory = id
      this.$store.dispatch('changeCategory', id)
    },
    isActive(id){
        return this.selectedCategory === id
    }
  },
}
</script>

<style lang="less" scoped>
.category-menu {
  width: 130px;
  height: 100vh;
  background-color: #fff;

  display: flex;
  align-items: center;

  ul {
    width: 100%;
    list-style: none;
    padding: 0;

    li {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      cursor: pointer;
      height: 100px;
      gap: 1rem;
      color: @dark-grey;

      p{
        margin-bottom: 0px;
        font-weight: 500;
        font-size: 14px;
      }

      &.active{
        background-color: @yellow;
        border-radius: 8px;

        p{
            color: #000;
        }

        svg{
            path {
                fill: black;
            }
        }
        
      }
    }
  }

  @media @smartphone{
    width: 100%;
    height: fit-content;

    ul{
        display: flex;
        margin: 20px;
        overflow: scroll;
        
        li{
            min-width: 78px;
        }
    }
  }
}
</style>
