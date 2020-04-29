import React from "react";
import { useSelector } from "react-redux";
import { useRouteMatch } from "react-router-dom";
import Sharednav from "../Sharednav";

const ClientResults = () => {
  const { url } = useRouteMatch();
  const reducer = useSelector((state) => state.clientReducer.filterClasses);
  return (
    <div className="ClientResults">
      <Sharednav />
      <div className="ClientResults-show">
        <h3>ClientResults</h3>
      </div>
    </div>
  );
};

export default ClientResults;
