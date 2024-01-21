<script lang="ts">
  import { onDestroy, onMount } from "svelte";
  import { gsap } from "gsap";
  // @ts-ignore
  import Fa from "svelte-fa/src/fa.svelte";
  import { createEventDispatcher } from "svelte";
  import { faClose } from "@fortawesome/free-solid-svg-icons";
  export let modalText = "";
  export let modalName = "";

  const dispatch = createEventDispatcher();

  let removeComponent: () => void;

  onMount(() => {
    // GSAP animation for MainContainer
    let mainContainerTimeline = gsap.timeline();

    mainContainerTimeline.from("#modal-container", {
      opacity: 0,
      duration: 0.1,
    });

    mainContainerTimeline.from(".modal", {
      duration: 0.4,
      scale: 0,
    });
  });

  onDestroy(() => {
    if (removeComponent) {
      removeComponent();
    }
  });

  // Function to start the exit animation
  function startExitAnimation() {
    return new Promise((resolve) => {
      let reverseTimeline = gsap.timeline({
        onComplete: resolve, // Resolve the promise when the animation completes
      });

      reverseTimeline.to(".modal", {
        duration: 0.4,
        scale: 0,
      });

      reverseTimeline.to("#modal-container", {
        opacity: 0,
        duration: 0.1,
      });
    });
  }

  // Call this function to remove the component
  async function removeMyComponent() {
    await startExitAnimation();
    dispatch("click");
    // Code to actually remove the component goes here
  }
</script>

<!-- svelte-ignore a11y-no-static-element-interactions -->
<!-- svelte-ignore a11y-click-events-have-key-events -->
<div id="modal-container" class="background" on:click|self={removeMyComponent}>
  <div class="modal" on:click|self={removeMyComponent} on:keyup>
    <div id="title" class="headings">{modalName}</div>
    <span id="x" on:click={removeMyComponent}>
      <Fa icon={faClose} />
    </span>
    <p id="myFont">{modalText}</p>
  </div>
</div>

<style>
  .background {
    width: 100%;
    height: 100%;
    position: fixed;
    background: rgba(0, 0, 0, 0.2);
    backdrop-filter: blur(1vmax);
  }
  .modal {
    margin-top: 5% !important;
    padding: 10px;
    max-width: 70%;
    max-height: 90%;
    margin: 10% auto;
    text-align: left;
    background: rgba(0, 0, 0, 0);
    border: solid white;
    border-radius: 50px;
    border-width: 1px;
  }
  p {
    font-size: max(2vw, 19px) !important;
    white-space: pre-line;
    text-align: justify !important;
    text-justify: inter-word !important;
  }

  #x {
    position: absolute;
    right: 20px;
    top: 20px;
    font-size: 3rem;
    padding: 10px 20px;
    border-radius: 25px;
    transition: all 300ms ease;
    &:hover {
      background: rgba(255, 255, 255, 0.1);
      cursor: pointer;
    }
  }

  #title {
    text-align: center;
    margin: 0;
  }
</style>
