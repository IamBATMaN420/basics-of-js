//instalation of node js to start with js 
/* console.log("hello world "); */
console.log("hello world");
// mdn is the best place to learn js 
//variables in js 
/*
 3 type of  variable in js theu=y are 
a> var (changes if i change it & it has global scope)
b> let(changes if i chnage it & it has local scope menas used in prod. )
c> const(always stay same never changed) 

there is 2 type of data type in js:->
a>premetive data type (stack memory)
b> non-premetive data typr (heap memory)

**premetive data type (7 types )
     1> int
     2> long int 
     3> char
     4> boolean
     5> undefined
     6> null
     7> decimal


** non-premetive data type :-> (3)
1> object
2> array
  a>collection of differnt type of things and data types

  b>syntax:-> const array_name=["","ayush",1,true]

  c>making array with constructor 
  const array_name=new Array("","ayush",1)

  d>property of the array ==> length give the length of the array

  e> high order fxnof array
    1> push,pop,shift,unshift,slice,splice,foreach,map,filter,reduce
3> fxn


## 2 type of memory -->
a> stack mem :-> means if we change something orginal value will not be chnaged
b> heap mem:-> means if we changed it that means the original data will be changed


## loops in the language :->
1> while loop (when we know the condition when the code will run)
2> do while loop (when we have to run the code atleast one time)
3> for loop (when we exactly how many times the code will run)


## string interpolation we can we use it instead of concatination:->
(`${var name }`);

## fxn:->
1> normal fxn 
 ex:->
    function f_name() {
     log("heeloo world")
};
--------------------------------------------------------
2> arraow fxn:
const fxn_name=(argument if needed)+>{
 contion }
 -----------------------------------------------------------------
3> callback fxn =>
  a> fxn that take fxn as argument
  b> there is 2 cb in the js 
         1> sync cb
         2> async cb



*/

// Define the function without para meter
function sayHello() {
  return "hi how are you";
}

// Call the function and store the result
const message = sayHello();

// Output the result to the console
console.log(message);

// fxn with para meter
 function ayush(a,b) {
    v=(a+b)/2;
    console.log(v);
    
 }
 ayush(2,4);


 // arraow fxn 
 // from the basic fxn we will try to build the arrow fxn
 const avg=(a,c)=>{
  v=(a+c)/2;
  return v;
 }
 const ans=avg(2,4);
 console.log(ans);
 // or 
 const add=(a,b)=>{
  return a+b;
 }
 console.log(add(1,2));



 // array (collection  of the different data types)
 let fruit=["apple","mango"]
 console.log(fruit);
 //new array with constractor
 const newarry =new Array(1,true,"array");
 console.log(newarry);
 
 // acess and modify array:->
 console.log(fruit[1]);// access
 fruit[1]="pinaaple";
 console.log(fruit);
 // it heap memo that why it will be changed fully
 // but as we save it in the variable let fruit that's why it beca,e stack memo
 // but actually it's array data heap memory


 //prop of array ==> length
 const lenght=fruit.length;
 console.log(lenght);
 


 // high order fxn of array

fruit.push("ayush")// enter a element at last
console.log("push"+"     "+fruit);

fruit.pop();//delete the element from last
console.log("pop"+"   "+fruit);


fruit.shift();//remove the 1st element
console.log("shift"+"   "+fruit);

fruit.unshift("apple");// add the elemnt on the1st
console.log("unshift"+"    "+fruit);

// push and pop last e kore shift and unshift 1st e kore 
// push = unshift and pop = shift


//for each
fruit.forEach( fruits=>{
   console.log(fruits);
   // here we have to use for each loop 
  
})

// call back fxn 

// Define a function that takes a callback
function greet(name, callback) {
  console.log(`Hello, ${name}`);
  callback();
}

function basak() {
  console.log(`fuck the world`);
  
}
 greet(`carry`,basak);


function AyushBasak(a,b,callback) {
    const gang=(a+b)/2;
    console.log(gang);
    callback();
  }
function percent(c,d) {
  const gang_2=(c+d)/100;
  console.log(gang_2);
  }

AyushBasak(1,2,()=>percent(50,60));
// while accesing the cb fxn we have to use arrow fxn
//-----------------------------------------------------------------------------------------------------

//map,filter,reduce same tachnique is being used 

//map
let mood=[5,4,3,2];// 5+4+3+2==14
let ayush11=mood.map(mc=>mc*2);
console.log(ayush11);
// crate new  array with the arrow fxn

//reduce 
// for reduce fxn 
let ayush12=mood.reduce((acc,c_v)=>{
      return acc+c_v;},0

)// systax:-> 
// accumulator the intial value of array the call back consist of these two value 
/* .reduce((accumulator,curent value )=>{
  return 
  }) */ 
console.log(ayush12);





