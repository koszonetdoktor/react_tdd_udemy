import React from "react"
import { Form, FormGroup, FormControl, ControlLabel, Button } from "react-bootstrap"

export default class Gift extends React.Component {
    constructor() {
        super()
        this.state = {
            person: "",
            present: ""
        }
    }
    render() {
        return (
            <div>
                <Form>
                    <FormGroup>
                        <ControlLabel>Person</ControlLabel>
                        <FormControl
                            test-id="input-person"
                            onChange={event => this.setState({ person: event.target.value })}
                        />
                    </FormGroup>
                    <FormGroup>
                        <ControlLabel>Present</ControlLabel>
                        <FormControl
                            test-id="input-present"
                            onChange={event => this.setState({ present: event.target.value })}
                        />
                    </FormGroup>
                </Form>
                <Button
                    test-id="button-remove"
                    onClick={this.props.removeGift(this.props.gift.id)}
                >
                    Remove Gift
                </Button>
            </div>
        )
    }
}