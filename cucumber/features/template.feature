Feature: Cookiecutter

Scenario: player 1 has a horizontal victory!
	Given a board with 7 columns
	And player 1 put a yellow color in the first column of the board
	And player 2 put a red color in the first column of the board
	And player 1 put a yellow color in the second column of the board
	And player 2 put a red color in the second column of the board
	And player 1 put a yellow color in the third column of the board
	And player 2 put a red color in the third column of the board
	When player 1 put a yellow color in the fourth column of the board
    Then player 1 gets a message that he won the game