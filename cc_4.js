let products = [

{sku:"sku-001",
name:"t-shirt",
category:"apparel",
price:10.00,
inventory:200
},

{sku:"sku-002",
name:"iphone",
category:"electronics",
price:800.00,
inventory:100
},

{sku:"sku-003",
name:"football",
category:"household",
price:8.00,
inventory:250
},

{sku:"sku-003",
name:"lego",
category:"toys",
price:50.00,
inventory:100
},

{sku:"sku-004",
name:"takis",
category:"grocery",
price:5.00,
inventory:100

}];

for (let product of products) {
    let discount = 0;


switch (product.category) {
    case "electronics":
      discount = .2  
    break;

    case "household":
    case "groceries":
        discount = .1
    break;

    case "apparel":
        discount = .15
    break;

    default:
        discount=0;
}

let promoPrice = product.price * (1-discount);
product.promoPrice = promoPrice.toFixed(2);

}

console.log(products);

let customerType = "regular";
let otherDiscount = 0;

if (customerType === "student") {
    otherDiscount = .05; }
else if (customerType === "senior") {
    otherDiscount = 0.07 }
else {
    otherDiscount = 0
}

console.log(`Customer type: ${customerType}, Discount: ${otherDiscount * 100}%`);





