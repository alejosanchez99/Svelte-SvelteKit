<script>
  import Button from "../slots/Button.svelte";
  import {
    afterUpdate,
    beforeUpdate,
    createEventDispatcher,
    onDestroy,
    onMount,
  } from "svelte";

  onMount(() => {
    console.log("mounted");

    return () => {
      console.log("Destroyed 2");
    };
  });

  beforeUpdate(() => {
    if (listDiv) {
      console.log(listDiv.offsetHeight);
    }
  });

  afterUpdate(() => {
    if (autoscroll) {
      listDiv.scrollTo(0, listDiv.scrollHeight);
      autoscroll = false;
    }
  });

  onDestroy(() => {
    console.log("Destroyed");
  });

  export let todos = [];
  let prevTodos = todos;

  $: {
    autoscroll = todos.length > prevTodos.length;
    prevTodos = todos;
  }

  export const clearInput = () => {
    inputText = "";
  };
  export const focusInput = () => {
    input.focus();
  };
  let inputText = "";
  let input, listDiv, autoscroll, listDivHeight;

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
  <div class="todo-list" bind:offsetHeight={listDivHeight} bind:this={listDiv}>
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
  </div>
  <form
    action="add-todo-form
  "
    on:submit|preventDefault={handledAddTodo}
  >
    <input bind:this={input} bind:value={inputText} />
    <Button type="submit" disabled={!inputText}>Add</Button>
  </form>
</div>

<style>
  .todo-list {
    max-height: 150px;
    overflow: auto;
  }
</style>
