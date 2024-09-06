/* eslint-disable no-console */
// eslint-disable-next-line import/no-extraneous-dependencies
import { loadFeature, defineFeature } from "jest-cucumber";
// eslint-disable-next-line import/no-extraneous-dependencies
import request from "supertest";
import app from "../../src/api";
import { newBoard } from "../../src/connect4";

const feature = loadFeature("./cucumber/features/connect4.feature");

const mockLog = jest.fn();
console.log = mockLog;

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
      response = await request(app).post("/game/dropDisc").send({
        board: response.body.board,
        column: 0,
      });
      expect(response.status).toBe(200);
    });
    then("the API returns the board with a disc in the first column", () => {
     expect(response.body).toHaveProperty("board")
     expect(response.body.board[0]).toContain(1)
    });
    and("a disc played by the bot in a column", () => {
     expect(response.body.board).toContain(2)
    });
  });

});
