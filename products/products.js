// import functions and grab DOM elements
import { renderProduct } from '../render-utils.js';
import { beans } from './data.js';
import { getWholeTotal } from '../cart/renderingtr.utils.js';
import { getCart } from '../utils.js';
const cartTotal = getCart();
const crtDEl = document.getElementById('cart-dollars');
const ulEL = document.getElementById('bean-go-here');
const total = getWholeTotal(beans, cartTotal);
let dolla = total.toLocaleString('en-US', { style: 'currency', currency: 'USD' });
crtDEl.textContent = `(${dolla})Cart`;
const clrCart = document.getElementById('clr-cart');


// initialize global state
for (let bean of beans) {
    const liItem = renderProduct(bean);
    ulEL.append(liItem);
}



clrCart.addEventListener('click', () => {
    localStorage.removeItem('CART');
    location.reload();
});
