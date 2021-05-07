import * as types from '../constants/ActionTypes';

export function addSummary(text) {
  return { type: types.ADD_SUMMARY, text };
}

export function deleteSummary(id) {
  return { type: types.DELETE_SUMMARY, id };
}

export function editSummary(id, title) {
  return { type: types.EDIT_SUMMARY_TITLE, id, title };
}