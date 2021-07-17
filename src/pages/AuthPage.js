import React from "react";

// import "../assets/css/styled.css";
import "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "../components/auth/MemberJoin.css";
import AuthBoard from "../components/auth/authBoard";

function AuthPage(props) {
  return (
    <>
      <nav className="authNAV" />
      <div className="Aactivity-wrapper">
        <div className="Acontainer">
          <AuthBoard />
          {/* <footer></footer> */}
        </div>
      </div>
    </>
  );
}

export default AuthPage;
