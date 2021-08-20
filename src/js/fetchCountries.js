const { error } = require('@pnotify/core');
import { cardTemplate, listItem } from './country-tamplate';
import { refs } from './refs';

export default function fetchCountries(e) {
  fetch(`https://restcountries.eu/rest/v2/name/${e.target.value}`).
  then(result => result.json()).
    then((countries) => {
      if (countries.length > 10) {
        error({
          text: "Too many matches found. Please enter a more specific query",
          width: '400px',
          delay: 2000
        });
        return 
      }

      if (countries.length >= 2 && countries.length <= 10) { 
        refs.countriesList.innerHTML = countries.map(country => listItem(country)).join('');
        return
      }

      if (countries.length === 1) {
        const markup = countries.map(country => {
          return cardTemplate(country);
        })
        
      refs.countriesList.insertAdjacentHTML('beforeend', markup)
      }
  })
}
