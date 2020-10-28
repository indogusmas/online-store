<template>
  <div>
    <section class="wrapper">
      <h2>Featured Items</h2>
      <ul class="featured-items">
        <li
          class="featured-items__item"
          v-for="product in products"
          :key="product.id"
        >
          <router-link :to="{ name: 'product', params: { id: product.id } }">
            <img :src="imagePath(product)" alt="" class="product-image" />
            <p class="product-title">{{ product.name }}</p>
            <p>
              <em>${{ product.price }}</em>
            </p>
          </router-link>
        </li>
      </ul>
    </section>
  </div>
</template>

<script>
export default {
  name: "Home",
  computed: {
    products() {
      return this.$store.state.products;
    },
    featuredProducts: function(){
      return this.$store.getters.featuredProducts;
    }
  },
  methods: {
    imagePath(product) {
      return require(`../assets/img/products/${product.images[0]}`);
    },
  },
};
</script>

<style lang="scss">
.wrapper {
  max-width: 800px;
  margin: 0 auto;
  @media only screen and (max-width: 832px) {
    max-width: 100%;
    padding: 1rem;
    text-align: center;
  }
}
.featured-items{
  list-style: none;
  padding-left: 0;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  flex-wrap: wrap;
}
.featured-items__item{

  box-sizing: border-box;
  text-align: center;
  padding: 1rem;
  flex: 0 0 33.3%;
  @media only screen and (max-width: 832px) {
    flex: 0 0 50%;
  }
  @media only screen and (max-width: 475px) {
    flex: 0 0 100%;
  }
}
.product-image{
   width: 200px;
  height: 200px;
  border-radius: 10px;
  overflow: hidden;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.25s ease;
  backface-visibility: hidden;
}
.product-image {
  max-height: 200px;
}
.product-title {
  font-weight: bold;
}
</style>