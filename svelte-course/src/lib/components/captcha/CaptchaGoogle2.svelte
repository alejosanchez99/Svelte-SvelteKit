<script>
  import { afterUpdate, onMount } from "svelte";

  const key = "6LfYJp4pAAAAANieXBZsh0deuCUjG8u53G6w7WFk";
  const onSubmit = (event) => {
    console.log(grecaptcha.getResponse());
    console.log(event);
  };

  const onloadCallback = () => {
    grecaptcha.render('example3', {
          'sitekey' : '6LfYJp4pAAAAANieXBZsh0deuCUjG8u53G6w7WFk',
          'theme' : 'light'
        });
  }

  onMount(() => {

    window.onloadCallback = onloadCallback;
  });
</script>

<svelte:head>
  <script
    src="https://www.google.com/recaptcha/api.js?onload=onloadCallback&render=explicit"
    async
    defer
  >
  </script>
</svelte:head>

<form on:submit|preventDefault={onSubmit}>
  <div id="example3"></div>
  <br />
  <button type="submit">Submit</button>
</form>
