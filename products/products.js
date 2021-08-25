// import functions and grab DOM elements
import { renderProduct } from '../render-utils.js';
import { beans } from './data.js';
import { getCart, setCart, addItemToCart } from '../utils.js';
const ulEL = document.getElementById('bean-go-here');
// initialize global state
for (let bean of beans) {
    const liItem = renderProduct(bean);
    ulEL.append(liItem);
}
// const toLocal = setCart(beans);
// console.log(toLocal);