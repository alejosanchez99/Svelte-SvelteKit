<script>
  import { v4 as uuid } from "uuid";
  import TodoListCustom from "./TodoListCustom.svelte";

  let todos = [
    { id: uuid(), title: "Todo 1", completed: true },
    { id: uuid(), title: "Todo 2", completed: false },
    { id: uuid(), title: "Todo 3", completed: true },
  ];

  const handleAddTodo = (event) => {
    event.preventDefault();
    console.log(event.detail.title);
  };
</script>

<TodoListCustom {todos} on:addTodo={handleAddTodo} />
