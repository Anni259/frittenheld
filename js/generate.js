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
  return /*HTML*/ `
    <div class="currentDishDesign">
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

function generateCosts(total, deliveryCost, totalWithDelivery) {
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
  </div>
  <div class="checkoutButton">
    <span onclick="openCheckout()"><b>Bezahlen: ${totalWithDelivery.toFixed(2).replace(".", ",")} €</b><span>
  </div>
  `;
}

function generateEmptyBasket() {
  return /*HTML*/ `<img class="shoppingBasketIcon" src="./img/warenkorb.png" alt="Icon Warenkorb">
    <p>Stöbere durch das Fritten-Wunderland von Frittenheld <br> und finde deine goldenen Glücklichmacher!</p>
  `;
}

function generateMobileButton() {
  return /*HTML*/ ` <button onclick="openMobileBasket()"> Warenkorb (${shoppingBasket[0].totalWithDelivery.toFixed(2).replace(".", ",")} €)
  `;
}