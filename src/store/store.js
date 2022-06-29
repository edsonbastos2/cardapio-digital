import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const store = new Vuex.Store({
  state: {
    selectedCategory:'',
    cartList: []
  },
  mutations: {
    changeCategory(state, id) {
      state.selectedCategory = id
    },
    addToCart(state, payload){
      state.cartList.push(payload)
    }
  },
  actions:{
    changeCategory(context, id){
      context.commit('changeCategory', id)
    },

    addToCart(context, payload){
      context.commit('addToCart', payload)
    }
  }
})
