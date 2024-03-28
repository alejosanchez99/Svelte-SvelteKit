<script>
  import {
    validateEmail,
    validateRequiredField,
  } from "./../utils/validation.js";
  import Form from "./../form/Form.svelte";
  import Field from "./../form/Field.svelte";
</script>

<Form
  on:submit={(e) => {
    console.log(e.detail);
  }}
  initialValues={{ username: "Test", email: "test@test.com" }}
>
  <Field
    label="Username"
    name="username"
    type="text"
    validate={validateRequiredField}
  />
  <Field
    label="Email"
    name="email"
    type="email"
    validate={(value, label) => {
      return validateRequiredField(value, label) || validateEmail(value, label);
    }}
  />
  <Field label="Password" name="password" type="password" validate={validateRequiredField} />
  <button type="submit">Submit</button>
</Form>
