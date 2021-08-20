import '@pnotify/core/dist/BrightTheme.css';
import './sass/main.scss';
const debounce = require('lodash.debounce');
import fetchCountries from './js/fetchCountries';
import { refs } from './js/refs';


refs.input.addEventListener('input', debounce(e => {
  if (!e.target.value) {
    return 
  }
  refs.countriesList.innerHTML = '';
  fetchCountries(e)
  }, 500))

