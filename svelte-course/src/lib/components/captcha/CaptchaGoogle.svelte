<script>
  import { onMount } from "svelte";

  const key = "6LfYJp4pAAAAANieXBZsh0deuCUjG8u53G6w7WFk";
  const onSubmit = (event) => {
    console.log(grecaptcha.getResponse());
    console.log(event);
  };

  onMount(() => {
    setTimeout(() => {
      window.grecaptcha.reset();
    }, 1000);
  });
</script>

<svelte:head>
  <script src="https://www.google.com/recaptcha/api.js" async defer></script>
</svelte:head>

<form on:submit|preventDefault={onSubmit}>
  <div class="g-recaptcha" data-sitekey={key}></div>
  <br />
  <button type="submit">Submit</button>
</form>
