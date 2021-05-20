import * as types from "../constants/ActionTypes";

export const addSummary = () => (dispatch) =>
  dispatch({
    type: types.ADD_SUMMARY,
    text,
  });

export const deleteSummary = () => (dispatch) =>
  dispatch({
    type: types.DELETE_SUMMARY,
    id,
  });

export const editSummary = () => (dispatch) =>
  dispatch({
    type: types.EDIT_SUMMARY_TITLE,
    id,
  });
