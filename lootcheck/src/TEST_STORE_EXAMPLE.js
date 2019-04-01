import { createStore } from 'redux'
import rootReducer from './reducers'
import * as actions from './actions/balance'
const initialState = {}

describe("store", function () {
    it('shoudl handle creating courses', function () {
        // arrange
        const store = createStore(rootReducer, initialState)
        const course = {
            title: "Clean code"
        }

        //act
        const action = actions.setBalance(course)
        store.dispatch(action)

        //assert
        const actual = store.getState().course[0]
        const expected = {
            title: "Clean code"
        }
        expected(actual).toEqual(expected)
    })
})
