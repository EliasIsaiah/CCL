let question1 = `who are you? 
a) a handsome horse 
b) a handsome squidward 
c) a daikon radish`;

let answer1 = prompt(question1);

let question1CorrectAnswer = "a";

let score = 0;

if (answer1 === question1CorrectAnswer) {
  alert("correct!");
  score += 10;
} else {
  alert("incorrect :(");
}

alert("your final score was: " + score);
