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
    price: [5.8, 6.99, 7.5],
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
    dish: ["Fritten mit Hähnchen-Nuggets", "Currywurst-Pommes", "Pommdöner"],
    ingredients: [
      "Ein zeitloser Klassiker, den auch Kinder lieben",
      "Die Pott-Delikatesse: Pommes und Currywurst",
      "Noch nie probiert? Na dann wirds Zeit ;-)",
    ],
    price: [10.75, 7.2, 9.1],
  },
];
render();

function render(){
    let content = document.getElementById("menuContent");
    content.innerHTML = "";

    renderMenues(content);
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

function generateMenu(currentMenu, i) {
    return /*HTML*/ `<div id="menuSectionStart ${i}" class="menuSection">
        <img class="menuSectionImg" src="${
          currentMenu["menu_image"]
        }" alt="Foto ${i}">
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
    return /*HTML*/ `<div class="currentDishDesign">
        <div class=currentDishDesignTop>
            <div class="dishHeadline">
                <h3>${currentDish}</h3>
                <img src="./img/info-menu.png" alt="Icon Information">
            </div>
            <img onclick="XYZ()" src="./img/add.png" alt="Icon hinzufügen">
        </div>
        <p>${currentIngredient}</p>
        <h3><b>${currentPrice} €</b></h3>
    </div>
    `;
}