import React, { createContext, useState, useEffect } from "react";
import axios from "axios";

export const ProductContext = createContext();

export const ProductProvider = ({children}) => {
    const [listData, setListData] = useState([]);
    const onGetData = () => {
            axios
              .get("https://reqres.in/api/users?page=1")
              .then((response) => {
                setListData(response.data.data);
              })
              .catch((error) => {
                console.error("Error fetching data:", error);
              });
          };

    return (
    <ProductContext.Provider value={{ listData, onGetData }}>
        {children}
    </ProductContext.Provider>
    );
};