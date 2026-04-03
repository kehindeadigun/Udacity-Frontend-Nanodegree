import { assert } from "chai";
import { shuffle } from "../src/shuffle.js";

describe("Verifies it shuffles the indexes of an array", () => {
    it("should return an empty array when given an empty array", () => {
        const result = shuffle([]);
        assert.deepEqual(result, []);
    });

    it("should return an array with the same length", () => {
        const cards = [1, 2, 3, 4, 5];
        const result = shuffle(cards);
        assert.strictEqual(result.length, cards.length);
    });

    it("should return an array with the same elements", () => {
        const cards = [1, 2, 3, 4, 5];
        const result = shuffle(cards);
        assert.deepEqual(result.slice().sort(), cards.slice().sort());
    });

    it("should change the order of elements", () => {
        // Use 20 elements — odds of same order by chance: 1 in 2,432,902,008,176,640,000
        const cards = [
            1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19,
            20,
        ];
        const result = shuffle(cards);
        assert.notDeepEqual(result, cards);
    });

    it("should not mutate the original array", () => {
        const cards = [1, 2, 3, 4, 5];
        const original = [...cards];
        shuffle(cards);
        assert.deepEqual(cards, original);
    });
});
