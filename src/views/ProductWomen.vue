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
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 10px;
}
.featured-items__item{
  margin: 1rem;
}
.product-image{
   width: 250px;
  height: 400px;
  border-radius: 30px;
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
