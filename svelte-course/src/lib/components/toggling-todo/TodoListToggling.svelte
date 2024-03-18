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
      inputText = "";
    }
  };

  const handleRemoveTodo = (id) => {
    dispatch("removetodo", {
      id,
    });
  };

  const handleToggleTodo = (id, value) => {
    dispatch("toggletodo", {
      id,
      value,
    });
  };
</script>

<div class="todo-list-wrapper">
  {#if todos}
    <ul>
      {#each todos as { id, title, completed } (id)}
        <li>
          <label>
            <input
              on:input={(event) => {
                event.currentTarget.checked = completed;
                handleToggleTodo(id, !completed);
              }}
              type="checkbox"
              checked={completed}
            />
            {title}
          </label>
          <button on:click={() => handleRemoveTodo(id)}>Remove</button>
        </li>
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
