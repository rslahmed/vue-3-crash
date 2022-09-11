<script setup>

</script>

<template>
  <div class="container">
    <div class="todo-wrapper">

      <header class="text-center text-light my-4">
        <h1 class="mb-4">Todo list</h1>
        <form class="search">
          <input type="text"
                 autocomplete="off"
                 class="form-control m-auto"
                 name="search" placeholder='press "ctrl + k" ot  todo...'>
        </form>
      </header>

      <ul class="list-group todos text-light">
        <li class="list-group-item d-flex justify-content-between align-items-center mb-2">
          <span>First Task</span>
          <i class="fas fa-trash delete"></i>
        </li>
        <li class="list-group-item d-flex justify-content-between align-items-center mb-2">
          <span>Second Task</span>
          <i class="fas fa-trash delete"></i>
        </li>
        <li class="list-group-item d-flex justify-content-between align-items-center mb-2">
          <span>Third Task</span>
          <i class="fas fa-trash delete"></i>
        </li>
      </ul>

      <form class="add text-center my-4">
        <label for="newTodo" class="text-light mb-2">Add a new todo</label>
        <input autocomplete="off" type="text" placeholder="enter new todo and press enter" class="form-control m-auto">
      </form>
    </div>
  </div>
</template>

<style>
@import url(https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/css/bootstrap.min.css);
@import url(https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.2/css/all.min.css);

body {
  background: #164e63;
}

.container {
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.todo-wrapper {
  width: 400px;
}

input[type="text"],
input[type="text"]:focus {
  color: #fff;
  border: none;
  background: rgba(0, 0, 0, 0.1);
  width: 100%;
  display: block;
}

.todos li {
  background: #155e75;
  width: 100%;
}

.delete {
  cursor: pointer;
}

.filtered {
  display: none !important;
}
</style>