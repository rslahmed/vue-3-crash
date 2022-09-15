<script setup>
import {useStore} from "../store.js";
import {onMounted} from "vue";
import ProductCard from '../components/ProductCard.vue'

const store = useStore()
onMounted(() => {

})
</script>

<template>
  <h1 class="text-white font-semibold text-2xl mb-5 text-center">
    Car Shop
  </h1>

  <!-- shop grid -->
  <div class="grid grid-cols-2 gap-5">
    <!-- single product -->
    <ProductCard v-for="product in store.products" :key="product.id" :product="product"/>
    <!-- single product end -->
  </div>
  <!-- shop grid end -->
</template>

