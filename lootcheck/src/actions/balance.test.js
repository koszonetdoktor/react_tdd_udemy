import * as constants from "./constants"
import * as actions from "./balance"

it("creates an action to the balance", function () {
    const balance = 0

    const expectedAction = { type: constants.SET_BALANCE, balance }

    expect(actions.setBalance(balance)).toEqual(expectedAction)
})

it("creates and action to deposit into the balance", function () {
    const deposit = 10

    const expectedAction = { type: constants.DEPOSIT, deposit }

    expect(actions.deposit(deposit)).toEqual(expectedAction)
})

it("creates and action to withdraw from the balance", function () {
    const withdraw = 5

    const expectedAction = { type: constants.WITHDRAW, withdraw }

    expect(actions.withdraw(withdraw)).toEqual(expectedAction)
})