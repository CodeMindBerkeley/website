<script lang="ts">
  // @ts-ignore
  import { Router, Route, Link } from "svelte-routing";
  import Home from "./Home.svelte";
  // Import other pages as needed

</script>

<Router>
  <Route path="/" component={Home} />
</Router>
