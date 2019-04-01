import React from "react"
import { shallow } from "enzyme"
import Gift from "./Gift"

describe("Gift", function () {
    const mockRemove = jest.fn()
    const id = 1
    const props = { gift: { id }, removeGift: mockRemove }
    const gift = shallow(<Gift {...props} />)

    it("renders properly", function () {
        expect(gift).toMatchSnapshot()
    })

    it("init a person and peresent in `state`", function () {
        expect(gift.state()).toEqual({ person: "", present: "" })
    })

    describe("when typing into the person input", function () {
        const person = "Vivi"
        beforeEach(function () {
            gift.find('[test-id="input-person"]')
                .simulate("change", { target: { value: person } })
        })

        it("updates the person in `state`", function () {
            expect(gift.state().person).toEqual(person)
        })
    })

    describe("when typing into the present input", function () {
        const present = "Camera"
        beforeEach(function () {
            gift.find('[test-id="input-present"]')
                .simulate("change", { target: { value: present } })
        })
        it("updates the present in `state`", function () {
            expect(gift.state().present).toEqual(present)
        })
    })

    describe("when clicking `Remove Gift` button", function () {
        beforeEach(function () {
            gift.find('[test-id="button-remove"]').simulate("click")
        })
        it("calls the removeGift callback", function () {
            expect(mockRemove).toHaveBeenCalledWith(id)
        })
    })
})