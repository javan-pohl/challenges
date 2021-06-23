const towerHanoi = require("./towerHanoi");

// test("expects minimum number of moves for 5 rings to be 31", () => {
//   expect(towerHanoi(5)).toBe(31);
// });

for (let i = 3; i <= 10; i += 1) {
	let numMoves = (2 ** i) - 1;
	test(`expects minimum number of moves for ${i} rings to be ${numMoves}`, () => {
		expect(towerHanoi(i)).toBe(numMoves)
	})
}

// ah, yes, this method doesn't work
// test("should throw an error if it receives a string", () => {
// 	expect(towerHanoi('five').toThrow('Input value must be a positive integer'))
// })

test('should throw an error if it receives a string', () => {
	expect(() => {
		towerHanoi('five');
	}).toThrow('Input value must be a positive integer')
})

test('should throw an error if the value is less than 3', () => {
	expect(() => {
		towerHanoi(2)
	}).toThrow('Input value must be 3 or larger')
})