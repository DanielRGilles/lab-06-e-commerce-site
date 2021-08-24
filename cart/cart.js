import { cart } from './cart-data.js';
import { getWholeTotal, rendertbr } from './renderingtr.utils.js';
const tableEl = document.getElementById('tr-feed');
const wholeTot = document.getElementById('cart-total');

for (let item of cart) {
    const trRow = rendertbr(item);
    tableEl.append(trRow);
}
const totalArray = [];
const total = getWholeTotal();
wholeTot.textContent = total.toLocaleString('en-US', { style: 'currency', currency: 'USD' });
