<script lang="ts">
  import { onMount } from "svelte";
  import { gsap } from "gsap";

  //@ts-ignore
  import Fa from "svelte-fa/src/fa.svelte";
  import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";
  import { faChevronRight } from "@fortawesome/free-solid-svg-icons";

  let activeIndex: number | null = null;
  let faqContainer: HTMLElement;
  let containerHeight: number;

  let accordionItems = [
    { title: "How much does the program cost?", content: "The cost will be revealed once attending the first informational webinar." },
    { title: "How do I pay?", content: "You will receive a link to the payment also during the informational webinar." },
    { title: "Question 3", content: "Consectetur adipiscing elit..." },
    { title: "Is this program officially associated with UC Berkeley?", content: "No, Code Mind Berkeley is simply a service provided by UC Berkeley Students and Professors but we are not officially associated with the university." },
  ];

  function toggleItem(index: number | null) {
    let mainContainerTimeline = gsap.timeline();

    mainContainerTimeline.set("#allEncapsulating", {
        transformStyle: "preserve-3d",
        transformPerspective: 1000,
    })
    // First animation: scale down
    mainContainerTimeline.to("#allEncapsulating", {
      duration: 0.5,
      scaleX: -1,
      opacity: 0,
      onComplete: () => {
        activeIndex = activeIndex === index ? null : index;

        // Second animation: scale back up, after updating activeIndex
        gsap.to("#allEncapsulating", {
          duration: 0.5,
          opacity: 1,
          scaleX: 1,
        });
      },
    });
  }

  onMount(() => {
    // GSAP animation for MainContainer
    let mainContainerTimeline = gsap.timeline();
    containerHeight = faqContainer.clientHeight - 63; // 246 to remove title shifting
    mainContainerTimeline.from("#faq-container", {
      opacity: 0,
      duration: 1,
      y: -20,
    });
  });
</script>

<main>
  <div id="faq-title" class="headings">Frequently Asked Questions</div>
  <section id="faq-container" bind:this={faqContainer}>
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
                <Fa id="interactable" icon={faChevronLeft} />
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
                <Fa id="interactable" icon={faChevronRight} />
              </div>
            </div>
          </div>
        {/if}
      {/each}
    </div>
  </section>
</main>

<style>
  #faq-container {
    overflow: hidden !important;
    height: 40% !important;
  }
  .accordion-item {
    border: 1px solid #ccc;
    margin: 10px;
    padding: 30px;
    cursor: pointer;
    overflow: hidden;
    transition: all 200ms ease;
    max-width: 40rem;
    margin: auto auto;
    text-align: left;

    &:hover {
      border-radius: 50px;
      background-color: rgba(255, 255, 255, 0.1);
    }
  }

  .title {
    font-weight: bold;
    font-size: 1.5em; /* Larger font size */
    text-shadow: rgb(190, 190, 190) 1px 0 10px;
    padding: 10px;
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
</style>
