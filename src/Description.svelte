<script lang="ts">
  import { onDestroy, onMount } from "svelte";
  // @ts-ignore
  import { gsap } from "gsap";
  import Timeline from "./Timeline.svelte";

  import { faHandshake } from "@fortawesome/free-solid-svg-icons";
  import { faRightToBracket } from "@fortawesome/free-solid-svg-icons";
  import { faPenToSquare } from "@fortawesome/free-solid-svg-icons";
  import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
  import { faPersonChalkboard } from "@fortawesome/free-solid-svg-icons";

  let steps = [
    {
      index: 0,
      step: "12/12",
      image: faHandshake,
      text: "Informational Webinar",
      disc: "All propsective applicants begin by attending a 1 hour webinar through Zoom where you'll meet the team and learn more about the services we offer. During this meeting, you will receive a link to the payment link and ",
    },
    {
      index: 1,
      step: "12/12",
      image: faRightToBracket,
      text: "Onboarding",
      disc: "After payment, you'll have one week to complete questions regarding your programming experience, academic interests, and time commitment. During this time, you'll have orientation meetings and reading assignments to prepare for the research project.",
    },
    {
      index: 2,
      step: "02/04/2024",
      image: faPenToSquare,
      text: "Project Assignments",
      disc: "On February 4, 2024, you will receive an email about your research project assignment and team members. Research projects will officially begin the following day.",
    },
    {
      index: 3,
      step: "12/12",
      image: faMagnifyingGlass,
      text: "Midpoint Evaluation",
      disc: "idk lol",
    },
    {
      index: 4,
      step: "05/25/24",
      image: faPersonChalkboard,
      text: "Projects Symposium",
      disc: "At the end of the term on May 25, 2024, ",
    },
  ];

  let currentStepIndex = 0;
  let interval: number | undefined;
  let currentProgress: number = 0;
  let isHovering = false;

  onMount(() => {
    // GSAP animation for MainContainer
    let mainContainerTimeline = gsap.timeline();

    mainContainerTimeline.from("#disc-container", {
      opacity: 0,
      duration: 1,
      y: -20,
    });

    interval = setInterval(() => {
      if (!isHovering) {
        currentStepIndex = (currentStepIndex + 1) % steps.length;
        handleProgress();
      }
    }, 5000);
  });

  function handleMouseEnter(event: any) {
    // Pause the iteration
    isHovering = true;

    // Check if the id contains 'interactable'
    if (event.target.id.includes("interactable")) {
      // Extract the number from the id
      const idParts = event.target.id.match(/interactable (\d+)/);
      if (idParts && idParts.length > 1) {
        // Set currentStepIndex to the extracted number
        currentStepIndex = parseInt(idParts[1], 10);
      }
    }
  }

  function handleMouseLeave() {
    // Resume the iteration
    isHovering = false;
  }
  onDestroy(() => {
    // Clear the interval when the component is destroyed
    if (interval) {
      clearInterval(interval);
    }
  });

  $: if (typeof currentStepIndex !== "undefined") {
    // Fade in animation for #stepDisc
    gsap.set("#stepDisc", { opacity: 0 });

    // Fade in animation for #stepDisc
    gsap.to("#stepDisc", { opacity: 1, duration: 1 });
  }

  function handleProgress() {
    currentProgress = (currentStepIndex / (steps.length)) * 72;
  }
</script>

<main>
  <section id="disc-container">
    <!-- svelte-ignore a11y-no-static-element-interactions -->
    <div
      id="timeline-container"
      on:mouseover={handleMouseEnter}
      on:focus
      on:mousemove={handleProgress}
      on:mouseleave={handleMouseLeave}
    >
      <Timeline {steps} {currentStepIndex} {currentProgress}/>
    </div>
    <div id="stepDisc">{steps[currentStepIndex].disc}</div>
  </section>
</main>

<style lang="scss">
  $sidePadding: 15%;
  main {
    width: 100%;
  }
  #stepDisc {
    font-size: 36px;
    width: 68%;
    height: 30vh;
    text-align: left;
    margin-top: 2%;
    margin-left: auto;
    margin-right: auto;
  }
</style>
