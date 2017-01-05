const combineReducers = require('redux').combineReducers;
const contactForm = require('./formReducer');
const ajaxCallsInProgress = require('./ajaxStatusReducer');

const rootReducer = combineReducers({
  contactForm,
  ajaxCallsInProgress,
});

module.exports = rootReducer;
