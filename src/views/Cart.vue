<template>
  <div class="wrapper">
    <h1>Cart</h1>
    <ul class="cart-list">
      <li v-for="item in cartItems" :key="item.id" class="flex-col cart-list__item">
        <img :src="imagePath(item)" class="thumbnail" alt="" />
        <div class="flex-col cart-list__item__details">
            <div>
                <p>{{item.name}}</p>
                <p>Size: {{item.size}}</p>
                <p>Color: {{item.color}}</p>
            </div>
            <p>${{item.price}}</p>
            <button
                @click="removeFromCart(item.id)"
                class="btn cart-list__btn-remove"
                >
                Remove
            </button>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "cart",
  computed: {
    cartItems() {
      return this.$store.getters.cartItems;
    },
  },
  methods: {
    imagePath(product) {
      return require(`../assets/img/products/${product.images[0]}`);
    },
    removeFromCart(itemId){
        this.$store.dispatch('removeFromCart', itemId);
    }
  },
};
</script>
<style lang="scss">
.cart-list {
  width: 70%;
  @media only screen and (max-width: 832px) {
    width: 100%;
  }
}
.cart-list__item {
  width: 100%;
  border-bottom: 1px solid #2c3e50;
}
.cart-list__item__details {
  flex: 2;
  justify-content: space-between;
  margin-left: 2rem;
}
.cart-list__btn-remove {
  margin-top: .5rem;
  &:hover {
    color: red;
  }
}
.thumbnail {
  max-width: 50px;
  margin-top: .5rem;
}
</style>
