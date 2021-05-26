export const getSummaryStates = (store) => store.summaries;

export const getSummaryListIds = (store) =>
  getSummaryStates(store) ? getSummaryStates(store).allIds : [];

export const getSummaryById = (store, id) =>
  getSummaryStates(store) ? { ...getSummaryStates(store).byIds[id], id } : {};

export const getSummaries = (store) =>
  getSummaryListIds(store).map((id) => getSummaryById(store, id));
