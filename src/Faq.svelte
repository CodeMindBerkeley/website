<script lang="ts">
  import { onMount } from "svelte";
  import { gsap } from "gsap";

  //@ts-ignore
  import Fa from "svelte-fa/src/fa.svelte";
  import { faChevronUp } from "@fortawesome/free-solid-svg-icons";
  import { faChevronDown } from "@fortawesome/free-solid-svg-icons";

  let activeIndex: number | null = null;
  let faqContainer: HTMLElement;
  let containerHeight: number;

  let accordionItems = [
    { title: "Question 1", content: "Lorem ipsum dolor sit amet..." },
    { title: "Question 2", content: "Consectetur adipiscing elit..." },
    { title: "Question 3", content: "Consectetur adipiscing elit..." },
    { title: "Question 4", content: "Consectetur adipiscing elit..." },
  ];

  function toggleItem(index: number | null) {
    let mainContainerTimeline = gsap.timeline();

    // First animation: scale down
    mainContainerTimeline.to("#allEncapsulating", {
      duration: 0.5,
      scaleY: 0,
      onComplete: () => {
        activeIndex = activeIndex === index ? null : index;

        // Second animation: scale back up, after updating activeIndex
        gsap.to("#allEncapsulating", {
          duration: 0.5,
          scaleY: 1, // Scale back to original size
        });
      },
    });
  }

  onMount(() => {
    // GSAP animation for MainContainer
    let mainContainerTimeline = gsap.timeline();
    containerHeight = faqContainer.clientHeight;
    mainContainerTimeline.from("#faq-container", {
      opacity: 0,
      duration: 1,
      y: -20,
    });
  });
</script>

<main>
  <section id="faq-container" bind:this={faqContainer}>
    <div id="h2">Frequently Asked Questions</div>
    <div id="allEncapsulating">
      {#each accordionItems as item, index}
        <!-- svelte-ignore a11y-click-events-have-key-events -->
        <!-- svelte-ignore a11y-no-static-element-interactions -->

        {#if activeIndex === index}
          <div
            id="interactableNowOpened"
            class="accordion-item"
            style="height: {containerHeight}px"
            on:click={() => toggleItem(index)}
          >
            <div id="interactable" class="titleLine">
              <div id="interactable" class="title">{item.title}</div>
              <div class="expand">
                <Fa id="interactable" icon={faChevronUp} />
              </div>
            </div>
            <div id="interactable" class="content">{item.content}</div>
          </div>
        {:else if activeIndex === null}
          <div
            id="interactableNowOpened"
            class="accordion-item"
            on:click={() => toggleItem(index)}
          >
            <div id="interactable" class="titleLine">
              <div id="interactable" class="title">{item.title}</div>
              <div class="expand">
                <Fa id="interactable" icon={faChevronDown} />
              </div>
            </div>
          </div>
        {/if}
      {/each}
    </div>
  </section>
</main>

<style>
  .accordion-item {
    border: 1px solid #ccc;
    margin: 10px;
    padding: 15px;
    cursor: pointer;
    overflow: hidden;
  }

  .title {
    font-weight: bold;
    font-size: 1.2em; /* Larger font size */
  }

  .content {
    padding-top: 20px;
    text-align: left;
    font-size: 20px;
    overflow: hidden; /* Hide overflow when collapsed */
  }
  .titleLine {
    display: flex;
    flex-direction: row;
    justify-content: space-between; /* This will push the title to the left and the expand icon to the right */
    align-items: center; /* This will vertically align the title and expand icon */
  }

  .title {
    font-weight: bold;
  }
</style>
