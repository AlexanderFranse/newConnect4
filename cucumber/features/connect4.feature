Feature: Connect4

Scenario: player 1 won with a horizontal victory!
	Given a board with 7 columns
	And player 1 plays with the red disc
	And player 2 plays with the yellow disc
	And player 1 puts his disc in the first column
	And player 2 puts his disc in the first column
	And player 1 puts his disc in the second column
	And player 2 puts his disc in the second column
	And player 1 puts his disc in the third column
	And player 2 puts his disc in the third column
	When player 1 puts his disc in the fourth column
	Then a message is printed which says Player 1 won!