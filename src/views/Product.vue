<template>
  <div>
    <section class="wrapper">
      <div class="flex-col">
          <img :src="imagePath(product)" alt=""  class="product-image">
          <div class="flex-col--2">
              <h2>{{ product.name}}</h2>
              <button @click="addToChart" class="btn btn--grey"> Add to Cart</button>
              <p>Price : ${{product.price}}</p>
              <p>Size  : {{product.size}}</p>
              <p>Color : {{product.color}}</p>
              <h3>Detail</h3>
              <ul>
                  <li>Material  : {{product.detail.material}}</li>
                  <li>Fit       : {{product.detail.fit}}</li>
                  <li>Maintance : {{ product.detail.maintance }}</li>
              </ul>
          </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: "product",
  data() {
    return {
      product: this.$store.getters.product(this.$route.params.id),
    };
  },
  methods: {
    imagePath(product) {
      return require(`../assets/img/products/${product.images[0]}`);
    },
    addToChart(){
      this.$store.dispatch('addToChart',this.$route.params.id);
    }

  },
};
</script>

<style lang="scss">
.flex-col {
  display: flex;
  align-items: flex-start;
}
.flex-col--2 {
  width: 50%;
  margin: 0 2rem;
}
.product-image {
  max-height: 400px;
  max-width: 400px;
}
.btn {
  padding: .5rem .75rem;
  border-radius: 3px;
  border: none;
  background-color: transparent;
  font-size: .9rem;
  font-weight: bold;
  cursor: pointer;
  transition: all .15s ease;
}
.btn--grey {
  background-color: #2c3e50;
  color: #FFF;
  &:hover, &:focus {
    background-color: #42b983;
  }
}
</style>