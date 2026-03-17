import request from "supertest";
import app from "../app.js";

// Unknown routes return a 404 error
describe("Unknown routes", () => {
  it("returns 404", async () => {
    const response = await request(app).get("/pizza");

    expect(response.status).toBe(404);
  });
});
