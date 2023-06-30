// Fetch country Data from an API
import { API_URL } from './config.js';
import { capitalName, getJSON } from './helpers.js';

const state = {
  country: {
    query: '',
  },
};

const loadCountry = async function (query) {
  try {
    if (!query) return;

    state.country.query = query;

    const res = await getJSON(`${API_URL}${query}`);

    const data = res.find(
      c =>
        c.name.common === capitalName(query) || c.cca3 === query.toUpperCase()
    );

    state.country = {
      flag: data.flags.svg,
      name: data.name.common,
      population: data.population,
      capital: data.capital[0],
      languages: data.languages,
      currencies: data.currencies,
    };
    console.log(state.country);
  } catch (err) {
    throw err;
  }
};

export { loadCountry, state };
