import { loadFeature, defineFeature } from "jest-cucumber";
import { newBoard, newPlayer, dropDisc } from "../../src/connect4";
import { ReadableStreamBYOBReader } from "node:stream/web";

const feature = loadFeature("./cucumber/features/template.feature");

defineFeature(feature, (test) => {
  test('player 1 won with a horizontal victory!', ({ given, and, when, then }) => {
    let board = newBoard();
    given(/^a board with 7 columns$/, (arg0) => {
    });

    and(/^player (\d+) plays with the red disc$/, (arg0) => {
        const player1 = newPlayer(1);
    });

    and(/^player (\d+) plays with the yellow disc$/, (arg0) => {
        const player2 = newPlayer(2);
    });

    and(/^player (\d+) put his disc in the first column$/, (arg0) => {
        dropDisc(board,"🔴", 0)
    });

    and(/^player (\d+) put his disc in the first column$/, (arg0) => {
        dropDisc(board,"🟡", 0)
    });

    and(/^player (\d+) put his disc in the second column$/, (arg0) => {
        dropDisc(board,"🔴", 1)
    });

    and(/^player (\d+) put his disc in the second column$/, (arg0) => {
        dropDisc(board,"🟡", 1)
    });

    and(/^player (\d+) put his disc in the third column$/, (arg0) => {
        dropDisc(board,"🔴", 2)
    });

    and(/^player (\d+) put his disc in the third column$/, (arg0) => {
        dropDisc(board,"🟡", 2)
    });

    when(/^player (\d+) put his disc in the fourth column$/, (arg0) => {
        dropDisc(board,"🔴", 3)
    });

    then(/^player (\d+) won the game with a horizontal victory$/, (arg0) => {
       
    });

    and(/^a message is printed which says Player (\d+) won!$/, (arg0) => {
        //assert message is printed
    });
});

});
