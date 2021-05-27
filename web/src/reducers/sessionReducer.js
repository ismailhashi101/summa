import * as actionTypes from "../store/constants/ActionTypes";

const initialState = {
  allIds: [],
  byIds: {},
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
            text,
          },
        },
      };
    }
    case actionTypes.DELETE_SUMMARY: {
      const { id } = action.payload;
      return {
        ...state,
        byIds: {
          ...state.byIds,
          [id]: {
            ...state.byIds[id],
            completed: !state.byIds[id].completed,
          },
        },
      };
    }
    case actionTypes.EDIT_SUMMARY_TITLE: {
      const { id, title } = action.payload;
      return {
        ...state,
        byIds: {
          ...state.byIds,
          [id]: {
            ...state.byIds[id],
            completed: !state.byIds[id].completed,
          },
        },
      };
    }
    default:
      return state;
  }
}
