<script>
  import TodoListLifecycle from "./TodoListLifecycle.svelte";
  import { v4 as uuid } from "uuid";

  let todoList;
  let showList = true;

  let todos = [
    { id: uuid(), title: "Todo 1", completed: true },
    { id: uuid(), title: "Todo 2", completed: false },
    { id: uuid(), title: "Todo 3", completed: true },
  ];

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
  <div style:max-width="200px">
    <TodoListLifecycle
      {todos}
      bind:this={todoList}
      on:addTodo={handleAddTodo}
      on:removetodo={handleRemoveTodo}
      on:toggletodo={handleToggleTodo}
    />
  </div>
{/if}
