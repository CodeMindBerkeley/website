<script lang="ts">
  let card: HTMLDivElement;
  export let width: string;
  export let title: string;

  //@ts-ignore
  function cardHover(event) {
    const { clientX, clientY } = event;

    const rect = card.getBoundingClientRect(),
      x = clientX - rect.left,
      y = clientY - rect.top;

    card.style.setProperty("--mouse-x", `${x}px`);
    card.style.setProperty("--mouse-y", `${y}px`);
  }
</script>

<main>
  <section id="frq-container">
    <!-- svelte-ignore a11y-no-static-element-interactions -->
    <!-- svelte-ignore a11y-mouse-events-have-key-events -->
    <div
      style="width: {width}; max-width: {width}; min-width: {width};"
      class="card"
      bind:this={card}
      on:mousemove={cardHover}
    >
      <div id="question">{title}</div>
      <div id="input-holder">
        <!-- Calendly inline widget begin -->
        <div
          class="calendly-inline-widget"
          data-url="https://calendly.com/judealexis-szo/30min?hide_event_type_details=1&hide_gdpr_banner=1"
          style="min-width:160px;height:450px;"
        ></div>
        <script
          type="text/javascript"
          src="https://assets.calendly.com/assets/external/widget.js"
          async
        ></script>
        <!-- Calendly inline widget end -->
      </div>
    </div>
  </section>
</main>

<style>
  #input-holder {
    padding: 4%;
  }
  #text-input {
    width: 100%; /* Set the width to fit the container */
    height: 45vh;
    overflow-y: scroll;
    background: transparent; /* Match the background with the form */
    color: white; /* Text color */
    font-size: 36px;
    border: none;
    resize: none;
    outline: none;
    z-index: 0;
  }
  #question {
    font-size: 36px;
    max-width: 660px;
    text-align: left;
  }
  .card {
    margin-top: 20px; /* Add some space above the text area */
    background-color: rgba(255, 255, 255, 0.02);
    border: 1px solid rgba(255, 255, 255, 0.1);
    padding: 2%;
    border-radius: 10px;
    position: relative;
  }

  .card:hover {
    background: radial-gradient(
      1600px circle at var(--mouse-x) var(--mouse-y),
      rgba(255, 255, 255, 0.06),
      transparent 40%
    );
    z-index: 3;
  }

  .card:hover {
    background: radial-gradient(
      1200px circle at var(--mouse-x) var(--mouse-y),
      rgba(255, 255, 255, 0.15),
      transparent 40%
    );
    z-index: 1;
  }
</style>
