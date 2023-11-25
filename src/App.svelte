<script>
  import { Router, Route, Link } from "svelte-routing";
  import Application from "./Application.svelte";
  import Home from "./Home.svelte";
  // Import other pages as needed
</script>

<Router>
  <Route path="/" component={Home} />
  <Route path="/application" component={Application} />
</Router>
