var BasicCard = require("./BasicCard.js");
var ClozeCard = require("./ClozeCard.js");
var inquirer = require("inquirer");

var cardArray = [];


var makeCards = function() {
	inquirer.prompt([
		{
			type: "list",
			name: "type",
			message: "What kind of card do you wish to create?",
			choices: ["Basic Card", "Cloze Card"]
		}
	]).then(function(answers){
		if (answers.type === "Basic Card") {
			inquirer.prompt([
				{
					type: "input",
					name: "question",
					message: "What is the question?"
				},
				{
					type: "innput",
					name: "answer",
					message: "What is the answer?"
				}
			]).then(function(answers){
				var myBasicCard = {
					cardType: "Basic",
					cardInfo: BasicCard(answers.question, answers.answer)
				};
				cardArray.push(myBasicCard);
				inquirer.prompt([
					{
						type: "confirm",
						name: "another",
						message: "Create another card?"
					}
				]).then(function(answers){
					if(answers.another) {
						makeCards();
					}
						else {
							console.log(cardArray);
						}
				});
			});
		}
			else {
				inquirer.prompt([
					{
						type: "input",
						name: "statement",
						message: "What is the statement?"
					},
					{
						type: "innput",
						name: "cloze",
						message: "What is the cloze?"
					}
				]).then(function(answers){
					var clozeCard = ClozeCard(answers.statement, answers.cloze);
					if (clozeCard.cloze) {
						var myClozeCard = {
							cardType: "Cloze",
							cardInfo: clozeCard
						};
						cardArray.push(myClozeCard);
					}
					inquirer.prompt([
						{
							type: "confirm",
							name: "another",
							message: "Create another card?"
						}
					]).then(function(answers){
						if(answers.another) {
							makeCards();
						}
							else {
								console.log(cardArray);
							}
					});
				});
			}
	});
}

makeCards();