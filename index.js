let obj = {
    value : 50
};

let obj2 = obj;

console.log (obj);
console.log (obj2);

obj = {
    value : 70,
    name: 'name'

}
console.log (obj);
console.log (obj2);

let a = {
    toString : function() {
        console.log('to string');
        return 5;
    }
};
console.log('a', +(a+42));
console.log('a', !! a);

 let b = {

 };
 console.log('B',+ b);
 console.log('B', Number(b));

console.log('result is', "3" < "11")

    function hello (msg) {
        msg = msg || "how are you";
        console.log("hello", msg)
    }
    hello(0);
    function Es 6

    function hello (msg= "How are you"){
        console.log("hello", msg)
    }
    hello(0)

    let arr = [10,30];
    let i = 0;
    arr[i++] += 1;
    console.log(arr)

    ++ excute one time only so output is 11 and 30
    function getNumber () {
        console.log("getNumber")
        return 0;
    }
    arr[getNumber()] += 1; // != arr [getIndex()] = arr[getIndex()] +1
    my opinion ( [10+1],30) because function one time call and excute one time and the left (n) remains the default.
    console.log('number', arr)

only one time call function ,too.


let frequency = {};
for(let letter of "mississippi") {
 if (frequency[letter]) {
 frequency[letter]++;
 } else {
 frequency[letter] = 1;
 }
}
Console.log()

let nums = [10,20,30,30,20];
let val = 20;

var removeElement = function(nums, val) {
    while (nums.includes(val)){
        nums.splice(nums.indexOf(val),1);
    }
    return nums.length;
};
console.log("result ",removeElement())


let text = "Na na na na na na na na Batman!";
let wordSet = new Set(text.split(" "));
console.log('result ',wordSet);
let unique = [];
for(let word of wordSet) {
 unique.push(word);
}
console.log('re ',unique);

let array = [10,20,30]
for (let val of array) {
    console.log('value ',val);
}