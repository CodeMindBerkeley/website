<script lang="ts">
  import { onDestroy, onMount } from "svelte";
  // @ts-ignore
  import { gsap } from "gsap";
  import { createEventDispatcher } from "svelte";
  import Sidescroll from "./Sidescroll.svelte";

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
      image: "MH.jpeg",
      disc: "Maecenas pharetra convallis posuere morbi leo urna. Pharetra massa massa ultricies mi. Mattis enim ut tellus elementum sagittis vitae. Est lorem ipsum dolor sit amet consectetur. Volutpat maecenas volutpat blandit aliquam etiam. Malesuada fames ac turpis egestas integer eget aliquet. Amet venenatis urna cursus eget nunc scelerisque viverra. Sit amet risus nullam eget felis eget nunc lobortis.",
    },
    {
      id: "1",
      title: "Prof. Mohamad Hallal",
      status: "professor",
      image: "MH.jpeg",
      disc: "Maecenas pharetra convallis posuere morbi leo urna. Pharetra massa massa ultricies mi. Mattis enim ut tellus elementum sagittis vitae. Est lorem ipsum dolor sit amet consectetur. Volutpat maecenas volutpat blandit aliquam etiam. Malesuada fames ac turpis egestas integer eget aliquet. Amet venenatis urna cursus eget nunc scelerisque viverra. Sit amet risus nullam eget felis eget nunc lobortis.",
    },
    {
      id: "2",
      title: "Prof. Mohamad Hallal",
      status: "professor",
      image: "MH.jpeg",
      disc: "Maecenas pharetra convallis posuere morbi leo urna. Pharetra massa massa ultricies mi. Mattis enim ut tellus elementum sagittis vitae. Est lorem ipsum dolor sit amet consectetur. Volutpat maecenas volutpat blandit aliquam etiam. Malesuada fames ac turpis egestas integer eget aliquet. Amet venenatis urna cursus eget nunc scelerisque viverra. Sit amet risus nullam eget felis eget nunc lobortis.",
    },
    {
      id: "3",
      title: "Prof. Mohamad Hallal",
      status: "professor",
      image: "MH.jpeg",
      disc: "Maecenas pharetra convallis posuere morbi leo urna. Pharetra massa massa ultricies mi. Mattis enim ut tellus elementum sagittis vitae. Est lorem ipsum dolor sit amet consectetur. Volutpat maecenas volutpat blandit aliquam etiam. Malesuada fames ac turpis egestas integer eget aliquet. Amet venenatis urna cursus eget nunc scelerisque viverra. Sit amet risus nullam eget felis eget nunc lobortis.",
    },
    {
      id: "4",
      title: "Prof. Mohamad Hallal",
      status: "professor",
      image: "MH.jpeg",
      disc: "Maecenas pharetra convallis posuere morbi leo urna. Pharetra massa massa ultricies mi. Mattis enim ut tellus elementum sagittis vitae. Est lorem ipsum dolor sit amet consectetur. Volutpat maecenas volutpat blandit aliquam etiam. Malesuada fames ac turpis egestas integer eget aliquet. Amet venenatis urna cursus eget nunc scelerisque viverra. Sit amet risus nullam eget felis eget nunc lobortis.",
    },
    {
      id: "5",
      title: "Prof. Mohamad Hallal",
      status: "professor",
      image: "MH.jpeg",
      disc: "Maecenas pharetra convallis posuere morbi leo urna. Pharetra massa massa ultricies mi. Mattis enim ut tellus elementum sagittis vitae. Est lorem ipsum dolor sit amet consectetur. Volutpat maecenas volutpat blandit aliquam etiam. Malesuada fames ac turpis egestas integer eget aliquet. Amet venenatis urna cursus eget nunc scelerisque viverra. Sit amet risus nullam eget felis eget nunc lobortis.",
    },
    {
      id: "6",
      title: "Prof. Mohamad Hallal",
      status: "professor",
      image: "MH.jpeg",
      disc: "Maecenas pharetra convallis posuere morbi leo urna. Pharetra massa massa ultricies mi. Mattis enim ut tellus elementum sagittis vitae. Est lorem ipsum dolor sit amet consectetur. Volutpat maecenas volutpat blandit aliquam etiam. Malesuada fames ac turpis egestas integer eget aliquet. Amet venenatis urna cursus eget nunc scelerisque viverra. Sit amet risus nullam eget felis eget nunc lobortis.",
    },
    {
      id: "7",
      title: "Prof. Mohamad Hallal",
      status: "professor",
      image: "MH.jpeg",
      disc: "Maecenas pharetra convallis posuere morbi leo urna. Pharetra massa massa ultricies mi. Mattis enim ut tellus elementum sagittis vitae. Est lorem ipsum dolor sit amet consectetur. Volutpat maecenas volutpat blandit aliquam etiam. Malesuada fames ac turpis egestas integer eget aliquet. Amet venenatis urna cursus eget nunc scelerisque viverra. Sit amet risus nullam eget felis eget nunc lobortis.",
    },
    {
      id: "8",
      title: "Prof. Mohamad Hallal",
      status: "professor",
      image: "MH.jpeg",
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
    card.style.transform = "rotateX(0deg) rotateY(0deg)";
  }

  //@ts-ignore
  function spawnModal(event) {
    let member = members.find((member) =>
      ` ${event.currentTarget.className}`.includes(member.id)
    );
    dispatch("displayModal", { modalText: member?.disc });
  }
</script>

<main>
  <section id="about-container">
    <div id="team-title">Meet the Team</div>
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
              id="gradientBorder"
              class={member.id}
              on:mousemove={handleTilt}
              on:mouseleave={resetTilt}
              on:click={spawnModal}
            >
              <div
                id="interactable"
                class="card {member.status}"
                style="background-image: url('src/assets/img/{member.image}');"
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
  //     display: grid;
  //   grid-template-columns: auto auto;
  #team-title {
    position: relative;
    margin-top: 60vh;
    font-size: 54px;
    font-weight: bold;
  }
  .team-bios {
    display: grid;
    grid-template-columns: auto auto auto;
    align-items: center;
    gap: 16px;
    max-width: 948px;
    padding: 24px;
    padding-bottom: 100px;
    perspective: 1000px;
  }

  .description {
    position: absolute;
    text-align: left;
    align-items: center;
    top: 50%;
    transform: translateY(-50%);
    padding: 5%;
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
    aspect-ratio: 9 / 10;
    /* z-index: 200; */
    z-index: 400;
    font-size: 24px;
    transition: transform 0.3s; /* Smooth transition for the transform */
    transform-style: preserve-3d;
    background-size: cover;
  }
  #gradientBorder {
    display: flex;
    align-items: center;
    border-radius: 20px;
    overflow: hidden;
  }
  #gradientBorder:hover {
    padding: 6px;
    background-color: white;
    background: linear-gradient(to right, aquamarine, mediumpurple);
    transition: ease 50ms;
  }

  .card:not(:hover) {
    transition: ease 300ms;
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
