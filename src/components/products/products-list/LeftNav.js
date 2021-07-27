import React from "react";

import {BrowserRouter as Router, Route,Link} from 'react-router-dom';

// import ProductsList from "./ProductsList";
//import DiscountPage from "../products-pages/DiscountPage";
import FishItems from "../products-list/items-group/FishItems";
import SellItems from "../products-list/items-group/SellItems";
import ShrimpItems from "../products-list/items-group/ShrimpItems";
import CephalopodProducts from "../products-list/items-group/CephalopodProducts";
//import MainBlock from "./MainBlock";



export default function LeftNav() {
    return (
      <>
        <Router>
          <div className="P-left-nav">
            <ul className="py-4">
                <Link to="/discount"><li>當月超值優惠</li></Link>
                <Link to="/all"><li>全部</li></Link>
                <Link to="/fish"><li>魚類</li></Link>
                <Link to="/shrimp"><li>蝦類</li></Link>
                <Link to="/shell"><li>貝類</li></Link>
                <Link to="/squid"><li>軟足類</li></Link>
            </ul>
          </div>
       
        </Router>

       
      </>
    );
  }
  
