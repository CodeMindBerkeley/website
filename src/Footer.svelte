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
    <span>
      <a id="copyright" aria-label="© Code Mind Berkeley 2023">
        © Code Mind Berkeley 2023
      </a>
    </span>

    <span>
      <a
        href="https://docs.google.com/forms/u/5/d/1INqjanGTz29xChcQt6mAYmcYK9gqiwaNrhbVbe-3jIk"
        aria-label="Work with us"
        target="_blank"
      >
        Careers
      </a>
    </span>

    <span>
      <a
        href="https://codemindberkeley.com/Privacy Policy/v1.pdf"
        aria-label="Code Mind Berkeley's Privacy Policy"
        target="_blank"
      >
        Privacy Policy
      </a>
    </span>

  </section>
</main>

<style>
  #footer {
    position: absolute;
    text-align: center;
    height: auto;
    font-size: 1rem;
    z-index: 4000;
    padding-bottom: 1%;
    position: fixed;
    bottom: 0;
    width: 100%;
    border-radius: 5vh;
    color: white;
  }
  #footer > span {
    margin: 1rem;
  }
</style>
