import { addItemToCart } from './utils.js';
// import { beans } from './products/data.js';


export function renderProduct(beans) {
    const li = document.createElement('li');
    const name = document.createElement('h3');
    const type = document.createElement('p');
    const image = document.createElement('img');
    const price = document.createElement('p');
    const button = document.createElement('button');
    
    
    li.append(name, type, image, price, button);
    li.classList.add('beans');
    
    name.classList.add('bname');
    name.textContent = beans.name;
   
    image.classList.add('bbf');
    image.src = beans.image;
       
    type.classList.add('beanography');
    type.textContent = beans.type;
    
    price.classList.add('price');
    price.textContent = `$${beans.price} for 20 beans`;
    
    button.classList.add('btn-crt');
    button.textContent = 'Add to cart';
    
    button.addEventListener('click', () => {
        addItemToCart(beans.id);
        location.reload();
    });
    return li;
}
