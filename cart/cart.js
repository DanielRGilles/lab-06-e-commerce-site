// import { cart } from './cart-data.js';
import { getWholeTotal, rendertbr } from './renderingtr.utils.js';
import { beans } from '../products/data.js';
import { getCart, clearCart } from '../utils.js';
const tableEl = document.getElementById('tr-feed');
const wholeTot = document.getElementById('cart-total');
const cart = getCart();
const btnCl = document.querySelector('#clear-button');
for (let item of cart) {
    const trRow = rendertbr(item);
    tableEl.append(trRow);
}

const total = getWholeTotal(beans, cart);
wholeTot.textContent = total.toLocaleString('en-US', { style: 'currency', currency: 'USD' });

btnCl.addEventListener('click', () => {
    clearCart();
});
