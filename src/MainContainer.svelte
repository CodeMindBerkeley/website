<script lang="ts">
  import { onMount } from "svelte";
  // @ts-ignore
  import { gsap } from "gsap";

  onMount(() => {
    // GSAP animation for MainContainer
    let mainContainerTimeline = gsap.timeline();

    mainContainerTimeline.from("#main-container", {
      opacity: 0,
      duration: 1,
      y: -20,
    });
  });
</script>

<main>
  <section id="main-container">
    <div id="h1">Code Mind Berkeley</div>
    <div id="h2">
      Interdisciplinary CS research with UC Berkeley Professors and Students
    </div>
  </section>
</main>

<style>
</style>
