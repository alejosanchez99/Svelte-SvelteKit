<script>
  import settings from "./../../stores/settings.js";
  import direction from "./../../stores/direction";
</script>

<h2>Settings</h2>

{$direction}

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

<select bind:value={$settings.language}>
  <option value="en">English</option>
  <option value="ar">Arabic</option>
</select>
