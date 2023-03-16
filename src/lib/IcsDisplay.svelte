<script lang="ts">
  import { createEventDispatcher } from "svelte";

  export let icsData = "";
  export let regex: RegExp = null;
  export let highlightClass = "red";

  export let scrollTop = 0;

  // default: keep match and only add highlight
  export let replace = null;

  const dispatch = createEventDispatcher();

  let self: HTMLElement;
  let highlighted = "";

  $: if (icsData) highlighted = icsData;
  $: if (regex || replace) highlighted = highlight(icsData);
  const highlight = (data: string) => {
    if (regex?.source == "(?:)") return;

    const raw = data.replace(regex, replace);
    dispatch("newIcs", raw);
    return replace != null
      ? data.replace(
          regex,
          `<span class="${highlightClass} highlight">${replace}</span>`
        )
      : data.replace(
          regex,
          (match) => `<span class="${highlightClass} highlight">${match}</span>`
        );
  };

  const scrolling = () => {
    if (!self) return;
    scrollTop = self.scrollTop;
  };

  $: if (self) self.scrollTop = scrollTop;
</script>

<div bind:this={self} on:scroll={scrolling}>
  <span>
    {@html highlighted}
  </span>
</div>

<style>
  div {
    height: 100%;
    overflow: auto;
    position: relative;
  }

  span {
    white-space: pre;
  }
</style>
