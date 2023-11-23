<script lang="ts">
  import Blob from "./Blob.svelte";
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
        trigger: "#main-container",
        start: "bottom end+=13%",
        end: "bottom center+=40%",
        toggleActions: "play none none none",
        markers: true,
      },
      opacity: 0,
      duration: 1,
      y: 20, // Adjust as necessary for the vertical movement effect
    });
  });
</script>

<main>
  <div id="background"></div>
  <Blob />
  <div id="blur"></div>

  <MainContainer />
  <MissionContainer />

  <Footer />
</main>
