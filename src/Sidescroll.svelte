<script>
  //@ts-ignore
  export let members = [{ id: "", title: "", status: "", image: "", disc: "" }];
  export let rows = 0;
  export let columns = 0;

  $: console.log(columns, rows);
  $: () => {
    console.log(columns, rows);
  };

  //@ts-ignore
  import Fa from "svelte-fa/src/fa.svelte";
  import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
  import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";
  import { createEventDispatcher } from "svelte";
  import { onMount } from "svelte";

  const dispatch = createEventDispatcher();

  /**
   * @param {number} items
   * @param {number} columns
   * @param {number} rows
   */

  function paginateItems(items, columns, rows) {
    let itemsPerPage = columns * rows;
    let pages = [];

    while (items > 0) {
      if (items >= itemsPerPage) {
        pages.push(itemsPerPage);
        items -= itemsPerPage;
      } else {
        pages.push(items);
        break;
      }
    }

    return pages;
  }

  //@ts-ignore
  function distributeContent(pages, content) {
    let perPage = [];
    let currentIndex = 0;

    for (let i = 0; i < pages.length; i++) {
      let pageContent = [];
      for (let j = 0; j < pages[i]; j++) {
        if (currentIndex < content.length) {
          pageContent.push(content[currentIndex]);
          currentIndex++;
        }
      }
      perPage.push(pageContent);
    }

    return perPage;
  }

  let pagesCalc = distributeContent(
    paginateItems(members.length, columns, rows),
    members
  );

  let currentIndex = 0;
  let movement = [false, false];

  function updateMovement() {
    movement[0] = currentIndex > 0;
    movement[1] = currentIndex < pagesCalc.length - 1;
  }

  function moveRight() {
    if (movement[1]) {
      currentIndex++;
      dispatch("pageItems", {
        calcPages: pagesCalc[currentIndex],
        direction: +20,
      });
      updateMovement();
    }
  }

  function moveLeft() {
    if (movement[0]) {
      currentIndex--;
      dispatch("pageItems", {
        calcPages: pagesCalc[currentIndex],
        direction: -20,
      });
      updateMovement();
    }
  }

  onMount(() => {
    updateMovement();
    dispatch("pageItems", { calcPages: pagesCalc[currentIndex], direction: 0 });
  });
</script>

<div class="arrow-container">
  <!-- svelte-ignore a11y-click-events-have-key-events -->
  <!-- svelte-ignore a11y-no-static-element-interactions -->
  <div class="nav interactable" on:click={moveLeft}>
    {#if movement[0]}
      <Fa size="3x" id="interactable" class="arrow-icon" icon={faChevronLeft} />
    {/if}
  </div>

  <slot />
  <!-- svelte-ignore a11y-click-events-have-key-events -->
  <!-- svelte-ignore a11y-no-static-element-interactions -->
  <div class="nav interactable" on:click={moveRight}>
    {#if movement[1]}
      <Fa size="3x" class="arrow-icon interactable" icon={faChevronRight} />
    {/if}
  </div>
</div>

<style>
  .arrow-container {
    display: flex;
    align-items: center;
    margin-bottom: 40%;
  }
  .nav {
    display: flex;
    height: 100%;
    justify-content: center;
    cursor: pointer;
  }
</style>
