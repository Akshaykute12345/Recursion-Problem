// Problem 1 : Balanced Paranthesis

const areBracketsBalanced = (expr) => {
  
    let stack = [];
    for(let i = 0; i < expr.length; i++)
    {
        let x = expr[i];
 
        if (x == '(')
        {
            
            stack.push(x);
            continue;
        }

        if (stack.length == 0)
            return false;
             
        let check;
        switch (x){
        case ')':
            check = stack.pop();
            if (check !== '(')
                return false;
            break;
        }
    }

    return (stack.length == 0);
}
 
let expr = ['(','(',')',')']
 
if (areBracketsBalanced(expr))
    console.log("given Array is Balanced ");
else
    console.log("given Array is Not Balanced ");
 


//Problem 2  : Convesion of given Integer into Binary String

const makeBinary = (a)=>{
  let binaryString = a.toString(2)
  let typeOf = typeof(binaryString)
  return  (`${binaryString}  output data-type is :  ${typeOf}`) 
 
}

console.log('output is ======>',makeBinary(100))




//Problem 3 : Calculating Greatest Common Divisior of given Numbers.

const isGcd = (a,b)=>{
   if(a>b){
     let temp = a
     a = b
     b = temp
   };

   var max = 2
   for (var i=2;i<=a;i++){
     if(a%i == 0 && b%i == 0 && i>max){
       max = i
     }
   }
   return max
}

console.log('Greatest common Divisior is =====>',isGcd(18,12))





