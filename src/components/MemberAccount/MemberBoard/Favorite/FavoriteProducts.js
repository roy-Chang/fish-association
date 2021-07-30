import React, { useState } from "react";
import { Button } from "react-bootstrap";
import axios from "axios";
import productsAll from "../../../../utils/likeProducts";

import fish from "../../../../assets/img/member/memberProducts/fish.jpeg";
import "./MemberFavoritesProducts.css";
const products = productsAll.myProducts;

function FavoriteProducts() {
  const [favoriteP, setFavoriteP] = useState([]);
  const token = localStorage.getItem("token");

  React.useEffect(() => {
    axios
      .get("http://localhost:3000/api/profile/productLike", {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((serverResponse) => {
        const myProductsLike = serverResponse.data;
        console.log(myProductsLike);
        setFavoriteP(myProductsLike);
      });
  }, []);

  // const handleDelete = (id) => {
  //   const newFavProducts = [...favoriteP];
  //   // const index = newFavProducts.filter((v, i) => {
  //   //   return v.product_id === product_id;
  //   // });
  //   for (let i = 0; i < newFavProducts.length; i++) {
  //     if (newFavProducts[i].product_id === id) {
  //       delete newFavProducts[i];
  //       return;
  //     }
  //     return;
  //   }

  //   const newProducts = favoriteP.filter((v, i) => {
  //     // return v.product_id !== product_id;
  //     // if()
  //   });
  //   console.log(newFavProducts[0].product_id);
  //   setFavoriteP(newFavProducts);
  //   // console.log(favoriteP.product_id);
  //   // console.log(id);
  //   // console.log(newFavProducts);
  // };

  return (
    <>
      <div className="MFPcommodityFavorites">
        {favoriteP.map((likeProducts) => {
          const findProduct = products.find((product) => {
            return product.id === likeProducts.product_id;
          });
          return (
            <div>
              <div className="MFPcommodityFavoritesList">
                <img
                  className="MFPcommodityPicture"
                  src={findProduct.image}
                  alt=""
                />
                <a href="">{findProduct.name}</a>
                <Button
                  className="MFPbtn"
                  onClick={() => {
                    const newFavProducts = favoriteP.filter((v, i) => {
                      return v.product_id !== likeProducts.product_id;
                    });
                    setFavoriteP(newFavProducts);
                    axios.delete(
                      `http://localhost:3000/api/profile/productLike/:productId`,
                      {
                        headers: { Authorization: `Bearer ${token}` },
                      }
                    );

                    // console.log(findProduct.id);
                    // handleDelete(findProduct.id);
                  }}
                >
                  刪除
                </Button>
              </div>
              <hr />
            </div>
          );
        })}

        {/* <div>
          <div className="MFPcommodityFavoritesList">
            <img className="MFPcommodityPicture" src={fish} alt="" />
            <a href="">鯊魚鯊魚鯊魚鯊魚鯊魚鯊魚鯊魚</a>
            <Button className="MFPbtn">刪除</Button>
          </div>
          <hr />
        </div> */}
      </div>
    </>
  );
}

export default FavoriteProducts;
