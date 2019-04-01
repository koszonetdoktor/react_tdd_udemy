import balanceReducer from "./balance"
import * as constants from "../actions/constants"

describe("balancerREducer", function () {
    it("sets a balance", function () {
        const balance = 10

        expect(balanceReducer(undefined, { type: constants.SET_BALANCE, balance }))
            .toEqual(balance)
    })

    it("depositis into the balance", function () {
        const deposit = 10
        const initalState = 5

        expect(balanceReducer(initalState, { type: constants.DEPOSIT, deposit })).toEqual(initalState + deposit)
    })

    it("withdraws from the balance", function () {
        const withdraw = 2
        const initalState = 5

        expect(balanceReducer(initalState, { type: constants.WITHDRAW, withdraw })).toEqual(initalState - withdraw)
    })
})