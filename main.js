let products = ['Chess', 'Checkers', 'Monopoly', 'Ludo','Scrabble'];
let cart = [];
const productPrices = [10.99, 12.29, 20.20, 15.89, 10.77]; 
const productImages = ['assets/chess.jpg',
                       'assets/checkers.jpg',
                       'assets/monopoly.webp',
                       'assets/ludo.jpg',
                       'assets/scrabble.jpeg'];

function openPopup() {
  document.getElementById('popup').style.display = 'flex';
}

function closePopup() {
  document.getElementById('popup').style.display = 'none';
}

let customerFirstName;
let customerLastName;
let customerEmail;
function customerId() {
  
    const fullName = document.getElementById('name').value.trim().split(" ");
    if (fullName.length >= 2) {
    customerFirstName = fullName[0].charAt(0).toUpperCase() + fullName[0].slice(1); 
    customerLastName = fullName[fullName.length - 1].charAt(0).toUpperCase() + fullName[fullName.length - 1].slice(1);
    customerEmail = document.getElementById('email').value;

    if (customerEmail && checkEmail(customerEmail)) {
      document.getElementById('popup').style.display = 'none';
      document.getElementById('welcome-message').innerText = `Welcome, ${customerFirstName} ${customerLastName}!`;
      document.getElementById('welcome').classList.remove('hidden');
      displayProducts();

    } else {
      alert('Please provide a valid email.');

    }
  } else {
    alert('Please provide both first and last name.');

  }
}

function checkEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

function displayProducts() {
  const productsContainer = document.getElementById('products');
  productsContainer.innerHTML = '';
  products.forEach((product, index) => {
    const productElement= document.createElement('div');
    productElement.className = 'product-item';
    productElement.innerHTML = `<img src="${productImages[index]}" alt="${product}">
                                <div class="product-details">
                                <p>${product}</p>
                                <p class="price">$${productPrices[index]}</p>
                                <button onclick="addToCart(${index})">Add to Cart</button>
                                </div>`;
    productsContainer.appendChild(productElement);
  });
}

function addToCart(index) {
  const product = products[index];
  let quantity = prompt(`How many ${product} do you want to add to cart?`, '1');
  if (quantity === null || quantity === '' || isNaN(quantity)||parseInt(quantity) <= 0) {
    alert('Invalid quantity. Please enter a valid number greater than zero.');
    return;
  }
  quantity = parseInt(quantity);
  const totalPrice = quantity * productPrices[index];
  cart.push({ product, quantity, totalPrice });
  alert(`${quantity} ${product}(s) added to cart.`);
}

function checkout() {
    const cartItemsContainer = document.getElementById('cart-items');
    cartItemsContainer.innerHTML = '';
    let total = 0;
    cart.forEach(item => {
      const itemElement = document.createElement('div');
      itemElement.textContent = `${item.quantity} ${item.product} - Total Price: $${item.totalPrice.toFixed(2)}`;
      cartItemsContainer.appendChild(itemElement);
      total += item.totalPrice;
    });
    
    const totalElement = document.createElement('div');
    totalElement.textContent = `Total: $${total.toFixed(2)}`;
    cartItemsContainer.appendChild(totalElement);
    
    const checkoutButton = document.createElement('button');
    checkoutButton.textContent = 'Done';
    checkoutButton.onclick = function() {
      alert(`Thank you for shopping with us, ${customerFirstName} ${customerLastName}!\n\nTotal: $${total.toFixed(2)}`);
      cart = []; 
      cartItemsContainer.innerHTML = ''; 
    };
    cartItemsContainer.appendChild(document.createElement('br'));
    cartItemsContainer.appendChild(checkoutButton);
  }