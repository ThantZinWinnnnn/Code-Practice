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

function palindrome(string)
{
    let length = string.length;

    for(let i = 0;i< length/2;i++)
    {
        if(string[0] !== string[length-1-i])
        {
            return 'It is not a palindrome'
        }
        return 'It is a palindrome sentence'
    }
}

let take = prompt('type a sentence for palindrome');
console.log('palindrome ',palindrome(take))

let string = 'Web Development Tutorial';
function findLongestWord(str)
{
    let strSplit = str.split(' ');
    let longestWorsd = 0;
    for(let i = 0;i < strSplit.length;i++)
    {
        if(strSplit[i].length > longestWorsd)
        {
            longestWorsd = strSplit[i].length;
        }
    }
    return longestWorsd;
}
console.log('longsest ',findLongestWord(string));



let strr =  'The quick brown fox';
function getVowel(str)
{
    // let arr = str.split(' ');
    let vowelsCount = 0;
    let vowels = ['a','e','i','o','u'];
    for(let char of str)
    {
        if(vowels.includes(char))
        {
            vowelsCount ++;
        }
    }
    return vowelsCount;
}
console.log('vowels Count ',getVowel(strr));






function findLongest(str)
{
    let arr = str.split(' ');
    console.log('sr ',arr);
    let longestWord = arr.sort((a,b)=> b.length - a.length);
    return longestWord[0];
}
console.log('long',findLongest(string));


function findWord (str)
{
    let arr = str.split(' ');
    console.log('sr ',arr);
    let longestWord = arr.reduce(function(longest,current)
    {
        return current.length > longest.length ?current :  longest;
    },"");
    return longestWord;
}
console.log('longestw ',findWord(string));