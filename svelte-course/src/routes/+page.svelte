<script>
	import Lifecycle from './../lib/components/lifecycle/Lifecycle.svelte';
  import ButtonDirective from "./../lib/components/directives/Button.svelte";
  import App from "../lib/components/initial/App.svelte";
  import Counter from "../lib/components/initial/Counter.svelte";
  import CounterProps from "../lib/components/props/CounterProps.svelte";
  import Button from "../lib/components/slots/Button.svelte";
  import ButtonNamedSlot from "../lib/components/slots/ButtonNamedSlot.svelte";
  import FaAngellist from "svelte-icons/fa/FaAngellist.svelte";
  import FaAllergies from "svelte-icons/fa/FaAngellist.svelte";
  import ButtonEventForwarding from "../lib/components/slots/ButtonEventForwarding.svelte";
  import Each from "../lib/components/each/Each.svelte";
    import CustomComponentEvent from "../lib/components/custom-events/CustomComponentEvent.svelte";
    import InmutationData from "../lib/components/inmutation-data/InmutationData.svelte";
    import RemoveData from "../lib/components/remove-events/RemoveData.svelte";
    import TogglingData from "../lib/components/toggling-todo/TogglingData.svelte";
    import ReadonlyProps from "../lib/components/readonly-props/ReadonlyProps.svelte";
    import Cleanup from '../lib/components/cleanup/Cleanup.svelte';
    import Captcha from '../lib/components/captcha/CaptchaGoogle.svelte';
    import CaptchaGoogle from '../lib/components/captcha/CaptchaGoogle.svelte';
    import CaptchaGoogle2 from '../lib/components/captcha/CaptchaGoogle2.svelte';
</script>

<!-- <App />
  <Counter />
  <CounterProps initialCount={3} maxCount={10} />
  <Button>Button Text</Button>
  <ButtonDirective size='small'>Button Text</ButtonDirective>
  <ButtonNamedSlot size="small" shadow={true}>
    <div style:width="20px" slot="leftContent"><FaAngellist /></div>
  
    Button Text
  </ButtonNamedSlot>
  <ButtonEventForwarding
    on:click|once={(event) => {
      alert(true);
    }}
  >
    <div style:width="20px" slot="leftContent"><FaAngellist /></div>
  
    Button Text
  </ButtonEventForwarding>
  <Each />
  <CustomComponentEvent />
  <InmutationData />
  <RemoveData />
  <TogglingData />
  <ReadonlyProps />
  <Lifecycle />

  <Cleanup />
  <CaptchaGoogle2 />
-->

<CaptchaGoogle />


