import React from "react";
import { ItemsWrapper } from './styled.js';
import FishItems from "./items-group/FishItems";

function FishBlock(props) {
    return (
          <ItemsWrapper>
             <FishItems/>
          </ItemsWrapper>     
    );
  }

export default FishBlock