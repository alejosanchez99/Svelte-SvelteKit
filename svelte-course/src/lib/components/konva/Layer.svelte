<script>
  import Konva from "konva";
  import { getContext, setContext } from "svelte";
  import { layerKey, stageKey } from "./context-keys";

  const { getStage } = getContext(stageKey);

  const stage = getStage();
  const layer = new Konva.Layer();

  setContext(layerKey, layer);

  stage.add(layer);
</script>

<slot />
