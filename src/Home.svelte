<script lang="ts">
  import Blob from "./Blob.svelte";
  import Blur from "./Blur.svelte";
  import Background from "./Background.svelte";
  import Header from "./Header.svelte";
  import Footer from "./Footer.svelte";
  import MainContainer from "./MainContainer.svelte";
  import MissionContainer from "./MissionContainer.svelte";
  import Description from "./Description.svelte";
  import Team from "./Team.svelte";
  import Modal from "./Modal.svelte";
  import Pay from "./Pay.svelte"
  import { accumulatedDeltaYScroll, currentIndex } from "./main";

  let comp = [MainContainer, MissionContainer, Description, Team];

  let showModal = false;
  let modalText = "";
  let modalName = "";
</script>

<main>
    <!-- <div id="progress" style="width: {$accumulatedDeltaYScroll}%;"></div> -->
    <!-- <Header /> -->
    <section id="body-container">

      <div id="Background">
        <Background />
      </div>

      <div id="Blob">
        <Blob />
      </div>

      <div id="Blur">
        <Blur />
      </div>

      {#each comp as c, i}
        <div class="component" id="component-{i}">
          <svelte:component
            this={c}
            on:displayModal={(e) => {
              showModal = true;
              modalText = e.detail.modalText;
              modalName = e.detail.modalName;
            }}
          />
        </div>
        {i+1}
      {/each} 

      {#if showModal}
        <Modal
          {modalText}
          {modalName}
          on:click={() => {
            showModal = false;
          }}
        />
      {/if}

      <div id="Footer">
        <Footer />
      </div>

    </section>
</main>

<style>
  #body-container {
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
  }
  .component {
    min-height: 100vh;
  }
  #Footer {
    min-height: 10vh;
  }
  /* #progress {
    position: fixed;
    z-index: 500000;
    background-color: white;
    color: white;
    height: 0.3vh;
    top: 0;
    left: 0;
    min-width: 0.3vh !important;
    width: 0.3vh;
    overflow-y: hidden;
    border-radius: 0.3vh;
    transition: width 300ms ease;
  } */
</style>
