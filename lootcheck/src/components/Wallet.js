import React from "react"
import { connect } from "react-redux"
import { deposit, withdraw } from "../actions/balance"

export class Wallet extends React.Component {
    constructor() {
        super()

        this.state = {
            balance: null
        }
    }

    onChangeHandler = (event) => {
        this.setState({
            balance: parseInt(event.target.value, 10)
        })
    }

    deposit = () => {
        this.props.deposit(this.state.balance)
    }

    withdraw = () => {
        this.props.withdraw(this.state.balance)
    }

    render() {
        return (
            <div>
                <h3 test-id="balance">Wallet balance: {this.props.balance}</h3>
                <br />
                <input test-id="input-wallet" onChange={this.onChangeHandler} />
                <button test-id="button-deposit" onClick={this.deposit} >Deposit</button>
                <button test-id="button-withdraw" onClick={this.withdraw} >Withdraw</button>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        balance: state.balance
    }
}

export default connect(mapStateToProps, { deposit, withdraw })(Wallet)