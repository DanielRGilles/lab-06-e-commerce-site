## Making a plan
1) Make a drawing of your app. Simple "wireframes"
2) Once you have a drawing, name the HTML elements you'll need to realize your vision
3) For each HTML element ask: Why do I need this?
4) Once we know _why_ we need each element, think about how to implement the "Why" as a "How"
5) Is there some state we need to initialize?
6) Find all the 'events' (user clicks, form submit, etc) in your app. Ask one by one, "What happens when" for each of these events. Does any state change?
7) Think about how to validate each of your steps
8) Consider your data model. What objects will you be using? What are the key/value pairs? What arrays do you need? What needs to live in local storage?
9) Consider what features _depend_ on what other features. Use this dependency logic to figure out what order to complete tasks.

## HTML Setup for Cart page
1) link home page to cart page.
2) hard code a table for cart page.
## JS Functions
3) TDD a function to render said table.
4) Once function is passing tests add to renderingtr.utils.js and link to cart.js
5) hard code cart-data.js with id and quantity
6) import cart-data to cart.js
7) in cart.js use a get total function and a for loop to create totals for table.
8) use another function to add table-totals together and inject that into a td for cart total