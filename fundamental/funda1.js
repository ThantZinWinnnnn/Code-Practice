const obj= { age: 25, hair: 'long', beard: true };
const obj2= { hair: 'long', beard: true };


const compare = (source,obj)  => Object.keys(obj).some(key => source.hasOwnProperty(key)
                                                                && source[key]===obj[key]);


console.log(compare(obj,obj2));
console.log(compare(obj2,obj));

let num = 25836;
const reverseFunction = (n)=>
{
    n = n.toString();
    // console.log('nume',n);
    return n.split('').reverse().join('')
}
console.log(reverseFunction(num))

let num2 = 546987;
let new2 = num2.toString().split('').reverse().join('');
console.log('string',new2);