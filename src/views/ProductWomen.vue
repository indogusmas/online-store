<template>
  <section class="wrapper">
    <h2>Woman</h2>
    <ul class="featured-items">
      <li
        class="featured-items__item"
        v-for="product in womenProducts"
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
</template>

<script>
export default {
  name: "product-woman",
  computed: {
    womenProducts: function() {
      return this.$store.getters.womenProducts;
    },
  },
  methods: {
    imagePath(product) {
      return require(`../assets/img/products/${product.images[0]}`);
    },
  },
};
</script>

<style scoped>
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

</style>
