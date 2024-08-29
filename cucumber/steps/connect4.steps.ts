/* eslint-disable no-console */
// eslint-disable-next-line import/no-extraneous-dependencies
import { loadFeature, defineFeature } from "jest-cucumber";
// eslint-disable-next-line import/no-extraneous-dependencies
import request from "supertest";
import app from "../../src/api";

const feature = loadFeature("./cucumber/features/connect4.feature");

const mockLog = jest.fn();
console.log = mockLog;

defineFeature(feature, (test) => {
  test("user wants to start a new game", ({ when, then }) => {
    let response: request.Response;

    when("the API is invoked to start a new game", async () => {
      response = await request(app).get("/game/new");
      expect(response.status).toBe(200);
    });

    then("an empty game board is returned", () => {
      const emptyBoard = [
        [0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0],
      ];
      expect(response.body).toEqual(emptyBoard);
    });
  });
});
