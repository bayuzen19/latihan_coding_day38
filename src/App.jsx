import { useContext, useEffect, useState } from "react";

import { AuthContext } from "./context/AuthProvider";
import { ProductContext } from "./context/ProductProvider";

import "./App.css";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { TYPES } from "./redux/types";
import { onLogin, onLogout } from "./redux/actions/authAction";
import axios from "axios";
import { onGetProduct } from "./redux/actions/productAction";

function App() {
  // const { isAuth, userName } = useSelector((state) => state.authReducer);
  const {isAuth} = useContext(AuthContext);
  const {listData, onGetData} = useContext(ProductContext);

  // const { listData, isLoading, isError } = useSelector(
  //   (state) => state.productReducer
  // );
  const dispatch = useDispatch();

  const handleLogin = () => {
    dispatch(onLogin(true));
  };

  const handleLogout = () => {
    dispatch(onLogout(false));
  };

  const getProducts = () => {
    dispatch(onGetProduct());
  };

  useEffect(() => {
    onGetData();
  }, []);
  
  console.log({listData});

  return (
    <>
      <h1>{isAuth ? "anda sudah login" : "anda belum login"} </h1>
      {listData.map(item => (
        <div>
            <h1>
              {item.email}
              <p>{item.first_name}</p>
            </h1>
        </div>
      ))}
      {/* <button onClick={handleLogin}>login</button>
      <button onClick={handleLogout}>logout</button>

      {isError !== null && <h1>{isError}</h1>}

      {isLoading && !listData.length ? (
        <h1>loading</h1>
      ) : (
        listData.map((item) => (
          <div key={item.email}>
            <h1>{item.first_name}</h1>
            <h1>{item.email}</h1>
          </div>
        ))
      )} */}
    </>
  );
}

export default App;
