import React, { useEffect } from "react";
import Header from "../components/Header";
import { getUserAuth } from "../redux/actions/auth/actions";
import { connect } from "react-redux";
import { useHistory } from "react-router-dom";

const HeaderContainer = (props) => {
  let history = useHistory();

  useEffect(() => {
    props.getUserAuth();
  }, [props.getUserAuth]);

  const handleClickLogout = () => {
    localStorage.removeItem("token");
    history.push("/");
  };

  return <Header auth={props.auth} handleClickLogout={handleClickLogout} />;
};

/**
 *
 * @param {*} state
 * @returns
 */
const mapStateToProps = (state) => {
  return {
    auth: state.AuthReducer.auth,
  };
};

/**
 *
 */
const mapDispatchToProps = {
  getUserAuth,
};

export default connect(mapStateToProps, mapDispatchToProps)(HeaderContainer);
