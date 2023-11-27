<script lang="ts">
  import { onMount } from "svelte";
  // @ts-ignore
  import { gsap } from "gsap";

  import Blob from "./Blob.svelte";
  import Blur from "./Blur.svelte";
  import Background from "./Background.svelte";
  import Frq from "./FRQ.svelte";

  let scrollContainer: HTMLDivElement;
  let indexActive: number = 0;

  let qs = [
    { question: "What is your full name?" },
    { question: "What's a good email address?" },
    { question: "What high school did you attend?"},
    { question: "How much programming experience do you have?"},
    { question: "Calendly"},
    { question: "How did you hear about us?"},
    { question: "Any other questions?"},
  ];

  function moveRight() {
    if (indexActive === qs.length - 1) {
      return;
    }

    indexActive += 1;

    gsap.to("#frq-container", {
      marginLeft: "+=25%",
      duration: 0.5,
    });
  }

  function moveLeft() {
    if (indexActive === 0) {
      return;
    }

    indexActive -= 1;
    const firstElement = qs.shift();

    gsap.to("#frq-container", {
      marginLeft: "-=25%",
      duration: 0.5,
    });

  }
</script>

<main>
  <Background />
  <Blob />
  <Blur />

  <!-- svelte-ignore a11y-click-events-have-key-events -->
  <!-- svelte-ignore a11y-no-static-element-interactions -->
  <div class="headings" id="applicationTitle">Webinar Signup Form</div>

  <div id="frq-container" bind:this={scrollContainer} >
    {#each qs as q}
      <Frq title={q.question}/>
    {/each}
  </div>

  <div class="headings" id="navigation-buttons">
    <button class="interactable" type="button" on:click={moveRight}>Back</button>
    <button class="interactable" type="button" on:click={moveLeft}>Forward</button>
  </div>
</main>

<style>
  button {
    margin-top: 2%;
    margin-right: 1%;
    border-radius: 32px;
    padding: 20px;
    font-size: 16px;
    background-color: #5e6ad2;
    border: none;
    color: white;
    width: 10%;
    display: inline-block;
    z-index: 4000000;
  }
  button:hover {
    cursor: pointer;
    background-color: #7881d3;
  }
  #navigation-buttons {
    text-align: center;
  }

  #frq-container {
    display: flex;
    width: 200%;
    overflow-x: scroll; /* Enables horizontal scrolling */
    white-space: nowrap; /* Prevents items from wrapping to the next line */
    gap: 40px; /* Optional: Adds space between items */
    margin: 0px 20px;
    margin-left: 35%;
  }

  #applicationTitle {
    font-size: 84px;
  }
</style>
