import React from "react";
import { Header } from "./Header";
import { Footer } from "./Footer";

const DefaultLayout = ({ children }) => {
  return (
    <div>
      <Header></Header>
      <div className="main">{children}</div>
      <Footer></Footer>
    </div>
  );
};

export default DefaultLayout;
