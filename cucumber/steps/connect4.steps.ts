/* eslint-disable no-console */
// eslint-disable-next-line import/no-extraneous-dependencies
import { loadFeature, defineFeature } from "jest-cucumber";
// eslint-disable-next-line import/no-extraneous-dependencies
import request from "supertest";
import app from "../../src/api";
import { gameBoardAlmostHorizontalVictoryOnBottomRow } from "../../test/doubles/double";
import { Board } from "../../src/connect4";

const feature = loadFeature("./cucumber/features/connect4.feature");

defineFeature(feature, (test) => {
  test("user wants to start a new game", ({ when, then, and }) => {
    let response: request.Response;
    when("the API is invoked to start a new game", async () => {
      response = await request(app).get("/game/new");
      expect(response.status).toBe(200);
    });

    then("an empty game board is returned", () => {
      expect(response.body).toHaveProperty("board");
    });

    and("a GameId is returned", () => {
      expect(response.body).toHaveProperty("gameId");
    });
  });

  test("user and bot makes a move", ({ given, when, then, and }) => {
    let response: request.Response;
    given("a new game was started", async () => {
      response = await request(app).get("/game/new");
      expect(response.status).toBe(200);
    });
    when("the API is invoked to drop a disc in the first column", async () => {
      const { gameId } = response.body;
      const { board } = response.body;

      response = await request(app).post("/game/dropDisc").send({
        gameId,
        board,
        column: 0,
      });
      expect(response.status).toBe(200);
    });
    then("the API returns the board with a disc in the first column", () => {
      expect(response.body).toHaveProperty("board");
      expect(
        response.body.board.some((row: string | string[]) => row.includes("🔴"))
      ).toBe(true);
    });
    and("a disc played by the bot in a column", () => {
      expect(
        response.body.board.some((row: string | string[]) => row.includes("🟡"))
      ).toBe(true);
    });
  });

  test("player 1 wins by placing four discs horizontally", ({
    given,
    when,
    then,
  }) => {
    let response: request.Response;
    let board: Board;
    let gameId: string;

    given(
      "there are 3 red discs aligned in the bottom row and the 4th column is free",
      async () => {
        board = gameBoardAlmostHorizontalVictoryOnBottomRow;
        gameId = "1234";
      }
    );

    when("Player 1 places a disc in column 4", async () => {
      response = await request(app).post("/game/dropDisc").send({
        gameId,
        board,
        column: 3,
      });
      expect(response.status).toBe(200);
    });

    then("the API returns the board, gameId, status of 'Player won'", () => {
      expect(response.body).toHaveProperty("board");
      expect(response.body).toHaveProperty("gameId");
      expect(response.body).toHaveProperty("status");
      expect(response.body.status).toBe("PLAYER_WON");
    });
  });
});
