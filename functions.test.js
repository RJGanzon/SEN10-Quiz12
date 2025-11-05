// functions.test.js
const { add } = require("./functions");

test("adds two numbers correctly", () => {
  expect(add(2, 3)).toBe(5); // ✅ passing test
});

test("this test should fail", () => {
  expect(add(2, 2)).toBe(5); // ❌ failing test for demonstration
});
