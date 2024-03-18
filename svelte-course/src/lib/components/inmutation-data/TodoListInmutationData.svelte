<svelte:options immutable={true} />

<script>
  import Button from "../slots/Button.svelte";
  import { createEventDispatcher } from "svelte";

  export let todos = [];
  let inputText = "";

  const dispatch = createEventDispatcher();

  const handledAddTodo = () => {
    const isNotCancelled = dispatch(
      "addTodo",
      {
        title: inputText,
      },
      { cancelable: true },
    );

    if (isNotCancelled) {
      inputText = '';
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
  <form
    action="add-todo-form
  "
    on:submit|preventDefault={handledAddTodo}
  >
    <input bind:value={inputText} />
    <Button type="submit" disabled={!inputText}>Add</Button>
  </form>
</div>
