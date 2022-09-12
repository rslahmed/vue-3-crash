<script setup>

</script>

<template>
  <main class="min-h-screen w-full py-20 px-5 flex items-center justify-center bg-cyan-800">
    <!-- Slider wrapper -->
    <div class="w-full max-w-md relative">

      <!-- Single Slider -->
      <div>
        <img src="/images/car-1.jpg" alt="car"
             class="w-full h-56 object-cover rounded-lg shadow">
        <p class="text-center mt-3 text-gray-200 text-xl uppercase">
          Red car
        </p>
      </div>
      <!-- Single Slider end -->

      <!-- Arrows prev -->
      <button class="w-10 h-10 rounded-full bg-white hover:shadow-lg active:scale-90 transition absolute left-2 top-24 text-gray-700 flex items-center justify-center opacity-50 hover:opacity-100">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
             class="w-6 h-6">
          <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5"/>
        </svg>
      </button>
      <!-- Arrows prev end -->

      <!-- Arrows next -->
      <button class="w-10 h-10 rounded-full bg-white hover:shadow-lg active:scale-90 transition absolute right-2 top-24 text-gray-700 flex items-center justify-center opacity-50 hover:opacity-100">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
             class="w-6 h-6">
          <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5"/>
        </svg>
      </button>
      <!-- Arrows next end -->

    </div>
  </main>
</template>