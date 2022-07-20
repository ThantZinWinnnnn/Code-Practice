class Human{
    constructor(name,age)
    {
        this.name = name;
        this.age = age ;
        this.data = [];
    }
    show()
    {
        console.log('name',this.name,'age',this.age)
    }
    push(ele)
    {
        this.data.push(ele);
        console.log('data',this.data);
    }
}

class Compose 
{
    constructor(name,age,school)
    {
        this.h = new Human(name,age);
        this.school = school;
        this.data2 = [];
    }
    push2(ele)
    {
        this.data2.push(ele);
        console.log('data2',this.data2)
    }
}

let obj = new Compose('thant zin',20,'TUMM');
obj.h.show();
obj.h.push('oneew');
obj.push2('twoooo');

let obj2 = new Compose('tzw',20,'tum');
obj2.h.show();
obj2.h.push('one')

