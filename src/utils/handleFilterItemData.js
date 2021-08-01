import myProducts from './likeProducts';


export const buyFilter = (items) => {
    const productsList = myProducts.myProducts
    let arr = [];
    for (let i = 0; i < items.length; i++) {
      arr.push(items[i].product_id);
    }
    //---------------------去重記算比數
    function getRepeatNum() {
      return arr.reduce(function (prev, next) {
        prev[next] = prev[next] + 1 || 1;
        return prev;
      }, {});
    }
    const obj = getRepeatNum();
    //-----------------------------整理資料要顯示shopping cart的list
    let list = [];
    
    for (let key in obj) {
      let newObj = {};
      newObj.product_id = Number.parseInt(key);
      newObj.buy_num = obj[key];
      list.push(newObj);
    }

    let productsArr = [];
    for (let i = 0; i < list.length; i++) {
      let products = productsList.filter((item) => {
        return item.id === list[i].product_id;
      });
      products[0].buy_num = list[i].buy_num;
      //let total = list[i].buy_num;
      productsArr.push(products);
    }
    
    function flatten(arr) { 
      return [].concat( ...arr.map(x => Array.isArray(x) ? flatten(x) : x) ) 
    }
    const showProductsList = flatten(productsArr);
    return showProductsList
};