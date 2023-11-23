<script lang="ts">
  import Blob from "./Blob.svelte";
  import Blur from "./Blur.svelte";
  import Background from "./Background.svelte";
  import Footer from "./Footer.svelte";
  import MainContainer from "./MainContainer.svelte";
  import MissionContainer from "./MissionContainer.svelte";

  let comp = [
    { id: "main-container", component: MainContainer },
    { id: "mission-container", component: MissionContainer },
  ];

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
  <div on:wheel={handleScroll}>
    <Background />
    <Blob />
    <Blur />

    <svelte:component this={comp[currentIndex].component} />
  </div>

  <Footer />
</main>

<style>
</style>
