var shoppinItems = ['books', 'sunglass', 'shoes', 'pen'];
var friendsAge = [12, 45, 78, 12, 32, 14];
var friendsAge = {
    hazi: 12,
    sunglass: 45,
    Keyboard: 78,
    mouse: 32,
    pen: 14,

}


var shoppingCart = {
    books: 3,
    sunglass: 1,
    Keyboard: 2,
    mouse: 1,
    pen: 25,
}

const keys = Object.keys(shoppingCart);
console.log(keys);

const values = Object.values(shoppingCart);
console.log(values);

for(var i = 0; i < keys.length; i++){
    // console.log(keys[i])
    // var propertyValue = shoppingCart[propertyName];
    // console.log(propertyName, propertyValue);
}

for(var propertyName in shoppingCart){
    console.log(propertyName);
}