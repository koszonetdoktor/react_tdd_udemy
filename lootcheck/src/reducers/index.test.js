import rootReducer from "./index"

describe("rootReducer", function () {
    it("initializesn the default state", function () {
        expect(rootReducer({}, {})).toEqual({ balance: 0, bitcoin: {} })
    })
})