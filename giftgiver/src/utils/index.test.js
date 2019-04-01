import { max_number } from "./index"

describe("max_number", function () {
    describe("given an empty array", function () {
        it("returs 0", function () {
            expect(max_number([])).toEqual(0)
        })
    })
    describe("given array of numbers", function () {
        it("returns the max number", function () {
            expect(max_number([1, 2, 3])).toEqual(3)
        })
    })
})