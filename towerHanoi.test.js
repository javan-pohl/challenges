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