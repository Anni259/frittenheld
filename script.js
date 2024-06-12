let menu = [
  {
    menu_image: "./img/pommes.jpg",
    dish: "Fritten",
    description: "leckere fritierte Sonnenstrahlen",
    name: ["Fritten normal", "Curly Fries", "Potatoe Wedges"],
    ingredients: [
      "frittierte Sonnenstrahlen, was sonst ;-)",
      "gelockte Sonnenstrahlen",
      "Kartoffelspalten",
    ],
    price: [5.8, 6.99, 7.5],
  },
  {
    menu_image: "./img/pommes-mehr.jpg",
    dish: "Fritten und mehr",
    description: "fritierte Sonnenstrahlen mit leckeren Toppings",
    name: ["Fritte spezial", "Pommes rot-weiß", "Poutine"],
    ingredients: [
      "echt holländisch mit frischen Zwiebeln",
      "Ruhrpotts Liebling",
      "Pommes mit Bratensauce und Käsestückchen, ein echter Klassiker aus Kanada",
    ],
    price: [7.9, 6.8, 99.99],
  },
  {
    menu_image: "./img/pommes-noch-mehr.jpg",
    dish: "Fritten und noch mehr",
    description: "fritierte Sonnenstrahlen mit leckeren Beilagen",
    name: ["Fritten mit Hähnchen-Nuggets", "Currywurst-Pommes", "Pommdöner"],
    ingredients: [
      "Ein Klassiker, den auch Kinder lieben",
      "Ruhrpotts Liebling deluxe",
      "Noch nie probiert? Na dann wirds Zeit ;-)",
    ],
    price: [10.75, 7.2, 9.1],
  },
];
render();

function render(){
    let content = document.getElementById("content");
    content.innerHTML = "";

    for (let i = 0; i < menu.length; i++) {
        const dish = menu[i];
        content.innerHTML += generateDish (dish, i);
    }
}

function generateDish(dish, i) {
    return /*HTML*/ `<div class="menuSection">
        <img class="menuSectionImg" src="${dish["menu_image"]}" alt="Foto ${i}">
        <div class="menuDescription">
            <h2>${dish["dish"]}</h2>
            <p>${dish["description"]}</p>
        </div>
        <div>

        </div>
    </div>`;
}