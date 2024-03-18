<script>
  import { v4 as uuid } from "uuid";
  import TodoListInmutationData from "./TodoListInmutationData.svelte";

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
</script>

<TodoListInmutationData {todos} on:addTodo={handleAddTodo} />
