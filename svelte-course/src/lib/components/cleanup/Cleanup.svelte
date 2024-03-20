<script>
  import { onMount } from "svelte";
  import TodoListCleanup from "./TodoListCleanup.svelte";
  import { v4 as uuid } from "uuid";

  let todoList;
  let showList = true;

  let todos = null;
  let error = null;
  let isLoading = false;

  onMount(() => {
    loadTodos();
  });

  const loadTodos = () => {
    isLoading = true;

    fetch("https://jsonplaceholder.typicode.com/todos?limit=10").then(
      async (response) => {
        if (response.ok) {
          todos = await response.json();
        } else {
          error = "An error has occurred.";
        }
      },
    );

    isLoading = false;
  };

  const handleAddTodo = (event) => {
    event.preventDefault();
    todos = [
      ...todos,
      {
        id: uuid(),
        title: event.detail.title,
        completed: false,
      },
    ];

    todoList.clearInput();
  };

  const handleRemoveTodo = (event) => {
    todos = todos.filter((item) => item.id !== event.detail.id);
  };

  const handleToggleTodo = (event) => {
    todos = todos.map((item) => {
      if (item.id == event.detail.id) {
        return {
          ...item,
          completed: event.detail.value,
        };
      }

      return { ...item };
    });
  };
</script>

<label>
  <input type="checkbox" bind:checked={showList} />
  Show/hide list
</label>

{#if showList}
  <div style:max-width="400px">
    <TodoListCleanup
      {todos}
      {error}
      {isLoading}
      bind:this={todoList}
      on:addTodo={handleAddTodo}
      on:removetodo={handleRemoveTodo}
      on:toggletodo={handleToggleTodo}
    />
  </div>
{/if}
