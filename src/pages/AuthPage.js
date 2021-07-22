import React from "react";

// import "../assets/css/styled.css";
import "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "../components/auth/MemberJoin.css";
import AuthBoard from "../components/auth/authBoard";
import MainFooter from "../components/footer/MainFooter";

function AuthPage(props) {
  return (
    <>
      <div className="activity-wrapper">
        <nav style={{ height: "65px" }}></nav>
        <div className="Acontainer">
          <AuthBoard />
          <MainFooter />
          {/* <footer></footer> */}
        </div>
      </div>
    </>
  );
}

export default AuthPage;
