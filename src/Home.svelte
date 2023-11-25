<script lang="ts">
  import Blob from "./Blob.svelte";
  import Blur from "./Blur.svelte";
  import Background from "./Background.svelte";
  import Footer from "./Footer.svelte";
  import MainContainer from "./MainContainer.svelte";
  import MissionContainer from "./MissionContainer.svelte";
  import Description from "./Description.svelte";
  import About from "./About.svelte";
  import Modal from "./Modal.svelte";
  import FAQ from "./Faq.svelte";

  let comp = [MainContainer, MissionContainer, Description, About, FAQ];

  let showModal = false;
  let modalText = "";

  let currentIndex = 0;
  let threshold = 3; // Set a threshold for scroll sensitivity
  export let accumulatedDeltaYScroll: number;
  let accumulatedDeltaY = 0;

  let lastInvocation = 0;
  const debounceInterval = 50;

  function handleScroll(event: WheelEvent) {
    const now = Date.now();
    if (now - lastInvocation < debounceInterval) {
      return; // Skip this invocation because it's too soon
    }
    lastInvocation = now;

    let change = Math.sign(event.deltaY);
    accumulatedDeltaY += change;

    if (accumulatedDeltaY > threshold) {
      // Scrolling down
      currentIndex = Math.min(currentIndex + 1, comp.length - 1);
      accumulatedDeltaY = 0;
    } else if (accumulatedDeltaY < -threshold) {
      // Scrolling up
      currentIndex = Math.max(currentIndex - 1, 0);
      accumulatedDeltaY = 0;
    }
    accumulatedDeltaYScroll =
      (100 / 4.09) * (currentIndex + accumulatedDeltaY / 4.09);
  }
</script>

<main>
  <div id="progress" style="width: {accumulatedDeltaYScroll}%;"></div>
  <div id="scrollHandler" on:wheel={handleScroll}>
    <Background />
    <Blob />
    <Blur />

    <svelte:component
      this={comp[currentIndex]}
      on:displayModal={(e) => {
        showModal = true;
        modalText = e.detail.modalText;
      }}
    />
    {#if showModal}
      <Modal
        {modalText}
        on:click={() => {
          showModal = false;
        }}
      />
    {/if}
  </div>

  {#if currentIndex == comp.length - 1}
    <Footer />
  {/if}
</main>

<style>
  #progress {
    position: fixed;
    z-index: 500000;
    background-color: white;
    color: white;
    height: 5px;
    top: 0;
    left: 0;
    min-width: 5px !important;
    width: 5px;
    overflow-y: hidden;
    border-radius: 5px;
    transition: width 300ms ease;
  }
  #scrollHandler {
    margin: 0;
    overflow: hidden;
    position: fixed;
    top: 0;
    left: 0; /* Align the left edge of the element with the viewport */
    right: 0; /* Stretch the element to the right edge of the viewport */
    bottom: 0; /* Stretch the element to the bottom edge of the viewport */
    display: flex; /* Enable flexbox layout */
    justify-content: center; /* Center horizontally */
    align-items: center; /* Center vertically */
  }
</style>
