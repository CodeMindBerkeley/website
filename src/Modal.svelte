<script lang="ts">
  import { onDestroy, onMount } from "svelte";
  import { gsap } from "gsap";
  import { createEventDispatcher } from "svelte";
  export let modalText = "";

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
    <p id="h5">{modalText}</p>
  </div>
</div>

<style>
  .background {
    width: 100%;
    height: 100%;
    position: fixed;
    background: rgba(0, 0, 0, 0.8);
  }
  .modal {
    padding: 10px;
    border-radius: 10px;
    max-width: 50%;
    margin: 10% auto;
    text-align: left;
    background: rgba(0, 0, 0, 0);
  }
</style>
