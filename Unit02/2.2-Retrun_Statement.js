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
    return circleArea + labelArea;
}
let radius = 2;
let height = 10;

console.log("Area of circle with radius"+radius+"is"+area_circle(radius)+". ");
console.log("Area of cylinder label with radius"+radius+"and height"+height+ "is"+area_label(radius, height)+". ");
console.log("Surface area of cylinder with radius"+radius+"and height"+height+"is"+area_cylinder(radius, height)+". ");

//Creepy Ghosts Task
function ghost_watch(polter, wolter) {
//13 = laughing, 7 = angry, 1 = neutral.
    if ((polter == "13" && wolter == "13") || (polter == "7" && wolter == "7")) {
        return true;
    } else {
        return false;
    }
}
console.log(ghost_watch(13,1))
console.log(ghost_watch(7,7))