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
        return '[]';
    }
// parse the cart
    const unstringyItems = JSON.parse(stringyItems);
    return unstringyItems;
}

export function setCart(myArray){
    const stringyArray = JSON.stringify(myArray);
    stringyArray = localStorage.setItem(CART);
    
}

export function addItemToCart(){

}

export function clearCart(){

}


