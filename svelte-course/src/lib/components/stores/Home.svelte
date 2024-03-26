<script>
  import settings from "./../../stores/settings.js";
  import location from "./../../stores/location.js";
</script>

<h2>Home</h2>

{#if $location && !$location.error}
  {$location.latitude}, {$location.longitude}
{/if}
{#if $location && $location.error}
  {$location.error.message}
{/if}

{$settings.colorScheme}
