import {
  ADD_SUMMARY,
  DELETE_SUMMARY,
  EDIT_SUMMARY_TITLE,
} from "../constants/ActionTypes";

//temporary
const initialState = [{
    title: 'title',
    text: "summary",
    id: 0
  }];

export default function summaries(state = [initialState], action) {
  const mutatedItem = action.payload;
  if (!mutatedItem) {
    return;
  }
  const mutatedIndex = state.findIndex((item) => item.id === mutatedItem.id);
  switch (action.type) {
    case ADD_SUMMARY:
      if (mutatedIndex < 0) {
        state.push(mutatedItem);
      }
      break;
    case DELETE_SUMMARY:
      if (mutatedIndex >= 0) {
        state.splice(mutatedIndex, 1);
      }
      break;
    case EDIT_SUMMARY_TITLE:
      state[mutatedIndex] = mutatedItem;
      break;
    default:
      return [...state];
  }
}
