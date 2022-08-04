var shoppingCart = {
    books: 3,
    sunglass: 1,
    Keyboard: 2,
    mouse: 1,
    pen: 25,
}
var penCount = shoppingCart.pan;

var penCount2 = shoppingCart['mouse'];
var propertyName = 'pen';
var propertyValue = shoppingCart[propertyName]
console.log(propertyName, propertyValue);

shoppingCart.mouse = 80;
console.log(shoppingCart)

var properties = Object.keys(shoppingCart);
var propertyValues = Object.values(shoppingCart);
console.log(properties);
console.log(propertyValues);
console.log(shoppingCart);