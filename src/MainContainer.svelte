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

  let mobile: boolean = window.innerWidth <= 800;
</script>

<main>
  <section id="main-container">
    <div class="headings" id="h1">Code Mind Berkeley</div>
    <div id="h2">
      Interdisciplinary CS research with UC Berkeley Professors and Students
    </div>
    
    <div class="VSL">
      <iframe src="https://www.youtube.com/embed/Jvu1RjaY2VQ?si=JkTuw4FMLFz1pwQl" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
    </div>

    <div>
      <button
        on:click={navigateToNewPage}
        class="interactable button button2">Start Here</button
      >
    </div>
  </section>

</main>

<style>
  #main-container {
    position: absolute;
    top: 10%;
    left: 0;
  }
  iframe {
    /* width: min(80vw, 500px); */
    height: 20vh;
    aspect-ratio: 16 / 9;
    border-radius: 1vw;
    z-index: 312423;
    margin-bottom: 1vh;
  }
  button {
    background-color: rgb(56, 54, 54);
    border: none;
    color: white;
    padding: max(1vw, 2vh) max(2vw, 4vh);
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: max(1vw, 2vh);
    margin: max(0.3vw, 0.6vh);
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
