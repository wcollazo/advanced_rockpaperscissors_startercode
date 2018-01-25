// JavaScript File

//Class 1:
        // Fork and clone the repo and set up your project workspace and link files
        // Write HTML for your project
//Class 2:  
        // Declare four global variables for intial state of the list of choices, the computer choice, the user choice, and the winner.  
        // Practice using console.log() and debugger to debug your code
        // Create your document ready function. 
        // Create a click hander for when the "Shoot!" button is clicked, takes in the user choice from the input field, 
        // Display the user choice to the output screen
//Class 3:  
        // Randomly choose among 'rock', 'paper', or 'scissors' from the list of choices 
        // Display the computer choice to the output screen
        // Compare the user choice and the computer choice to determine who won. 
        // Display the user winner to the output screen 
        // Clear the input box for the next choice

// *************************** YOUR CODE BELOW *******************************
//******************TEST EARLY AND OFTEN USING console.log() ******************
//****************** SERIOUSLY TEST USING console.log()!!! ******************

//GLOBAL VARIABLES



//FUNCTIONS

    


// DOCUMENT READY FUNCTION
$(document).ready(function(){
    $("#button").click(function(){
        var userChoice= $("#userinput").val();
        var computerChoiceArray = ["rock","paper","scissors"];
        var randomNum = Math.floor(Math.random()*3);
        var computerChoice = computerChoiceArray[randomNum];
        if (userChoice === "rock" && computerChoice === "rock") {
          $("#result").html("Draw");
        }
        else if (userChoice === "scissors" && computerChoice === "scissors") {
                $("#result").html("Draw");
        }
        else if (userChoice === "paper" && computerChoice === "paper") {
                $("#result").html("Draw");
        }
        else if (userChoice === "rock" && computerChoice === "scissors") {
          $("#result").html("Player Wins!");
        }
        else if (userChoice === "paper" && computerChoice === "rock") {
                $("#result").html("Player Wins!");
        }
        else if (userChoice === "scissors" && computerChoice === "paper") {
                $("#result").html("Player Wins!");
        }
        else if (userChoice === "rock" && computerChoice === "paper") {
         $("#result").html("Computer Wins!");
        }
        else if (userChoice === "scissors" && computerChoice === "rock") {
                $("#result").html("Computer Wins!");
        }
        else if (userChoice === "paper" && computerChoice === "scissors") {
         $("#result").html("Computer Wins!");
        }
        else {
            $("#result").html("Wrong");
            
        }
         $("#playerChoice").html(userChoice);
         $("#cpuChoice").html(computerChoice);
        
                });


// computerChoiceArray[0] = "rock"
// computerChoiceArray[1] = "paper"
// computerChoiceArray[2] = "sciccsors"


























})
