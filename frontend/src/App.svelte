<script lang="ts">
  import Calender from "./lib/Calendar/Calendar.svelte";
  import DashBoard from "./lib/DashBoard.svelte";
  import IcsDisplay from "./lib/IcsDisplay.svelte";
  import ApiRequest from "./lib/ApiRequest/ApiRequest.svelte";
  import type { SimpleReplacement } from "./lib/ApiRequest/Api";

  let url =
    "https://justcors.com/tl_c49c923/https://campus.kit.edu/sp/webcal/sWi7gc4IYy";
  let regex: RegExp;
  let toReplace: string = "";
  let icsData = "";
  let newIcsData = "";

  let scrollTop = 0;

  let fullCalendar = false;
  const DEBOUNCE_INTERVALL = 1500;

  let send;

  let replacements: SimpleReplacement[] = [];

  function generateSimpleReplacement() {
    const replacement: SimpleReplacement = {
      mode: "globalRegex",
      replacement: toReplace,
      pattern: regex.source
    };
    return replacement;
  }

  const request = () => {
    fetch(`http://localhost:3000/cors-proxy?url=` + encodeURIComponent(url))
      .then((x) => x.text())
      .then((x) => {
        // Change u+000d u+000a to u+000a -> remove carriage return
        // Also remove "/"", who needs is anyways...
        icsData = x.replace(/\r/g, "").replace(/\\/g, "");
        newIcsData = icsData;
      });
  };

  let timer: number;

  const debounce = (callback: () => void) => {
    clearTimeout(timer);
    timer = setTimeout(() => {
      callback();
    }, DEBOUNCE_INTERVALL);
  };
</script>

<main class={fullCalendar ? "fullCal" : ""}>
  <section id="actionBoard">
    <DashBoard
      on:regexChange={({ detail }) => debounce(() => (regex = detail))}
      on:replaceChange={({ detail }) => debounce(() => (toReplace = detail))}
      on:toggleCalendar={() => (fullCalendar = !fullCalendar)}
      on:addReg={() =>
        (replacements = [generateSimpleReplacement(), ...replacements])}
      on:send={() => send().then((x) => console.log(x))}
    />
  </section>

  <section id="originalIcs" class="ics">
    <h1>Orginal Calender</h1>
    <IcsDisplay {icsData} {regex} bind:scrollTop highlightClass="red" />
  </section>
  <section id="newIcs" class="ics">
    <h1>New Calender</h1>

    <IcsDisplay
      {icsData}
      {regex}
      bind:scrollTop
      replace={toReplace}
      highlightClass="green"
      on:newIcs={({ detail }) => (newIcsData = detail)}
    />
  </section>
  <section id="oldCalender" class="calender">
    <Calender calendar={icsData} full={fullCalendar} />
  </section>
  <section id="newCalender" class="calender">
    <Calender calendar={newIcsData} full={fullCalendar} />
  </section>
  <section id="url">
    <input type="text" placeholder="Calender url" bind:value={url} />
    <button on:click={request}>laden</button>
  </section>
  <section id="apiRequest">
    <ApiRequest {url} bind:replacements bind:send />
  </section>
</main>

<style>
  #actionBoard {
    grid-area: board;
  }
  .ics {
    overflow-y: auto;
    display: flex;
    flex-direction: column;
    max-height: 50em;
  }
  #originalIcs {
    grid-area: oldIcs;
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
