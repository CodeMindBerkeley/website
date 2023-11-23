<script lang="ts">
  import Blob from "./Blob.svelte";
  import Blur from "./Blur.svelte";
  import Background from "./Background.svelte";
  import Footer from "./Footer.svelte";
  import MainContainer from "./MainContainer.svelte";
  import MissionContainer from "./MissionContainer.svelte";

  let comp = [MainContainer, MissionContainer];

  let currentIndex = 0;
  let threshold = 20; // Set a threshold for scroll sensitivity
  let accumulatedDeltaY = 0;

  function handleScroll(event: WheelEvent) {
    accumulatedDeltaY += event.deltaY;

    if (accumulatedDeltaY > threshold) {
      // Scrolling down
      currentIndex = Math.min(currentIndex + 1, comp.length - 1);
      accumulatedDeltaY = 0;
    } else if (accumulatedDeltaY < -threshold) {
      // Scrolling up
      currentIndex = Math.max(currentIndex - 1, 0);
      accumulatedDeltaY = 0;
    }
  }
</script>

<main>
  <div id="scrollHandler" on:wheel={handleScroll}>
    <Background />
    <Blob />
    <Blur />

    <svelte:component this={comp[currentIndex]} />
  </div>

  {#if currentIndex == comp.length - 1}
    <Footer />
  {/if}
</main>

<style>
  #scrollHandler {
    margin: 0;
    overflow: hidden;
    position: fixed;
    top: 0; /* Align the top edge of the element with the viewport */
    left: 0; /* Align the left edge of the element with the viewport */
    right: 0; /* Stretch the element to the right edge of the viewport */
    bottom: 0; /* Stretch the element to the bottom edge of the viewport */
    display: flex; /* Enable flexbox layout */
    justify-content: center; /* Center horizontally */
    align-items: center; /* Center vertically */
  }
</style>
