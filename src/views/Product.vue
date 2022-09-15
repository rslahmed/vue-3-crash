<script setup>
import {useStore} from "../store.js";
import {computed, onMounted, ref} from "vue";
import router from "../router/index.js";

const store = useStore()

const props = defineProps({
  id: String
})

const product = ref(store.products.find(prod => prod.id == props.id))

const isInCart = computed(() => {
  return store.cart.find(item => item.id == props.id)?.quantity
})

function addToCart(product) {
  store.addCart({...product, quantity: 1})
}
</script>

<template>
  <!-- Breadcrumbs -->
  <nav class="flex items-center gap-3 mb-4">
    <router-link to="/" class="text-gray-300 font-semibold text-sm flex items-center hover:text-white">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor"
           class="w-4 h-4 mr-1.5">
        <path stroke-linecap="round" stroke-linejoin="round"
              d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"/>
      </svg>
      Home
    </router-link>
    <p class="text-gray-200">/</p>
    <p class="text-gray-200 text-sm">
      {{ product.name }}
    </p>
  </nav>
  <!-- Breadcrumbs end -->

  <!-- Product -->
  <div class="">
    <img :src="product.image" class="w-full h-60 object-cover rounded-lg">
    <h4 class="mt-4 text-gray-100 text-2xl font-semibold">
      {{ product.name }}
    </h4>
    <p class="text-gray-300 mt-2 text-sm">
      {{ product.description }}
    </p>

    <!-- Add to cart -->
    <div class="flex items-center gap-16 mt-6">
      <h4 class="font-semibold text-gray-100 text-2xl">${{ parseFloat(product.price).toFixed(2) }}</h4>
      <div v-if="isInCart"
           class="flex gap-3 items-center justify-between px-2.5 font-semibold w-full text-center bg-cyan-500 text-white rounded-full py-1">
        <button @click="store.decreaseCart(product.id)"
                class="flex-shrink-0 w-5 h-5 rounded-full border border-white text-white flex items-center justify-center hover:bg-cyan-700 transition active:scale-90">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor"
               class="w-4 h-4">
            <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 12h-15"/>
          </svg>
        </button>
        {{ isInCart }} in Cart
        <button @click="store.increaseCart(product.id)"
                class="flex-shrink-0 w-5 h-5 rounded-full border border-white text-white flex items-center justify-center hover:bg-cyan-700 transition active:scale-90">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor"
               class="w-4 h-4">
            <path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15"/>
          </svg>
        </button>
      </div>
      <button v-else @click="addToCart(product)"
              class="flex items-center justify-center font-semibold w-full text-center bg-cyan-500 text-white rounded-full py-1 hover:bg-cyan-600 transition active:scale-90">
        Add to Cart
      </button>
    </div>
    <!-- Add to cart end -->
  </div>
  <!-- Product end -->

</template>

