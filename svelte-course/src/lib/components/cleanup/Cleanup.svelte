<script>
  import TodoListCleanup from "./TodoListCleanup.svelte";
  import { v4 as uuid } from "uuid";

  let todoList;
  let showList = true;

  let todos = null;

  const loadTodos = () => {
    return fetch("https://jsonplaceholder.typicode.com/todos?limit=10").then(
      (response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error("An error has occurred.");
        }
      },
    );
  };

  let promise = loadTodos();
  
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
  {#await promise}
    <p>Loading ...</p>
  {:then todos}
    <div style:max-width="400px">
      <TodoListCleanup
        {todos}
        bind:this={todoList}
        on:addTodo={handleAddTodo}
        on:removetodo={handleRemoveTodo}
        on:toggletodo={handleToggleTodo}
      />
    </div>
  {:catch error}
    <p>{error.message || "An error has occurred"}</p>
  {/await}
  <button
    on:click={() => {
      promise = loadTodos();
    }}>Refresh</button
  >
{/if}
