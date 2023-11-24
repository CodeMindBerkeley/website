<script lang="ts">
  import { onDestroy, onMount } from "svelte";
  // @ts-ignore
  import { gsap } from "gsap";
  import Timeline from "./Timeline.svelte";

  import { faHandshake } from "@fortawesome/free-solid-svg-icons";
  import { faClock } from "@fortawesome/free-solid-svg-icons";
  import { faPenToSquare } from "@fortawesome/free-solid-svg-icons";
  import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
  import { faPersonChalkboard } from "@fortawesome/free-solid-svg-icons";

  let steps = [
    {
      index: 0,
      step: "12/12",
      image: faHandshake,
      text: "Informational Webinar",
      disc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Purus semper eget duis at. Nec dui nunc mattis",
    },
    {
      index: 1,
      step: "12/12",
      image: faClock,
      text: "Enrollment Ends",
      disc: "Eget nullam non nisi est. Tortor at auctor urna nunc id cursus metus. Purus semper eget duis at tellus at. Eget nullam non nisi est. Tortor at auctor urna nunc id cursus",
    },
    {
      index: 2,
      step: "12/12",
      image: faPenToSquare,
      text: "Projects Begin",
      disc: "Lectus proin nibh nisl condimentum id venenatis a. Nisi lacus sed viverra tellus in hac. Lacus vestibulum sed arcu non. Amet porttitor eget dolor morbi non arcu risus",
    },
    {
      index: 3,
      step: "12/12",
      image: faMagnifyingGlass,
      text: "Midpoint Evaluation",
      disc: "Maecenas pharetra convallis posuere morbi leo urna. Pharetra massa massa ultricies mi. Maecenas pharetra convallis posuere morbi leo urna. Pharetra massa massa ultricies mi.",
    },
    {
      index: 4,
      step: "12/12",
      image: faPersonChalkboard,
      text: "Projects End",
      disc: "Adipiscing enim eu turpis egestas pretium aenean pharetra magna. Netus et malesuada fames ac turpis. Netus et malesuada fames ac turpis. Netus et malesuada fames ac turpis.",
    },
  ];

  let currentStepIndex = 0;
  let interval: number | undefined;
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
      }
    }, 5000);
  });

  function handleMouseEnter(event) {
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
</script>

<main>
  <section id="disc-container">
    <!-- svelte-ignore a11y-no-static-element-interactions -->
    <div
      id="timeline-container"
      on:mouseover={handleMouseEnter}
      on:focus
      on:mouseleave={handleMouseLeave}
    >
      <Timeline {steps} {currentStepIndex} />
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
    text-align: left;
    margin-top: 2%;
    margin-left: auto;
    margin-right: auto;
  }
</style>
