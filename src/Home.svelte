<script lang="ts">
  import Blob from "./Blob.svelte";
  import Blur from "./Blur.svelte";
  import Background from "./Background.svelte";
  import Header from "./Header.svelte";
  import Footer from "./Footer.svelte";
  import MainContainer from "./MainContainer.svelte";
  import MissionContainer from "./MissionContainer.svelte";
  import Description from "./Description.svelte";
  import About from "./About.svelte";
  import Modal from "./Modal.svelte";
  import Pay from "./Pay.svelte"
  import { accumulatedDeltaYScroll, currentIndex } from "./main";

  let comp = [MainContainer, MissionContainer, Description, About, Pay];
  let mobile: boolean = window.innerWidth <= 800;



  let showModal = false;
  let modalText = "";
  let modalName = "";

  let threshold = 4; // Set a threshold for scroll sensitivity
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
      $currentIndex = Math.min($currentIndex + 1, comp.length - 1)
      accumulatedDeltaY = 0;
    } else if (accumulatedDeltaY < -threshold) {
      // Scrolling up
      $currentIndex = Math.max($currentIndex - 1, 0)
      accumulatedDeltaY = 0;
    }
    $accumulatedDeltaYScroll = (100 / 3.69) * ($currentIndex + accumulatedDeltaY / 3.69);
  }
</script>

<main>
    {#if !mobile}
      <div id="progress" style="width: {$accumulatedDeltaYScroll}%;"></div>
      <Header />
      <div id="scrollHandler" on:wheel={handleScroll}>
      <Background />
      <Blob />
      <Blur />

      <svelte:component
        this={comp[$currentIndex]}
        on:displayModal={(e) => {
          showModal = true;
          modalText = e.detail.modalText;
          modalName = e.detail.modalName;
        }}
      />
      {#if showModal}
        <Modal
          {modalText}
          {modalName}
          on:click={() => {
            showModal = false;
          }}
        />
      {/if}
    </div>

    {#if $currentIndex == comp.length - 1}
      <Footer />
    {/if}
  {:else}
      <Background />
      <MainContainer />

  {/if}
</main>

<style>
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
  #progress {
    position: fixed;
    z-index: 500000;
    background-color: white;
    color: white;
    height: 2px;
    top: 0;
    left: 0;
    min-width: 5px !important;
    width: 5px;
    overflow-y: hidden;
    border-radius: 5px;
    transition: width 300ms ease;
  }
</style>
