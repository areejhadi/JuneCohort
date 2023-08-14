//JS has 4 different types of variables. they are var, let, const, and then just the vairable name
let age = 25
// const age3 = 26 //you dont want to do this - 'let' is subject to change. whereas const cant change, you can never override it 
// console.log(age)

// const name = "areej" 
//this works, cos name doens't change

//if later you wanted to override age:

age = 26;
console.log(age)

console.log(typeof age)


//------------ types of variables

//string - needs to be in quotation marks
//numbers
//null - empty
//undefined - nothing been set
//object 
//boolean 


//an array is a list 
//anything in between a square bracket [] is an array. it can contain string, numbers, undefine, null, etc 

let array = ["bread", "milk", "cheese"]
console.log(array)

//if you want to call on a specific item on the list:
console.log(array[3]) //here, you will get an undefined. because you dont have a 3rd item in the list (items always start with 0)

//if you have an array and want to know how many items it has you do array.length. so 

console.log(array.length);

//a way of adding things into an array is array.push("rice") - this will make the item go right to the end of the list
// array.pop gets rid of things, it will remove the last item off the list. you dont need to put anything in the bracket - array.pop() cos itll always just take the last item off
//array.splice removes stuff from the list i.e. array.spice(2,1) - remove the item starting from that index and how many items you want to remove 