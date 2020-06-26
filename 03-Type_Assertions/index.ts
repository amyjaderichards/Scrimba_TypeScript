let definitelyNotAString = 'I am a string';

let strLength = definitelyNotAString.length;

// method 1
let strLength = (definitelyNotAString as string).length;

//method 2
let strLength = (<string> definitelyNotAString).length;