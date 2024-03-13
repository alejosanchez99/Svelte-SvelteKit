<script>
	import ButtonDirective from './../lib/components/directives/Button.svelte';
  import App from "../lib/components/initial/App.svelte";
  import Counter from "../lib/components/initial/Counter.svelte";
  import CounterProps from "../lib/components/props/CounterProps.svelte";
  import Button from "../lib/components/slots/Button.svelte";
</script>

<!-- <App />
  <Counter />
  <CounterProps initialCount={3} maxCount={10} />
  <Button>Button Text</Button>

-->

<ButtonDirective size='small'>Button Text</ButtonDirective>
