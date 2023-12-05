
//Create a function that checks if the input/parameter is an even number
//Solution


   function isEven (number){
    return number % 4===0;
   }
   let number1 = 40;
   let number2 = 35;
   if (40 % 4 ===0) {
   
   console.log ("The number is even");
}
else {
console.log ("The number is odd")
}
   
//Create a function that prints to the console n1 to n2 where n1 is the first input/parameter and n2 is the second.
//Solution

    function valueRange(n1, n2) {
    for (let x = n1; x <= n2; x++) {
      console.log(x);
    }
  }
  valueRange(3,6);

  //Create a function that sum the values in between two number.
  //Solution

  function sumOfValues (x1,x2) {
    let sum = 0
    for (let i=x1; i<=x2; i++) {
        sum +=i;
    }
    return sum;
  }
  let result = sumOfValues (2,9)
  console.log ("sum of numbers from 2 to 9", result);