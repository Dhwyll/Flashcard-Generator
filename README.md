# Flashcard-Generator
A project to practice using constructors (and possibly secondary require files)

This program simulates a flashcard educational program.

There is a file, BasicCard.js, which holds a constructor to create a simple flashcard.  A basic flashcard has a "front," which contains a question, and a back, which contains the answer.  The constructor takes in two arguments, the front and the back, and returns a card that has those two items.

There is a file, ClozeCard.js, which holds a constructor to create a more complex flashcard.  A cloze flashcard contains a statement, the cloze, and the cloze-deleted statement.  The constructor takes two arguments, the statement and the cloze, and returns a card that has the statement, the cloze, and the cloze-deleted statement.

The first draft of this is just to create a CLI that can generate the cards.  The second draft will expand the CLI that will let you run the cards and generate a score.  A possible third  draft will all you to load up a pre-defined set of cards.