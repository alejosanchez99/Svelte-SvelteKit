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
  let:hasErrors
  let:values
  let:errors
>
  {JSON.stringify(values)}
  {JSON.stringify(errors)}
  <Field
    label="Username"
    name="username"
    type="text"
    validate={validateRequiredField}
  >
    <p style:color="green" slot="error" let:error>{error}</p>
  </Field>
  <Field
    label="Email"
    name="email"
    type="email"
    validate={(value, label) => {
      return validateRequiredField(value, label) || validateEmail(value, label);
    }}
  />
  <Field
    label="Password"
    name="password"
    type="password"
    validate={validateRequiredField}
  />
  <button type="submit" disabled={hasErrors}>Submit</button>
</Form>

<Form
  on:submit={(e) => {
    console.log(e.detail);
  }}
  initialValues={{ username: "Test", email: "test@test.com" }}
  let:hasErrors
>
  <Field
    label="Username"
    name="username2"
    type="text"
    validate={validateRequiredField}
  >
    <p style:color="green" slot="error" let:error>{error}</p>
  </Field>
  <Field
    label="Password"
    name="password2"
    type="password"
    validate={validateRequiredField}
  />
  <button type="submit" disabled={hasErrors}>Submit</button>
</Form>
