import * as actionTypes from "../constant";
import axios from "axios";

export const saveInput = (data) => ({
  type: actionTypes.MEMBER_REGISTER_ACTION,
  data,
});

/**useEffect(() => {
    axios
      .get("http://localhost:3000/api/profile/productLike", {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((serverResponse) => {
        const myProductsLike = serverResponse.data;
        console.log(myProductsLike);
        setFavoriteP(myProductsLike);
      });
  }, []); */
export const axiosGetProductLike = () => {
    const token = localStorage.getItem("token");
  return (dispatch) => {
    axios
      .get("http://localhost:3000/api/profile/productLike", {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((res) => {
          console.log(res)
      });
  };
};