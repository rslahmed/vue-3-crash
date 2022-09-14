<script setup>

</script>

<template>
  <h1 class="text-white font-semibold text-2xl mb-5 text-center">
    Car Shop
  </h1>

  <!-- shop grid -->
  <div class="grid grid-cols-2 gap-5">
    <!-- single product -->
    <div v-for="n in 4" :key="n" class="bg-cyan-700 rounded-lg overflow-hidden">
      <router-link :to="{name: 'Product'}">
        <img :src="`/images/car-${n}.jpg`" class="h-40 object-cover">
      </router-link>
      <div class="p-4">
        <router-link :to="{name: 'Product'}" class="block text-white font-semibold text-xl">
          Red car
        </router-link>
        <h5 class="text-white">
          $40.00
        </h5>
        <button
            class="block mt-2 font-semibold w-full text-center bg-gray-200 text-gray-800 rounded py-1 hover:bg-white transition active:scale-90">
          Add To Cart
        </button>
      </div>
    </div>
    <!-- single product end -->
  </div>
  <!-- shop grid end -->
</template>

