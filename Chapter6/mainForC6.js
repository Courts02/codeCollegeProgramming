var myName = "CD";
var sheepCounted = 0;
var family = ["Mom", "Daniel", "Tristen"];

if (myName.length > 5) {
    console.log("Hello" + myName)
} else if (myName.length === 2) {
    console.log(myName + "can not be that short.")
} else {
    console.log("Eish")
}

while (sheepCounted < 10) {
    console.log("I have counted" + sheepCounted + "sheep!");
    sheepCounted++
}
console.log("ZzZzZzZzZzZzZz");

for (var goatsCounted = 0; goatsCounted < 10; goatsCounted++) {
     console.log("I have counted" + goatsCounted + "goats!");
}
console.log("ZzZzZzZzZzZZzZz");

for (var i = 0; i < family.length; i++) {
    console.log("This is my family member " + family[i])
}

for (var x = 2; x < 1000; x = x *2) {
    console.log(x);
}