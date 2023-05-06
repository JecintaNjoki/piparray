let people=[
    {name:"Ann",age:20,height:"3ft"},
    {name:"Henry",age:30,height:"7ft"},
    {name:"Susan",age:40,height:"6ft"},
];
let ages=people.map(item=>item.age);
console.log({ages});

let weights= people.map(item=>{
    return{
        ...item,
        weight:50,
    }
})
console.log(weights);

let changedWeight=weights.map(item=>{
    if(item.name === "Ann" ){
        item.weight=60;
    }
    return item
});
console.log({changedWeight});

//Given an array of strings, use a function to reverse all 
//the elements in the string in ascending order and the
// specific elements in descending order
function reverseArray(){
let empty=[]
let array=array.reverse(item=>item);
array.push(empty)

}
console.log({empty});
let array=[5,15,25,35,45,55,65,75] 
// Given an array of objects, each object representing a person with
// a name and age property, write a function that returns the sum of 
//all people who are less than 18 years.
// const people = [
//   { name: 'Alice', age: 17 },
//   { name: 'Eunice', age: 22 },
//   { name: 'Charlie', age: 14 },
//   { name: 'Max', age: 19 },
// ];
function sumAge(years) {
    let sum = 0;
    for (let i = 0; i < years.length; i++) {
      if (years[i].age < 18) {
        sum += years[i].age;
      }
    }
    return sum;
  }




//Using JS functions and an array of numbers, return positive if an 
//element within the array is positive, negative if an element is 
//negative, else zero
// function positiveNums(){

// }
  



//Given an array of objects, where each object represents an employee 
//with an id, name, and salary property, write a function that returns 
//a new array of employee objects sorted by their salary in ascending order.




