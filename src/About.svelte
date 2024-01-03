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

  let rows = 2;
  let columns = 4;

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
      title: "Andrew Boldi",
      status: "CTO",
      image: AB,
      disc: "As Code Mind Berkeley's CTO, Andrew brings technical experience from synthetic organic chemistry, machine learning, computational organic chemistry, statistical physics, quantum mechanics, assembly language, and many others fields. Andrew has worked previously on the total synthesis of molecules at a Caltech chemistry lab and leveraged computational algorithms to accelerate scientific discovery. He's also taken the lead on several CS-based projects such as developing a novel search algorithm for scenic navigation and leveraging deep learning for predicting chemical properties. Andrew has also contributed to open-source computational chemistry libraries, self-driving car libraries, projects exploring the intersection of math, programming, and music, a 3D graphing engine, and an interactive physics simulation. Andrew was also a Program Director for a nonprofit organization for providing STEM workshops to elementary students and another tutoring program where he was a Math Co-Program Leader over 460+ students. In his free time, Andrew plays piano where he's performed at Carnegie Hall, performed at banquets with 400+ people, and won 1st place at multiple national competitions. Andrew is currently studying chemical engineering at UC Berkeley with a minor in Electrical Engineering & Computer Science.",
    },
    {
      id: "4",
      title: "Blake Martin",
      status: "CMO",
      image: BM,
      disc: "CEO & Cofounder at SubHub \n \n CEO & CoFounder at WCMM \n \n CEO & Founder at FinoVino \n \n Marin County, California \n \n I became obsessed at a young age within the R&D marketing world. Curiosity has always been the fuel to my fire of testing new methods and measuring alternative strategies with KPI's. \n \n Approaching a decade of experience in sales and marketing, I have honed my skills in lead generation, customer acquisition, and retention strategies. I specialize in helping businesses increase their online presence, drive traffic to their websites, and convert leads into customers.",
    },
    // {
    //   id: "4",
    //   title: "Syed Rayyan Ali",
    //   status: "",
    //   image: SRA,
    //   disc: "As an environmental engineer, my path is defined by a deep-seated commitment to sustainability and technological innovation. My approach is analytical yet intuitive, leveraging the power of Python to unravel complex, data-driven environmental challenges. \n \n My enthusiasm for technology goes hand-in-hand with my love for personal interactions. I am a firm believer that the seeds of environmental change are sown through genuine, one-on-one conversations that spark collective action. This belief is the cornerstone of my focus on outreach, as I strive to bridge the gap between data-centric solutions and community-based initiatives.",
    // },
    // {
    //   id: "5",
    //   title: "Jude Alexis",
    //   status: "",
    //   image: JA,
    //   disc: "I leverage my unique combination of professional clinical experience, heavy technical exposure, bioscience interests, and a passion for ensuring the human good, to push the bleeding edge of medical progress. I believe in using technology to solve the problems that plague the modern world. In his free time I enjoy reading and playing chess.",
    // },
    // {
    //   id: "6",
    //   title: "James Ma",
    //   status: "",
    //   image: JM,
    //   disc: "I am majoring in Electrical Engineering and Computer Sciences, with a passion for artificial intelligence and hands-on computer science projects. My determination to master Python and C++ and my keen interest in using these languages to solve challenging problems have shaped my coding journey. I'm motivated by the potential of AI to transform industries and everyday life. As I navigate my academic and project-based endeavors, I welcome the collaborative spirit of innovation and the chance to learn from pioneers in the field.",
    // },
    // {
    //   id: "7",
    //   title: "Ronald Ji",
    //   status: "",
    //   image: RJ,
    //   disc: "Maecenas pharetra convallis posuere morbi leo urna. Pharetra massa massa ultricies mi. Mattis enim ut tellus elementum sagittis vitae. Est lorem ipsum dolor sit amet consectetur. Volutpat maecenas volutpat blandit aliquam etiam. Malesuada fames ac turpis egestas integer eget aliquet. Amet venenatis urna cursus eget nunc scelerisque viverra. Sit amet risus nullam eget felis eget nunc lobortis.",
    // },
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
        <div class="team-bios" id="team-bios">
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
    grid-template-columns: auto auto auto;
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
