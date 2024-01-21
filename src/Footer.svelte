<script lang="ts">
  import { onMount } from "svelte";
  // @ts-ignore
  import { gsap } from "gsap";

  onMount(() => {
    // GSAP animation for MainContainer
    let mainContainerTimeline = gsap.timeline();

    mainContainerTimeline.from("#footer", {
      opacity: 0,
      duration: 1,
      y: -20,
    });
  });
</script>

<main>
  <section id="footer">
    <a id="copyright" aria-label="© Code Mind Berkeley 2023">
      © Code Mind Berkeley 2023 &emsp;
    </a>
    <a
      id="copyright"
      href="https://docs.google.com/forms/u/5/d/1INqjanGTz29xChcQt6mAYmcYK9gqiwaNrhbVbe-3jIk"
      aria-label="Work with us"
      target="_blank"
    >
      Careers &emsp;
    </a>
    <a
      id="copyright"
      href="https://codemindberkeley.com/Privacy Policy/v1.pdf"
      aria-label="Code Mind Berkeley's Privacy Policy"
      target="_blank"
    >
      Privacy Policy
    </a>
  </section>
</main>

<style>
  #copyright {
    font-size: max(1vw, 10px);
  }
  #footer {
    position: absolute;
    text-align: center;
    height: 3vh;
    font-size: max(1vw, 2vh);
    z-index: 4000;
    padding-bottom: max(0.3vw, 0.6vh);
    position: fixed;
    bottom: 0;
    width: 100%;
    color: white;
  }
  #footer > span {
    margin: 0 max(1vw, 2vh) 0 max(1vw, 2vh);
  }
</style>
