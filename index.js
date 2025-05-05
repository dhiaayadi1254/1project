


function add(a, b) {
    return a + b;
  }
  console.log("1. Sum:", add(3, 4)); 
  
  
  function convertMinutesToSeconds(minutes) {
    return minutes * 60;
  }
  console.log("2. Seconds:", convertMinutesToSeconds(5)); 
  
  
  function nextNumber(num) {
    return num + 1;
  }
  console.log("3. Next number:", nextNumber(9)); 
  
  
  function lessThan100(a, b) {
    return a + b < 100;
  }
  console.log("4. Less than 100?:", lessThan100(40, 50)); 
  
  
  function isDivisibleByFive(n) {
    return n % 5 === 0;
  }
  console.log("5. Divisible by 5?:", isDivisibleByFive(25)); 
  
  
  function isPrime(num) {
    if (num <= 1) return false;
    for (var i = 2; i < num; i++) {
      if (num % i === 0) return false;
    }
    return true;
  }
  console.log("6. Is prime?:", isPrime(7)); 
  
  
  function fibonacci(n) {
    var result = [0, 1];
    for (var i = 2; i < n; i++) {
      result.push(result[i - 1] + result[i - 2]);
    }
    return result.slice(0, n);
  }
  console.log("7. Fibonacci 5 terms:", fibonacci(5)); 
  
  
  function isPalindrome(word) {
    var reversed = word.split("").reverse().join("");
    return word === reversed;
  }
  console.log("8. Is palindrome?:", isPalindrome("madam")); 
  
  
  function factorial(n) {
    var result = 1;
    for (var i = 1; i <= n; i++) {
      result *= i;
    }
    return result;
  }
  console.log("9. Factorial of 4:", factorial(4)); 
  