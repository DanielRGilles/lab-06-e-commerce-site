// IMPORT MODULES under test here:
// import { example } from '../example.js';
import { rendertbr, getWholeTotal } from '../cart/renderingtr.utils.js';
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
    const expected = 15;
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = getWholeTotal([1, 2, 3, 4, 5]);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});
