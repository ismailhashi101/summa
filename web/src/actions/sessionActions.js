import * as types from "../store/constants/ActionTypes";

export const addSummary = (id, title, text) => ({
  type: types.ADD_SUMMARY,
  payload: {
    id,
    title,
    text,
  },
});

export const deleteSummary = (id) => ({
  type: types.DELETE_SUMMARY,
  payload: { id },
});

export const editSummary = (id, title) => ({
  type: types.EDIT_SUMMARY_TITLE,
  payload: {
    id,
    title,
  },
});
