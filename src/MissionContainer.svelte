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
    <div class="headings">Our Mission</div>
    <div id="mission-title">
      Empowering the next generation of visionaries with cutting-edge research programs.
    </div>
  </section>
</main>

<style>
  #mission-container {
    top: 25%;
    position: absolute;
    left: 0;
    z-index: 4000;
    width: 100%;
  }
  #mission-title {
    font-weight: bold;
    font-size: 48px;
    z-index: 4000;
    padding-left: 20%;
    padding-right: 20%;
    text-align: center;
    background: linear-gradient(to right, #6873d4, #ffffff 80%);
    -webkit-text-fill-color: transparent;
    background-clip: text;
    -webkit-background-clip: text;
    text-shadow: none;
  }
</style>
