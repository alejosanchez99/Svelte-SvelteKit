<script>
  import { onMount } from "svelte";
  import TodoListCleanup from "./TodoList.svelte";
  import { v4 as uuid } from "uuid";
  import { blur, fade, fly, slide } from "svelte/transition";
  import { bounceInOut, cubicInOut, cubicOut } from "svelte/easing";

  let todoList;
  let showList = true;

  let todos = null;
  let error = null;
  let isLoading = false;
  let isAdding = false;
  let disabledItems = [];

  onMount(() => {
    loadTodos();
  });

  const loadTodos = () => {
    isLoading = true;
    fetch("https://jsonplaceholder.typicode.com/todos?limits=10").then(
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
    isAdding = true;

    fetch("https://jsonplaceholder.typicode.com/todos", {
      method: "POST",
      body: JSON.stringify({
        title: event.detail.title,
        completed: false,
      }),
      headers: {
        "Content-type": "application/json;charset=UTF-8",
      },
    }).then(async (response) => {
      if (response.ok) {
        const todo = await response.json();
        todos = [{ ...todo, id: uuid() }, ...todos];
        todoList.clearInput();
      } else {
        alert("An error has occurred.");
      }
    });

    isAdding = false;
    todoList.focusInput();
  };

  const handleRemoveTodo = (event) => {
    const id = event.detail.id;

    if (!disabledItems.includes(id)) {
      disabledItems = [...disabledItems, id];
      fetch(`https://jsonplaceholder.typicode.com/todos/${id}`, {
        method: "DELETE",
      }).then((response) => {
        if (response.ok) {
          todos = todos.filter((item) => item.id !== event.detail.id);
        } else {
          alert("An error has ocurred.");
        }
      });

      disabledItems = disabledItems.filter((itemId) => itemId !== id);
    }
  };

  const handleToggleTodo = (event) => {
    const id = event.detail.id;
    const value = event.detail.value;

    if (!disabledItems.includes(id)) {
      disabledItems = [...disabledItems, id];
      fetch(`https://jsonplaceholder.typicode.com/todos/${id}`, {
        method: "PATCH",
        body: JSON.stringify({
          completed: value,
        }),
        headers: {
          "Content-type": "application/json;charset=UTF-8",
        },
      }).then(async (response) => {
        if (response.ok) {
          const updatedTodo = await response.json();

          todos = todos.map((item) => {
            if (item.id === id) {
              return updatedTodo;
            }

            return { ...item };
          });
        } else {
          alert("An error has ocurred.");
        }
      });

      disabledItems = disabledItems.filter((itemId) => itemId !== id);
    }
  };
</script>

<label>
  <input type="checkbox" bind:checked={showList} />
  Show/hide list
</label>

{#if showList}
  <div style:max-width="800px">
    <TodoListCleanup
      {todos}
      {error}
      disabledAdding={isAdding}
      {disabledItems}
      {isLoading}
      scrollOnAdd="top"
      bind:this={todoList}
      on:addTodo={handleAddTodo}
      on:removetodo={handleRemoveTodo}
      on:toggletodo={handleToggleTodo}
    >
      <!-- <svelte:fragment slot="title">test</svelte:fragment> -->
    </TodoListCleanup>
  </div>
  {#if todos}
    <p>
      Number of todos: {#key todos.length}
        <span style:display="inline-block" in:fly|local={{ y: -10 }}>
          {todos.length}</span
        >
      {/key}
    </p>
  {/if}
{/if}
