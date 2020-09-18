<template>
  <div id="product-list-one">
    <h2>Product List One</h2>
    <ul>
      <li v-for="product in saleProducts" :key="product.index">
        <span>{{ product.name }}</span>
        <span>{{ product.price }}</span>
      </li>
    </ul>
    <button v-on:click="reducePrice">Reduce price</button>
  </div>
</template>

<script>
export default {
  computed: {
    products() {
      return this.$store.state.products;
    },
    saleProducts() {
      return this.$store.getters.saleProducts;
    },
  },
  methods: {

    reducePrice: function () {

      this.$store.commit('reducePrice');

    //   this.$store.state.products.forEach((product) => {
    //     product.price -= 1;
    //   });
    },
  },
};
</script>

<style lang="scss" scoped>
#product-list-one {
  background: #47ac96;
  box-shadow: 1px 2px 3px rgba(0, 0, 0, 0.2);
  margin-bottom: 30px;
  padding: 10px 20px;

  h2 {
    color: white;
  }

  ul {
    padding: 0;
  }
  li {
    display: inline-block;
    margin-right: 10px;
    margin-top: 10px;
    padding: 20px;
    background: rgba(255, 255, 255, 0.7);
  }
}
.price {
  font-weight: bold;
  color: #e8800c;
}
</style>
