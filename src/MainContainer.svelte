<script lang="ts">
  import { onMount } from "svelte";
  // @ts-ignore
  import { gsap } from "gsap";
  // @ts-ignore
  import { navigate } from "svelte-routing";

  function navigateToNewPage() {
    window.open("https://calendly.com/nguyengenesis10/berkeley-students-mentorship-program-webinar", "_blank")
  }

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
    <div class="headings" id="h1">Code Mind Berkeley</div>
    <div id="h2">
      Interdisciplinary CS research with UC Berkeley Professors and Students
    </div>
    <button
      on:click={navigateToNewPage}
      class="interactable button button2">Start Here</button
    >
  </section>
</main>

<style>
  .button {
    background-color: rgb(56, 54, 54);
    border: none;
    color: white;
    padding: 15px 32px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 16px;
    margin: 4px 2px;
    cursor: pointer;
    -webkit-transition-duration: 0.4s; /* Safari */
    transition-duration: 0.4s;
  }

  .button:hover {
    background-color: white;
    background: linear-gradient(to right, aquamarine, mediumpurple);
    color: rgb(56, 54, 54);
  }
</style>
