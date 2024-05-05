import { SEARCH_JOBS_ACTIONS } from "./SearchJobsActions";

export const SearchJobsActionHandlers = {
  setCardsData: (payload) => ({
    type: SEARCH_JOBS_ACTIONS.SET_CARDS_DATA,
    payload,
  }),
  setFilters: (payload) => ({
    type: SEARCH_JOBS_ACTIONS.SET_FILTERS,
    payload,
  }),
};
