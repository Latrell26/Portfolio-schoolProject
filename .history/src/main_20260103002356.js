// src/main.js
import './app.css';          // Tailwind CSS
import App from './App.svelte';
import AOS from 'aos';
import 'aos/dist/aos.css';

const app = new App({
  target: document.getElementById('app')  // make sure this exists sa index.html
});

AOS.init();  // initialize AOS after app mounts

export default app;
