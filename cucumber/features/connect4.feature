Feature: Connect4

Scenario: user wants to start a new game
	When the API is invoked to start a new game
	Then an empty game board is returned
	And a GameId is returned

Scenario: user and bot makes a move
	Given a new game was started
	When the API is invoked to drop a disc in the first column
	Then the API returns the board with a disc in the first column
	Then should check the victory case
	Then  when it is not the victory case, turn the player
	And a disc played by the bot in a column