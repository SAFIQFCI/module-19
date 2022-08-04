const color = 'yellow';
if (color === 'green') {
    console.log('You are a green friend');
} else if (color === 'blue') {
    console.log('You are a blue friend');
} else if (color === 'red') {
    console.log('You are a red friend');
} else if (color === 'white') {
    console.log('You are a white friend');
} else if (color === 'yellow') {
    console.log('You are a yellow friend');
} else if (color === 'black') {
    console.log('You are a black friend');
}

// switch
switch (color) {
    case 'green':
        console.log('You are a green friend');
        break;
    case 'blue':
        console.log('You are a BLUE friend');
        break;
    case 'white':
        console.log('You are a white friend');
        break;
    case 'yellow':
        console.log('You are a white friend');
        break;
    case 'black':
        console.log('You are a black friend');
    default:
        console.log('You are a kala kala friend');
}