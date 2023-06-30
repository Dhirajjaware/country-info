//Dependencies
import * as view from './view.js';
import * as model from './model.js';

const controlCountries = async function (e) {
  try {
    e.preventDefault();

    await model.loadCountry(view.getQuery());

    //render country
    view.render(model.state.country);
  } catch (err) {
    view.renderError();
    console.log(err);
  }
};

const init = function () {
  view.addHandlerRender(controlCountries);
  //focus
  view.focusInput();
};
init();
