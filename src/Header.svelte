<script lang="ts">
    import { accumulatedDeltaYScroll, currentIndex } from "./main"
    let scrollIndex: number;

    const scrollAmount = {
        "Home": 0,
        "Mission": 1,
        "Timeline": 2,
        "Team": 3,
        "FAQ": 4,
    }
    const handleClick = (e: Event) => {
        let target = e.target;
        $currentIndex = scrollAmount[target.id.split("-")[0]]; // this is giving errors... idk why but it works
        $accumulatedDeltaYScroll = (100 / 4.09) * ($currentIndex);
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
        font-size: 1.2rem;
        overflow: hidden;
        position: absolute;
        z-index: 2934123;
        height: 40px;
        min-width: 25%;
        left: 50%;
        transform: translateX(-50%);
        display: flex;
        justify-content: space-evenly;
        align-items: center;
        padding: 10px;

        button {
            padding: 0;
            margin: 0;
            background-color: transparent;
            padding: 10px 20px;
            border-radius: 12px;
            transition: all 222ms ease;

            &:hover {
                background: rgba(255, 255, 255, 0.1);
                cursor: pointer;

            }
        }
    }
</style>