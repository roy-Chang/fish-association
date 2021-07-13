import React from "react";

// import "../assets/css/styled.css";
import "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

import AuthBoard from "../components/auth/authBoard";

function AuthPage(props) {
  return (
    <>
      <div className="Aactivity-wrapper">
        <div className="Acontainer">
          <nav></nav>
          <AuthBoard />
          <footer></footer>
        </div>
      </div>
    </>
  );
}

export default AuthPage;
