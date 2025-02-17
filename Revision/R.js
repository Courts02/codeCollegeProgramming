// function sayHello(arg1, arg2, arg3) {

//     console.log(arg1, arg2, arg3);
// }

// sayHello(1, 2, 3)

// Math.floor()
// Math.random()

// Date.gethours()

// Array.push() adds to the end of an array
// Array.pop() removes the value at the end of an array
// Array.unshift() adds to begining of an array
// Array.shift() removes a value from the begining of the array
// Array.splice() only takes a selected arguement and can only be numbers and index values[] Stores elements
// console.log(myNewArray[0]);

// let myNewArray = [1, 2, 3, 4];

// myNewArray.push(5);

// myNewArray.splice(2)

// let login = true;

// if (pass === "PASSWORD" && username === "COURTS") {
//     alert("Welcome back" + username)

// } else if () { can create many conditions, when it finds the true condition it will excacute (else if is the next option statement js to read)

// } else {
//     alert("False user");
// };

// for (let i = 0; i < 5; i++) {  // increment to get out a loop (++)
//  alert(i);
// }

// while (login) {

//     let username = prompt("Username please?").toUpperCase();
//     let pass = prompt("Password please?").toUpperCase();

//     while (pass === "PASSWORD" && username === "COURTS") {
//         alert("Welcome back.");
//         break;
//     }

//     break;

// }    

// let i = 0;
// while (i < 5) {
//     alert(i);
//     i++;
// }

// local inside a loop
// global outside a loop

// function login() {
//     for (let un = prompt("Username please?").toUpperCase(); un === "COURTS"; un = false) {
//         alert("Welcome!");
//     };
// };

function login(un, pw) { //peramiter takes two arguements
    while (un === "COURTS" && pw === "PASSWORD") {
        alert("Welcome.");
    };
};

login(prompt("Username please?"), prompt("Password please?")); // <-- always enter function to activate breakpoint