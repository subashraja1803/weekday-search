import { handleActions } from "redux-actions";
import { SEARCH_JOBS_ACTIONS } from "./SearchJobsActions";

const initialState = {
  cardsData: null,
  totalCount: null,
  filters: {},
};

export default handleActions(
  {
    [SEARCH_JOBS_ACTIONS.SET_CARDS_DATA]: (state, { payload }) => ({
      ...state,
      cardsData: payload?.jdList,
      totalCount: payload?.totalCount,
    }),
    [SEARCH_JOBS_ACTIONS.SET_FILTERS]: (state, { payload }) => ({
      ...state,
      filters: { ...state.filters, ...payload },
    }),
  },
  initialState
);
