import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Axious.css"
import { isDocument } from "@testing-library/user-event/dist/utils";

export function Axious() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios({
      method: "get",
      url: "https://61fcfec8f62e220017ce4280.mockapi.io/kiyim-kechak/qishkiKiyimlar",
    }).then((res) => setData(res.data));
  }, []);

  return (
    <div className="cards">
      {data.map((item, index) => (
        <div key={item.id} className="card w-25  m-4 ">
          <div className="card-body">
            <div className="card-title">
              <div class="clearfix">
                <div
                  class="spinner-border float-end text-primary"
                  role="status"
                >
                  <span class="visually-hidden">Loading...</span>
                </div>
              </div>
              <h1> ID: {item.id}</h1>
            </div>
            <h5>Nomi: {item.nomi}</h5>
            <h1>Narxi: {item.narxi}</h1>
            <button type="button" class="btn btn-outline-primary w-100">
              Zakaz berish
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}
