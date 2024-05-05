import { handleActions } from "redux-actions";
import { SEARCH_JOBS_ACTIONS } from "./SearchJobsActions";

const initialState = {
  cardsData: null,
  totalCount: null,
  offset: 0,
  filters: {},
};

export default handleActions(
  {
    [SEARCH_JOBS_ACTIONS.SET_CARDS_DATA]: (state, { payload }) => ({
      ...state,
      cardsData: payload?.jdList,
      totalCount: payload?.totalCount,
    }),
    [SEARCH_JOBS_ACTIONS.APPEND_CARDS_DATA]: (state, { payload }) => ({
      ...state,
      cardsData: [...state.cardsData, ...payload?.jdList],
      totalCount: payload?.totalCount,
    }),
    [SEARCH_JOBS_ACTIONS.SET_FILTERS]: (state, { payload }) => ({
      ...state,
      filters: { ...state.filters, ...payload },
    }),
    [SEARCH_JOBS_ACTIONS.SET_OFFSET]: (state, { payload }) => ({
      ...state,
      offset: payload,
    }),
  },
  initialState
);
