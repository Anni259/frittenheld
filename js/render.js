function render() {
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
    returnDishes += generateDish(
      currentDish,
      currentIngredient,
      currentPrice
    );
  }
  return returnDishes;
}

function renderBasket() {
  let input = document.getElementById("shoppingBasketInput");
  input.innerHTML = "";
  let inputMobile = document.getElementById("shoppingBasketInputMobile");
  inputMobile.innerHTML = "";
  let mobile = document.getElementById("shoppingBasketButton");
  mobile.innerHTML = "";

  calculatePrice();

  createBasket(input);
  mobile.innerHTML += generateMobileButton();
  inputMobile.innerHTML = input.innerHTML;
}

function createBasket(input) {
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
}

function renderCosts() {
  let input = document.getElementById("result");
  input.innerHTML = "";
  let inputMobile = document.getElementById("resultMobile");
  inputMobile.innerHTML = "";

  input.innerHTML += generateCosts(
    shoppingBasket[0].total,
    shoppingBasket[0].deliveryCost,
    shoppingBasket[0].totalWithDelivery
  );
   inputMobile.innerHTML = input.innerHTML;
}