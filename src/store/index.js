import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex)

export default new Vuex.Store({
    strict: true,
    state: {
        products: [
            {
                name: "Tiny tea pot",
                price: 40,
              },
              {
                name: "Tiny machine",
                price: 80,
              },
              {
                name: "Tiny gun",
                price: 10,
              },
              {
                name: "Tiny bottle",
                price: 4,
              }
        ]
    },
    getters: {
      saleProducts: state => {
        let saleProducts = state.products.map((product) => {
          return {
            name: "*" + product.name + "*",
            price: product.price / 2,
          };
        });
        return saleProducts;
      },
      },
      mutations: {
        reducePrice: state => {
          state.products.forEach( product => {
            product.price -= 1;
          })
        }
      }
})