import React from "react"
import { shallow } from "enzyme"
import App from "./App"

describe("App", function () {
    const app = shallow(<App />)

    it("renders", function () {
        expect(app).toMatchSnapshot()
    })

    it("contains a connected Wallet component", function () {
        expect(app.find("Connect(Wallet)").exists()).toBe(true)
    })

    it("contains a connected Loot component", () => {
        expect(app.find('Connect(Loot)').exists()).toBe(true)
    })
}) 