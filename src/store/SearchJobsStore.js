import { handleActions } from "redux-actions";
import { SEARCH_JOBS_ACTIONS } from "./SearchJobsActions";

const initialState = {
  cardData: null,
};

export default handleActions(
  {
    [SEARCH_JOBS_ACTIONS.SET_CARDS_DATA]: (state, { payload }) => ({
      ...state,
      cardData: payload,
    }),
  },
  initialState
);
