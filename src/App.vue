<script setup>
import {computed, ref} from "vue";
import TodoTitle from './components/TodoTitle.vue'
import TodoList from './components/TodoList.vue'

const todoLists = ref([])

// add
const newTodo = ref(null)

function addTodo() {
  todoLists.value.push(newTodo.value)
  newTodo.value = null
}

// remove
function removeTodo(index) {
  todoLists.value.splice(index, 1)
}

// filter
const searchInput = ref(null)
const filteredTodos = computed(() => {
  if (searchInput.value) {
    return todoLists.value.filter(task => task.indexOf(searchInput.value) !== -1)
  } else {
    return todoLists.value
  }
})
</script>

<template>
  <main class="min-h-screen w-full py-20 px-5 flex items-center justify-center bg-cyan-800">
    <!-- Todos wrapper -->
    <div class="w-full max-w-sm">
      <!-- Todos title -->
      <TodoTitle />
      <!-- Todos title end -->

      <!-- Todos search -->
      <div v-show="todoLists.length" class="mt-5 relative">
        <input v-model="searchInput" type="text"
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

        <!-- Empty todos -->
        <p v-show="!filteredTodos.length" class="text-gray-300 text-lg py-4 flex items-center justify-center">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
               stroke="currentColor" class="w-6 h-6 mr-2">
            <path stroke-linecap="round" stroke-linejoin="round"
                  d="M15.182 16.318A4.486 4.486 0 0012.016 15a4.486 4.486 0 00-3.198 1.318M21 12a9 9 0 11-18 0 9 9 0 0118 0zM9.75 9.75c0 .414-.168.75-.375.75S9 10.164 9 9.75 9.168 9 9.375 9s.375.336.375.75zm-.375 0h.008v.015h-.008V9.75zm5.625 0c0 .414-.168.75-.375.75s-.375-.336-.375-.75.168-.75.375-.75.375.336.375.75zm-.375 0h.008v.015h-.008V9.75z"/>
          </svg>
          Nothing to show!
        </p>

        <TodoList v-for="(todo, index) in filteredTodos" :key="index" :todo="todo" :index="index"
                  @removeTodo="removeTodo"/>
      </div>
      <!-- Todos List end -->

      <!-- Add Todos -->
      <h4 class="text-white mb-2 mt-6 text-center">Add New Todo</h4>
      <form @submit.prevent="addTodo" class="relative">
        <input v-model="newTodo" type="text"
               class="block px-4 py-1 bg-black/20 w-full rounded focus:outline-none focus:ring focus:ring-cyan-700 text-gray-200 placeholder:text-gray-500"
               placeholder='enter new todo....'>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
             class="w-5 h-5 absolute right-2.5 top-1.5 text-gray-500">
          <path stroke-linecap="round" stroke-linejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"/>
        </svg>
      </form>
      <!-- Add Todos end -->

    </div>
  </main>
</template>