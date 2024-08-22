Feature: Connect4

Scenario: user wants to play a game against a bot
	When the API is invoked to start a new game
	Then an empty game board is returned