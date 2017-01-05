const types = require('./actionTypes');

function beginAjaxCall() {
  return { type: types.BEGIN_AJAX_CALL };
}

function ajaxCallError() {
  return { type: types.AJAX_CALL_ERROR };
}

module.exports = { beginAjaxCall, ajaxCallError };
