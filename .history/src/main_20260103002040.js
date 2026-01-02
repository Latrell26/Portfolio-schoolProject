import './app.css';
import App from './App.svelte';
import AOS from 'aos';
import 'aos/dist/aos.css';

const app = new App({
  target: document.getElementById('app'),
});

AOS.init();

export default app;
