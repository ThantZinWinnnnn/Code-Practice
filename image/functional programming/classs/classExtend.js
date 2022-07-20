
//classical inheritance
//extendingty

class Human
{
    constructor(name,age)
    {
        this.name= name;
        this.age = age;
        this.data = [];
    }
    show()
    {
        console.log('name ',this.name ,'age ',this.age)
    }
    addition(ele)
    {
        this.data.push(ele);
        console.log('data ',this.data)
    }
}

class Creature extends Human 
{
    constructor(name,age,school)
    {
        super(name,age);
        this.school = school;
    }
}
let obj = new Creature('thant zin win ',20,'TUM');
obj.show();
console.log('school ',obj.school);
obj.addition('oneee');

let obj2 = new Creature('thant zin win2 ',30,'TUM1');
obj2.show();
obj2.addition('twooo');
obj2.addition('third')
