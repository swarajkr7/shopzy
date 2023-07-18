let count = 1;
let cost=0;
let quantity = 1;

let loginArr=JSON.parse(localStorage.getItem("signList"))||[];
let length1=Number(loginArr.length-1);
let addToCartArr = JSON.parse(localStorage.getItem("Cart")) || [];

displayName(loginArr);
displayTable(addToCartArr);
totalPriceCal(addToCartArr);

  
  // function to display the name of the customer
  function displayName(loginArr){
    document.querySelector("#nameDisplay").innerHTML = "";
    loginArr.map(function (elem,index){
      let Name=document.createElement("h1");
      console.log(length1);
      if(index==length1){
        Name.innerText= "Hi, " + elem.personName;
        Name.style.color="white";
        document.querySelector("#nameDisplay").append(Name);
      }
      
    })
  }
  

// 
let length=addToCartArr.length;
let noOfItems=document.createElement("h1");
noOfItems.innerText=length;
document.querySelector("#noOfItems").append(noOfItems);

let totalPrices=document.createElement("h1");




// function to calculate total price of the products added in the cart

function totalPriceCal(addToCartArr){
  cost=0;
  document.querySelector("#tprice").innerHTML="";
   addToCartArr.map(function(elem){
    cost= cost + elem.price*elem.quantity;
   })
  document.querySelector("#tprice").append(cost);
}


function displayTable(addToCartArr) {
  document.querySelector("#container").innerHTML = "";
  addToCartArr.map(function (elem, index) {
      // let noOfItems=addEventL.length;
      // document.querySelector("#noOfItems").append(noOfItems);
    
    let div = document.createElement("div");
    let image = document.createElement("img");
    image.setAttribute("src", elem.image_url);
    image.style.width = "100%";
    let productDesc = document.createElement("h3");
    productDesc.innerText = elem.name;
    let btn = document.createElement("button");
    btn.innerText = "+";
    btn.style.padding="5px 10px";
    let btn2=document.createElement("button");
    btn2.innerText= "-";
    btn2.style.padding="5px 10px";
    let productPrice = document.createElement("p");
    productPrice.innerText = elem.price * Number(elem.quantity);
    let remove = document.createElement("button");
    remove.innerText = "DELETE";
    remove.addEventListener("click", function () {
      deleteProduct(index);
    });
    btn.addEventListener("click", function () {
      
      quantity = increaseQuantity(elem, index);
      productPrice.innerText = elem.price*Number(quantity);
      // addToCartArr.elem.price= elem.price * Number(quantity);
      totalPriceCal(addToCartArr);
      
    });
    btn2.addEventListener("click", function () {
      
      quantity = decreaseQuantity(elem, index);
      productPrice.innerText = elem.price*Number(quantity);
      // addToCartArr.elem.price= elem.price * Number(quantity);
      totalPriceCal(addToCartArr);
      
    });

    div.style.boxShadow = "rgba(0, 0, 0, 0.24) 0px 3px 8px";
    div.append(image, productDesc,btn,btn2,productPrice,remove);
    document.querySelector("#container").append(div);
  });
}


// function to increase the quantity of the products
function increaseQuantity(elem, index) {
  elem.quantity++;
  localStorage.setItem("Cart", JSON.stringify(addToCartArr));
  return elem.quantity;

}

// function to decrease the quantity of the products
function decreaseQuantity(elem,index){
  elem.quantity--;
  localStorage.setItem("Cart", JSON.stringify(addToCartArr));
  return elem.quantity;
}

function deleteProduct(index,elem) {
  
  addToCartArr.splice(index, 1);
  localStorage.setItem("Cart", JSON.stringify(addToCartArr));
 
  // No of Item display
  document.querySelector("#noOfItems").innerHTML="";
  let length=addToCartArr.length;
  let noOfItems=document.createElement("h1");
  noOfItems.innerText=length;
  document.querySelector("#noOfItems").append(noOfItems);

  // Total price of all the items in the cart
  totalPriceCal(addToCartArr);
  displayTable(addToCartArr);
}
   


