import React from "react";
import { ItemsWrapper } from './styled.js';

import CehalopodProducts from './items-group/CephalopodProducts';
  
function CehalopodBlock(props) {
    return (
         <ItemsWrapper>
             <CehalopodProducts/>
          </ItemsWrapper>
    );
  }

  export default CehalopodBlock