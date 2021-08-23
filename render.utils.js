export function renderProduct(bean) {
    const li = document.createElement('li');
    const name = document.createElement('h3');
    const type = document.createElement('p');
    const image = document.createElement('img');
    const price = document.createElement('p');
    const button = document.createElement('button');
    

    li.classList.add('beans');
    
    name.classList.add('bname');
    name.textContent = bean.name;
    li.appendChild(name);

    image.classList.add('bbf');
    image.src = `../assets/${bean.image}`;
    li.appendChild(image);
    
    type.classList.add('beanography');
    type.textContent = bean.type;
    li.appendChild(type);

    
    price.classList.add('price');
    price.textContent = `$${bean.price.toFixed(2)} for 20 beans`;
    li.appendChild(price);
    
    li.appendChild(button);
    button.classList.add('btn-crt');
    button.textContent = 'Add to cart';
}
