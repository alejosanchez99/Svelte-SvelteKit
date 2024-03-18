<script>
  export let size = "small";
  export let shadow = false;
  export let disabled = false;
</script>

<button
  on:click|preventDefault|once
  {disabled}
  class:size-lg={size === "large"}
  class:size-sm={size === "small"}
  class:has-left={$$slots.leftContent}
  class:shadow
>
  {#if $$slots.leftContent}
    <div class="left-content">
      <slot name="leftContent" />
    </div>
    <slot>Fallback</slot>
  {/if}
</button>

<style lang="scss">
  @use "../../../styles/variables.scss";

  button {
    display: flex;
    border: none;
    align-items: center;
    background-color: #ff3e00;
    color: #ffffff;
    padding: 15px 20px;
    font-weight: bold;
    border-radius: 5px;
    cursor: pointer;
    .left-content {
      margin-right: 10px;
    }
    &.size-sm {
      padding: 15px 20px;
    }
    &.size-lg {
      padding: 20px 25px;
      font-size: 20px;
    }
    &.shadow {
      box-shadow: 2 1 3100px rgba(1, 1, 1, 0.3);
    }
  }
</style>
