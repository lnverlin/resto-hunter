import 'regenerator-runtime';
import 'lazysizes';
import 'lazysizes/plugins/parent-fit/ls.parent-fit';
import App from './views/app';
import swRegister from './utils/sw-register';
import '../styles/style.css';
import '../styles/responsive.css';
import '../styles/restaurant.css';
import '../styles/detail.css';
import './views/custom_element/app-bar';
import './views/custom_element/loader';
import './views/custom_element/error';
import './views/custom_element/hero';
import './views/custom_element/restaurant-list';
import './views/custom_element/footer';

const app = new App({
  button: document.querySelector('.hamburger'),
  drawer: document.querySelector('nav ul'),
  content: document.querySelector('#mainContent'),
});

window.addEventListener('hashchange', () => {
  app.renderPage();
});

window.addEventListener('load', () => {
  app.renderPage();
  swRegister();
});
