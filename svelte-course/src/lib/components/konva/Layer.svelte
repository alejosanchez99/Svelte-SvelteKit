<script>
  import Konva from "konva";
  import {
    createEventDispatcher,
    getContext,
    onDestroy,
    setContext,
  } from "svelte";
  import { layerKey, stageKey } from "./context-keys";

  //   export let draggable = undefined;

  const dispatch = createEventDispatcher();

  const { getStage } = getContext(stageKey);

  const stage = getStage();
  //   const layer = new Konva.Layer({
  //     draggable,
  //   });

  const layer = new Konva.Layer($$props);

  layer.on("dragmove click mousedown", (e) => {
    dispatch(e.type, e);
  });

  $: layer.setAttrs($$props);
  setContext(layerKey, layer);

  stage.add(layer);

  onDestroy(() => {
    layer.destroy();
  });
</script>

<slot />
