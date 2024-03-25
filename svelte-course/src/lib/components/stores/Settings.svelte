<script>
    import { onDestroy } from "svelte";
  import settings from "./../../stores/settings.js";
  let colorScheme;
  const unSubscribe = settings.subscribe((settings) => {
    colorScheme = settings.colorScheme;
  });

  $: {
    settings.update((prevSettings) => ({ ...prevSettings, colorScheme }));
  }

  onDestroy(unSubscribe);
</script>

<h2>Settings</h2>

<label>
  <input
    type="radio"
    bind:group={colorScheme}
    name="colorScheme"
    value="dark"
  /> Dark
</label>

<label>
  <input
    type="radio"
    bind:group={colorScheme}
    name="colorScheme"
    value="light"
  /> Light
</label>
