// Methods

// forEach
// const cheese =[ 1, 2, 3, 4, 5];

//let sum=0;

//for (let i= 0; i < cheese.length; i ++) sum+= cheese[i];

// cheese.forEach((_,idx)=>(sum+=idx))

//console.log(sum)


//map

// const arr= [1,2,3,4,5];
//const copy = arr.slice();

// for(let i =0; i <arr.length; i++) copy[i]+=2;

//console.log(arr);
//conso;e.log(copy)



// const arr=[1,2,3,4,5];

// function map(arr, func){
//     let result=[]
//     for (i=0;i<arr.length;i++)
//         result.push=(func(arr[i]));
// }
// const addOne =(el)=> {
//     return el+1
// }
// console.log(map(arr,addOne))

// Filter

// function largerThanThree(x){
//     return x>3
// }

// function filter(arr, func){
//     let result=[]

//     for(i=0; i < arr.length; i++){
//         if (func(arr[i])) result.push(arr[i]);
//     }
//     return result
// }

// console.log(filter(arr,largerThanThree))

// console.log(arr.filter(largerThanThree))


// ----------------------------------------

// console.log(arr.includes(6))
// function filter(arr, value){
//     for (i=0 ; i<arr.length;i++) if (arr[i]=== value) return true;
//     return false;
// }

// // console.log(filter(arr,3))


// // function print(n){
// //     console.log(n);
// // }
// // 5
// // forEach(arr, print);

// // for(let i = 0; i <arr.length; i ++){
// //      console.log(arr[i]);
// // }

// // function map(){}
// //     for (let i =0; i<arr.length; i++) arr+=2;

// //     function addOne(x){
// //         return x+1
// //     }
// // map(arr, addone)

// // ------------------------------
// // sort
// const arr = [ 3, 2, 4, 1, 5, 11]

// console.log(arr.sort((a,b)=> a-b));// [1,2,3,4,5,11]
// console.log(arr.sort((a,b)=> b-a));// [11,5,4,3,2,1]

// // reduce

// function add(acc, curr){ 
//     acc.push(curr*2); 
//     return acc;}

// console.log(arr.reduce((acc,curr)=> (acc+=curr),0));

// function reduce(arr, callback,initalValue){
//     let result= initalValue;
//     for(i=0;i<arr.length;i++){
//         result=callback(result,arr[i])
//     }
//     return result
// }

// //------------------------------------------------

// // Object

// const obj = {sushi: 1, steak: 2, yakiniku:3};

// // Destructuring

// const {steak, yakiniku,sushi} = obj;
// //const {steak ... rest} ...係簡化之後既野, rest係後面冇寫既野

// obj.apple = 4; //增加

// console.log(Object.keys(obj))
// // {sushi, steak, yakiniku}
// console.log(Object.values(obj))
// // {1,2,3}
// console.log(Object.entries(obj))
// // {sushi: 1, steak: 2, yakiniku:3}

// for (let [key,value] of Object.entries(obj)){
//     console.log(key,value);
// }
// sushi 1
// steak 2
// yakiniku 3 
// apple 4


//--------------------------------------------------------------------

//Factory function

const sushiBowl = ( protein , veggie, sauce)=> {
    return{
        protein,
        veggie,
        sauce,
    }
}

const tunaBowl = sushiBowl("tuna","seaweed","soyu")
const salmonBowl = sushiBowl("salmon","lettuce","mayo")