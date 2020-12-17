// As this is type 'any' we need to cast it as a string before 
// using the string properties
let definitelyNotAString: any = 'I am a string';

let strLength = (<string> definitelyNotAString).length;