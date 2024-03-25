<script>
  import { onDestroy } from "svelte";
  import settings from "./../../stores/settings.js";
  let colorScheme;
  const unSubscribe = settings.subscribe((settings) => {
    colorScheme = settings.colorScheme;
  });

  onDestroy(unSubscribe);
</script>

<h2>Home</h2>

{colorScheme}
