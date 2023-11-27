<script lang="ts">
  let card: HTMLDivElement;
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
  <!-- svelte-ignore a11y-no-static-element-interactions -->
  <!-- svelte-ignore a11y-mouse-events-have-key-events -->
  <div
    id="card"
    class="card interactable"
    bind:this={card}
    on:mousemove={cardHover}
  >
    <div id="question" class="interactable">{title}</div>
    <div id="input-holder" class="interactable">
      <textarea
        id="text-input"
        class="interactable"
        placeholder="Type your answer here..."
      ></textarea>
    </div>
  </div>
</main>

<style>
  .card {
    background-color: rgba(255, 255, 255, 0.02);
    border: 1px solid rgba(255, 255, 255, 0.1);
    border-radius: 20px;
    position: relative;
    padding: 5%;
    width: auto;
    height: 45vh !important;
  }

  #question {
    font-size: 36px;
    max-width: 660px;
    text-align: left;
    text-wrap: wrap;
  }
  #text-input {
    width: 100%; /* Set the width to fit the container */
    overflow-y: scroll;
    background: transparent; /* Match the background with the form */
    color: white; /* Text color */
    font-size: 36px;
    border: none;
    resize: none;
    outline: none;
    z-index: 0;
    padding: 4%;
  }

  .card:hover {
    background: radial-gradient(
      36rem circle at var(--mouse-x) var(--mouse-y),
      rgba(255, 255, 255, 0.15),
      transparent 40%
    );
    z-index: 1;
  }
</style>
