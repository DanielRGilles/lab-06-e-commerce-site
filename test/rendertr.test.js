// IMPORT MODULES under test here:
// import { example } from '../example.js';
import { rendertbr, getWholeTotal, getTotal } from '../cart/renderingtr.utils.js';
import { findById } from '../utils.js';
import { beans } from '../products/data.js';
const test = QUnit.test;

test('take in id and quantity and produce a table row showing name,price,quantity and total', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = `<tr><td>Scarlet runner</td><td>$3.00</td><td>3</td><td>$9.00</td></tr>`;
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = rendertbr({
        id: 0,
        quantity: 3
    });

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.deepEqual(actual.outerHTML, expected);
});

test('take in an array and add up each of the items and return the total', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = 6;
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = getTotal(2, 3);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});
test('takes in an array and an id and returns the item in the arrray with the same id', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = { id: 1,
        quantity: '4' };
    const myArray = [{ id: 0,
        quantity: '3'
    },
    { id: 1,
        quantity: '4'
    },
    { id: 2,
        quantity: '4'
    }];
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = findById(myArray, 1);
    //Expect
    // Make assertions about what is expected versus the actual result
    expect.deepEqual(actual, expected);
});

test('take in an array and add up each of the items and return the total', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = '$9.00';
    const cart = [{ id: 0,
        quantity: '3'
    }];
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = getWholeTotal(beans, cart);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});

test('take in an array and add up each of the items and return the total', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = '$30.00';
    const cart = [{ id: 1,
        quantity: '3'
    }, { id: 2,
        quantity: '3'
    }, { id: 0,
        quantity: '3'
    }];
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = getWholeTotal(beans, cart);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});



