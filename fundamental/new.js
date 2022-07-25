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