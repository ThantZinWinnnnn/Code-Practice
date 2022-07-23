function* range(start,end)
{
    for(let i = start;i< end;i++)
    {
        yield i;
    }
    return 1000;
}

let r = range(1,7);
console.log('value',r.next().value);
console.log('value',r.next().value);
console.log('value',r.next().value);
console.log('value',r.next().value);
console.log('value',r.next().value);
console.log('value',r.next().value);
console.log('value',r.next().value);


let r2 = range(1,4);
let result = r2.next();
while(!result.done)
{
    console.log('V',result.value);
    result = r2.next();
}

for(let element of range(2,5))
{
    console.log('element',element)
}