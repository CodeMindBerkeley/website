<script lang="ts">
    import { accumulatedDeltaYScroll, currentIndex } from "./main"
    let scrollIndex: number;

    const scrollAmount = {
        "Home": 0,
        "Mission": 1,
        "Timeline": 2,
        "Team": 3,
    }
    const handleClick = (e: Event) => {
        let target = e.target;
        // @ts-ignore
        $currentIndex = scrollAmount[target.id.split("-")[0]]; // this is giving errors... idk why but it works
        $accumulatedDeltaYScroll = (100 / 3.09) * ($currentIndex); // 100 / 4.09
    }
</script>

<main>
    <div id="header-container">

        {#each Object.keys(scrollAmount) as id}
            <button id="{id}-button" on:click={(e) => handleClick(e)}>
                {id}
            </button>
        {/each}

    </div>
</main>

<style lang="scss">
    #header-container {
        overflow: hidden;
        position: absolute;
        z-index: 2934123;
        height: 3vh;
        min-width: 25%;
        top: 0;
        left: 50%;
        transform: translateX(-50%);
        display: flex;
        justify-content: space-evenly;
        align-items: center;
        padding: max(0.5vw, 1vh) 0 max(0.5vw, 1vh) 0;

        button {
            padding: 0;
            margin: 0;
            background-color: transparent;
            padding: max(0.4vw, 0.8vh) max(0.8vw, 1.6vh);
            border-radius: 0.5vw;
            transition: all 222ms ease;
            font-size: max(0.8vw, 1.6vh);

            &:hover {
                background: rgba(255, 255, 255, 0.1);
                cursor: pointer;
            }
        }
    }
</style>