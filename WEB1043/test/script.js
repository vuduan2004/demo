let openShopping = document.querySelector('.shopping');
let closeShopping = document.querySelector('.closeshopping');
let list = document.querySelector('.list');
let listCard = document.querySelector('.listCard');
let body = document.querySelector('.body');
let total = document.querySelector('.total');
let quantity = document.querySelector('.quantity');
let cartItems = []; // Mảng lưu trữ các sản phẩm đã được thêm vào giỏ hàng

openShopping.addEventListener('click', () => {
  body.classList.add('active');
});

closeShopping.addEventListener('click', () => {
  body.classList.remove('active');
});

let products = [
  {
    id: 1,
    name: 'PRODCUT NAME 1',
    image: 'iphone.jpeg',
    price: 120000
  },
  // ... Các sản phẩm khác
];

function initApp() {
  products.forEach((value, key) => {
    let newDiv = document.createElement('div');
    newDiv.innerHTML = `
      <img src="image/${value.image}"/>
      <div class="title">${value.name}</div>
      <button class="add-to-cart" data-id="${value.id}" data-name="${value.name}" data-price="${value.price}">Add to Cart</button>
    `;
    newDiv.classList.add('product');
    list.appendChild(newDiv);
  });

  // Lắng nghe sự kiện khi bấm nút "Add to Cart"
  let addToCartButtons = document.querySelectorAll('.add-to-cart');
  addToCartButtons.forEach(button => {
    button.addEventListener('click', addToCart);
  });
}

function addToCart(event) {
  let productId = event.target.dataset.id;
  let productName = event.target.dataset.name;
  let productPrice = event.target.dataset.price;

  let cartItem = {
    id: productId,
    name: productName,
    price: productPrice
  };

  cartItems.push(cartItem);
  updateCart();
}

function updateCart() {
  listCard.innerHTML = ''; // Xóa hết các sản phẩm hiện tại trong giỏ hàng

  let totalPrice = 0;

  cartItems.forEach(item => {
    let itemDiv = document.createElement('div');
    itemDiv.innerHTML = `
      <div class="cart-item">${item.name} - $${item.price}</div>
    `;
    listCard.appendChild(itemDiv);

    totalPrice += parseInt(item.price);
  });

  total.textContent = `$${totalPrice}`;
  quantity.textContent = cartItems.length;
}

initApp();