<script lang="ts">
  import { onDestroy, onMount } from "svelte";
  // @ts-ignore
  import { gsap } from "gsap";
  import { createEventDispatcher } from "svelte";

  import Sidescroll from "./Sidescroll.svelte";

  import MH from "./assets/img/MH.jpg";
  import GN from "./assets/img/GN.jpg";
  import AB from "./assets/img/AB.jpg";
  import BM from "./assets/img/BM.jpg";
  import SR from "./assets/img/SR.jpg";
  import SRA from "./assets/img/SRA.jpg";
  import JA from "./assets/img/JA.jpg";
  import JM from "./assets/img/JM.jpg";
  import RJ from "./assets/img/RJ.jpg";

  const dispatch = createEventDispatcher();

  let w = 0;
  $: rows = w < 340 ? 2 : 4;
  $: columns = w < 340 ? 1 : 3;

  let modulatedMembers = [
    { id: "", title: "", status: "", image: "", disc: "" },
  ];
  let members = [
    {
      id: "0",
      title: "Prof. Mohamad Hallal",
      status: "Professor",
      image: MH,
      disc: "Mohamad Hallal is an Assistant Teaching Professor of Civil and Environmental Engineering at UC Berkeley specializing in data science and computation in the context of civil and environmental engineering. As the civil and environmental engineering field undergoes a revolution fueled by the proliferation of data, Hallal aims to equip rising civil and environmental engineers with state-of-the-art data science and computation skills to address the most significant societal-scale challenges. \n \n As a geotechnical engineering researcher and geostatistics enthusiast, Hallal's research focuses on integrating multidisciplinary tools to develop holistic methods spanning subsurface imaging and applications in natural hazards engineering with high societal impact.",
    },
    {
      id: "1",
      title: "Prof. Satish Rao",
      status: "Advisor",
      image: SR,
      disc: "Satish B. Rao is a distinguished American computer scientist and a professor at the University of California, Berkeley. He completed his PhD at the Massachusetts Institute of Technology in 1989 and joined UC Berkeley in 1999. Renowned for his contributions in computational biology, graph partitioning, and the maximum flow problem, Rao's work significantly advances the field of computer science. He is an ACM Fellow (2013) and a recipient of the prestigious Fulkerson Prize (2012), alongside colleagues, for improving the approximation ratio for graph separators. With over 100 publications, Rao's influential research spans a variety of areas within computer science.",
    },
    {
      id: "2",
      title: "Genesis Nguyen",
      status: "CEO",
      image: GN,
      disc: "Leveraging my experience in biotechnology and chemical engineering at Stanford with infrastructure development, Notion, and Python to scale and optimize WCMM, West Coast Media Management, Code Mind Berkeley, & SubHub. \n \n CEO & Cofounder at CodeMind Berkeley \n \n CMO & Cofounder at SubHub \n \n CMO at WCMM \n \n ML/Scientific Researcher at the Cochran Lab, Stanford",
    },
    {
      id: "3",
      title: "Blake Martin",
      status: "CMO",
      image: BM,
      disc: "CEO & Cofounder at SubHub \n \n CEO & CoFounder at WCMM \n \n CEO & Founder at FinoVino \n \n Marin County, California \n \n I became obsessed at a young age within the R&D marketing world. Curiosity has always been the fuel to my fire of testing new methods and measuring alternative strategies with KPI's. \n \n Approaching a decade of experience in sales and marketing, I have honed my skills in lead generation, customer acquisition, and retention strategies. I specialize in helping businesses increase their online presence, drive traffic to their websites, and convert leads into customers.",
    },
  ];

  onMount(() => {
    // GSAP animation for MainContainer
    let mainContainerTimeline = gsap.timeline();

    mainContainerTimeline.from("#about-container", {
      opacity: 0,
      duration: 1,
      y: -20,
    });
  });

  //@ts-ignore
  function handleTilt(event) {
    const card = event.currentTarget;
    //console.log(card);
    const { left, top, width, height } = card.getBoundingClientRect();
    const mouseX = event.clientX - left;
    const mouseY = event.clientY - top;
    const rotateX = (0.5 - mouseY / height) * 20;
    const rotateY = (mouseX / width - 0.5) * 20;

    card.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
  }

  //@ts-ignore
  function resetTilt(event) {
    const card = event.currentTarget;
    card.style.transition = "all 100ms ease";
    card.style.transform = "rotateX(0deg) rotateY(0deg)";
  }

  //@ts-ignore
  function spawnModal(event) {
    console.log(event.currentTarget);
    let member = members.find((member) =>
      `${event.currentTarget.id.toString()}`.includes(member.id)
    );
    dispatch("displayModal", {
      modalText: member?.disc,
      modalName: `${member?.title} - ${member?.status}`,
    });
  }
