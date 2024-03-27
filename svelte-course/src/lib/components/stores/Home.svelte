<script>
  import { writable } from "svelte/store";
  import { tweened } from "svelte/motion";
  import { cubicOut } from "svelte/easing";

  const size = tweened(
    { width: 100, height: 100 },
    {
      duration: 200,
      easing: cubicOut,
    },
  );
</script>

<button
  on:click={async () => {
   await size.set({
      width: Math.random() * 500,
      height: Math.random() * 500,
    });
    console.log('done');
  }}>Random size</button
>

<div
  style="width: {$size.width}px; height: {$size.height}px; background-color: purple;"
/>
