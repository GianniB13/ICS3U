const prompt = require('prompt-sync')
//Is it the weekend Task
function is_it_the_weekend(day){

    if (day == 1 || day == 7){
        return true
    }
    else{
        return false
    }
}
console.log(is_it_the_weekend(1));
console.log(is_it_the_weekend(6));
//Even number divisible by 9 Task
function evNineIble(value){
    if (value % 9 == 0 && value % 2 == 0) {
        return true;
    } else {
        return false;
    }
}
console.log(evNineIble(18)); 
console.log(evNineIble(27));

//Surface Area of a Cylinder (Medium) Task
function area_circle(r) {
    return Math.PI * r**2;
}
function area_label(r, h) {
    return 2 * Math.PI * r * h;
}
function area_cylinder(r, h) {
    let circleArea = area_circle(r);
    let labelArea = area_label(r, h);
    return 2 * circleArea + labelArea;
}
let radius = 5;
let height = 10;

console.log("Area of circle with radius"+radius+"is"+area_circle(radius)+". ");
console.log("Area of cylinder label with radius"+radius+"and height"+height+ "is"+area_label(radius, height)+". ");
console.log("Surface area of cylinder with radius"+radius+"and height"+height+"is"+area_cylinder(radius, height)+". ");

//Creepy Ghosts Task
function ghost_watch(polter, wolter) {
    if ((polter == "laughing" && wolter == "laughing") || (polter == "angry" && wolter == "angry")) {
        return true;
    } else {
        return false;
    }
}
let polterMood = "neutral";
let wolterMood = "angry";
if (ghost_watch(polterMood, wolterMood)) {
    console.log("Lockdown mode is on.");
} else {
    console.log("Ghosts are neutral, everthing is fine.");
}
