
<script src="//cdnjs.cloudflare.com/ajax/libs/ramda/0.25.0/ramda.min.js"></script>

let arr =[1,1,1,1,2,2,2,2,2,3];


let k = 2;

let groupBy = R.groupBy(ele=>ele);
let objArr = groupBy(arr);
console.log('obj arr ',objArr);