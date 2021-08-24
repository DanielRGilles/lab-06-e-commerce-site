// import functions and grab DOM elements
import { renderProduct } from '../render-utils.js';
import { beans } from './data.js';
const ulEL = document.getElementById('bean-go-here');
// initialize global state
for (let bean of beans) {
    const liItem = renderProduct(bean);
    ulEL.append(liItem);
}

