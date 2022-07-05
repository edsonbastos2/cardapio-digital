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
      state.cartList.push({...payload, quantity:1})
    },
    increaseQuantity(state, index){
      ++state.cartList[index].quantity
    },
    decreaseQuantity(state, index){
      --state.cartList[index].quantity
    }
  },    
  actions:{

    // Mostra a categoria do item
    changeCategory(context, id){
      context.commit('changeCategory', id)
    },

    // Adiciona itens no carrinho se não existe, caso exista ele incrementa
    addToCart({state, commit}, payload){
      const cartItem = state.cartList.find(item => item.id === payload.id)
      const index = state.cartList.findIndex(item => item.id === payload.id)
      cartItem ? commit('increaseQuantity', index) : commit('addToCart', payload)
    },

    // Incrementa a quantidade do item no carrinho
    increaseQuantity({state, commit}, id){
      const index = state.cartList.findIndex(item => item.id === id)
      commit('increaseQuantity', index)
    },

    decreaseQuantity({state, commit}, id){
      const index = state.cartList.findIndex(item => item.id === id)
      commit('decreaseQuantity', index)
    }
  },

  getters:{
    getCartTotal: state => {
      return state.cartList.reduce((acc, item) => {
        return acc + (item.price * item.quantity)
      }, 0)
    }
  }
})
