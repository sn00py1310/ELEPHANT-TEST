<script lang="ts">
  import { createEventDispatcher } from "svelte";
  import RegexFilter from "./RegexFilter.svelte";

  const dispatch = createEventDispatcher();
  let toReplace = "";
  const replace = () => {
    dispatch("replaceChange", toReplace);
  };
</script>

<div id="dash">
  <div class="left row">
    <RegexFilter on:regexChange />
    <textarea
      placeholder="Replacement (use $match$ to reference the Search match)"
      bind:value={toReplace}
      on:keyup={replace}
    />
  </div>
  <div class="right row">
    <select name="" id="">
      <option value="">global</option>
    </select>
    <button> add regex </button>
    <button on:click={() => dispatch("toggleCalendar")}>
      toggle full calender</button
    >
    <button class="primeAction"> send api request </button>
  </div>
</div>

<style>
  #dash {
    display: grid;
    gap: 1em;
    grid-template: 1fr /1fr 1fr;
  }

  .row {
    display: flex;
    gap: 1em;
    flex-direction: column;
  }
  .row * {
    height: 100%;
  }

  .primeAction {
    background-color: var(--ctp-macchiato-blue);
  }
</style>
