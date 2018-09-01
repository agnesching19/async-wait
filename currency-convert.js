// GBP, TWD, 50 
// http://data.fixer.io/api/latest?access_key=446095608a105d4303a6158be5a31c1f

const axios = require('axios');

// const getExchangeRate = (from, to) => {
//   return axios.get('http://data.fixer.io/api/latest?access_key=446095608a105d4303a6158be5a31c1f').then((response) => {
//     const euro = 1 / response.data.rates[from];
//     const rate = euro * response.data.rates[to];
//     return rate;
//   });
// };

const getExchangeRate = async (from, to) => {
  const response = await axios.get('http://data.fixer.io/api/latest?access_key=446095608a105d4303a6158be5a31c1f');
  const euro = 1 / response.data.rates[from];
  const rate = euro * response.data.rates[to];
  
  return rate;
};

// const getCountries = (currencyCode) => {
//   return axios.get(`https://restcountries.eu/rest/v2/currency/${currencyCode}`).then((response) => {
//     return response.data.map((country) => country.name);
//   });
// };

const getCountries = async (currencyCode) => {
  const response = await axios.get(`https://restcountries.eu/rest/v2/currency/${currencyCode}`);
  
  return response.data.map((country) => country.name);
};

getExchangeRate('GBP', 'TWD').then((rate) => {
  console.log(rate);
});

getCountries('EUR').then((country) => {
  console.log(country);
});