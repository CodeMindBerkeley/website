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
    <div id="our-mission" class="headings">Our Mission</div>
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
  #our-mission {
    font-size: max(4vw, 8vh) !important;
    padding: 0;
    margin: 0;
  }
  #mission-title {
    font-weight: bold;
    font-size: max(2.5vw, 5vh);
    z-index: 4000;
    padding-left: 20%;
    padding-right: 20%;
    padding-top: max(2vw, 4vh);
    padding-bottom: 0;
    text-align: center;
    background: linear-gradient(to right, #6873d4, #ffffff 80%);
    -webkit-text-fill-color: transparent;
    background-clip: text;
    -webkit-background-clip: text;
    text-shadow: none;
  }
</style>
