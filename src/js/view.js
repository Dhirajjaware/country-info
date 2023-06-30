const countryContainer = document.querySelector('.country-container');
const form = document.querySelector('form');
const searchBtn = document.querySelector('.btn__search');
const inputCountry = document.querySelector('.input__country');
const navbar = document.getElementById('country');
const title = document.querySelector('.title');
const errorMessage = 'country not found. Please try again!';

const clear = function () {
  countryContainer.innerHTML = '';
};

export const getQuery = function () {
  return inputCountry.value;
};

const clearInput = function () {
  inputCountry.value = '';
};

export const render = function (data) {
  if (!data) return;
  //clear input field
  clearInput();
  const markup = generateMarkup(data);
  clear();
  countryContainer.insertAdjacentHTML('afterbegin', markup);
  countryContainer.style.opacity = 1;
  title.innerHTML = data.name;
};

const generateMarkup = function (data) {
  const { languages } = data;
  const languagesAll = Object.values(languages);
  const { currencies } = data;
  let currency;

  for (const [, crr] of Object.entries(currencies)) currency = crr;

  const markup = `<div class="row">
          <div class="col-lg-6">
            <img
              src="${data.flag}"
              alt="country-flag"
            />
          </div>
          <div class="col-lg-6 fw-bold fs-5 d-flex flex-column justify-content-center ">
              <p>Country: ${data.name}</p>
              <p>Population: ${Intl.NumberFormat(navigator.language).format(
                data.population
              )}</p>
              <p>Capital: ${data.capital}</p>
              <p>${
                languagesAll.length > 1 ? 'Languages' : 'Language'
              }: ${languagesAll}</p>

               <p>Currency: ${currency.name}</p>
                <a href="${data.flag}" download="">Download</a>
            </div>
          </div>
          <hr>`;

  return markup;
};

export const addHandlerRender = function (handler) {
  form.addEventListener('submit', handler);
  searchBtn.addEventListener('click', handler);
};

export const renderError = function (message = errorMessage) {
  const markup = `
  <div class="alert alert-danger alert-dismissible fade show" role="alert">
  <strong>${message}</strong>
  <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
  </div>`;
  navbar.lastElementChild.innerHTML = ' ';
  navbar.insertAdjacentHTML('afterend', markup);
};

export const focusInput = () => {
  inputCountry.focus();
};
