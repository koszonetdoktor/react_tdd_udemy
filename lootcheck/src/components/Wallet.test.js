import React from "react"
import { shallow } from "enzyme"
import { Wallet } from "./Wallet"

describe("Wallet", function () {
    const mockDeposit = jest.fn()
    const mockWithdraw = jest.fn()
    const props = { balance: 20, deposit: mockDeposit, withdraw: mockWithdraw }
    const wallet = shallow(<Wallet {...props} />)
    it("renders", function () {
        expect(wallet).toMatchSnapshot()
    })
    it("it displays the balance from props", function () {
        expect(wallet.find('[test-id="balance"]').text()).toEqual("Wallet balance: 20")
    })

    it("it creates an input to deposit into or withdraw from", function () {
        expect(wallet.find('[test-id="input-wallet"]').exists()).toBe(true)
    })

    describe("when the user types into the wallet input", function () {
        const userBalance = "10"

        beforeEach(function () {
            wallet.find('[test-id="input-wallet"]').simulate("change", { target: { value: userBalance } })
        })

        it("updates the local balance in the `state` and converts it into a number", function () {
            expect(wallet.state().balance).toEqual(parseInt(userBalance, 10))
        })
        describe("and the user want to make a deposit", function () {
            beforeEach(function () {
                wallet.find('[test-id="button-deposit"]').simulate("click")
            })

            it("dsipachtes the `deposit()` it receives from props with local balance", function () {
                expect(mockDeposit).toHaveBeenCalledWith(parseInt(userBalance, 10))
            })
        })
        describe("and the user wants to withdraw money", function () {
            beforeEach(function () {
                wallet.find('[test-id="button-withdraw"]').simulate("click")
            })
            it("dsipachtes the `withdraw()` it receives from props with local balance", function () {
                expect(mockWithdraw).toHaveBeenCalledWith(parseInt(userBalance, 10))
            })

        })
    })

})