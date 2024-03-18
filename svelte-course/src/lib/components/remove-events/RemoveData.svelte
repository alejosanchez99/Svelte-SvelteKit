<script>
  import { v4 as uuid } from "uuid";
  import TodoListRemoveData from "./TodoListRemoveData.svelte";

  let todos = [
    { id: uuid(), title: "Todo 1", completed: true },
    { id: uuid(), title: "Todo 2", completed: false },
    { id: uuid(), title: "Todo 3", completed: true },
  ];

  const handleAddTodo = (event) => {
    // event.preventDefault();
    todos = [
      ...todos,
      {
        id: uuid(),
        title: event.detail.title,
        completed: false,
      },
    ];
  };

  const handledRemoveTodo = (event) => {
    console.log(event.detail.id);
    todos = todos.filter((item) => item.id !== event.detail.id);
  };
</script>

<TodoListRemoveData
  {todos}
  on:addTodo={handleAddTodo}
  on:removetodo={handledRemoveTodo}
/>
