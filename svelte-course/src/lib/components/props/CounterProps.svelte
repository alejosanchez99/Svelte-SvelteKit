<script>
  export let initialCount;
  export let maxCount;

  let count = initialCount;

  function increment() {
    if (count !== maxCount) {
      count += 1;
    }
  }
</script>

<button on:click={increment}>Clicks {count}</button>

<style>
  button {
    padding: 15px 20px;
  }
</style>
