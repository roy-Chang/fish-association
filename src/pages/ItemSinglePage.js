import React from "react";

import ItemSingle from "../components/item-single/ItemSingle";
import MainFooter from '../components/footer/MainFooter'


function ItemSinglePage() {
  return (
    <>
     <div className="activity-wrapper activity-bg-green">
        <ItemSingle />
        <MainFooter />
      </div>
    </>
  );
}

export default ItemSinglePage;
