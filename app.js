const data =[ {
    "id": 1,
    "category": "jeans",
    "name": "Ripped jeans",
    "image": "https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Vertical/11.jpg",
    "size": "XL",
    "color": "blue",
    "price": 20.99
  },
  {
    "id": 2,
    "category": "jeans",
    "name": "Boyfriend jeans",
    "image": "https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Vertical/10.jpg",
    "size": "S",
    "color": "blue",
    "price": 24.99
  },
  {
    "id": 3,
    "category": "shirts",
    "name": "Ripped sweatshirt",
    "image": "https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Vertical/7.jpg",
    "size": "XL",
    "color": "white",
    "price": 29.99
  },
  {
    "id": 4,
    "category": "jackets",
    "name": "Denim Jacket",
    "image": "https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Vertical/15.jpg",
    "size": "M",
    "color": "grey",
    "price": 40.99
  },
  {
    "id": 5,
    "category": "shirts",
    "name": "Longsleeve",
    "image": "https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Vertical/8.jpg",
    "size": "L",
    "color": "black",
    "price": 120.99
  },
 {
    "id": 6,
    "category": "jeans",
    "name": "Ripped jeans",
    "image": "https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Vertical/11.jpg",
    "size": "XL",
    "color": "blue",
    "price": 20.99
  },
  {
    "id": 7,
    "category": "jeans",
    "name": "Boyfriend jeans",
    "image": "https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Vertical/10.jpg",
    "size": "S",
    "color": "blue",
    "price": 24.99
  },
  {
    "id": 8,
    "category": "shirts",
    "name": "Ripped sweatshirt",
    "image": "https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Vertical/7.jpg",
    "size": "XL",
    "color": "white",
    "price": 29.99
  },
  {
    "id": 9,
    "category": "jackets",
    "name": "Denim Jacket",
    "image": "https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Vertical/15.jpg",
    "size": "M",
    "color": "grey",
    "price": 40.99
  },
  {
    "id": 10,
    "category": "shirts",
    "name": "Longsleeve",
    "image": "https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Vertical/8.jpg",
    "size": "L",
    "color": "black",
    "price": 120.99
  }
];

function myFunction() {
  data.forEach(d=>{
    console.log(d);
    var ligne = document.createElement("td");
    var ligne2 = document.createElement("td");
    var ligne3 = document.createElement("td");
    var ligne4 = document.createElement("td");
    var ligne5 = document.createElement("td");


  var node = document.createElement("tr");
  var textnode = document.createTextNode(d.category);
  var name = document.createTextNode(d.name);

  var image = document.createElement("img");
  image.setAttribute('src',d.image);

  var size = document.createTextNode(d.size);
  var price = document.createTextNode(d.price);
  node.appendChild(ligne)
  node.appendChild(ligne2)
  node.appendChild(ligne3)
  node.appendChild(ligne4)
  node.appendChild(ligne5)
  ligne.appendChild(textnode);
  ligne2.appendChild(name);
  ligne3.appendChild(image);
  ligne4.appendChild(size);
  ligne5.appendChild(price);
  
  document.getElementById("myList").appendChild(node);
})
}