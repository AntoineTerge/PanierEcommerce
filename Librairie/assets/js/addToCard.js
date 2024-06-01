const product = [
  {
    id: 0,
    Image: "assets/img/1984.jpg",
    title: "1984",
    author: "George Orwell",
    price: 12.99,
  },
  {
    id: 1,
    Image: "assets/img/99f.jpg",
    title: "99F",
    author: "Frédéric Beigbeder",
    price: 9.99,
  },
  {
    id: 2,
    Image: "assets/img/dracula.jpg",
    title: "Dracula",
    author: "Bram Stoker",
    price: 4.99,
  },
  {
    id: 3,
    Image: "assets/img/hexagone.jpg",
    title: "Hexagone",
    author: "Laurent Deutsch",
    price: 9.99,
  },
  {
    id: 4,
    Image: "assets/img/riviere.jpg",
    title: "Les riviére pourpres",
    author: "Jean-christophe Grangé",
    price: 8.99,
  },
  {
    id: 5,
    Image: "assets/img/runing.jpg",
    title: "Runing Man",
    author: "stephen King",
    price: 11.99,
  },
];
const categories = [
  ...new Set(
    product.map((item) => {
      return item;
    })
  ),
];

let i = 0;
document.getElementById("root").innerHTML = categories
  .map((item) => {
    var { Image, title, price, author } = item;
    return (
      `
      
      <div class='box'>
    <div class='img-box'>
    <img class='images' src="${Image}"></img>
    </div>
    <div class='bottom'>
    <h3>${title}</h3>
    <h3>${author}</h3>
    <h2>${price} €</h2>` +
      "<button class='addCart' onclick='addToCart(" +
      i++ +
      ")'>Ajouter au pannier</button>" +
      `</div>
      
    </div>
    
    `
    );
  })
  .join("");

var cart = [];

function addToCart(a) {
  cart.push({ ...categories[a] });
  displaycart();
}

function delElement(a) {
  cart.splice(a, 1);
  displaycart();
}

function displaycart(a) {
  let j = 0;
  total = 0;

  document.getElementById("count").innerHTML = cart.length;

  if (cart.length == 0) {
    document.getElementById("cartItem").innerHTML = "Votre pannier est vide";
    document.getElementById("total").innerHTML = +0 + "€";
  } else {
    document.getElementById("cartItem").innerHTML = cart
      .map((item) => {
        var { Image, title, price, author } = item;
        total = total + price;

        document.getElementById("total").innerHTML = +total + " €";
        return (
          `<div class='cart-item'>
        <div class='row-img'>
              <img class='rowing' src=${Image}>
        </div>
        <p style='font-size:12px;'>${title}</p>
        <h3>${author}</h3>
        <h2 style='font-size:15px;'>${price} €</h2> ` +
          "<i class='fa-solid fa-trash' onclick='delElement(" +
          j++ +
          ")'></i></div>"
        );
      })
      .join("");
  }
}
