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
    
    <iframe width="560" height="315" src="https://www.youtube.com/embed/Jvu1RjaY2VQ?si=JkTuw4FMLFz1pwQl" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

    <div style="margin-top: 10%;">
      <button
        on:click={navigateToNewPage}
        class="interactable button button2">Start Here</button
      >
    </div>
  </section>

</main>

<style>
  iframe {
    margin-top: 5%;
    width: 33vw;
    height: 33vh;
    border-radius: 20px;
    z-index: 312423;
  }
  button {
    background-color: rgb(56, 54, 54);
    border: none;
    color: white;
    padding: 20px 40px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 18px;
    margin: 4px 2px;
    cursor: pointer;
    -webkit-transition-duration: 0.4s; /* Safari */
    transition-duration: 0.4s;
  }

  button:hover {
    background-color: white;
    background: linear-gradient(to right, aquamarine, mediumpurple);
    color: rgb(56, 54, 54);
  }
</style>
