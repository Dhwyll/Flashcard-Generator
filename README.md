# Flashcard-Generator
A project to practice using constructors (and possibly secondary require files)

This program simulates a flashcard educational program.

There is a file, BasicCard.js, which holds a constructor to create a simple flashcard.  A basic flashcard has a "front," which contains a question, and a back, which contains the answer.  The constructor takes in two arguments, the front and the back, and returns a card that has those two items.

There is a file, ClozeCard.js, which holds a constructor to create a more complex flashcard.  A cloze flashcard contains a statement, the cloze, and the cloze-deleted statement.  The constructor takes two arguments, the statement and the cloze, and returns a card that has the statement, the cloze, and the cloze-deleted statement.

The current draft allows you to create a card array of both Basic and Cloze cards and then runs the deck, gives you your final score, and asks if you want to try again.

A possible expansion will shuffle the cards before each round.
A possible expansion will allow you to choose whether to play just Basic cards, just Cloze cards, or both types.
A possible expansion will allow you to load up a pre-defined set of cards.