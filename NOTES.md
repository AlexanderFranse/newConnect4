# Introduction

We all love to play games especially as children. I have fond memories playing Connect 4 with my brother so decided to create this Kata based on the classic game. Connect 4 is known as several names such as “Four in a Row” and “Captain’s Mistress" but was made popular by Hasbro MB Games

# Task
The game consists of a grid (7 columns and 6 rows) and two players that take turns to drop their discs. The pieces fall straight down, occupying the next available space within the column. The objective of the game is to be the first to form a horizontal, vertical, or diagonal line of four of one's own discs.

Your task is to create a Class called Connect4 that has a method called play which takes one argument for the column where the player is going to place their disc.

# Rules
If a player successfully has 4 discs horizontally, vertically or diagonally then you should return "Player n wins!” where n is the current player either 1 or 2.

If a player attempts to place a disc in a column that is full then you should return ”Column full!” and the next move must be taken by the same player.

If the game has been won by a player, any following moves should return ”Game has finished!”.

Any other move should return ”Player n has a turn” where n is the current player either 1 or 2.
 
Player 1 starts the game every time and alternates with player 2.

The columns are numbered 0-6 left to right.

# Backlog

✅ As a player, I want a board that contains 7 columns and 6 rows, so that I am able to play the game

    ✅ Pseudocode E2E scenario - player 1 has a horizontal victory!
        ✅ Add step for player 2 and his little yellow disc
        ✅ Implement step for putting player 1 disc in a column
        ✅ Refactor to remove unneeded parameters and steps
        ✅ Implement step for asserting the log for a win for player 1
        Fix the steps to use the boardcopy instead of the board

## Unit
Create board
    ✅ news board --> 7 columns and 6 rows
Create player
    ✅ player 1 --> red disc
    ✅ player 2 --> yellow disc
Drop disc
    ✅ Player 1 drops disc in first column --> bueno!
    ✅ Player 2 drops disc in first column --> bueno!
    ✅ Player 1, 3rd column that already contains 3 discs --> dropped correctly
    ✅ Player 1, 3rd column that already contains 7 discs --> error
Check for horizontal victory
    - ✅ ["", "", "", "", "", "", "", ""] --> false
    - ✅ ["🔴", "🔴", "🔴", "", "", "", "", ""] --> false
    - ✅ ["🔴", "🔴", "🔴", "🔴", "", "", "", ""] --> true
    - ✅ horizontal victory in the middle row for player 2 --> true
    - ✅ ["🔴", "🔴", "🟡", "🔴", "🔴", "", "", ""] --> false

 ## Component
 - ✅ Player 1 drops his disc, horizontal victory --> "Player 1 wins!" in console

---------------------------------

 ✅ Rerwrite E2E scenario, focussing on how we want the game to be played
 ✅ Writing OpenAPI spec
 ✅ Create a component: start a new game
    - Create an empty board
        -- ✅ Already exists, but should return 0 as cell value
    - Create a game id
        -- ✅ Create new gameId, represented by UUID

     Creat a component: user dropDisc in X column 
     - ✅ Create unit for validating if a column exists
        -- ✅ column 7 --> false
        -- ✅ column 0 --> true
    - ✅ Create unit for dropping a disc in a column
        -- ✅ column 0 --> board with the updated disc
        -- ✅ last column --> board with the updated disc
        -- ✅ column with 3 discs --> new disc falls on top
    - ✅ Create unit for checking if a column is full
        -- ✅ empty column --> false
        -- ✅ almost full --> false
        -- ✅ full --> true
    - ✅ Implement the drop disc API
    - ✅ Adjusting the e2e test to support POST'ing with a board
    - ✅ Update open api spec with post call
    - ✅ Update dropDisc component to makeMove
    - ✅ Update dropDisc unit tests to take 2 params
    - ✅ Review the second scenario
    - ✅ Add bot move in makeMove component function
    - Implement functionality for the bot move
        - ✅ Add unit for a bot to choose the column, should be between 0 and 6
            - ✅ between 0 and 6 --> true
            - ✅ Refactor: use allowedColumns [0, 1, 2, 3, 4, 5, 6]
        - Update dropDisc to make it possible to drop a 2
            - ✅ Drop a 2 in the 3rd column --> hurrah
                -- ✅ Fix Type issue disc / cell
                -- ✅ Update unit tests and doubles
                -- ✅ Update component test
                -- ✅ Make /dropDisc endpoint passes
                    --- ✅ Fixed the API to parse JSON
                    --- ✅ makeMove does not return the correct response. Should be gameId + board.
                -- ✅ Update assertions in cucumber test to make it work correctly
    - ✅ Write the feature scenario for ending the game
        -- ✅ write e2e test to end the game
    - Update makeMove component with a victory check after dropping the player's disc.
        -- ✅ No victory, actually updating existing testcase.
        -- ✅ Horizontal victory for player
            -- ✅ Add unit to determine if there is a horizontal victory for player
                ✅ Three connected disc, playing on adjacent to it --> true
                ✅ Two connected discs, playing on a adjacent to it --> false
            -- ✅fix the component test
        -- 🍅 Horizontal victory for bot
            -- ✅ Add unit to determine if there is a horizontal victory for bot
                ✅ Three connected disc, playing on adjacent to it --> true
                ✅ Two connected discs, playing on a adjacent to it --> false
                -- 🍅 fix the mocking of columnForBotToDropDisc() function
    
    

## Backlog
Think about adding a submodule with the API contract and contract testing functionality (maybe check the full stack cookiecutter)
Maybe we can add a "move history" to the API.