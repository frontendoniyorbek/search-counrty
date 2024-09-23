const elCountryInput = document.getElementById('country-input');
const elSearchBtn = document.getElementById('search-btn');
const elResult = document.getElementById('result');

elSearchBtn.addEventListener('click', () => {
	const countryName = elCountryInput.value;
	let fullApi = `https://restcountries.com/v3.1/name/${countryName}?fullText=true`;
	fetch(fullApi)
		.then(response => response.json())
		.then(data => {
			// console.log(data);
			// console.log(data[0]);
			// console.log(data[0].capital[0]);
			// console.log(data[0].flags.svg);
			// console.log(data[0].name.common);
			// console.log(data[0].continents[0]);
			// console.log(data[0].currencies[Object.keys(data[0].currencies)].name);
			// console.log(Object.values(data[0].languages).toString().split(',').join(', '));
			elResult.innerHTML = `
        <img class="flag-img" src=${data[0].flags.svg} width="45%"/>
        <h2>${data[0].name.common}</h2>
        <div class="wrapper">

        <div class="data-wrapper">
          <h4>Capital:</h4>
          <span>${data[0].capital[0]}</span>
        </div>

        <div class="data-wrapper">
          <h4>Population:</h4>
          <span>${data[0].population}</span>
        </div>

        <div class="data-wrapper">
          <h4>Currncy:</h4>
          <span>${data[0].currencies[Object.keys(data[0].currencies)].name} - ${Object.keys(data[0].currencies)}</span>
        </div>

        <div class="data-wrapper">
          <h4>Coomon Languages:</h4>
          <span>${Object.values(data[0].languages).toString().split(',').join(', ')}</span>
        </div>

        <div class="data-wrapper">
          <h4>Area:</h4>
          <span>${data[0].area} km<sup>2</sup></span>
        </div>

        <div class="data-wrapper">
          <h4>Fifa:</h4>
          <span>${data[0].fifa}</span>
        </div>

        <div class="data-wrapper">
          <h4>Start week:</h4>
          <span>${data[0].startOfWeek}</span>
        </div>
      `;
		})
		.catch(error => {
			if (countryName.length == 0) {
				elResult.innerHTML = `<h3>The input field cannot be empty</h3>`;
			} else {
				elResult.innerHTML = `<h3>Please enter a valid country name.</h3>`;
			}
		});
});
