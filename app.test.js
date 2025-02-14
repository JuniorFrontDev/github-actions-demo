const suma = require("./app");

test("suma 2 + 2 debe ser 4", () => {
  expect(suma(2, 2).toBe(4));
});

test("suma 0 + 0 debe ser 0", () => {
  expect(suma(0, 0).toBe(0));
});
