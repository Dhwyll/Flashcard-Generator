var inquirer = require("inquirer");

function PlayGame(cardArray) {
	var questNum = 0;
	var score = 0;

	function askQuestion() {
		switch (cardArray[questNum].cardType) {
			case "Basic":
				inquirer.prompt([
					{
						type: "input",
						name: "response",
						message: cardArray[questNum].cardInfo.question
					}
				]).then(function(answers) {
					if (answers.response === cardArray[questNum].cardInfo.answer) {
						console.log("Correct!");
						score++;
						if (++questNum === cardArray.length) {
							console.log("\n==========\nThat's the last question.\nYour score is", score + ".\n==========\n");
							inquirer.prompt([
								{
									type: "confirm",
									name: "again",
									message: "Do you want to play again?"
								}
							]).then(function(answers) {
								if(answers.again) {
									questNum = 0;
									score = 0;
									console.log("");
									askQuestion();
								}
							});
						}
							else {
								console.log("");
								askQuestion();
							}
					}
						else {
							console.log("I'm sorry.  The correct answer is", cardArray[questNum].cardInfo.answer);
							if (++questNum === cardArray.length) {
								console.log("\n==========\nThat's the last question.\nYour score is", score + ".\n==========\n");
								inquirer.prompt([
									{
										type: "confirm",
										name: "again",
										message: "Do you want to play again?"
									}
								]).then(function(answers) {
									if(answers.again) {
										questNum = 0;
										score = 0;
										console.log("");
										askQuestion();
									}
								});
							}
								else {
									console.log("");
									askQuestion();
								}
						}
				});
				break;

			case "Cloze":
				inquirer.prompt([
					{
						type: "input",
						name: "response",
						message: cardArray[questNum].cardInfo.clozedStatement
					}
				]).then(function(answers) {
					if (answers.response === cardArray[questNum].cardInfo.cloze) {
						console.log("Correct!");
						score++;
						if (++questNum === cardArray.length) {
							console.log("\n==========\nThat's the last question.\nYour score is", score + ".\n==========\n");
							inquirer.prompt([
								{
									type: "confirm",
									name: "again",
									message: "Do you want to play again?"
								}
							]).then(function(answers) {
								if(answers.again) {
									questNum = 0;
									score = 0;
									console.log("");
									askQuestion();
								}
							});
						}
							else {
								console.log("");
								askQuestion();
							}
					}
						else {
							console.log("I'm sorry. ", cardArray[questNum].cardInfo.statement);
							if (++questNum === cardArray.length) {
								console.log("\n==========\nThat's the last question.\nYour score is", score + ".\n==========\n");
								inquirer.prompt([
									{
										type: "confirm",
										name: "again",
										message: "Do you want to play again?"
									}
								]).then(function(answers) {
									if(answers.again) {
										questNum = 0;
										score = 0;
										console.log("");
										askQuestion();
									}
								});
							}
								else {
									console.log("");
									askQuestion();
								}
						}
				});
				break;
		}
	}
	console.log("");
	askQuestion();
}
module.exports = PlayGame;