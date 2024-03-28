<script>
  import { onDestroy, onMount, setContext } from "svelte";
  import { stageKey } from "./context-keys";
  import Konva from "konva";

  //   export let width;
  //   export let height;

  let container;
  let stage;

  $: if (stage) {
    stage.setAttrs($$props);
  }

  setContext(stageKey, { getStage: () => stage });

  onMount(() => {
    // stage = new Konva.Stage({
    //   container,
    //   width,
    //   height,
    // });

    stage = new Konva.Stage({
      container,
      ...$$props,
    });
  });

  onDestroy(() => {
    if (stage) {
      stage.destroy();
    }
  });
</script>

<div bind:this={container}>
  {#if stage}
    <slot />
  {/if}
</div>
