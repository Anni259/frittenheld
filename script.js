let menu = [
  {
    menu_image: "./img/pommes.jpg",
    name: "Fritten",
    description: "Goldene Knusperstäbchen – Sonnenstrahlen zum Anbeißen!",
    dish: ["Fritten normal", "Curly Fries", "Potatoe Wedges"],
    ingredients: [
      "Frittierte Sonnenstrahlen, was sonst ;-)",
      "Diese leckeren Spiralen bringen Schwung in dein Pommes-Erlebnis",
      "Rustikale und herzhafte Wedges, die einfach glücklich machen",
    ],
    price: [5.8, 6.9, 7.5],
  },
  {
    menu_image: "./img/pommes-mehr.jpg",
    name: "Fritten und mehr",
    description:
      "Fritten und mehr – hier gibt's den knusprigen Kick mit extra Doping für deinen Geschmack!",
    dish: ["Fritte spezial", "Pommes rot-weiß", "Poutine"],
    ingredients: [
      "Wie im Urlaub - echt holländisch mit frischen Zwiebeln",
      "Eine Schranke, die den Weg zum Glück öffnet – Pommes rot-weiß!",
      "Die ultimative kanadische Party im Mund mit Käse, Gravy und knusprigen Pommes",
    ],
    price: [7.9, 6.8, 9.1],
  },
  {
    menu_image: "./img/pommes-noch-mehr.jpg",
    name: "Fritten und noch mehr",
    description: "Knusprige Fritten und Beilagen – weil mehr einfach mehr ist!",
    dish: ["Fritten mit Nuggets", "Currywurst-Pommes", "Pommdöner"],
    ingredients: [
      "Ein zeitloser Klassiker, den nicht nur Kinder lieben",
      "Die Pott-Delikatesse: Pommes und Currywurst",
      "Noch nie probiert? Na dann wirds Zeit ;-)",
    ],
    price: [10.5, 7.2, 9.1],
  },
];

let shoppingBasket = [
  {
    dish: [],
    price: [],
    amount: [],
    subTotal:[],
    total: 0.0,
    deliveryCost: 2.9,
    totalWithDelivery: 0.0,
  },
];

function init(){
  loadBasket();
  render();
  checkDeliveryStatus();
}

function render(){
  let content = document.getElementById("menuContent");
  content.innerHTML = "";

  renderMenues(content);
  renderBasket();
}

function renderMenues(content) {
  for (let i = 0; i < menu.length; i++) {
    const currentMenu = menu[i];
    content.innerHTML += generateMenu(currentMenu, i);
  }
}

function renderDishes(currentMenu) {
  let returnDishes = "";
  for (let j = 0; j < currentMenu["dish"].length; j++) {
    const currentDish = currentMenu["dish"][j];
    const currentIngredient = currentMenu["ingredients"][j];
    const currentPrice = currentMenu["price"][j];
    returnDishes += generateDish(currentDish, currentIngredient, currentPrice, j);
  }
  return returnDishes;
}

function renderBasket() {
  let input = document.getElementById("shoppingBasketInput");
  input.innerHTML = "";

  let mobile = document.getElementById("shoppingBasketButton");
  mobile.innerHTML = "";

  calculatePrice();
  if (shoppingBasket[0].dish.length == 0) {
    input.innerHTML += generateEmptyBasket();
  } else {
    for (let i = 0; i < shoppingBasket[0].dish.length; i++) {
      input.innerHTML += generateBasket(
        shoppingBasket[0].dish[i],
        shoppingBasket[0].subTotal[i],
        shoppingBasket[0].amount[i]
      );
    }
    renderCosts();
  }
  mobile.innerHTML += generateMobileButton();
}

function renderCosts(){
  let input = document.getElementById("shoppingBasketInput");
  input.innerHTML += generateCosts(
    shoppingBasket[0].total,
    shoppingBasket[0].deliveryCost,
    shoppingBasket[0].totalWithDelivery
  );
}

function renderMobileBasket(){
  let mobileBasket = document.getElementById('shoppingBasketMobile');
  mobileBasket.innerHTML = "";

  for (let i = 0; i < shoppingBasket[0].dish.length; i++) {
    mobileBasket.innerHTML += generateMobileBasket(
    shoppingBasket[0].dish[i],
    shoppingBasket[0].subTotal[i],
    shoppingBasket[0].amount[i]
    );
  }
  }
function saveBasket(){
  localStorage.setItem("shoppingBasket", JSON.stringify(shoppingBasket));
}

function loadBasket(){
  let savedBasket = localStorage.getItem("shoppingBasket");
  if (savedBasket){
    shoppingBasket = JSON.parse(savedBasket);
  }
}

