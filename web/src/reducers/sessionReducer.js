import * as actionTypes from "../constants/ActionTypes";

const initialState = {
  title: "title",
  text: "summary",
  id: 0,
};

export default function sessionReducer(state = [initialState], action) {
  const mutatedItem = action.payload;
  if (!mutatedItem) {
    return state;
  }
  const mutatedIndex = state.findIndex((item) => item.id === mutatedItem.id);

  switch (action.type) {
    case actionTypes.ADD_SUMMARY:
      if (mutatedIndex < 0) {
        state.push(mutatedItem);
      }
      break;
    case actionTypes.DELETE_SUMMARY:
      if (mutatedIndex >= 0) {
        state.splice(mutatedIndex, 1);
      }
      break;
    case actionTypes.EDIT_SUMMARY_TITLE:
      state[mutatedIndex] = mutatedItem;
      break;
    default:
      return state;
  }
}

// export default function sessionReducer(state = [initialState], action) {
//   const mutatedItem = action.payload;
//   if (!mutatedItem) {
//     return state;
//   }
//   const mutatedIndex = state.findIndex((item) => item.id === mutatedItem.id);
//     switch (action.type) {
//       case actionTypes.ADD_SUMMARY:
//         return state.concat([action.payload])
//       case actionTypes.DELETE_SUMMARY:
//         return state.concat([action.payload])
//       case actionTypes.EDIT_SUMMARY_TITLE:
//         state[mutatedIndex] = mutatedItem;
//         break;
//       default:
//         return state;
//     }
//   };
