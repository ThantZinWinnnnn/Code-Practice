class Human
{
    constructor(name,age)
    {
        this.name = name;
        this.age = age;
        this.data = [];
    }
    show()
    {
        console.log('name ',this.name,'age ',this.age)
    }
    add(ele)
    {
        this.data.push(ele);
        return this.data;
    }
};
let obj = new Human('thant zin',20);
obj.show();
console.log('data ',obj.add('one'));