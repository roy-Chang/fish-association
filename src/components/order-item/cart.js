import React, { useState } from "react";
import "./detail/cart.css";
import Detail from "./detail/detail";
import Check from "./check/check";
import OverCheck from "./overCheck/overCheck";

function cart(props) {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [change, setChange] = useState(0);
  // const [change, setChange] = useState;
  console.log(change);
  return (
    <>
      <div className="cart-wrapper">
        {/* {(() => {
          switch (change) {
            case 0:
              return <Detail change={props.change} />;
              break;
            case 1:
              return <Check change={props.change} />;
              break;
            case 2:
              return <OverCheck change={props.change} />;
              break;
          }
        })()} */}

        <Detail />
        {/* <Check /> */}
        {/* <OverCheck /> */}
      </div>
    </>
  );
}

export default cart;
