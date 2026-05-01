const insertProduct = (product) => {
    // Will accept either a product array or product object
    if (product instanceof Array) {
        params = product;
    } else {
        params = Object.values(product);
    };

    console.log(params);
}

const tstArr = [200, 'Cheese', 'American Cheesy', 300];
const tstObj = {
  prod_id: 200,
  prod_name: 'Cheese',
  prod_desc: 'American Cheesy',
  prod_price: 300
}



// TEST
console.log("pass array");
insertProduct(tstArr);
//
console.log("pass object");
insertProduct(tstObj);