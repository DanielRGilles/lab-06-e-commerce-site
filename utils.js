export function findById(myArray, id) {
    // loop through the array
    for (let item of myArray) {
        // if this item's id matches the id we were passed as an argument . . .
        if (item.id === id) {
          // . . . return that item
            return item;
        }
    }
}
const CART = 'CART';
export function getCart(){
// grabs the CART in local storage

    const stringyItems = localStorage.getItem(CART);
    if (!stringyItems) {
        return [];
    }
// parse the cart
    const unstringyItems = JSON.parse(stringyItems);
    return unstringyItems;
}

export function setCart(myArray){
    const stringyArray = JSON.stringify(myArray);
    // takes the array and makes it a string
    localStorage.setItem(CART, stringyArray);
    // puts the stringy array in local storage with key=Cart and value = to stringArray
}

export function addItemToCart(idOfItem){
    const cart = getCart();
    const productInC = findById(cart, idOfItem);
    
    if (productInC) {
        productInC.quantity++;
    } else {
        const addNewItem = { id: idOfItem, quantity: 1 };
        cart.push(addNewItem);
    }
    setCart(cart);
}

export function clearCart() {
    const cart = getCart();
    
    const stringyCart = JSON.stringify(cart, true, 2);
    
    alert(stringyCart);

   
    localStorage.removeItem(CART);

   
    window.location = '../index.html';
}


