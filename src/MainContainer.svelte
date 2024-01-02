<script lang="ts">
  import { onMount } from "svelte";
  // @ts-ignore
  import { gsap } from "gsap";
  // @ts-ignore
  import { navigate } from "svelte-routing";
  import Thumbnail from "./assets/img/Code Mind VSL Thumbnail.png";

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

  function playVideo(e: any) {
    e.target.nextElementSibling.style.display="block";
    e.target.style.display = "none";

    // var ifrm = document.createElement("iframe");
    // ifrm.id="iframeFORSURE"
    // ifrm.setAttribute("src", "https://www.youtube.com/embed/Jvu1RjaY2VQ?autoplay=1");
    // ifrm.title="Youtube video player";
    // ifrm.setAttribute("class", "stuff");
    // document.getElementById("iframeVideo")?.appendChild(ifrm);
  }

  let mobile: boolean = window.innerWidth <= 800;
</script>

<main>
  <section id="main-container">
    <div class="headings" id="h1">Code Mind Berkeley</div>
    <div id="h2">
      Interdisciplinary CS research with UC Berkeley Professors and Students
    </div>
    
    <div class="VSL">
      <div class="stuff" id="thumbnailPreview" on:click={playVideo}></div>

        <!-- <img class="stuff" alt="Thumbnail for Code Mind Berkeley Introduction video" src="{Thumbnail}" style="cursor:pointer" /> -->
      <iframe style="display: none;" class="stuff" src="https://www.youtube.com/embed/Jvu1RjaY2VQ?autoplay=1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
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
  #thumbnailPreview {
    background-image: url("./assets/img/Code Mind VSL Thumbnail.png");
    background-size: cover;
    cursor: pointer;
  }
  #main-container {
    position: absolute;
    top: 15%;
    left: 0;
  }
  .stuff {
    /* width: min(80vw, 500px); */
    height: 20vh;
    aspect-ratio: 16 / 9;
    border-radius: 1vw;
    z-index: 312423;
    margin: max(1vw, 2vh) auto 1vh auto;
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
    margin-top: max(1vw, 2vh) !important;
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
