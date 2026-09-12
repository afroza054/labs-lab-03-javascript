Objective 
The objectives of Lab 02 were to learn the basic concepts of JavaScript and use JavaScript to make an HTML webpage interactive.
In this lab, I learned how to:
•	Create and use JavaScript variables.
•	Create and call functions.
•	Use onclick to run JavaScript when a button is clicked.
•	Select HTML elements using getElementById().
•	Read input using .value.
•	Change webpage text using .textContent.
•	Use if...else statements to make decisions.
•	Connect JavaScript code with HTML elements.

Tools Used
The following tools were used to complete Lab 03:
•	Visual Studio Code – for writing and editing HTML and JavaScript.
•	Web Browser – for running and testing the webpage.
•	GitHub – for storing and submitting the project repository.
•	HTML – for creating the webpage structure.
•	JavaScript – for adding interaction and dynamic behavior.

Work Completed
In this lab, I added JavaScript interactions to the workshop webpage.
Three main JavaScript functions were implemented:
Registration Status
The checkRegistration() function displays a message indicating that registration is currently open.
function checkRegistration() {
    let message = document.getElementById("registrationStatus");
    message.textContent = "Registration is currently open.";
}
Seat Availability
The checkSeats() function checks the number of available seats. The variable availableSeats is initially set to 12.
let availableSeats = 12;
If the number of available seats is greater than zero, the webpage displays the remaining number of seats. Otherwise, it displays a message saying that no seats are available.
if (availableSeats > 0) {
    message.textContent = "Seats are available. Remaining seats: " + availableSeats;
} else {
    message.textContent = "Sorry, no seats are available.";
}
Student Greeting
The showGreeting() function reads the student's name from an input field and displays a personalized welcome message.
let name = document.getElementById("studentName").value;
let output = document.getElementById("greetingMessage");

output.textContent = "Welcome, " + name + "!";
The HTML button uses onclick="checkSeats()" to call the seat-checking function when the user clicks the button.

 
Key JavaScript Explanation

Variable
A variable stores information that can be used by a program. In my code, the following variable stores the number of available seats:
let availableSeats = 12; Here, availableSeats contains the value 12.

if...else
An if...else statement allows JavaScript to make a decision based on a condition.
In my checkSeats() function:
if (availableSeats > 0) {
    message.textContent = "Seats are available. Remaining seats: " + availableSeats;
} else {
    message.textContent = "Sorry, no seats are available.";
}
If availableSeats is greater than 0, the webpage says that seats are available. Otherwise, it says that there are no seats available.

Function
A function is a block of JavaScript instructions designed to perform a particular task.
function checkSeats() {
    // instructions
}
The checkSeats() function is responsible for checking and displaying the number of available seats.

onclick
onclick runs a JavaScript function when the user clicks an HTML element.
In my HTML:
<button type="button" onclick="checkSeats()">
    Check Seat Availability
</button>
When the button is clicked, the checkSeats() function is called.

getElementById()
getElementById() finds an HTML element using its id.
For example:
let message = document.getElementById("seatMessage");
This finds the HTML element with:
<p id="seatMessage">
The id in HTML must match the value inside getElementById() so that JavaScript can find the correct element.
textContent
.textContent reads or changes the text inside an HTML element.
In my code:
message.textContent = "Registration is currently open.";
This changes the text displayed inside the selected HTML element.

GitHub Link

The completed Lab 03 project was uploaded to my GitHub repository.
GitHub Repository: https://github.com/afroza054/labs-lab-03-javascript
Lab 03 Folder:
labs/lab-03-javascript/
The folder contains the JavaScript and HTML files used for this lab, including:
labs/
└── lab-03-javascript/
    ├── index.html
    └── js/
        └── script.js


Learning Reflection

What is the job of JavaScript in a webpage?
JavaScript makes a webpage interactive and dynamic. It allows the webpage to respond to user actions, read input, perform calculations, make decisions, and change displayed content.
1. What is one clear difference between HTML and JavaScript?
HTML is used to create and structure the content of a webpage, while JavaScript is used to make the webpage interactive and dynamic. For example, HTML creates a button, while JavaScript can make the button perform an action when clicked.
2. Which JavaScript concept was most useful in this laboratory? Why?
The most useful concept was functions because they allowed me to organize different actions into separate blocks of code. For example, checkSeats() checks seat availability, while showGreeting() displays a personalized greeting. This makes the code easier to understand and manage.
3. Describe one error you faced and how you fixed it.
One error I found was that the checkSeats() button and the element with id="seatMessage" were repeated multiple times in the HTML. I fixed the problem by keeping only one button and one seatMessage element. This made the HTML structure clearer and allowed getElementById() to work correctly with the intended element.
4. What simple JavaScript improvement did you add independently?
I added a personalized greeting feature using the student's name. The program reads the name using .value and displays "Welcome, [name]!" using .textContent. This makes the webpage more interactive and user-friendly.

AI Assistance Declaration
I used an AI tool to help me understand JavaScript concepts and organize the Lab 02 report. The AI assistance was used for explanations of JavaScript features such as variables, functions, if...else, onclick, getElementById(), .value, and .textContent, as well as for organizing the report structure.
I personally checked the JavaScript and HTML code, tested the webpage interactions, and reviewed/corrected the repeated id="seatMessage" elements before submission.

