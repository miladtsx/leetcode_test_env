import { merge_sort } from './ms'

describe("LeetCode", () => {
    it("EXAMPLE 1", () => {
        expect(
            merge_sort([1, 2, 3, 0, 0, 0], 3, [2, 5, 6], 3)
        ).toStrictEqual([1, 2, 2, 3, 5, 6])
    })

    it("EXAMPLE 2", () => {
        expect(
            merge_sort([1], 1, [0], 0)
        ).toStrictEqual([1])
    })

    it("EXAMPLE 3", () => {
        expect(
            merge_sort([0], 0, [1], 1)
        ).toStrictEqual([1])
    })
    it("EXAMPLE 4", () => {
        expect(
            merge_sort([4, 5, 6, 0, 0, 0], 3, [1, 2, 3], 3)
        ).toStrictEqual([1, 2, 3, 4, 5, 6])
    })
})
