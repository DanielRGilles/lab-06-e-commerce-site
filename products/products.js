// import functions and grab DOM elements
import { renderProduct } from '../render-utils.js';
import { getCart, getProduct } from '../utils.js';
// import { beans } from './data.js';
import { getWholeTotal } from '../cart/renderingtr.utils.js';
const beans = getProduct();
const cartTotal = getCart();
const CART = 'CART';
// setting up an update in price for items in cart
const crtDEl = document.getElementById('cart-dollars');

// grabbing (0)cart text element
const ulEL = document.getElementById('bean-go-here');
const total = getWholeTotal(beans, cartTotal);

// the next lines update the products page cart element with prices from what is in the cart
let dolla = total.toLocaleString('en-US', { style: 'currency', currency: 'USD' });
crtDEl.textContent = `(${dolla})Cart`;

// this next line grabs the element for the clear cart event listener
const clrCart = document.getElementById('clr-cart');

// initialize global state
for (let bean of beans) {
    const liItem = renderProduct(bean);
    ulEL.append(liItem);
}

// listener to reset the cart
clrCart.addEventListener('click', () => {
    localStorage.removeItem(CART);
    location.reload();
});
