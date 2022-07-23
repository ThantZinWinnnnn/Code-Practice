function *range (start,end)
{
    for(let i = start;i<= end;i++)
    {
        yield i;
    }
    return 10;
}
let r = range(1,4);
console.log('result',r.next().value);
console.log('result',r.next().value);
console.log('result',r.next().value);
console.log('result',r.next().value);
console.log('result',r.next().value);

let r2 = range(3,7);
let result = r2.next();

while(!result.done)
{
    console.log('value',result.value);
    result = r2.next();
}

for(let i of range(3,8))
{
    console.log('I', i)
}