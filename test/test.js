// require the Koa server
const server = require("../index");
// require supertest
const request = require("supertest");

// close the server after each test
afterEach(() => {
    server.close();
});

test("should respond as expected", async () => {
  const response = await request(server).get("/");
  expect(response.status).toEqual(200);
  expect(response.type).toEqual("text/plain");
  expect(response.text).toEqual("Hello World!");
});
  