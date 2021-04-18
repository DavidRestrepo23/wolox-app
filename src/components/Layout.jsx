import React from "react";
import HeaderContainer from "../containers/HeaderContainer";
import Footer from "./Footer";

const Layout = (props) => {
  return (
    <>
      <HeaderContainer />
      {props.children}
      <Footer />
    </>
  );
};

export default Layout;
