<script lang="ts">
  let original = ``;
  let highlighted = original;
  let newIcs = original;
  let url =
    "https://justcors.com/tl_b26f796/https://campus.kit.edu/sp/webcal/sWi7gc4IYy";
  let regex = "";
  let toReplace = "";
  let originalIcsElement: HTMLElement;
  let newIcsElement: HTMLElement;

  const request = () => {
    fetch(url, {})
      .then((x) => x.text())
      .then((x) => {
        // Change u+000d u+000a to u+000a -> remove carriage return
        original = x.replaceAll(/\r/g, "");
        highlighted = original;
        newIcs = original;
      });
  };

  const highlight = () => {
    setTimeout(() => {
      if (regex === "") return;
      highlighted = original.replaceAll(
        new RegExp(regex, "gm"),
        (match) => `<span class="red">${match}</span>`
      );
    }, 500);
  };

  function scrollSyncNew() {
    newIcsElement.scrollTop = originalIcsElement.scrollTop;
  }
  function scrollSyncOriginal() {
    originalIcsElement.scrollTop = newIcsElement.scrollTop;
  }
</script>

<main>
  <section id="actionBoard">
    <input
      type="text"
      placeholder="Regex"
      bind:value={regex}
      on:keyup={highlight}
    />
    <select name="" id="">
      <option value="">global</option>
    </select>
    <input type="text" placeholder="Replace with" bind:value={toReplace} />
    <button> anwenden </button>
  </section>
  <section
    id="originalIcs"
    on:scroll={scrollSyncNew}
    bind:this={originalIcsElement}
  >
    <h1>Orginal Calender</h1>
    <span>
      {@html highlighted}
    </span>
  </section>
  <section id="newIcs" on:scroll={scrollSyncOriginal} bind:this={newIcsElement}>
    <h1>New Calender</h1>
    <span>
      {newIcs}
    </span>
  </section>
  <section id="oldCalender">Old calender</section>
  <section id="newCalender">new Calender</section>
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
    overflow-y: auto;
  }

  #originalIcs span {
    max-height: 100%;
    color: var(--ctp-macchiato-green);
    white-space: pre;
  }
  #newIcs {
    grid-area: newIcs;
    overflow-y: auto;
    white-space: pre;
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

  section {
    border-radius: 7px;
    padding: 1em;
    height: 100%;
    background-color: var(--ctp-macchiato-mantle);
  }
</style>
