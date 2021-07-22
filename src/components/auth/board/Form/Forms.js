import React from "react";
import { useState } from "react";
import "./MemberJoin2.css";
//component
import Join1 from './Join1';
import Join2 from './Join2';

function Forms(props) {
  const [checked, setCheck] = useState(1);
  const changeForm = (e) => {
    console.log(props);
    // return;
    setCheck(2);
  };

  return (
    <>{checked === 1 ? <Join1 go={changeForm} value={checked} /> : <Join2 />}</>
  );
}


;
export default Forms;
