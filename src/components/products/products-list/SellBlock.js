import React from "react";
import { ItemsWrapper } from './styled.js';

import SellItems from "./items-group/SellItems";

function SellBlock(props) {
    return (
          <ItemsWrapper>  
             <SellItems/>
          </ItemsWrapper>  
    );
  }

  export default SellBlock