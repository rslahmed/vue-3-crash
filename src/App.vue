<template>
  <main class="min-h-screen w-full py-20 px-5 flex items-center justify-center bg-cyan-800">
    <!-- Todos wrapper -->
    <div class="w-full max-w-sm">
      <!-- Todos title -->
      <div class="flex items-center justify-center text-white space-x-4">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
             class="w-12 h-12">
          <path stroke-linecap="round" stroke-linejoin="round"
                d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25zM6.75 12h.008v.008H6.75V12zm0 3h.008v.008H6.75V15zm0 3h.008v.008H6.75V18z"/>
        </svg>
        <h1 class="font-semibold text-4xl">Todo List</h1>
      </div>
      <!-- Todos title end -->

      <!-- Todos search -->
      <div class="mt-5 relative">
        <input type="text"
               class="block px-4 py-1 bg-black/20 w-full rounded focus:outline-none focus:ring focus:ring-cyan-700 text-gray-200 placeholder:text-gray-500"
               placeholder='search todo....'>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
             class="w-5 h-5 absolute right-2.5 top-1.5 text-gray-500">
          <path stroke-linecap="round" stroke-linejoin="round"
                d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"/>
        </svg>
      </div>
      <!-- Todos search end -->

      <!-- Todos List -->
      <div class="mt-6 space-y-2">
        <!-- Single list -->
        <div v-for="n in 3"
             class="pl-4 pr-2.5 py-1.5 text-white rounded bg-cyan-700/90 relative flex items-center justify-between">
          <p>Task List {{ n }}</p>
          <!-- Delete list -->
          <button class="opacity-50 hover:opacity-100 active:scale-90 transition">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                 stroke="currentColor" class="w-5 h-5">
              <path stroke-linecap="round" stroke-linejoin="round"
                    d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"/>
            </svg>
          </button>
          <!-- Delete list end -->
        </div>
        <!-- Single list end -->
      </div>
      <!-- Todos List end -->

      <!-- Add Todos -->
      <h4 class="text-white mb-2 mt-6 text-center">Add New Todo</h4>
      <div class="relative">
        <input type="text"
               class="block px-4 py-1 bg-black/20 w-full rounded focus:outline-none focus:ring focus:ring-cyan-700 text-gray-200 placeholder:text-gray-500"
               placeholder='enter new todo....'>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
             class="w-5 h-5 absolute right-2.5 top-1.5 text-gray-500">
          <path stroke-linecap="round" stroke-linejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"/>
        </svg>
      </div>
      <!-- Add Todos end -->

    </div>
  </main>
</template>