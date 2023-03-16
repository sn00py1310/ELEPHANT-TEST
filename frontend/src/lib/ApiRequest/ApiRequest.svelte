<script lang="ts">
  import type { SimpleReplacement } from "./Api";

  export let url = "";
  export let replacements: SimpleReplacement[] = [];

  let blockView = true;

  const elephantBackend =
    "https://elephant-staging.snoopys.xyz/api/v1/calendar/";

  export const send = () => {
    return fetch(elephantBackend, {
      method: "POST",
      body: JSON.stringify(generated),
      mode: "no-cors",
    });
  };

  $: generated = { url, settings: { replacements: replacements } };
</script>

<button on:click={() => (blockView = !blockView)}>toggle</button>
<div>
  {#if !blockView}
    <pre>{JSON.stringify(generated, undefined, 2)}</pre>
  {:else}
    <div id="boxLayout">
      {#each replacements as replacement, i}
        <div id="boxReplacement">
          <div id="textReplacement">
            <div>
              {replacement.matcher.pattern}
            </div>
            <span id="arrow">-></span>
            <div>
              {replacement.replacement}
            </div>
          </div>
          <button
            id="delete"
            on:click={() =>
              (replacements = replacements
                .slice(0, i)
                .concat(replacements.slice(i + 1)))}>X</button
          >
        </div>
      {/each}
    </div>
  {/if}
</div>

<style>
  pre {
    white-space: pre-wrap;
  }
  #boxLayout {
    margin-top: 1em;
    display: flex;
    flex-direction: column;
    gap: 0.5em;
  }

  #textReplacement {
    display: flex;
    gap: 1em;
  }

  #textReplacement > div {
    background-color: var(--ctp-macchiato-surface0);
    border-radius: 5px;
    padding: 5px;
  }
  #boxReplacement {
    background-color: var(--ctp-macchiato-crust);
    padding: 0.5em;
    border-radius: 5px;
    display: flex;
    justify-content: space-between;
  }
  #arrow {
    color: var(--ctp-macchiato-green);
    margin: auto;
  }
  #delete {
    padding: 2px 5px;
    background-color: transparent;
    color: var(--ctp-macchiato-red);
  }
</style>
