<script lang="ts">
  //@ts-ignore
  import Fa from "svelte-fa/src/fa.svelte";
  import { faHandshake } from "@fortawesome/free-solid-svg-icons";
  export let steps = [{ index: 0, step: "", image: faHandshake, text: "" }];
  export let currentStepIndex = 0;
</script>

<div class="timeline-toprow">
  {#each steps as step}
    <div class="timeline-steps">{step.step}</div>
  {/each}
</div>
<div class="timeline-line"></div>
<div class="timeline-midrow">
  {#each steps as step}
    <div
      id="interactable {step.index}"
      class="timeline-circle {currentStepIndex === step.index ? 'active' : ''}"
    >
      <Fa
        id="interactable {step.index}"
        color={currentStepIndex === step.index ? "#9a9ce9" : "white"}
        size="1x"
        translateY={0.5}
        icon={step.image}
      />
    </div>
  {/each}
</div>
<div class="timeline-bottomrow">
  {#each steps as step}
    <div class="timeline-text">
      <div class="timeline-subhead">{step.text}</div>
    </div>
  {/each}
</div>

<style lang="scss">
  /* PAGE 1 TIMELINE - HORIZONTAL (DESKTOP/TABLET) */

  $spacing: 15%;
  $spacingTwo: 15%;

  .timeline-toprow {
    display: flex;
    flex-direction: row;
    margin-right: $spacing;
    margin-left: $spacing;
    margin-top: 50px;
    margin-bottom: 20px;
  }

  .timeline-steps {
    display: flex;
    justify-content: center;
    margin: auto;
    margin-top: 10px;
    font-family: "Montserrat", sans-serif;
    font-size: 18px;
    font-weight: 600;
  }

  .timeline-midrow {
    display: flex;
    flex-direction: row;
    margin-right: $spacing;
    margin-left: $spacing;
  }

  .timeline-line {
    display: block;
    position: absolute;
    width: 56.5%;
    left: 21%;
    height: 5px;
    background-color: #a1b9ed;
    margin-top: 15px;
    // margin-left: $spacingTwo;
    // margin-right: $spacingTwo;
  }

  .timeline-circle {
    background-color: #9a9ce9;
    border: 1px solid #9a9ce9;
    border-radius: 50%;
    width: 35px;
    height: 35px;
    margin: auto;
    z-index: 1;
  }

  .active {
    background-color: white;
  }

  .timeline-circle img {
    margin: 6px;
    width: 20px;
    height: 20px;
  }

  .timeline-bottomrow {
    display: flex;
    flex-direction: row;
    margin-right: $spacing;
    margin-left: $spacing;
  }

  .timeline-text {
    margin: auto;
    font-family: "Montserrat", sans-serif;
    width: 27%;
    margin-top: 10px;
  }

  .timeline-subhead {
    display: flex;
    justify-content: center;
    font-family: "Karla", sans-serif;
    font-size: 22px;
    font-weight: 500;
  }

  .timeline-body {
    display: flex;
    justify-content: center;
    font-family: "Karla", sans-serif;
    font-size: 18px;
    font-weight: 400;
    margin-top: 10px;
  }
</style>
