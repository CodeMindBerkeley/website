import './app.css'
import App from './App.svelte'
import { writable } from "svelte/store"

export const currentIndex = writable(0); // this is so the Header can also access the scroll position
export const accumulatedDeltaYScroll = writable(0); // this is so the Header can also access the scroll position

const app = new App({
  // @ts-ignore
  target: document.getElementById('app'),
})

export default app
