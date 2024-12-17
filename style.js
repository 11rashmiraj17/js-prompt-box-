function isEven(num){
    return num%2===0
}


//ternary operator
//exprsn?stmt1:stmt2
let num=parseInt(prompt("Enter a number to check for even: "))
let numType=isEven(num)===true?'even':'odd'
//document.write('the number ${num} 'is' ${numType})

//arrow function.....................................
/*function greet()
{
    console.log("hiiii")
}*/

const greet= ()=>{
    console.log("hiiii")
}

greet()


/*function add(a,b){
    let c=a+b
    return c
}*/
const add= (a,b)=>{
    return a+b
}
//const add=(a,b)=> a+b

let sum=add(2,4)
console.log(sum)

//callback function..................................
function greeting(name,callback)
{
    console.log('Hellooo ${name}')
}
function sayGudby{
    console.log
}




