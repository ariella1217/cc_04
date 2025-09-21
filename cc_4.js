
// step 2: create an array of products
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

// step 3: loop through the array and apply discounts based on category
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

// step 4: determine customer type and apply additional discounts
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

/* step 5: Use for or while loops to simulate a checkout process for 3 customers. Each iteration should:
Calculate the discounted total for their cart
Reduce product inventory count
Display customer number and total cost */

let customers = [
    { customerType : "student", cart : [0,1] },
    { customerType : "senior", cart : [2,3] },
    { customerType : "regular", cart : [0,4] }
];


for (let customerNumber = 0; customerNumber < 3; customerNumber++) {
    let customer = customers[customerNumber];
    let i = 0;
    let discountedTotal = 0;
    while (i < customer.cart.length) {
        let productPromoPrice = products[customer.cart[i]].promoPrice;
        
        discountedTotal = Number(discountedTotal) + Number(productPromoPrice);
        discountedTotal = discountedTotal.toFixed(2);
        
        products[customer.cart[i]].inventory--;
        i++;
    }

    if (customer.customerType === "student") {
        otherDiscount = .05; }
    else if (customer.customerType === "senior") {
        otherDiscount = 0.07 }
    else {
        otherDiscount = 0
    }

    let totalCost = discountedTotal * (1 - otherDiscount);
    totalCost = totalCost.toFixed(2);

    console.log(`Customer number: ${customerNumber}, Total: ${totalCost}`);
}


//Step 6: Use for...in to log each key/value pair for a single product after discounts are applied.

for (let product of products) {
    console.log("sku:" + product.sku + ", name:" + product.name + ", category:" + product.category + ", price:" + product.price + ", inventory:" + product.inventory + ", promoPrice:" + product.promoPrice);
}

//Step 7: Use Object.entries() and destructuring to log all product info after inventory is updated.

for (let product of products) {
    console.log(Object.entries(product));
}