</script>

<main>
  <div bind:clientWidth={w}></div>

  <div id="team-title" class="headings">Meet the Team</div>
  <section id="about-container">
    <Sidescroll
      {members}
      {rows}
      {columns}
      on:pageItems={(e) => {
        console.log(e.detail.calcPages);
        modulatedMembers = e.detail.calcPages;
        let direction = e.detail.direction;

        //left or right depending on if pressed right or left
        let mainContainerTimeline = gsap.timeline();
        mainContainerTimeline.from("#team-container", {
          opacity: 0,
          duration: 1,
          x: direction,
        });
      }}
    >
      <section class="team-container" id="team-container">
        <div
          class="team-bios"
          id="team-bios"
          style="grid-template-columns: {Array(columns)
            .fill('auto')
            .join(' ')};"
        >
          {#each modulatedMembers as member}
            <!-- svelte-ignore a11y-no-static-element-interactions -->
            <!-- svelte-ignore a11y-click-events-have-key-events -->
            <div
              id={member.id}
              class="gradientBorder"
              on:mousemove={handleTilt}
              on:mouseleave={resetTilt}
              on:click={spawnModal}
            >
              <div
                class="card {member.status} interactable"
                style="background-image: url({member.image});"
              >
                <h6>{member.title}</h6>
              </div>
            </div>
          {/each}
        </div>
      </section>
    </Sidescroll>
  </section>
</main>

<style lang="scss">
  #about-container {
    height: auto;
    margin: 0;
    padding: 0;
  }
  #team-title {
    padding-top: calc(50% - 3rem);
    margin-bottom: 0;
  }
  .team-bios {
    display: grid;
    align-items: center;
    gap: max(1vw, 2vh);
    max-width: 100%;
    padding: max(2vw, 4vh);
    padding-bottom: max(5vw, 10vh);
    perspective: 2000px;
  }

  .description {
    position: absolute;
    text-align: left;
    align-items: center;
    right: 0%;
    width: 70%;
    visibility: hidden;
    opacity: 0;
  }

  .card {
    background-color: #ffffff1a;
    border-radius: max(1vw, 2vh);
    cursor: pointer;
    display: flex;
    flex-direction: column;
    position: relative;
    width: max(15vw, 30vh);
    aspect-ratio: 1 / 1;
    /* z-index: 200; */
    z-index: 400;
    font-size: max(1vw, 2vh) !important;
    transition: transform 0.3s; /* Smooth transition for the transform */
    transform-style: preserve-3d;
    background-size: cover;
  }
  .gradientBorder {
    display: flex;
    align-items: center;
    border-radius: max(1vw, 2vh);
    overflow: hidden;
    padding: max(0.25vw, 0.5vh);
  }

  .gradientBorder:hover {
    padding: max(0.25vw, 0.5vh);
    background: linear-gradient(to right, aquamarine, mediumpurple);
    transition: all 100ms ease;
  }

  .gradientBorder:not(:hover) {
    transition: all 100ms ease;
  }

  .card > h6 {
    position: absolute;
    bottom: 0;
    margin-bottom: 0;
    width: 100%;
    align-items: center;
    font-size: max(1.5vw, 3vh);
    font-weight: bold;
    backdrop-filter: blur(0.1vmax);
  }
</style>
