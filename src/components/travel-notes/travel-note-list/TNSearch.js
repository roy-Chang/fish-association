import React from "react";
import { BsSearch } from "react-icons/bs";


export default function TNSearch() {
  return (
    <>
        <form className="form-inline">
            <input style={{ width: 500 }} class="form-control mr-5" type="text" placeholder="搜尋文章標題" />
            <button type="submit" class="btn TN-serch-btn"><BsSearch className="mr-1" />找文章</button>
        </form>
    </>
  );
}