/* eslint-disable no-console */
// eslint-disable-next-line import/no-extraneous-dependencies
import { loadFeature, defineFeature } from "jest-cucumber";
import { newBoard, dropDisc, player1, player2, makeMove } from "../../src/connect4";

const feature = loadFeature("./cucumber/features/connect4.feature");

const mockLog = jest.fn();
console.log = mockLog;

defineFeature(feature, (test) => {
  test('user wants to play a game against a bot', ({ when, then }) => {
    when('the API is invoked to start a new game', () => {
        //Assert the GET request is triggered
    });

    then('an empty game board is returned', () => {
        //Assert the response is an empty board
    });
});
});
