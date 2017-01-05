const types = require('../actions/actionTypes');
const initialState = require('./initialState');

const contactForm = (state = initialState.formValues, action) => {
  switch (action.type) {
    case types.FORM_SUBMIT_VALUE:
      return [...state,
        Object.assign({}, action.message),
      ];
    case types.FORM_RESET:
      return state;
    default:
      return state;
  }
};

module.exports = contactForm;
