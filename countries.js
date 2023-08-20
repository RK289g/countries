const loadCountries = () => {
    fetch('https://restcountries.com/v3.1/all')
        .then(res => res.json())
        .then(data => displayCountries(data));
}

const displayCountries = countries => {
    console.log(countries);
    const allCountriesHTML = countries.map(country => getCountryHTML(country))
    //console.log(allCountriesHTML);
    const container = document.getElementById('countries');
    container.innerHTML = allCountriesHTML.join(' ');
}

const getCountryHTML = ({ name, flags, area, region }) => {
    return `
    <div class="country">
    <h4>${name.common}</h4>
    <p>Area: ${area}</p>
    <p>Region: ${region}</p>
    <img src="${flags.png}" alt="">
    </div>
    `
}

/*const getCountryHTML = country => {
    return `
    <div class="country">
    <h4>${country.name.common}</h4>
    <img src="${country.flags.png}" alt="">
    
    </div>
    `
}*/

loadCountries();