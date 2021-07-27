import React from "react";
import { ItemsWrapper } from './styled.js';
/* img import */
import FishItems from "./items-group/FishItems";
import ShrimpItems from "./items-group/ShrimpItems";
import SellItems from "./items-group/SellItems";
import CehalopodProducts from './items-group/CephalopodProducts';

//---------------------



function MainBlock(props) {
    return (
      
          <ItemsWrapper>
             <FishItems/>
             <ShrimpItems/>
             <SellItems/>
             <CehalopodProducts/>
          </ItemsWrapper>
      
    );
  }




export default MainBlock




  