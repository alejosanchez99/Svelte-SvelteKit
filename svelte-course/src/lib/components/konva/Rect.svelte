<script>
  import Konva from "konva";
  import { createEventDispatcher, getContext, onDestroy } from "svelte";
  import { layerKey } from "./context-keys";

  //   export let x = undefined;
  //   export let y = undefined;
  //   export let width = undefined;
  //   export let height = undefined;
  //   export let fill = undefined;
  //   export let stroke = undefined;
  //   export let strokeWidth = undefined;

  const dispatch = createEventDispatcher();
  const layer = getContext(layerKey);

  //   const rect = new Konva.Rect({
  //     x,
  //     y,
  //     width,
  //     height,
  //     fill,
  //     stroke,
  //     strokeWidth,
  //   });

  const rect = new Konva.Rect($$props);

  rect.on("click mousedown", (e) => {
    dispatch(e.type, e);
  });

  //   $: rect.setAttrs({ x, y, width, height, fill, stroke, strokeWidth });
  $: rect.setAttrs($$props);

  layer.add(rect);

  onDestroy(() => {
    rect.destroy();
  });
</script>
