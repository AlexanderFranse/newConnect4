Feature: Connect4

Scenario: user wants to start a new game
	When the API is invoked to start a new game
	Then an empty game board is returned
	And a GameId is returned