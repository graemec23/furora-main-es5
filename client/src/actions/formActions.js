const types = require('./actionTypes');
const beginAjaxCall = require('./ajaxStatusActions').beginAjaxCall;
const ajaxCallError = require('./ajaxStatusActions').ajaxCallError;
const messageApi = require('../api/messageApi');

function createMessage(message) {
  return { type: types.FORM_SUBMIT_VALUE, message };
}

function reset() {
  return dispatch => dispatch({ type: types.FORM_RESET });
}

function saveMessage(message) {
  return function (dispatch) {
    dispatch(beginAjaxCall());
    return messageApi.saveMessage(message)
    .then(message => {
      dispatch(createMessage(message));
    }).catch(error => {
      dispatch(ajaxCallError(error));
      throw (error);
    });
  };
}

module.exports = { createMessage, reset, saveMessage };
