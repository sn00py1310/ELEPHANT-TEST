<script lang="ts">
  import RegexFilter from "./lib/RegexFilter.svelte";
  import Calender from "./lib/Calender.svelte";

  let original = ``;
  let highlighted = original;
  let newIcs = original;
  let rawIcs = original;
  let url =
    "https://justcors.com/tl_c49c923/https://campus.kit.edu/sp/webcal/sWi7gc4IYy";
  let toReplace = "";
  let originalIcsElement: HTMLElement;
  let newIcsElement: HTMLElement;
  let regex: RegExp;

  const DEBOUNCE_INTERVALL = 2000;

  const request = () => {
    fetch(url)
      .then((x) => x.text())
      .then((x) => {
        // Change u+000d u+000a to u+000a -> remove carriage return
        // Also remove "/"", who needs is anyways...
        original = x.replace(/\r/g, "").replace(/\\/g, "");
        highlighted = original;
        newIcs = original;
      });
  };

  const highlight = (e: CustomEvent<RegExp>) => {
    regex = e.detail;
    setTimeout(() => {
      if (regex.source == "(?:)") return;
      highlighted = original.replace(
        regex,
        (match) => `<span class="red highlight">${match}</span>`
      );
      replace();
    }, DEBOUNCE_INTERVALL);
  };
  const replace = () => {
    newIcs = original.replace(
      regex,
      (match) =>
        `<span class="green highlight">${toReplace.replace(
          /\$match\$/g,
          match
        )}</span>`
    );
    rawIcs = original.replace(regex, (match) =>
      toReplace.replace(/\$match\$/g, match)
    );
  };

  const scrollSyncNew = () => {
    newIcsElement.scrollTop = originalIcsElement.scrollTop;
  };
  const scrollSyncOriginal = () => {
    originalIcsElement.scrollTop = newIcsElement.scrollTop;
  };
</script>

<main>
  <!-- <main class="fullCal"> -->
  <section id="actionBoard">
    <RegexFilter on:change={highlight} />
    <select name="" id="">
      <option value="">global</option>
    </select>
    <textarea
      placeholder="Replacement (use $match$ to reference the Search match)"
      bind:value={toReplace}
      on:keyup={replace}
    />
    <button> anwenden </button>
  </section>
  <section
    id="originalIcs"
    class="ics"
    on:scroll={scrollSyncNew}
    bind:this={originalIcsElement}
  >
    <h1>Orginal Calender</h1>
    <span>
      {@html highlighted}
    </span>
  </section>
  <section
    id="newIcs"
    class="ics"
    on:scroll={scrollSyncOriginal}
    bind:this={newIcsElement}
  >
    <h1>New Calender</h1>
    <span>
      {@html newIcs}
    </span>
  </section>
  <section id="oldCalender" class="calender">
    <Calender calender={original} />
  </section>
  <section id="newCalender" class="calender">
    <Calender calender={rawIcs} />
  </section>
  <section id="url">
    <input type="text" placeholder="Calender url" bind:value={url} />
    <button on:click={request}>laden</button>
  </section>
  <section id="apiRequest">api request</section>
</main>

<style>
  #actionBoard {
    grid-area: board;
    display: grid;
    gap: 1em;
    grid-template: 1fr 1fr / 1fr 1fr;
  }

  #originalIcs {
    grid-area: oldIcs;
  }

  .ics {
    overflow-y: auto;
  }
  .ics span {
    white-space: pre;
  }
  #originalIcs span {
    max-height: 100%;
    /* color: var(--ctp-macchiato-green); */
  }
  #newIcs {
    grid-area: newIcs;
  }
  #oldCalender {
    grid-area: cal1;
  }
  #newCalender {
    grid-area: cal2;
  }
  #url {
    grid-area: url;
    display: flex;
    gap: 1em;
  }
  #url input {
    width: 100%;
  }
  #url button {
    width: 8em;
  }
  #apiRequest {
    grid-area: api;
  }
  main {
    padding: 1em;
    display: grid;
    grid-template:
      "board board cal1 cal2" auto
      "oldIcs newIcs url url" 5em
      "oldIcs newIcs api api" 1fr / 1.7fr 1.7fr 1fr 1fr;

    gap: 1rem;
    height: 100vh;
  }

  .fullCal {
    height: 100%;
    grid-template:
      "board board cal1 cal2" auto
      "oldIcs newIcs cal1 cal2" 5em
      "oldIcs newIcs cal1 cal2" 1fr / 1.7fr 1.7fr 1fr 1fr;
  }
  .fullCal #apiRequest {
    display: none;
  }
  .fullCal #url {
    display: none;
  }

  section {
    border-radius: 7px;
    padding: 1em;
    height: 100%;
    background-color: var(--ctp-macchiato-mantle);
  }
</style>
