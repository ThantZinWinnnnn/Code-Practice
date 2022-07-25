const combination =(str = '')=>
{
    let result = '';
    for(let i = 0;i< str.length;i++)
    {
        let inital = '';
        for(let j = i;j< str.length;j++)
        {
            inital += str[j];
            result += inital + ',';
        }
    }
    return result;
}
console.log('result ',combination('dog'))


// const sorting = (str) =>str.split('').sort().join();
// console.log('sort ',sorting('masterlaw'))

// const upper = (str) => str.split('').toUpperCase().join();
// console.log(upper('hello how are you'))

const str = 'The quick brown fox jumps over the lazy dog.';
console.log(str.slice(1,3))


const str2 = 'the quick brown fox';
let arr = str2.split('');
for(let i = 0;i < arr.length;i++)
{
    //strarr[i] = strarr[i].charAt(0).toUpperCase()+strarr[i].slice(1);
    arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
}
let str3 = arr.join('');
console.log('strr',str3)