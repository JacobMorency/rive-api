import request from "supertest";
import app from "../app.js";
import * as exerciseService from "../services/exerciseService.js";
import { mock } from "node:test";

jest.mock("../services/exerciseService.js");

/**
 *
 *
 * Route Tests
 *
 *
 *  */

// Returns a list of exercises from the exercise_library table and a status of 200
describe("GET /exercises/library", () => {
  it("returns 200 and a list of exercises", async () => {
    const mockExercises = [
      { id: 1, name: "Pull Up", category: "back" },
      { id: 2, name: "Hack Squat", category: "quads" },
    ];

    (exerciseService.getLibraryExercises as jest.Mock).mockResolvedValue(
      mockExercises,
    );

    const response = await request(app).get("/exercises/library");

    expect(response.status).toBe(200);
    expect(response.body).toEqual(mockExercises);
  });
});

// Returns an exercise by it's unique id and a status of 200
describe("GET /exercises/library/:id", () => {
  it("returns 200 and a specific exercise", async () => {
    const mockExercise = {
      id: 1,
      name: "Pull Up",
      category: "Back",
    };

    (exerciseService.getLibraryExerciseById as jest.Mock).mockResolvedValue(
      mockExercise,
    );

    const response = await request(app).get("/exercises/library/1");

    expect(response.status).toBe(200);
    expect(response.body).toEqual(mockExercise);
  });
});

/**
 *
 *
 * Service Tests
 *
 *
 *  */
