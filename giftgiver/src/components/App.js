import React from "react";
import { Button } from "react-bootstrap"
import Gift from "./Gift";
import { max_number } from "../utils"

export default class App extends React.Component {
    constructor() {
        super()
        this.state = {
            gifts: []
        }
    }

    addGift = () => {
        const { gifts } = this.state
        const ids = gifts.map(gift => gift.id)
        const max_id = max_number(ids)

        this.setState({
            gifts: [
                ...gifts,
                { id: max_id + 1 }
            ]
        })
    }

    removeGift = (id) => () => {
        const gifts = this.state.gifts.filter(gift => gift.id !== id)
        this.setState({ gifts: gifts })
    }

    render() {
        return (
            <div>
                <h2>Gift Giver</h2>
                <div className="gift-list">
                    {this.state.gifts.map(gift => (
                        <Gift gift={gift} removeGift={this.removeGift} key={gift.id}></Gift>
                    ))}
                </div>
                <Button test-id="add-button" className="btn-add" onClick={this.addGift}>Add Gift</Button>
            </div>
        )
    }
}