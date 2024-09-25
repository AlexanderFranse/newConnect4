Feature: Connect4

Scenario: user wants to start a new game
	When the API is invoked to start a new game
	Then an empty game board is returned
	And a GameId is returned

Scenario: user and bot makes a move
	Given a new game was started
	When the API is invoked to drop a disc in the first column
	Then the API returns the board with a disc in the first column
	And a disc played by the bot in a column

Scenario: player 1 wins by placing four discs horizontally
	Given there are 3 red discs aligned in the bottom row and the 4th column is free
	When Player 1 places a disc in column 4
	Then The API returns the board, gameId, status of 'Player won'