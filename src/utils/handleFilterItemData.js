import myProducts from './likeProducts';
import productsAll from './products.json'

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
//-----------------
export const filterAxiosCartItems = (data) => {
  const productsList = myProducts.myProducts
  let productsArr = [];
    for (let i = 0; i < data.length; i++) {
      let products = productsList.filter((item) => {
        return item.id === data[i].product_id;
      });
      products[0].buy_num = data[i].buy_num;
      //let total = list[i].buy_num;
      productsArr.push(products);
    }
    
    function flatten(arr) { 
      return [].concat( ...arr.map(x => Array.isArray(x) ? flatten(x) : x) ) 
    }
    const showProductsList = flatten(productsArr);
    return showProductsList
}

export const splitArrCartItems = (data) => {
  let arrItems = []
  data.forEach((item) => {
    for(let i =0; i < item.buy_num; i++) {
      arrItems.push({
        product_id: item.product_id,
        buy_num: 1
      })
    }
  })
  return arrItems
}

export const likeProducts = (arr, type) => {
  let newArr = []
  const productsList = productsAll[`${type}`]
  for(let i = 0; i < productsList.length; i++) {
    arr.forEach((like) => {
      if(productsList[i].id === like) {
        productsList[i].like = true
      }
    })
    newArr.push(productsList[i])
  }
  return newArr
}