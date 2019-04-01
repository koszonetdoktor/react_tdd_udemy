// https://api.coindesk.com/v1/bpi/currentprice.json
import cofigureMockStore from "redux-mock-store"
import thunk from "redux-thunk"
import fetchMock from "fetch-mock"
import { FETCH_BITCOIN } from "./constants"
import { fetchBitcoin } from "./bitcoin"

const createMockStore = cofigureMockStore([thunk])
const store = createMockStore({ bitcoin: {} })
const mockResponse = { body: { bpi: "bitcoin price index" } }

fetchMock.get(
    "https://api.coindesk.com/v1/bpi/currentprice.json",
    mockResponse
)

it("creates an async aaction to fetch the bitcoin value", function () {
    const expectActions = [{ bitcoin: mockResponse.body, type: FETCH_BITCOIN }]
    return store.dispatch(fetchBitcoin()).then(() => {
        expect(store.getActions()).toEqual(expectActions)
    })
})