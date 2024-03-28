<script>
  let values = { username: "", email: "", password: "" };
  let isSubmitting = false;
  let errors = {};

  function validate() {
    const errors = {};

    if (!values.username) {
      errors.username = "The username is required.";
    }

    if (!values.password) {
      errors.password = "The password is required";
    }

    if (values.email) {
      errors.email = "The email is invalid";
    }

    return errors;
  }
</script>

<form
  on:submit|preventDefault={() => {
    errors = validate();

    if (Object.keys(errors).length === 0) {
      isSubmitting = true;
      setTimeout(() => {
        isSubmitting = false;
      }, 1000);
    }
  }}
>
  <label for="username">username: </label><br />
  <input
    id="username"
    name="username"
    type="text"
    bind:value={values.username}
  /> <br />
  {#if errors.username}
    <p>{errors.username}</p>
  {/if}
  <label for="email">email: </label><br />
  <input id="email" name="email" type="email" bind:value={values.email} />
  <br />
  {#if errors.email}
    <p>{errors.email}</p>
  {/if}

  <label for="password">password: </label><br />
  <input
    id="password"
    name="password"
    type="password"
    bind:value={values.password}
  /> <br />
  {#if errors.password}
    <p>{errors.password}</p>
  {/if}

  <button type="submit" disabled={isSubmitting}>Submit</button>
</form>
