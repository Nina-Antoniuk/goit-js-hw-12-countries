export const cardTemplate = function (country) {
  return `<li class="country-card">
    <div class="country-card__content">
      <h2>Country: ${country.name}</h2>
      <p><b>Capital</b>: ${country.capital}</p>
      <p><b>Population</b>: ${country.population}</p>
      <p><b>Languages</b>:</p>
      <ul>
          ${country.languages.map(language => {
            return `<li>${language.name}</li>`
          }).join(' ')}
      </ul>
    </div>
    <div class="country-card__flag-wrapper">
      <img class="img" src="${country.flag}" alt="flag">
    </div>
  </li>`
}

export const listItem = function (country) {
  return `<li class="countries-list__item">${country.name}</li>`
}