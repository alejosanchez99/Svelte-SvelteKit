<script>
  import settings from "./../../stores/settings.js";
</script>

<h2>Settings</h2>

<label>
  <input
    type="radio"
    bind:group={$settings.colorScheme}
    name="colorScheme"
    value="dark"
  /> Dark
</label>

<label>
  <input
    type="radio"
    bind:group={$settings.colorScheme}
    name="colorScheme"
    value="light"
  /> Light
</label>
