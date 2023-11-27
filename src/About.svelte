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
  import SRA from "./assets/img/SRA.jpg";
  import JA from "./assets/img/JA.jpg";
  import JM from "./assets/img/JM.jpg";
  import RJ from "./assets/img/RJ.jpg";

  const dispatch = createEventDispatcher();

  let rows = 2;
  let columns = 3;

  let modulatedMembers = [
    { id: "", title: "", status: "", image: "", disc: "" },
  ];
  let members = [
    {
      id: "0",
      title: "Prof. Mohamad Hallal",
      status: "professor",
      image: MH,
      disc: "Mohamad Hallal is an Assistant Teaching Professor of Civil and Environmental Engineering at UC Berkeley specializing in data science and computation in the context of civil and environmental engineering. As the civil and environmental engineering field undergoes a revolution fueled by the proliferation of data, Hallal aims to equip rising civil and environmental engineers with state-of-the-art data science and computation skills to address the most significant societal-scale challenges. \n As a geotechnical engineering researcher and geostatistics enthusiast, Hallal's research focuses on integrating multidisciplinary tools to develop holistic methods spanning subsurface imaging and applications in natural hazards engineering with high societal impact.",
    },
    {
      id: "1",
      title: "Genesis Nguyen",
      status: "",
      image: GN,
      disc: "CEO of CodeMind Berkeley \n CMO at WCMM \n Cofounder at SubHub \n ML / Biotech Engineer at the Cochran Lab Plastics teams",
    },
    {
      id: "2",
      title: "Andrew Boldi",
      status: "",
      image: AB,
      disc: "As Code Mind Berkeley's CTO, Andrew brings technical experience from synthetic organic chemistry, machine learning, computational organic chemistry, statistical physics, quantum mechanics, assembly language, and many others fields. Andrew has worked previously on the total synthesis of molecules at a Caltech chemistry lab and leveraged computational algorithms to accelerate scientific discovery. He's also taken the lead on several CS-based projects such as developing a novel search algorithm for scenic navigation and leveraging deep learning for predicting chemical properties. Andrew has also contributed to open-source computational chemistry libraries, self-driving car libraries, projects exploring the intersection of math, programming, and music, a 3D graphing engine, and an interactive physics simulation. Andrew was also a Program Director for a nonprofit organization for providing STEM workshops to elementary students and another tutoring program where he was a Math Co-Program Leader over 460+ students. In his free time, Andrew plays piano where he's performed at Carnegie Hall, performed at banquets with 400+ people, and won 1st place at multiple national competitions. Andrew is currently studying chemical engineering at UC Berkeley with a minor in Electrical Engineering & Computer Science.",
    },
    {
      id: "3",
      title: "Blake Martin",
      status: "",
      image: BM,
      disc: "",
    },
    {
      id: "4",
      title: "Syed Rayyan Ali",
      status: "",
      image: SRA,
      disc: "As an environmental engineer, my path is defined by a deep-seated commitment to sustainability and technological innovation. My approach is analytical yet intuitive, leveraging the power of Python to unravel complex, data-driven environmental challenges. \n \n My enthusiasm for technology goes hand-in-hand with my love for personal interactions. I am a firm believer that the seeds of environmental change are sown through genuine, one-on-one conversations that spark collective action. This belief is the cornerstone of my focus on outreach, as I strive to bridge the gap between data-centric solutions and community-based initiatives.",
    },
    {
      id: "5",
      title: "Jude Alexis",
      status: "",
      image: JA,
      disc: "I leverage my unique combination of professional clinical experience, heavy technical exposure, bioscience interests, and a passion for ensuring the human good, to push the bleeding edge of medical progress. I believe in using technology to solve the problems that plague the modern world. In his free time I enjoy reading and playing chess.",
    },
    {
      id: "6",
      title: "James Ma",
      status: "",
      image: JM,
      disc: "I am majoring in Electrical Engineering and Computer Sciences, with a passion for artificial intelligence and hands-on computer science projects. My determination to master Python and C++ and my keen interest in using these languages to solve challenging problems have shaped my coding journey. I'm motivated by the potential of AI to transform industries and everyday life. As I navigate my academic and project-based endeavors, I welcome the collaborative spirit of innovation and the chance to learn from pioneers in the field.",
    },
    {
      id: "7",
      title: "Ronald Ji",
      status: "",
      image: RJ,
      disc: "Maecenas pharetra convallis posuere morbi leo urna. Pharetra massa massa ultricies mi. Mattis enim ut tellus elementum sagittis vitae. Est lorem ipsum dolor sit amet consectetur. Volutpat maecenas volutpat blandit aliquam etiam. Malesuada fames ac turpis egestas integer eget aliquet. Amet venenatis urna cursus eget nunc scelerisque viverra. Sit amet risus nullam eget felis eget nunc lobortis.",
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
      modalName: member?.title 
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
              id="{member.id}"
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
  #team-title {
    margin-top: 50%;
    margin-bottom: 0;
  }
  .team-bios {
    display: grid;
    grid-template-columns: auto auto auto;
    align-items: center;
    gap: 16px;
    max-width: 948px;
    padding: 24px;
    padding-bottom: 100px;
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
    background-color: rgba(255, 255, 255, 0.1);
    border-radius: 20px;
    cursor: pointer;
    display: flex;
    flex-direction: column;
    position: relative;
    width: 300px;
    aspect-ratio: 1 / 1;
    /* z-index: 200; */
    z-index: 400;
    font-size: 24px;
    transition: transform 0.3s; /* Smooth transition for the transform */
    transform-style: preserve-3d;
    background-size: cover;
  }
  .gradientBorder {
    display: flex;
    align-items: center;
    border-radius: 20px;
    overflow: hidden;
    padding: 6px;
  }

  .gradientBorder:hover {
    padding: 6px;
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
    font-size: 28px;
    font-weight: bold;
    backdrop-filter: blur(0.1vmax);
  }
</style>
