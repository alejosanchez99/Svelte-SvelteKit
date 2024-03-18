<script>
  import Button from "../slots/Button.svelte";
  import { v4 as uuid } from "uuid";

  export let todos = [];
  let inputText = "";

  const handledAddTodo = () => {
    if (inputText) {
      todos = [
        ...todos,
        {
          id: uuid(),
          title: inputText,
          completed: false,
        },
      ];

      inputText = "";
    }
  };
</script>

<div class="todo-list-wrapper">
  {#if todos}
    <ul>
      {#each todos as { id, title }, index (id)}
        {@const number = index + 1}
        <li>{number} - {title}</li>
      {/each}
    </ul>
  {/if}
  {inputText}
  <form
    action="add-todo-form
  "
    on:submit|preventDefault={handledAddTodo}
  >
    <input bind:value={inputText} />
    <Button type="submit" disabled={!inputText}>Add</Button>
  </form>
</div>
