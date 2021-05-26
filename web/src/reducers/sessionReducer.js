import * as actionTypes from "../store/constants/ActionTypes";

const initialState = {
  allIds: [],
  byIds: {}
};

export default function appReducer(state = initialState, action) {
  switch (action.type) {
    case actionTypes.ADD_SUMMARY: {
      const { id, title, text } = action.payload;
      return {
        ...state,
        allIds: [...state.allIds, id],
        byIds: {
          ...state.byIds,
          [id]: {
            title,
            text
          }
        }
      };
    }
    default:
      return state;
  }
}
