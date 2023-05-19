<script lang="ts">
  import { MATCH_COUNT_HIGHLIGHT } from "../../environment";
  import { createHighLight } from "./stores";

  export let classString = "red";
  export let replace = false;
  export let scrollTop = 0;

  let display = createHighLight(classString, MATCH_COUNT_HIGHLIGHT, replace);

  let self: HTMLElement;

  const scrolling = () => {
    if (!self) return;
    scrollTop = self.scrollTop;
  };

  $: if (self) self.scrollTop = scrollTop;
</script>

<div bind:this={self} on:scroll={scrolling}>
  <pre>{@html $display}</pre>
</div>

<style>
  div {
    height: 100%;
    overflow: auto;
    position: relative;
  }

  pre {
    white-space: pre;
  }
</style>
