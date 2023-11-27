<script lang="ts">
  import { onMount } from "svelte";
  // @ts-ignore
  import { gsap } from "gsap";

  import Blob from "./Blob.svelte";
  import Blur from "./Blur.svelte";
  import Background from "./Background.svelte";
  import Frq from "./FRQ.svelte";

  let movement = [false, false];

  let scrollContainer: HTMLDivElement;

  let qs = [
    { question: "What is your name" },
    { question: "Name what is your" },
    { question: "Is your name what" },
    { question: "Lorem ipsum dolor sit" },
    { question: "Blah Bla Blah Blah" },
  ];

  function moveLeft() {
    const firstElement = qs.shift();
    //@ts-ignore
    qs.push(firstElement);

    qs = qs;

    let mainContainerTimeline = gsap.timeline();

    mainContainerTimeline.from(".frq-container", {
      opacity: 0,
      duration: 0.3,
      x: 20,
    });
  }

  function moveRight() {
    const lastElement = qs.pop();
    //@ts-ignore
    qs.unshift(lastElement);

    qs = qs;

    let mainContainerTimeline = gsap.timeline();

    mainContainerTimeline.from(".frq-container", {
      opacity: 0,
      duration: 0.3,
      x: -20,
    });
  }

  let lastInvocation = 0;
  const debounceInterval = 300; // 200 ms

  function debounce(func: (event: WheelEvent) => void) {
    return function (event: WheelEvent) {
      const now = Date.now();
      if (now - lastInvocation > debounceInterval) {
        func(event);
        lastInvocation = now;
      }
    };
  }

  function handleScroll(event: WheelEvent) {
    console.log(event.deltaY);
    if (event.deltaY > 0) {
      moveRight();
      console.log(qs);
    } else if (event.deltaY < 0) {
      moveLeft();
      console.log(qs);
    }
  }

  //test
  let debouncedHandleScroll = debounce(handleScroll);
</script>

<main on:wheel={debouncedHandleScroll}>
  <Background />
  <Blob />
  <Blur />

  <!-- svelte-ignore a11y-click-events-have-key-events -->
  <!-- svelte-ignore a11y-no-static-element-interactions -->
  <div class="applicationTitle" id="applicationTitle">Webinar Intrest Form</div>

  <div bind:this={scrollContainer} class="frq-container">
    {#each qs as q}
      <Frq title={q.question} width={"500px"} />
    {/each}
  </div>

  <div class="applicationTitle" id="navigation-buttons">
    <button type="button" id="interactable" on:click={moveRight}>Back</button>
    <button type="button" id="interactable" on:click={moveLeft}>Forward</button>
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
  }
  button:hover {
    cursor: pointer;
    background-color: #7881d3;
  }
  #navigation-buttons {
    text-align: center;
  }
  .frq-container {
    display: flex;
    width: 200%;
    overflow-x: scroll; /* Enables horizontal scrolling */
    white-space: nowrap; /* Prevents items from wrapping to the next line */
    gap: 10px; /* Optional: Adds space between items */
    padding: 10px; /* Adjust as needed */
    opacity: 100%;
  }

  /* This ensures each Frq component has a fixed width and does not overlap */

  .applicationTitle {
    text-shadow: rgb(190, 190, 190) 1px 0 10px;
    position: relative;
    font-size: 54px;
    font-weight: bold;
    text-align: left;
    margin: 50px;
  }

  #applicationTitle {
    font-size: 84px;
    font-weight: bold;
  }
</style>
