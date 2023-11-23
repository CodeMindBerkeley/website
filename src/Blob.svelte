<script lang="ts">
  import { onMount } from "svelte";

  onMount(() => {
    const blob = document.getElementById("blob");

    // Blob animation
    window.onpointermove = (event: PointerEvent) => {
      let size = "240px";
      const { clientX, clientY } = event;
      // @ts-ignore
      if (event.target && event.target.id) {
        // @ts-ignore
        if (event.target.id == "interactable") {
          size = "0px";
        } else {
          size = "240px";
        }
      }
      // @ts-ignore
      blob.animate(
        {
          left: `${clientX}px`,
          top: `${clientY + window.scrollY}px`,
          height: size,
          width: size,
        },
        { duration: 2000, fill: "forwards" }
      );
    };
  });
</script>

<main>
  <div id="blob"></div>
</main>

<style lang="scss">
  #blob {
    background-color: white;
    height: 240px;
    width: 240px;
    border-radius: 50%;
    position: absolute;
    left: 50%;
    top: 50%;
    translate: -50% -50%;
    background: linear-gradient(to right, aquamarine, mediumpurple);
    animation: rotate 20s infinite;
    opacity: 0.2;
    transition:
      opacity 500ms,
      width 500ms,
      height 500ms;
  }
</style>
