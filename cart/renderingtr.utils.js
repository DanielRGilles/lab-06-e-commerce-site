import { findById } from '../utils.js';
import { beans } from '../products/data.js';

export function rendertbr(itemCart){
    const tr = document.createElement('tr');
    const nameTd = document.createElement('td');
    const priceTd = document.createElement('td');
    const quantityTd = document.createElement('td');
    const totalTd = document.createElement('td');

    const cartSelection = findById(beans, itemCart.id);
    nameTd.textContent = cartSelection.name;
    priceTd.textContent = cartSelection.price.toLocaleString('en-US', { style: 'currency', currency: 'USD' });
    quantityTd.textContent = itemCart.quantity;
    tr.append(nameTd, priceTd, quantityTd, totalTd);
    const total = getTotal(cartSelection.price, itemCart.quantity);
    totalTd.textContent = total.toLocaleString('en-US', { style: 'currency', currency: 'USD' });
    tr.append(nameTd, priceTd, quantityTd, totalTd);
    return tr;
}

export function getTotal(price, quantity) {
    const total = price * quantity;
    return total;
}

export function getWholeTotal(allP, wholeC){
    let acculumator = 0;
    for (let item of wholeC) {
        const product = findById(allP, item.id);
        const total = product.price * item.quantity;    
        acculumator = acculumator + total;
    }
    return acculumator.toLocaleString('en-US', { style: 'currency', currency: 'USD' });
}    
