<script lang="ts">
  import Calendar from "./lib/Calendar/Calendar.svelte";
  import DashBoard from "./lib/DashBoard.svelte";
  import IcsDisplay from "./lib/IcsDisplay.svelte";
  import ApiRequest from "./lib/ApiRequest/ApiRequest.svelte";
  import type { SimpleReplacement } from "./lib/ApiRequest/Api";
  import { BACKEND, CALENDAR_ROUTE, DEBOUNCE_INTERVAL } from "../environment";

  const corsProxy = new URL("cors-proxy", BACKEND);
  let url = "https://campus.kit.edu/sp/webcal/sWi7gc4IYy";
  $: if (url) corsProxy.searchParams.set("url", url);

  let regex: RegExp;
  let toReplace: string = "";
  let icsData = "";
  let newIcsData = "";

  let scrollTop = 0;

  let fullCalendar = false;

  let send: () => Promise<Response>;
  let id: string;

  const sendRequest = () => {
    send()
      .then((x) => x.json())
      .then((res: { id: string }) => {
        id = res.id;
        finished = true;
      });
  };

  let replacements: SimpleReplacement[] = [];

  // Should use a router. Anyways...
  let finished = false;

  function generateSimpleReplacement() {
    const replacement: SimpleReplacement = {
      mode: "globalRegex",
      replacement: toReplace,
      pattern: regex.source,
    };
    return replacement;
  }

  const request = () => {
    fetch(corsProxy)
      .then((x) => x.text())
      .then((x) => {
        // Change u+000d u+000a to u+000a -> remove carriage return
        // Also remove "/"", who needs it anyways...
        icsData = x.replace(/\r/g, "").replace(/\\/g, "");
        newIcsData = icsData;
      });
  };

  let timer: number;

  const debounce = (callback: () => void) => {
    clearTimeout(timer);
    timer = setTimeout(() => {
      callback();
    }, DEBOUNCE_INTERVAL);
  };
</script>

{#if finished}
  <main id="finish">
    <div id="wrapper">
      <h1>Calendar Proxy created</h1>

      <div>
        <h2>Your Id is:</h2>
        <input type="text" readonly value={id} />
      </div>
      <div>
        <h2>And your url is:</h2>
        <input
          type="text"
          readonly
          value={new URL(`${CALENDAR_ROUTE}/${id}`, BACKEND).toString()}
        />
      </div>
    </div>
  </main>
{:else}
  <main class={fullCalendar ? "fullCal" : ""}>
    <section id="actionBoard">
      <DashBoard
        on:regexChange={({ detail }) => debounce(() => (regex = detail))}
        on:replaceChange={({ detail }) => debounce(() => (toReplace = detail))}
        on:toggleCalendar={() => (fullCalendar = !fullCalendar)}
        on:addReg={() =>
          (replacements = [...replacements, generateSimpleReplacement()])}
        on:send={sendRequest}
      />
    </section>

    <section id="originalIcs" class="ics">
      <h1>Orginal Calendar</h1>
      <IcsDisplay {icsData} {regex} bind:scrollTop highlightClass="red" />
    </section>
    <section id="newIcs" class="ics">
      <h1>New Calendar</h1>

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
      <Calendar calendar={icsData} full={fullCalendar} />
    </section>
    <section id="newCalender" class="calender">
      <Calendar calendar={newIcsData} full={fullCalendar} />
    </section>
    <section id="url">
      <input type="text" placeholder="Calender url" bind:value={url} />
      <button on:click={request}>laden</button>
    </section>
    <section id="apiRequest">
      <ApiRequest {url} bind:replacements bind:send />
    </section>
  </main>
{/if}

<style>
  #finish {
    display: flex;
  }
  #wrapper {
    width: 40rem;
    margin: auto;
    display: flex;
    gap: 1rem;
    flex-direction: column;
  }
  #wrapper * {
    width: 100%;
  }
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
    display: flex;
    flex-direction: column;
    grid-area: api;
  }
  main {
    padding: 1em;
    display: grid;
    gap: 1rem;
    height: 100vh;
    grid-template:
      "board board cal1 cal2" minmax(10rem, 1fr)
      "oldIcs newIcs url url" 5em
      "oldIcs newIcs api api" minmax(10rem, 1fr) / 1.7fr 1.7fr 1fr 1fr;
  }
  .calender {
    display: flex;
    flex-direction: column;
    gap: 0.5em;
  }

  .fullCal {
    grid-template:
      "board board cal1 cal2" minmax(10rem, 1fr)
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
  @media only screen and (max-width: 1600px) {
    main {
      height: 100%;
      grid-template:
        "url url" auto
        "board board" auto
        "cal1 cal2" auto
        "oldIcs newIcs" auto
        "oldIcs newIcs" auto
        "api api" auto / 1fr 1fr;
    }
  }
  @media only screen and (max-width: 800px) {
    main {
      height: 100%;
      grid-template:
        "url" auto
        "board" auto
        "cal1" auto
        "cal2" auto
        "oldIcs" auto
        "newIcs" auto
        "api" auto / 1fr;
    }
  }
</style>
