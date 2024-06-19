function init(){
  loadBasket();
  render();
  checkDeliveryStatus();
}

function addToBasket(dish, price){
  let index = shoppingBasket[0].dish.indexOf(dish);

  if (index === -1) {
    shoppingBasket[0].dish.push(dish);
    shoppingBasket[0].price.push(price);
    shoppingBasket[0].amount.push(1);
    shoppingBasket[0].subTotal.push(price);
  } else {
    shoppingBasket[0].amount[index]++;
  }
  renderBasket();
  saveBasket();
}

function deleteDish(dish) {
  let index = shoppingBasket[0].dish.indexOf(dish);

  shoppingBasket[0].dish.splice(index, 1);
  shoppingBasket[0].price.splice(index, 1);
  shoppingBasket[0].amount.splice(index, 1);
   shoppingBasket[0].subTotal.splice(index, 1);
  
  renderBasket();
  saveBasket();
}

function addOneDish(dish){
  let index = shoppingBasket[0].dish.indexOf(dish);

  shoppingBasket[0].amount[index]++;

  renderBasket();
  saveBasket();
}

function deleteOneDish(dish){
  let index = shoppingBasket[0].dish.indexOf(dish);

  shoppingBasket[0].amount[index]--;
  if (shoppingBasket[0].amount[index] === 0) {
    deleteDish(dish);
  } 

  renderBasket();
  saveBasket();
}

function calculatePrice(){
  shoppingBasket[0].total = 0.0;
  
  for (let i = 0; i < shoppingBasket[0].dish.length; i++){
    shoppingBasket[0].subTotal[i] = shoppingBasket[0].price[i] * shoppingBasket[0].amount[i];
    shoppingBasket[0].total = shoppingBasket[0].total + shoppingBasket[0].subTotal[i];
  }
  shoppingBasket[0].totalWithDelivery = shoppingBasket[0].total + shoppingBasket[0].deliveryCost;
}

function deleteAll() {
  shoppingBasket[0].dish = [];
  shoppingBasket[0].price = [];
  shoppingBasket[0].amount = [];
  shoppingBasket[0].subTotal = [];

  renderBasket();
  saveBasket();
}

function checkDeliveryStatus() {
  if (shoppingBasket[0].deliveryCost == 0) {
    deliveryStatus("takeaway");
  } else {
    deliveryStatus("delivery");
  }
}

function deliveryStatus(status) {
  document.getElementById("delivery").classList.remove("currentDeliveryStatus");
  document.getElementById("takeaway").classList.remove("currentDeliveryStatus");
  document.getElementById(status).classList.add("currentDeliveryStatus");

  if (status == 'takeaway') {
    shoppingBasket[0].deliveryCost = 0;
  } else {
    shoppingBasket[0].deliveryCost = 2.9;
  }
  renderBasket(); 
  saveBasket();
}

function saveBasket() {
  localStorage.setItem("shoppingBasket", JSON.stringify(shoppingBasket));
}

function loadBasket() {
  let savedBasket = localStorage.getItem("shoppingBasket");
  if (savedBasket) {
    shoppingBasket = JSON.parse(savedBasket);
  }
}

function closeBasket(){
    document.getElementById("closeMobileBasket").classList.add("shoppingBasketSection");
    document.getElementById("closeMobileBasket").classList.remove("shoppingBasketSectionMobile");

    document.getElementById("body").classList.remove("hide-scrollbar");
}

function openMobileBasket() {
  document.getElementById("closeMobileBasket").classList.add("shoppingBasketSectionMobile");
  document.getElementById("closeMobileBasket").classList.remove("shoppingBasketSection");

  document.getElementById("body").classList.add("hide-scrollbar");
  renderBasket();
}

function openCheckout(){
  if (shoppingBasket[0].total >= 10.00) {
    document.getElementById("checkout").classList.remove("d-none");
    document.getElementById("body").classList.add("hide-scrollbar");
  } else {
    alert("Das sind noch nicht genug fritierte Sonnenstrahlen! \n \n Der Mindestbestellwert beträgt 10,00€.");
  }
}

function closeCheckout(){
  document.getElementById('checkout').classList.add('d-none');
  document.getElementById('body').classList.remove('hide-scrollbar');

  deleteAll();
  // closeBasket();
  // render();
}

