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
  <section id="mission-container">
    <div id="mission-title">
      Empowering the next generation of visionaries with cutting-edge programs.
    </div>
  </section>
</main>

<style>
  #mission-container {
    z-index: 4000;
    max-width: 50%;

    transform: translateX(50%);
    margin-top: 20%;
    margin-bottom: 20%;
  }
  #mission-title {
    font-weight: bold;
    font-size: 48px;
    z-index: 4000;
    text-align: center;
    background: linear-gradient(to right, #6873d4, #ffffff 80%);
    -webkit-text-fill-color: transparent;
    -webkit-background-clip: text;
    text-shadow: none;
  }
</style>
