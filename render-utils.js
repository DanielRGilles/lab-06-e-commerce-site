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
    image.src = `../assets/${beans.image}`;
       
    type.classList.add('beanography');
    type.textContent = beans.type;
    
    price.classList.add('price');
    price.textContent = `$${beans.price.toFixed(2)} for 20 beans`;
    
    button.classList.add('btn-crt');
    button.textContent = 'Add to cart';
    
    button.addEventListener('click', () => {
        alert(`you clicked ${beans.name}`);
    });
    return li;
}
