// Money format handler
function formatMoney(cents, format) {
  if (typeof cents == 'string') { cents = cents.replace('.',''); }
  var value = '';
  var placeholderRegex = /\{\{\s*(\w+)\s*\}\}/;
  var formatString = (format || this.money_format);

  function defaultOption(opt, def) {
     return (typeof opt == 'undefined' ? def : opt);
  }

  function formatWithDelimiters(number, precision, thousands, decimal) {
    precision = defaultOption(precision, 2);
    thousands = defaultOption(thousands, ',');
    decimal   = defaultOption(decimal, '.');

    if (isNaN(number) || number == null) { return 0; }

    number = (number/100.0).toFixed(precision);

    var parts   = number.split('.'),
        dollars = parts[0].replace(/(\d)(?=(\d\d\d)+(?!\d))/g, '$1' + thousands),
        cents   = parts[1] ? (decimal + parts[1]) : '';

    return dollars + cents;
  }

  switch(formatString.match(placeholderRegex)[1]) {
    case 'amount':
      value = formatWithDelimiters(cents, 2);
      break;
    case 'amount_no_decimals':
      value = formatWithDelimiters(cents, 0);
      break;
    case 'amount_with_comma_separator':
      value = formatWithDelimiters(cents, 2, '.', ',');
      break;
    case 'amount_no_decimals_with_comma_separator':
      value = formatWithDelimiters(cents, 0, '.', ',');
      break;
  }

  return formatString.replace(placeholderRegex, value);
};


let quantitySelectorBtn1 = document.querySelectorAll('.cart-quantity-selector button');
const removeBtn = document.querySelectorAll('.remove-btn');

quantitySelectorBtn1.forEach(button => {
  button.addEventListener('click', () => {
    const input = button.parentElement.querySelector('input');
    const value = +input.value;
    const increment = button.classList.contains('increment');
    const key = button.closest('.cart-item').getAttribute('data-key');
    // const cartItem = document.querySelector('.cart-item');
    // const key = cartItem.getAttribute('data-key');

    if (increment) {
      const newValue = value + 1;
      input.value = newValue;
      changeItemQuantity(key, newValue);
    } else if (value > 1) {
      const newValue = value - 1;
      input.value = newValue;
      changeItemQuantity(key, newValue);
    }
  });
});

removeBtn.forEach((remove) => {
  remove.addEventListener('click', (e) => {
    e.preventDefault();

    const item = remove.closest('.cart-item');
    const key = item.getAttribute('data-key');
    axios.post('/cart/change.js', {
      id: key,
      quantity: 0,
    }) 
    .then (res => {
      if (res.data.items.length === 0) {
        document.querySelector('#cart_form').remove();
        const html = document.createElement('div');
        html.innerHTML = `
        <h1>Cart</h1>
        <div class="cart-empty">
          <p>Your cart is empty</p>
          <a href="/" class="button">
            Keep shopping
          </a>
        </div>
        `

        document.querySelector('.cart-container').appendChild(html);
      } else {
        const format = document.querySelector('[data-money-format]').getAttribute('data-money-format');
        const totalDiscount = formatMoney(res.data.total_discount, format);
        const totalPrice = formatMoney(res.data.total_price, format);
        document.querySelector('#total-discount').textContent = totalDiscount;
        document.querySelector('#total-price').textContent = totalPrice;

        item.remove();
      }
    })
  })
})


function changeItemQuantity(key, quantity) {
  console.log(key, quantity);
  axios.post('/cart/change.js', {
    id: key,
    quantity
  }).then(res => {
    const format = document.querySelector('[data-money-format]').getAttribute('data-money-format');
    const totalDiscount = formatMoney(res.data.total_discount, format);
    const totalPrice = formatMoney(res.data.total_price, format);
    const item = res.data.items.find(item => item.key === key);
    const itemPrice = formatMoney(item.final_line_price, format);

    document.querySelector('#total-discount').textContent = totalDiscount;
    document.querySelector('#total-price').textContent = totalPrice;


    document.querySelector(`[data-key="${key}"] .line-item-price`).textContent = itemPrice;
  })
}





// // const incrementBtn = document.querySelector('.increment-btn');
// // const decrementBtn = document.querySelector('.decrement-btn');
// const cartItems = Array.from(document.querySelectorAll('.cart-item-card'));


// for (const cartItem of cartItems) {
//   const itemQuantityInput = cartItem.querySelector('.amount-input');
//   const incrementBtn = cartItem.querySelector('.increment-btn');
//   const decrementBtn = cartItem.querySelector('.decrement-btn');
//   const itemPriceEL = document.querySelector('.item-price-el');
//   const totalPriceEL = document.querySelector('.total-price-el');

//   const currentItemCost = itemPriceEL.dataset.priceeach;
//   const currentItemTotal = itemPriceEL.dataset.total;



//   incrementBtn.addEventListener('click', incrementQuantity);

//   function incrementQuantity(e) {
//     e.preventDefault();
//     const inputValue = +itemQuantityInput.value;
//     itemQuantityInput.value = inputValue + 1;
//   }
// };


// function getNumber(item) {
//   const str = item.value;
//   let matches = str.match(/(\d+)/);
   
//   if (matches) {
//       return matches[0];
//   }
// }

// // incrementBtn.addEventListener('click', incrementQuantity);




