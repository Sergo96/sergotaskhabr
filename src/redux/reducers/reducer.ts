import { ActionType } from "../actions/actionTypes";

const initialState = {
  pictures: [],
  loading: false,
};

const picturesReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case ActionType.GET_PICTURES:
      return {
        ...state,
        pictures: action.payload,
        loading: false,
      };
    case ActionType.SORT_LIST:
      return {
        ...state,
        pictures: action.payload,
        loading: false,
      };
    default:
      return state;
  }
};

export default picturesReducer;
