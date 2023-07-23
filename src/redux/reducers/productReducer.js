import { TYPES } from "../types";

const initState = {
  listData: [],
  isLoading: false,
  isError: null,
};

export const productReducer = (state = initState, action) => {
  switch (action.type) {
    case TYPES.GET_PRODUCT_LOAD:
      return {
        ...state,
        isLoading: action.loadStat,
      };
    case TYPES.GET_PRODUCT_SUCCEDD:
      return {
        ...state,
        listData: action.payload,
        isLoading: action.loadStat,
      };
    case TYPES.GET_PRODUCT_FAILED:
      return {
        ...state,
        isLoading: action.loadStat,
        isError: action.payload,
      };
    default:
      return state;
  }
};
