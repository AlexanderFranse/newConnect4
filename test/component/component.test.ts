import * as connect4 from "../../src/connect4";
import * as bot from "../../src/bot";
import { makeMove, startNewGame } from "../../src/connect4";
import {
  gameBoardAlmostHorizontalVictoryOnBottomRow,
  gameBoardAlmostHorizontalVictoryOnBottomRowForBot,
} from "../doubles/double";

describe("It should be possible to start a new game", () => {
  it("And when this is done, an empty game board and a game id should be returned", () => {
    const newGame = startNewGame();

    expect(newGame.board).toBeDefined();
    expect(newGame.gameId).toBeDefined();
  });
});

describe("An other feature is making a move", () => {
  beforeEach(() => {
    jest.clearAllMocks();
    jest.restoreAllMocks();
  });
  it("Making a move entails dropping the users disc and executing a bot move.", () => {
    const newGame = startNewGame();
    const column = 0;
    const { gameId } = newGame;
    const updatedGame = makeMove(gameId, newGame.board, column);
    expect(updatedGame).toBeDefined();
    expect(updatedGame.board.some((row) => row.includes("🔴"))).toBe(true);
    expect(updatedGame.board.some((row) => row.includes("🟡"))).toBe(true);
    expect(updatedGame.gameId).toBe(gameId);
    expect(updatedGame.status).toBe("IN_PROGRESS");
  });
  it("Which could also lead to a horizontal victory for player", () => {
    const gameBoardInProgress = {
      board: gameBoardAlmostHorizontalVictoryOnBottomRow,
      gameId: "1",
    };
    const columnToDropDisc = 3;
    const updatedGame5 = makeMove(
      gameBoardInProgress.gameId,
      gameBoardInProgress.board,
      columnToDropDisc
    );
    expect(updatedGame5.status).toBe("PLAYER_WON");
  });
  it("Which could also lead to a horizontal victory for bot", () => {
    const botColumn = jest
      .spyOn(bot, "columnForBotToDropDisc")
      .mockReturnValue(3);

    const gameBoardInProgress = {
      board: gameBoardAlmostHorizontalVictoryOnBottomRowForBot,
      gameId: "1",
    };
    const columnToDropDisc = 4;
    const updatedGame5 = connect4.makeMove(
      gameBoardInProgress.gameId,
      gameBoardInProgress.board,
      columnToDropDisc
    );
    expect(botColumn).toHaveBeenCalled();
    expect(updatedGame5.status).toBe("BOT_WON");
  });
});
