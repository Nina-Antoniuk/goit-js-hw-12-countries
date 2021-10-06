export const cardTemplate = function (country) {
  return `<li class="country-card">
    <div class="country-card__content">
      <h2>Country: ${country.name.common}</h2>
      <p><b>Capital</b>: ${country.capital.map(capital => capital).join(' ')}</p>
      <p><b>Population</b>: ${country.population}</p>
      <p><b>Languages</b>: ${country.languages.ell}</p>
    </div>
    <div class="country-card__flag-wrapper">
      <img class="img" src="${country.flags.png}" alt="flag">
    </div>
  </li>`
}

export const listItem = function (country) {
  return `<li class="countries-list__item">${country.name.common}</li>`
}