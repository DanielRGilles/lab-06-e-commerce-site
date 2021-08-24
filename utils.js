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