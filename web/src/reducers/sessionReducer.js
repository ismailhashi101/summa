import * as actionTypes from "../store/constants/ActionTypes";
import { omit } from "lodash";

const initialState = {
  allIds: [],
  byIds: {},
};

export default function appReducer(state = initialState, action) {
  switch (action.type) {
    case actionTypes.ADD_SUMMARY: {
      const {
        id,
        url,
        title,
        summary,
        summaryTime,
        contentReducedBy,
        sentences,
        keywords,
      } = action.payload;
      return {
        ...state,
        allIds: [...state.allIds, id],
        byIds: {
          ...state.byIds,
          [id]: {
            id,
            url,
            title,
            summary,
            summaryTime,
            contentReducedBy,
            sentences,
            keywords,
          },
        },
      };
    }
    case actionTypes.DELETE_SUMMARY: {
      const { id } = action.payload;
      return {
        ...state,
        allIds: state.allIds.filter((index) => index !== id),
        byIds: omit(state.byIds, id),
      };
    }
    default:
      return state;
  }
}
