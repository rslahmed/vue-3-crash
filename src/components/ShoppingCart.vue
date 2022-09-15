<script setup>
import {computed, ref} from "vue";
import {useStore} from "../store.js";

const show = ref(false)
const store = useStore()

const totalPrice = computed(() => {
  let price = 0
  store.cart.forEach(item => {
    price += item.price * item.quantity
  })
  return price
})
</script>

<template>
  <!-- Cart button -->
  <button @click="show=!show"
          class="z-20 w-12 h-12 fixed bottom-4 right-4 bg-cyan-600 rounded-full flex items-center justify-center text-gray-200 hover:text-white hover:bg-cyan-500 transition active:scale-90">
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor"
         class="w-6 h-6">
      <path stroke-linecap="round" stroke-linejoin="round"
            d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"/>
    </svg>
    <span
        class="absolute top-0 right-0 w-5 h-5 text-xs rounded-full bg-red-500 text-white flex items-center justify-center">
      {{ store.cart.length }}
    </span>
  </button>
  <!-- Cart button end -->

  <!-- Shopping Cart -->
  <div @click.self="show=false" v-show="show" class="fixed inset-0 z-50 bg-black/30">
    <div class="absolute h-full w-72 bg-cyan-700 overflow-y-auto right-0 top-0 flex flex-col">
      <!-- title -->
      <div class="flex items-center justify-between bg-cyan-600 py-3 px-4">
        <h4 class="text-white font-semibold">{{ store.cart.length }} Items in Cart</h4>
        <button @click="show=false"
                class="bg-gray-900/30 px-3 py-1 text-sm rounded text-gray-300 hover:text-white active:scale-90">
          Close
        </button>
      </div>
      <!-- items -->
      <div class="mt-2 divide-y divide-gray-300/20">
        <div v-for="item in store.cart" :key="item.id" class="flex px-4 py-2">
          <!-- item image -->
          <div class="flex-shrink-0 mr-3">
            <img :src="item.image" alt="" class="w-16 h-12 object-cover rounded">
          </div>
          <!-- item details -->
          <div class="flex-grow">
            <router-link :to="{name: 'Product', params: {id: item.id}}"
                         @click="show=false"
                         class="block font-semibold text-white">
              {{ item.name }}
            </router-link>
            <p class="text-gray-300">x{{ item.quantity }}</p>
          </div>
          <div class="flex-shrink-0 text-right">
            <!-- Remove item -->
            <button @click="store.removeCart(item.id)" class="text-gray-300 hover:text-white active:scale-90">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                   stroke="currentColor" class="w-5 h-5">
                <path stroke-linecap="round" stroke-linejoin="round"
                      d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"/>
              </svg>
            </button>
            <!-- item price -->
            <h4 class="font-semibold text-white">${{ parseFloat(item.price * item.quantity).toFixed(2) }}</h4>
          </div>
        </div>
      </div>

      <!-- checkout -->
      <div class="p-2 mt-auto">
        <router-link @click="show=false" :to="{name: 'OrderComplete'}"
                     class="block text-center w-full py-2.5 bg-cyan-600 rounded-lg text-gray-300 hover:text-white hover:bg-cyan-500 font-semibold transition active:scale-90">
          Checkout - {{ parseFloat(totalPrice).toFixed(2) }}
        </router-link>
      </div>
    </div>
  </div>
  <!-- Shopping Cart end -->
</template>
