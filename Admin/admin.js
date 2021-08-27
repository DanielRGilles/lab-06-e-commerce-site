import { addItemToProduct } from '../utils.js';
const form = document.getElementById('new-product');

// how do we get the data out of our form?
form.addEventListener('submit', (event) => {
// this prevents the storage of data in query parameters in the URL, and also prevents the refreshing of the page
    event.preventDefault();

    const data = new FormData(form);

    const product = {
        id: Number(data.get('id')),
        name: data.get('name'),
        image: data.get('image'),
        type: data.get('type'),
        price: Number(data.get('price')),
        germination: data.get('germination'),
    };

    addItemToProduct(product);

    window.location = '../products/index.html';
});
