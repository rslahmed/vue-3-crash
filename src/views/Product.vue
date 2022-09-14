<script setup>

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
      Product Name
    </p>
  </nav>
  <!-- Breadcrumbs end -->

  <!-- Product -->
  <div class="">
    <img src="/images/car-1.jpg" class="w-full h-60 object-cover rounded-lg">
    <h4 class="mt-4 text-gray-100 text-2xl">
      Product Name
    </h4>
    <p class="text-gray-300 mt-2 text-sm">
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto blanditiis delectus ducimus eaque earum, fuga
      maxime repellendus temporibus. Doloremque, soluta.
    </p>

    <!-- Add to cart -->
    <div class="flex items-center gap-4 mt-6">
      <button
          class="flex-shrink-0 w-8 h-8 rounded-full border border-white text-white flex items-center justify-center hover:bg-cyan-700 transition active:scale-90">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor"
             class="w-5 h-5">
          <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 12h-15"/>
        </svg>
      </button>
      <div class="flex-shrink-0 font-semibold text-lg text-white flex items-center justify-center">
        1
      </div>
      <button
          class="flex-shrink-0 w-8 h-8 rounded-full border border-white text-white flex items-center justify-center hover:bg-cyan-700 transition active:scale-90">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor"
             class="w-5 h-5">
          <path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15"/>
        </svg>
      </button>
      <button class="ml-2 flex-grow rounded-full h-8 flex items-center justify-center text-gray-700 bg-gray-200 hover:bg-white transition active:scale-90 font-semibold">
        Add to Cart
      </button>
    </div>
    <!-- Add to cart end -->
  </div>
  <!-- Product end -->

</template>

