// const incrementBtn = document.querySelector('.increment-btn');
// const decrementBtn = document.querySelector('.decrement-btn');
const cartItems = Array.from(document.querySelectorAll('.cart-item-card'));


for (const cartItem of cartItems) {
  const itemQuantityInput = cartItem.querySelector('.amount-input');
  const incrementBtn = cartItem.querySelector('.increment-btn');
  const decrementBtn = cartItem.querySelector('.decrement-btn');
  const itemPriceEL = document.querySelector('.item-price-el');
  const totalPriceEL = document.querySelector('.total-price-el');

  const currentItemCost = itemPriceEL.dataset.priceeach;
  const currentItemTotal = itemPriceEL.dataset.total;



  incrementBtn.addEventListener('click', incrementQuantity);

  function incrementQuantity(e) {
    e.preventDefault();
    const inputValue = +itemQuantityInput.value;
    itemQuantityInput.value = inputValue + 1;
  }
};


function getNumber(item) {
  const str = item.value;
  let matches = str.match(/(\d+)/);
   
  if (matches) {
      return matches[0];
  }
}

// incrementBtn.addEventListener('click', incrementQuantity);


