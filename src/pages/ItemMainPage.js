import React from "react";

import ItemMain from "../components/item-main/ItemMain";
import MainFooter from '../components/footer/MainFooter'


function ItemSinglePage() {
  return (
    <>
     <div className="activity-wrapper activity-bg-green">
        <ItemMain />
        <MainFooter />
      </div>
    </>
  );
}

export default ItemSinglePage;