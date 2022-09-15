<script setup>
import {useStore} from "../store.js";
import {computed} from "vue";

const props = defineProps({
  product: Object
})

const store = useStore()
const isInCart = computed(() => {
  return store.cart.find(item => item.id == props.product.id)?.quantity
})

function addToCart(product) {
  store.addCart({...product, quantity: 1})
}
</script>

<template>
  <div class="bg-cyan-700 rounded-lg overflow-hidden">
    <router-link :to="{name: 'Product', params: {id: product.id}}">
      <img :src="product.image" class="h-40 object-cover">
    </router-link>
    <div class="p-4">
      <router-link :to="{name: 'Product', params: {id: product.id}}" class="block mb-1 text-white font-semibold text-xl">
        {{ product.name }}
      </router-link>
      <h5 class="text-white mb-3">
        ${{ parseFloat(product.price).toFixed(2) }}
      </h5>
      <div v-if="isInCart"
           class="flex gap-3 items-center justify-between px-2.5 font-semibold w-full text-center bg-cyan-500 text-white rounded py-1">
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
              class="flex items-center justify-center font-semibold w-full text-center bg-cyan-500 text-white rounded py-1 hover:bg-cyan-600 transition active:scale-90">
        Add to Cart
      </button>
    </div>
  </div>
</template>