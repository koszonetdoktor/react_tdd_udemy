import React from "react";
import { shallow } from "enzyme";
import App from "./App";

describe("App", function () {
    const app = shallow(<App />);
    it("renders correctly", function () {
        expect(app).toMatchSnapshot();
    })

    it("initializes the `state` with an empty list of gifts", function () {
        expect(app.state().gifts).toEqual([])
    })

    describe("when clicking the `add-gift` button", function () {
        const id = 1
        beforeEach(function () {
            app.find('[test-id="add-button"]').simulate("click")
        })

        afterEach(function () {
            app.setState({ gifts: [] })
        })

        it("adds a new gift to `state`", function () {
            expect(app.state().gifts).toEqual([{ id: 1 }])
        })

        it("adds a new gift to the rendered list", function () {
            // bad practice becasue this replies on the previous test's click
            expect(app.find(".gift-list").children().length).toEqual(1)
        })

        it("creates  a Gift component", function () {
            expect(app.find("Gift").exists()).toBe(true)
        })

        describe("and the user wants to remove the added gift", function () {
            beforeEach(function () {
                app.instance().removeGift(id)()
            })

            it("removes the gift from `state`", function () {
                expect(app.state().gifts).toEqual([])
            })
        })
    })

})
