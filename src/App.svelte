<script lang="ts">
  import Blob from "./Blob.svelte";
  import Blur from "./Blur.svelte";
  import Background from "./Background.svelte";
  import Footer from "./Footer.svelte";
  import MainContainer from "./MainContainer.svelte";
  import MissionContainer from "./MissionContainer.svelte";
  import { onMount } from "svelte";
  // @ts-ignore
  import { gsap } from "gsap";
  // @ts-ignore
  import ScrollTrigger from "gsap/ScrollTrigger";

  gsap.registerPlugin(ScrollTrigger);

  onMount(() => {
    // GSAP animation for MainContainer
    let mainContainerTimeline = gsap.timeline();

    mainContainerTimeline.from("#main-container", {
      opacity: 0,
      duration: 1,
      y: -20,
    });

    // GSAP animation for MissionContainer
    gsap.from("#mission-container", {
      scrollTrigger: {
        trigger: "#h2",
        start: "bottom 30%",
      },
      y: -20,
      duration: 3,
      opacity: 0,
    });
  });
</script>

<main>
  <Background />
  <Blob />
  <Blur />

  <MainContainer />
  <MissionContainer />

  <Footer />
</main>

<style>

</style>