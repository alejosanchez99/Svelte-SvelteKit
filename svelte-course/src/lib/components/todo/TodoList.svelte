<script>
  import Button from "../slots/Button.svelte";
  import { afterUpdate, createEventDispatcher } from "svelte";
  import FaRegTrashAlt from "svelte-icons/fa/FaRegTrashAlt.svelte";
  import { flip } from "svelte/animate";
  import { scale } from "svelte/transition";

  export let todos = null;
  export let error = null;
  export let isLoading = false;
  export let disabledAdding = false;
  export let disabledItems = [];
  export let scrollOnAdd = undefined;

  let prevTodos = todos;
  let inputText = "";
  let input, listDiv, autoscroll, listDivHeight;
  const dispatch = createEventDispatcher();

  afterUpdate(() => {
    if (scrollOnAdd) {
      let position;
      if (scrollOnAdd === "top") {
        position = 0;
      } else if (scrollOnAdd === "bottom") {
        position = listDiv.scrollHeight;
      }

      if (autoscroll) {
        listDiv.scrollTo(0, position);
        autoscroll = false;
      }
    }
  });

  $: {
    autoscroll = todos && prevTodos && todos.length > prevTodos.length;
    prevTodos = todos;
  }

  $: done = todos ? todos.filter((t) => t.completed) : [];
  $: todo = todos ? todos.filter((t) => !t.completed) : [];

  export const clearInput = () => {
    inputText = "";
  };

  export const focusInput = () => {
    input.focus();
  };

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
  {#if isLoading}
    <p class="state-text">Loading...</p>
  {:else if error}
    <p class="state-text">{error}</p>
  {:else if todos}
    <div
      class="todo-list"
      bind:offsetHeight={listDivHeight}
      bind:this={listDiv}
    >
      {#if todos.length === 0}
        <p class="state-tex">No todos yet</p>
      {:else}
        <div style:display="flex">
          {#each [todo, done] as list, index}
            <div class="list-wrapper">
              <h2>{index === 0 ? "Todo" : "Done"}</h2>
              <ul>
                {#each list as todo, index (todo.id)}
                  {@const { id, completed, title } = todo}
                  <li animate:flip={{ duration: 300 }}>
                    <slot {todo} {handleToggleTodo} {index}>
                      <div
                        transition:scale|local={{ start: 0.5, duration: 300 }}
                        class:completed
                      >
                        <label>
                          <input
                            disabled={disabledItems.includes(id)}
                            on:input={(event) => {
                              event.currentTarget.checked = completed;
                              handleToggleTodo(id, !completed);
                            }}
                            type="checkbox"
                            checked={completed}
                          />
                          <slot name="title">{title}</slot>
                        </label>
                        <button
                          disabled={disabledItems.includes(id)}
                          class="remove-todo-button"
                          aria-label="Remove todo: {title}"
                          on:click={() => handleRemoveTodo(id)}
                        >
                          <span style:width="10px" style:display="inline-block"
                            ><FaRegTrashAlt />
                          </span>
                        </button>
                      </div>
                    </slot>
                  </li>
                {/each}
              </ul>
            </div>
          {/each}
        </div>
      {/if}
    </div>
  {/if}
  <form
    class="add-todo-form
  "
    on:submit|preventDefault={handledAddTodo}
  >
    <input
      disabled={disabledAdding || !todos}
      bind:this={input}
      bind:value={inputText}
      placeholder="New todo"
    />
    <Button
      class="add-todo-button"
      type="submit"
      disabled={!inputText || disabledAdding || !todos}>Add</Button
    >
  </form>
</div>

<style lang="scss">
  .todo-list-wrapper {
    background-color: #424242;
    border: 1px solid #4b4b4b;
    .state-text {
      margin: 0;
      padding: 15px;
      text-align: center;
    }
    .todo-list {
      max-height: 200px;
      overflow: auto;
      .list-wrapper {
        padding: 10px;
        flex: 1;
        h2 {
          margin: 0 0 10px;
        }
        ul {
          margin: 0;
          padding: 0px;
          list-style: none;
          li > div {
            margin-bottom: 5px;
            display: flex;
            align-items: center;
            background-color: #303030;
            border-radius: 5px;
            padding: 10px;
            position: relative;
            label {
              cursor: pointer;
              font-size: 18px;
              display: flex;
              align-items: baseline;
              padding-right: 20px;
              input[type="checkbox"] {
                margin: 0 10px 0 0;
                cursor: pointer;
              }
            }
            &.completed > label {
              opacity: 0.5;
              text-decoration: line-through;
            }
            .remove-todo-button {
              border: none;
              background: none;
              padding: 5px;
              position: absolute;
              right: 10px;
              cursor: pointer;
              display: none;
              &:disabled {
                opacity: 0.4;
                cursor: not-allowed;
              }
              :global(svg) {
                fill: #bd1414;
              }
            }
            &:hover {
              .remove-todo-button {
                display: block;
              }
            }
          }
        }
      }
    }
  }
  .add-todo-form {
    padding: 15px;
    background-color: #303030;
    display: flex;
    border-top: 1px solid #4b4b4b;
    input {
      flex: 1;
      background-color: #424242;
      border: 1px solid #4b4b4b;
      padding: 10px;
      color: #fff;
      border-radius: 5px;
      margin-right: 10px;
    }
  }
</style>
