import React from "react";

class NameForm extends React.Component {
    state: Readonly<{value: string}>;
    constructor(props: {}){
        super(props)
        this.state = {value: ''}
    }

    handleChange = (event: React.FormEvent<HTMLInputElement>) => {
        this.setState({value: event.currentTarget.value})
    }

    handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        alert('A name was submitted: ' + this.state.value)
        event.preventDefault()
    }

    render(): React.ReactNode {
        return (
            <form onSubmit={this.handleSubmit}>
                <label>
                    Name:
                    <input type="text" value={this.state.value} onChange={this.handleChange} />
                </label>
                <input type="submit" value="Submit" />
            </form>
        )
    }
}

export default NameForm