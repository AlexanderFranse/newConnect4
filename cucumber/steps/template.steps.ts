import { loadFeature, defineFeature } from "jest-cucumber";
import { newBoard } from "../../src/connect4";
import { ReadableStreamBYOBReader } from "node:stream/web";

const feature = loadFeature("./cucumber/features/template.feature");

defineFeature(feature, (test) => {
  test('player 1 won with a horizontal victory!', ({ given, and, when, then }) => {
    given(/^a board with 7 columns$/, (arg0) => {
        const board = newBoard();
    });

    and(/^player (\d+) plays with the red disc$/, (arg0) => {
        const player1 = newPlayer("🔴");
    });

    and(/^player (\d+) plays with the yellow disc$/, (arg0) => {
        //assert player 2 plays with yellow disc
    });

    and(/^player (\d+) put his disc in the first column$/, (arg0) => {
        //player 1 puts disc in first column
    });

    and(/^player (\d+) put his disc in the first column$/, (arg0) => {
        //player 2 puts disc in first column
    });

    and(/^player (\d+) put his disc in the second column$/, (arg0) => {
        //player 1 puts disc in second column
    });

    and(/^player (\d+) put his disc in the second column$/, (arg0) => {
        //player 2 puts disc in second column
    });

    and(/^player (\d+) put his disc in the third column$/, (arg0) => {
        //player 1 puts disc in third column
    });

    and(/^player (\d+) put his disc in the third column$/, (arg0) => {
        //player 2 puts disc in third column
    });

    when(/^player (\d+) put his disc in the fourth column$/, (arg0) => {
        //player 1 puts disc in fourth column
    });

    then(/^player (\d+) won the game with a horizontal victory$/, (arg0) => {
        //assert player 1 won
    });

    and(/^a message is printed which says Player (\d+) won!$/, (arg0) => {
        //assert message is printed
    });
});

});
