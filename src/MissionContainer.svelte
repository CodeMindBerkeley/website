<script lang="ts">
  import { onMount } from "svelte";
  // @ts-ignore
  import { gsap } from "gsap";

  onMount(() => {
    // GSAP animation for MainContainer
    let mainContainerTimeline = gsap.timeline();

    mainContainerTimeline.from("#mission-container", {
      opacity: 0,
      duration: 1,
      y: -20,
    });
  });
</script>

<main>
  <div class="headings">Our Mission</div>
  <section id="mission-container">
    <div id="mission-title">
      Empowering the next generation of visionaries with cutting-edge programs.
    </div>
  </section>
</main>

<style>
  #mission-container {
    margin-top: 0px;
    z-index: 4000;
    width: 100%;
  }
  #mission-title {
    font-weight: bold;
    font-size: 48px;
    z-index: 4000;
    padding-left: 15%;
    padding-right: 15%;
    text-align: center;
    background: linear-gradient(to right, #6873d4, #ffffff 80%);
    -webkit-text-fill-color: transparent;
    -webkit-background-clip: text;
    text-shadow: none;
  }
</style>
