import bitcoinReducer from "./bitcoin"
import { FETCH_BITCOIN } from "../actions/constants"

describe("bitcoinReducer", function () {
    const bitcoinData = { bpi: "bitcoin price index" }

    it("fetches and sets the bitcoin data", function () {
        expect(bitcoinReducer({}, { type: FETCH_BITCOIN, bitcoin: bitcoinData }))
            .toEqual(bitcoinData)

    })
})