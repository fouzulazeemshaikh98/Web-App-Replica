console.clear()
const prompt = require("prompt-sync")();
const play = prompt("Do You want to play || Or Not! ");
score = 0;
if (play != "Yes") {
    console.log("Exiting Game!")
}


else {
    console.log("let's play 🙂");
    answer = prompt("what does CPU stands for! ");
    if (answer == "Central Processing Unit") {
        score += 1;
        console.log("Correct!")
    }
    else {
        console.log("Incorrect!")
    }

    answer = prompt("What does Ram Stands for! ");
    if (answer == "Random Acess Memory") {
        score += 1;
        console.log("Correct!")
    }
    else {
        console.log("Incorrect!")
    }

    answer = prompt("What does PSU Stands for! ");
    if (answer == "Power Supply") {
        score += 1;
        console.log("Correct!")
    }
    else {
        console.log("Incorrect!")
    }

    answer = prompt("What does GPU Stands for! ");
    if (answer == "Graphic Processing Unit") {
        score += 1;
        console.log("Correct!")
        console.log("Sore:", 4, "out of", score, "are correct!")
        console.log("Overall Percentage is: ", (4/score) * 100)
    }
    else {
        console.log("Incorrect!")
    }
    console.log("Sore:", 4, "out of", score, "are correct!")
    console.log("Overall Percentage is:", (score/4) * 100,"%.")
}