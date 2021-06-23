const { additivePersistence, multiplicativePersistence } = require("./persistence");

test("additivePersistence should return 0 when it receives a single digit number", () => {
  expect(additivePersistence(9)).toBe(0);
});

test("additivePersistence should return 3 when it receives 1679583", () => {
  expect(additivePersistence(1679583)).toBe(3);
})

test('should throw an array if function is sent a string', () => {
	expect(() => {
		additivePersistence('string')
	}).toThrow('Input value must be an integer')
})

test("multiplicativePersistence should return 0 when it receives a single digit number", () => {
  expect(multiplicativePersistence(9)).toBe(0);
});

test("multiplicativePersistence should return 4 when it receives 77", () => {
  expect(multiplicativePersistence(77)).toBe(4);
})

test('should throw an array if function is sent a string', () => {
	expect(() => {
		multiplicativePersistence('string')
	}).toThrow('Input value must be an integer')
})