function generateMenu(currentMenu, i) {
  return /*HTML*/ `<div id="menuSectionStart ${i}" class="menuSection">
    <img class="menuSectionImg" src="${currentMenu["menu_image"]}" alt="Foto ${i}">
    <div class="menuDescription">
      <h2>${currentMenu["name"]}</h2>
      <p>${currentMenu["description"]}</p>
    </div>
    <div class="dishContainer">
      ${renderDishes(currentMenu)}
    </div>
  </div>
`;
}

function generateDish(currentDish, currentIngredient, currentPrice) {
  let price = currentPrice.toFixed(2).replace(".", ",");
  return /*HTML*/ `<div class="currentDishDesign">
    <div class=currentDishDesignTop>
      <div class="dishHeadline">
        <h3>${currentDish}</h3>
        <img src="./img/info-menu.png" alt="Icon Information">
      </div>
      <img onclick="addToBasket('${currentDish}', ${currentPrice})" src="./img/add.png" alt="Icon hinzufügen">
    </div>
    <p>${currentIngredient}</p>
    <h3><b>${price} €</b></h3>
  </div>
    `;
}

function generateBasket(dish, currentSubTotal, amount) {
  let subTotal = currentSubTotal.toFixed(2).replace(".", ",");
  return /*HTML*/ `<div class="addedDishes">
    <img class="d-none" src="./img/delete.png" alt="Icon Close">
    <div class="addedDish">
      <span>${dish}</span>
      <span>${subTotal} €</span>
    </div>
    <div class="addedDishAmount">
      <img id="deleteDish" onclick="deleteDish('${dish}')" src="./img/delete.png" alt="Icon Löschen">
      <div class="addedDishCounter">
        <img onclick="deleteOneDish('${dish}')" src="./img/minus.png" alt="Icon Hinzufügen">
        <span>${amount}</span>
        <img onclick="addOneDish('${dish}')" src="./img/plus.png" alt="Icon Reduzieren">
      </div>
    </div>
    </div>
    `;
}
function generateMobileBasketHead() {
  return /*HTML*/ ` 
  `;
}
function generateMobileBasket(dish, currentSubTotal, amount){
   let subTotal = currentSubTotal.toFixed(2).replace(".", ",");
   return /*HTML*/ `
   <div class="addedDishes mobileBasket">
    <div class="addedDish">
      <span>${dish}</span>
      <span>${subTotal} €</span>
    </div>
    <div class="addedDishAmount">
      <img id="deleteDish" onclick="deleteDish('${dish}')" src="./img/delete.png" alt="Icon Löschen">
      <div class="addedDishCounter">
        <img onclick="deleteOneDish('${dish}')" src="./img/minus.png" alt="Icon Hinzufügen">
        <span>${amount}</span>
        <img onclick="addOneDish('${dish}')" src="./img/plus.png" alt="Icon Reduzieren">
      </div>
    </div>
    </div>
    `;
}
function generateCosts(total, deliveryCost, totalWithDelivery){
  return /*HTML*/ `<div class="checkout">
    <div class="totalCosts">
      <span>Zwischensumme</span>
      <span>${total.toFixed(2).replace(".", ",")} €</span>
    </div>
    <div class="deliveryCosts">
      <span>Lieferkosten</span>
      <span>${deliveryCost.toFixed(2).replace(".", ",")} €</span>
    </div>
    <div class="totalWithDelivery">
      <span><b>Gesamt</b></span>
      <span><b>${totalWithDelivery.toFixed(2).replace(".", ",")} €</b></span>
    </div>
    <div class="checkoutButton">
      <span onclick="openCheckout()"><b>Bezahlen: ${totalWithDelivery.toFixed(2).replace(".", ",")} €</b><span>
    </div>
  </div>
  `;
}

function generateEmptyBasket() {
  return /*HTML*/ `<img class="shoppingBasketIcon" src="./img/warenkorb.png" alt="Icon Warenkorb">
    <p>Stöbere durch das Fritten-Wunderland von Frittenheld <br> und finde deine goldenen Glücklichmacher!</p>
  `;
}

function generateMobileButton() {
  return /*HTML*/ ` <button onclick="openMobileBasket()"> Warenkorb (${shoppingBasket[0].total.toFixed(2).replace(".", ",")} €)
  `;
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
}

function openMobileBasket(){
  document.getElementById("shoppingBasketMobile").classList.remove("d-none");
  document.getElementById("shoppingBasketMobile").classList.add("mobileShoppingBasket");
  document.getElementById("body").classList.add("hide-scrollbar");

  renderMobileBasket();
}