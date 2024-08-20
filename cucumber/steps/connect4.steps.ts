/* eslint-disable no-console */
// eslint-disable-next-line import/no-extraneous-dependencies
import { loadFeature, defineFeature } from "jest-cucumber";
import { newBoard, dropDisc, player1, player2 } from "../../src/connect4";

const feature = loadFeature("./cucumber/features/connect4.feature");

const mockLog = jest.fn();
console.log = mockLog;

defineFeature(feature, (test) => {
  test("player 1 won with a horizontal victory!", ({
    given,
    and,
    when,
    then,
  }) => {
    const board = newBoard();
    given("a board with 7 columns", () => {});

    and("player 1 plays with the red disc", () => {
      expect(player1).toBe("🔴");
    });

    and("player 2 plays with the yellow disc", () => {
      expect(player2).toBe("🟡");
    });

    and("player 1 puts his disc in the first column", () => {
      const firstColumn = 0;
      dropDisc(board, player1, firstColumn);
    });

    and("player 2 puts his disc in the first column", () => {
      const firstColumn = 0;
      dropDisc(board, player2, firstColumn);
    });

    and("player 1 puts his disc in the second column", () => {
      const secondColumn = 1;
      dropDisc(board, player1, secondColumn);
    });

    and("player 2 puts his disc in the second column", () => {
      const secondColumn = 1;
      dropDisc(board, player2, secondColumn);
    });

    and("player 1 puts his disc in the third column", () => {
      const thirdColumn = 2;
      dropDisc(board, player1, thirdColumn);
    });

    and("player 2 puts his disc in the third column", () => {
      const thirdColumn = 2;
      dropDisc(board, player2, thirdColumn);
    });

    when("player 1 puts his disc in the fourth column", () => {
      const fourthColumn = 3;
      dropDisc(board, player1, fourthColumn);
    });

    then("a message is printed which says Player 1 won!", () => {
      expect(mockLog).toHaveBeenCalledWith("Player 1 won!");
      console.log = console.log; // Restore original console.log
    });
  });
});
