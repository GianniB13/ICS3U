const prompt = require('prompt-sync')();
//Testing Scope Task
// Correct scope
function calculateSum() {
    let num1 = 5; 
    let num2 = 10; 
    return num1 + num2;
}

let result = calculateSum();
console.log("The sum is:", result); //output should be 15.

// For the scope to be incorrect the let statements would be outside of the function therefore running the code would not work.

//Operation Plumber
console.log(hotWater());

function hotWater() {
  let waterTemp = "cold";
  if (waterBoilerSwitch() == false){
    waterBoilerSwitch(waterTemp);
  }
  return waterTemp;
}

function waterBoilerSwitch(waterTemp){
  if (waterTemp == "cold") {
    waterTemp = "hot";
    return true;
  } else {
    waterTemp = "cold";
    return false;
  }
}