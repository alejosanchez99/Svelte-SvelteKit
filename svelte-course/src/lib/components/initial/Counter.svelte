<script>
  let count1 = 0;
  let count2 = 0;

  function getTotal() {
    return count1 + count2;
  }

  ///Not going to work
  //   $: string = `you have clicked ${getTotal()} times.`;

  $: setCount2(count1);
  $: string = `Count2 is ${count2}`;
  
  function setCount2(count) {
    count2 = count;
  }

  function increment1() {
    count1++;
  }
  function increment2() {
    count2++;
  }
</script>

<button on:click={increment1}>Clicks {count1}</button>
<button on:click={increment2}>Clicks {count2}</button>
<h3>{string}</h3>

<style>
  button {
    padding: 15px 20px;
  }
</style>
