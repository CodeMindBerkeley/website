<script lang="ts">
  export let modalText = "";
</script>

<!-- svelte-ignore a11y-no-static-element-interactions -->
<div class="background" on:click|self on:keyup>
  <div class="modal" on:click|self on:keyup>
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
