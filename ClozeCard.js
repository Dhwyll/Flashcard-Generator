function ClozeCard(statement, cloze) {
	if (!(this instanceof ClozeCard)) {
		return new ClozeCard(statement, cloze);
	}
	var clozeIndex = statement.search(cloze);
	if (clozeIndex === -1) {
		console.log("Oops!  Check your cloze.  " + cloze + " isn't in " + statement + "\n");
	}
		else {
			this.statement = statement;
			this.cloze = cloze;
			this.clozedStatement = statement.replace(cloze, "...");
		}
}

module.exports = ClozeCard;