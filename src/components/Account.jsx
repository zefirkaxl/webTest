import React from "react";
import { Outlet } from "react-router-dom";

import Header from "./header/Heder";

const Account = (props) => {
  return (
    <div className="App">
      <Header />
      <Outlet />
      {/* <Footer /> */}
    </div>
  );
};

export default Account;
