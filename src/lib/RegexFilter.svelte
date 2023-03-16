<script lang="ts">
  import { createEventDispatcher } from "svelte";

  let escaped = false;
  let regex = "";
  const dispatch = createEventDispatcher();

  $: {
    try {
      let out = RegExp(escaped ? escapeRegExp(regex) : regex, "g");
      dispatch("regexChange", out);
    } catch (error) {
      console.warn("ignore regex error...");
    }
  }
  const toggleEsc = () => {
    escaped = !escaped;
  };

  function escapeRegExp(input: string) {
    return input.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"); // $& means the whole matched string
  }
</script>

<div class="inputSuffix">
  <textarea placeholder="Search" bind:value={regex} />
  <button class={!escaped ? "active" : ""} on:click={toggleEsc}>(.*)</button>
</div>

<style>
  .inputSuffix {
    height: 100%;
  }
</style>
