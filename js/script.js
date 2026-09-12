let availableSeats = 12;
function checkRegistration() {
    let message = document.getElementById("registrationStatus");
    message.textContent = "Registration is currently open.";
}
function checkSeats() {
    let message = document.getElementById("seatMessage");

    if (availableSeats > 0) {
        message.textContent = "Seats are available. Remaining seats: " + availableSeats;
    } else {
        message.textContent = "Sorry, no seats are available.";
    }
}
function showGreeting() {
    let name = document.getElementById("studentName").value;
    let output = document.getElementById("greetingMessage");

    output.textContent = "Welcome, " + name + "!";
}
/* alert("JavaScript is connected successfully");
let capacity= 30;
let registeredStudents =15;
let availableSeats = capacity-registeredStudents;

if (availableSeatts > 14) {
    alert("seats available");    
}
else{
    alert("no seats");
}
alert("Available Seats:" +availableSeats);

function showPrice(price) {
    console.log("The price is $" +price);
    
}
showPrice(150000);

function checkRegistration(){
    let message = document.getElementById("statusMessage");
    message.textContent = "Registration is open";
}

function showGreet(){
    let name = document.getElementById("studentName").value;
    let output = document.getElementById("greetMessage");
    output.textContent("welcome, " +name + "!");
}
    
   function showMsg(){
    alert("Hello")
   }
   function updateStatus(){
    let updateMsg = document.getElementById(workStatus);
    updateMsg.textContent = "open";
   }*/