import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    cart:[1],
    products: [
      {
        name: "Crewneck T-Shirt",
        id:1,
        price: 9.5,
        color: "white",
        size: "smalll",
        gender: "men",
        quantity: 10,
        dateAdded: "Tue Mar 2020",
        category: "T-Shirt",
        detail: {
          material: "Cotton",
          fit:"regular",
          maintance: "machine"
        },
        images: [
          'product-2.jpg',
          'product-1.jpg',
          'product-3.jpg',
          'product-4.jpg'
        ]
      },
      {
        name: "Cardigan Sweather",
        id:2,
        price: 9.5,
        color: "red",
        size: "smalll",
        gender: "men",
        quantity: 10,
        dateAdded: "Tue Mar 2020",
        category: "T-Shirt",
        detail: {
          material: "Cotton",
          fit:"regular",
          maintance: "machine"
        },
        images: [
          'product-1.jpg',
          'product-2.jpg',
          'product-3.jpg',
          'product-4.jpg'
        ]
      },
      {
        name: "Cardigan Sweather",
        id:3,
        price: 9.5,
        color: "red",
        size: "smalll",
        gender: "men",
        quantity: 10,
        dateAdded: "Tue Mar 2020",
        category: "T-Shirt",
        detail: {
          material: "Cotton",
          fit:"regular",
          maintance: "machine"
        },
        images: [
          'product-4.jpg',
          'product-1.jpg',
          'product-2.jpg',
          'product-3.jpg',
        ]
      }
    ]
  },
  mutations: {
    addToChart (state, payload){
      state.cart.push(Number(payload))
    },
    decrementProductInventory(state, payload){
      let product = state.products.find(product => product.id === Number(payload))
      product.quantity--;
    }
  },
  actions: {
    addToChart({commit}, payload){
      commit('addToChart', payload)
      commit('decrementProductInventory',payload)
    }
  },
  getters:{
    product: (state) => (id) => {
      return state.products.filter(p=> p.id === Number(id))[0]
    },
    cartItems: (state) => {
      return state.cart.map(
        itemId => state.products.find(
          product => product.id === itemId
        )
      )
    }
  },
  modules: {
  }
})
