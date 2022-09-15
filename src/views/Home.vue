<template>
  <h1 class="text-white font-semibold text-2xl mb-5 text-center">
    Car Shop
  </h1>

  <!-- shop grid -->
  <div class="grid grid-cols-2 gap-5">
    <!-- single product if in cart -->
    <div class="bg-cyan-700 rounded-lg overflow-hidden">
      <router-link to="/product">
        <img src="/images/car-1.jpg" class="h-40 object-cover">
      </router-link>
      <div class="p-4">
        <router-link to="/product"  class="block mb-1 text-white font-semibold text-xl">
          Car Name
        </router-link>
        <h5 class="text-white mb-3">
          $40.00
        </h5>
        <div class="flex gap-3 items-center justify-between px-2.5 font-semibold w-full text-center bg-cyan-500 text-white rounded py-1">
          <button class="flex-shrink-0 w-5 h-5 rounded-full border border-white text-white flex items-center justify-center hover:bg-cyan-700 transition active:scale-90">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor"
                 class="w-4 h-4">
              <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 12h-15"/>
            </svg>
          </button>
          3 in Cart
          <button class="flex-shrink-0 w-5 h-5 rounded-full border border-white text-white flex items-center justify-center hover:bg-cyan-700 transition active:scale-90">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor"
                 class="w-4 h-4">
              <path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15"/>
            </svg>
          </button>
        </div>
      </div>
    </div>
    <!-- single product end -->
    <!-- single product -->
    <div v-for="n in 3" class="bg-cyan-700 rounded-lg overflow-hidden">
      <router-link to="/product">
        <img src="/images/car-1.jpg" class="h-40 object-cover">
      </router-link>
      <div class="p-4">
        <router-link to="/product"  class="block mb-1 text-white font-semibold text-xl">
          Car Name
        </router-link>
        <h5 class="text-white mb-3">
          $40.00
        </h5>
        <button class="flex items-center justify-center font-semibold w-full text-center bg-cyan-500 text-white rounded py-1 hover:bg-cyan-600 transition active:scale-90">
          Add to Cart
        </button>
      </div>
    </div>
    <!-- single product end -->
  </div>
  <!-- shop grid end -->
</template>

