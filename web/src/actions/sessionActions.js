import * as types from "../store/constants/ActionTypes";

export const addSummary = (
  id,
  url,
  title,
  summary,
  summaryTime,
  contentReducedBy,
  sentences,
  keywords
) => ({
  type: types.ADD_SUMMARY,
  payload: {
    id,
    url,
    title,
    summary,
    summaryTime,
    contentReducedBy,
    sentences,
    keywords,
  },
});

export const deleteSummary = (id) => ({
  type: types.DELETE_SUMMARY,
  payload: { id },
});
