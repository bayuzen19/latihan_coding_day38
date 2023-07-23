import axios from "axios";
import { TYPES } from "../types";

export const onGetProduct = () => (dispatch) => {
  dispatch({
    type: TYPES.GET_PRODUCT_LOAD,
    loadStat: true,
  });
  axios
    .get(`https://reqres.in/api/users?page=1`)
    .then((res) => {
      const data = res.data.data;
      //loading false
      dispatch({
        type: TYPES.GET_PRODUCT_SUCCEDD,
        payload: data,
        loadStat: false,
      });
    })
    .catch((err) =>
      //loading false
      dispatch({
        type: TYPES.GET_PRODUCT_FAILED,
        loadStat: false,
        payload: err.message,
      })
    );
};

const handleLogin = () => (dispatch) => {};
