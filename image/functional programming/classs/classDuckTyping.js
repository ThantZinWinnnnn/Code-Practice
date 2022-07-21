class bird 
{
    fly()
    {
        console.log('bird can fly')
    }
}
class aeroplane
{
    fly()
    {
        console.log('aeroplane can fly')
    }
}

let obj = new bird();
obj.fly();
obj = new aeroplane();
obj.fly();
console.log('obj',obj);
console.log('hello')