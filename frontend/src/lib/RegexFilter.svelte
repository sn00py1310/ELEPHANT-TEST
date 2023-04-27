<script lang="ts">
  import { createEventDispatcher } from "svelte";
  import { escapeRegExp } from "./util";

  let escaped = false;
  let regex = "";
  const dispatch = createEventDispatcher();

  $: dispatch("regexChange", escaped ? escapeRegExp(regex) : regex);
</script>

<div class="inputSuffix">
  <textarea placeholder="Search" bind:value={regex} />
  <button class={!escaped ? "active" : ""} on:click={() => (escaped = !escaped)}
    >(.*)</button
  >
</div>

<style>
  .inputSuffix {
    height: 100%;
  }
</style>
