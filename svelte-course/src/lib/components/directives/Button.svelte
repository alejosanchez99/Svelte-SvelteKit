<script>
    export let size= 'small';
    export let shadow = false;
</script>

<button class={ size === 'large' ? 'size-lg' : 'size-sm'}>
  <slot />
</button>

<button class:size-lg = {size === 'large'}
        class:size-sm = {size === 'small'}
        class:shadow>
  <slot />
</button>


<style lang="scss">
    @use '../../../styles/variables.scss';

  button {
    border: none;
    background-color: #ff3e00;
    color: #ffffff;
    padding: 15px 20px;
    font-weight: bold;
    border-radius: 5px;
    cursor:pointer;
    &.size-sm {
      padding: 15px 20px;
    }
    &.size-lg {
      padding: 20px 25px;
      font-size: 20px;
    },
    &.shadow {
      box-shadow: 0 0 1px rgba(1,1,1,0.3);
    }
  }
</style>
