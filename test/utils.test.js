// IMPORT MODULES under test here:
// import { example } from '../example.js';
import { renderProduct } from '../render-utils.js';
const test = QUnit.test;

test('passing in the object data and comparing to what we have hard coded onto the page', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = `<li class="beans"><h3 class="bname">Scarlet runner</h3><p class="beanography">a large pole variety</p><img class="bbf" src="scarletr.jfif"><p class="price">$3 for 20 beans</p><button class="btn-crt">Add to cart</button></li>`;
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = renderProduct({
        id: '0',
        name: 'Scarlet runner',
        image: 'scarletr.jfif',
        type: 'a large pole variety',
        price:  3,
        germination: '7 to 14'

    });

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual.outerHTML, expected);
});
