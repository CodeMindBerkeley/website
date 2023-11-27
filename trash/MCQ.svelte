<script lang="ts">
  let card: HTMLDivElement;
  export let width: string;
  export let title: string;
  export let choices = ["HTML", "CSS", "JS"];

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
      class="card interactable"
      bind:this={card}
      on:mouseover={cardHover}
    >
      <div id="question" class="interactable">{title}</div>
      <div id="input-holder" class="interactable">
        {#each choices as choice}
          <div id="questionHolder">
            <input
              type="radio"
              id="specQuestionRadio"
              name="fav_language"
              value={choice}
            />
            <label id="specQuestionTxt" for={choice}>{choice}</label><br />
          </div>
        {/each}
      </div>
    </div>
  </section>
</main>

<style>
  #specQuestionRadio {
    transform: scale(1.5);
    accent-color: #4f8ef7;
    margin-right: 20px;
  }
  #specQuestionTxt {
    font-size: 25px;
  }
  #questionHolder {
    display: flex;
    width: 100%;
    flex-direction: row;
    align-items: left;
    margin-bottom: 20px;
    overflow: hidden;
  }
  #input-holder {
    padding: 4%;
    display: flex;
    flex-direction: column;
    align-items: left;
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
