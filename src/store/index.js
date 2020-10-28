import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    cart: [1],
    products: [{
        name: "Crewneck T-Shirt",
        id: 1,
        price: 9.5,
        featured: true,
        color: "white",
        size: "smalll",
        gender: "men",
        quantity: 10,
        dateAdded: "Tue Mar 2020",
        category: "T-Shirt",
        detail: {
          material: "Cotton",
          fit: "regular",
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
        id: 2,
        price: 9.5,
        color: "red",
        size: "smalll",
        gender: "men",
        quantity: 10,
        dateAdded: "Tue Mar 2020",
        category: "T-Shirt",
        detail: {
          material: "Cotton",
          fit: "regular",
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
        id: 3,
        price: 9.5,
        color: "red",
        size: "smalll",
        gender: "men",
        quantity: 10,
        dateAdded: "Tue Mar 2020",
        category: "T-Shirt",
        detail: {
          material: "Cotton",
          fit: "regular",
          maintance: "machine"
        },
        images: [
          'product-4.jpg',
          'product-1.jpg',
          'product-2.jpg',
          'product-3.jpg',
        ]
      },
      {
        name: "Luxury-Touch Palm Print Polo",
        id: 53367,
        featured: false,
        price: 49.5,
        color: "navy",
        size: "medium",
        gender: "men",
        quantity: 10,
        dateAdded: "Wed Mar 25 2015 20:00:00 GMT-0400 (Eastern Daylight Time)",
        category: "Shirts",
        details: {
          material: "cotton",
          fit: "A little room through the chest, arms and waist.",
          maintenance: "machine wash warm with like colors, tumble dry low",
          additional: "Rib-knit polo collar. Short sleeves with rib-knit trim."
        },
        images: [
          'product-3.jpg',
          'product-4.jpg',
          'product-1.jpg',
          'product-2.jpg',

        ]
      },
      {
        name: "9-inch Core Temp Aiden Slim Short",
        id: 53368,
        featured: false,
        price: 69.5,
        color: "green",
        size: {
          waist: 32
        },
        gender: "men",
        quantity: 10,
        dateAdded: "Wed Mar 25 2015 20:00:00 GMT-0400 (Eastern Daylight Time)",
        category: "Shorts",
        details: {
          material: "cotton",
          fit: "Sits at the waist, slim through the thigh.",
          maintenance: "machine wash warm with like colors, tumble dry low",
          additional: "9-inch inseam"
        },
        images: [
          'product-3.jpg',
          'product-4.jpg',
          'product-1.jpg',
          'product-2.jpg',
        ]
      },
      {
        name: "Bare High Block-Heel Sandal",
        id: 53369,
        featured: true,
        price: 128.5,
        color: "black",
        size: 8,
        gender: "women",
        quantity: 10,
        dateAdded: "Wed Mar 25 2015 20:00:00 GMT-0400 (Eastern Daylight Time)",
        category: "Shoes",
        details: {
          material: "leather",
          fit: "Breathable synthetic lining. Insole with added stability in the heel.",
          maintenance: "",
          additional: "3.3-inch heel height"
        },
        images: [
          'product-3.jpg',
          'product-4.jpg',
          'product-1.jpg',
          'product-2.jpg',
        ]
      },
      {
        name: "Nicklas Suede Sneaker",
        id: 53370,
        featured: true,
        price: 114.99,
        color: "navy",
        size: 10,
        gender: "men",
        quantity: 10,
        dateAdded: "Wed Mar 25 2015 20:00:00 GMT-0400 (Eastern Daylight Time)",
        category: "Shoes",
        details: {
          material: "suede",
          fit: "Our Advanced Comfort Technology insoles include shock absorption in the heel, arch support and breathable flex on the toe pads.",
          maintenance: "",
          additional: "Flat laces"
        },
        images: [
          'product-3.jpg',
          'product-4.jpg',
          'product-1.jpg',
          'product-2.jpg',
        ]
      },
      {
        "name": "Converse",
        "id": 8,
        "price": 10.5,
        "featured": true,
        "color": "red",
        "size": "Medium",
        "gender": "men",
        "quantity": 100,
        "dateAdded": "Tue Mar 2020",
        "category": "Shoes",
        "detail": {
          "material": "Cotton",
          "fit": "regular",
          "maintance": "machine"
        },
        "images": [
          "sepatu-1.jpg"
        ]
      },
      {
        "name": "Adidas",
        "id": 9,
        "price": 13.5,
        "featured": false,
        "color": "red",
        "size": "Medium",
        "gender": "men",
        "quantity": 100,
        "dateAdded": "Tue Mar 2020",
        "category": "Shoes",
        "detail": {
          "material": "Cotton",
          "fit": "regular",
          "maintance": "machine"
        },
        "images": [
          "sepatu-2.jpg"
        ]
      },
      {
        "name": "Calvin Klein",
        "id": 10,
        "price": 20.5,
        "featured": false,
        "color": "red",
        "size": "Large",
        "gender": "men",
        "quantity": 20,
        "dateAdded": "Tue Mar 2020",
        "category": "Shoes",
        "detail": {
          "material": "Cotton",
          "fit": "regular",
          "maintance": "machine"
        },
        "images": [
          "sepatu-3.jpg"
        ]
      },
      {
        "name": "Dress",
        "id": 11,
        "price": 21.5,
        "featured": false,
        "women": true,
        "color": "red",
        "size": "Large",
        "gender": "men",
        "quantity": 20,
        "dateAdded": "Tue Mar 2020",
        "category": "Shoes",
        "detail": {
          "material": "Cotton",
          "fit": "regular",
          "maintance": "machine"
        },
        "images": [
          "dress-1.jpg"
        ]
      },
      {
        "name": "Dress-2",
        "id": 12,
        "price": 21.5,
        "featured": false,
        "women": true,
        "color": "red",
        "size": "Large",
        "gender": "men",
        "quantity": 20,
        "dateAdded": "Tue Mar 2020",
        "category": "Shoes",
        "detail": {
          "material": "Cotton",
          "fit": "regular",
          "maintance": "machine"
        },
        "images": [
          "dress-2.jpg"
        ]
      },
      {
        "name": "Dress-3",
        "id": 13,
        "price": 21.5,
        "featured": false,
        "women": true,
        "color": "red",
        "size": "Large",
        "gender": "women",
        "quantity": 20,
        "dateAdded": "Tue Mar 2020",
        "category": "Shoes",
        "detail": {
          "material": "Cotton",
          "fit": "regular",
          "maintance": "machine"
        },
        "images": [
          "dress-3.jpg"
        ]
      },
      {
        "name": "Dress-4",
        "id": 14,
        "price": 21.5,
        "featured": false,
        "women": true,
        "color": "red",
        "size": "Large",
        "gender": "women",
        "quantity": 20,
        "dateAdded": "Tue Mar 2020",
        "category": "Shoes",
        "detail": {
          "material": "Cotton",
          "fit": "regular",
          "maintance": "machine"
        },
        "images": [
          "dress-4.jpg"
        ]
      },
      {
        "name": "Dress-4",
        "id": 15,
        "price": 21.5,
        "featured": false,
        "women": true,
        "color": "red",
        "size": "Large",
        "gender": "women",
        "quantity": 20,
        "dateAdded": "Tue Mar 2020",
        "category": "Shoes",
        "detail": {
          "material": "Cotton",
          "fit": "regular",
          "maintance": "machine"
        },
        "images": [
          "dress-1.jpg"
        ]
      },


    ]
  },
  mutations: {
    addToChart(state, payload) {
      state.cart.push(Number(payload))
    },
    removeFromCart(state, payload) {
      let indexToDelete = state.cart.indexOf(Number(payload))
      state.cart.splice(indexToDelete, 1)
    },
    decrementProductInventory(state, payload) {
      let product = state.products.find(product => product.id === Number(payload))
      product.quantity--;
    },
    incrementProductInventory(state, payload) {
      let product = state.products.find(product => product.id == Number(payload))
      product.quantity++;
    }
  },
  actions: {
    addToChart({
      commit
    }, payload) {
      commit('addToChart', payload)
      commit('decrementProductInventory', payload)
    },
    removeFromCart({
      commit
    }, payload) {
      commit('removeFromCart', payload)
      commit('incrementProductInventory', payload)
    }
  },
  getters: {
    product: (state) => (id) => {
      return state.products.filter(p => p.id === Number(id))[0]
    },
    cartItems: (state) => {
      return state.cart.map(
        itemId => state.products.find(
          product => product.id === itemId
        )
      )
    },
    featuredProducts: (state) => {
      return state.products.filter(p => p.featured)
    },
    womenProducts: (state) => {
      return state.products.filter(p => p.women)
    }


  },
  modules: {}
})