// let arr1 = [1, 2, 3];
// let arr2 = [100, 2, 1, 10];

// let result = [];
// function contrast(ar,ar2)
// {
//             for (let ele in ar) 
//         {
//             if(!ar2.includes(ar[ele]))
//             {
//               result.push(ar[ele]);
//             }
//         }
//         for(let ele in ar2)
//         {
//             if(!ar.includes(ar2[ele]))
//             {
//                 result.push(ar2[ele]);
//             }
//         }
//         return result.sort((a,b)=>a-b)
// }

// console.log('contrast',contrast(arr1,arr2));


const upperFunction = (str)=>
{
    let array = str.split('');
    console.log('arr',array)
    let final = [];
    for(let i = 0;i < array.length ;i ++)
    {
        final.push(array[i].charAt(0).toUpperCase()+array[i].slice(1));
    }
    return final.join('');
}
console.log('upper ',upperFunction('the car production'))