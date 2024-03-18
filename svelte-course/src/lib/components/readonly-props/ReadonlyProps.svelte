<script>
  import TodoListToggling from "./TodoListReadonlyProps.svelte";
  import { v4 as uuid } from "uuid";

  let todoList;

  let todos = [
    { id: uuid(), title: "Todo 1", completed: true },
    { id: uuid(), title: "Todo 2", completed: false },
    { id: uuid(), title: "Todo 3", completed: true },
  ];

  const handleAddTodo = (event) => {
    event.preventDefault();
    setTimeout(() => {
      todos = [
        ...todos,
        {
          id: uuid(),
          title: event.detail.title,
          completed: false,
        },
      ];

      todoList.clearInput();
    }, 1000);
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

{todoList && todoList.readonly}
<TodoListToggling
  {todos}
  bind:this={todoList}
  on:addTodo={handleAddTodo}
  on:removetodo={handleRemoveTodo}
  on:toggletodo={handleToggleTodo}
/>

<button
  on:click={() => {
    todoList.focusInput();
  }}
>Focus input</button>
