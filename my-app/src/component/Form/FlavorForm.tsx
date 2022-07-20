import React from "react";

class FlavorForm extends React.Component {
    state: Readonly<{value: string}>;
    constructor(props: {}){
        super(props)
        this.state = {value: 'coconut'}
    }

    handleChange = (event: React.FormEvent<HTMLSelectElement>) => {
        this.setState({value: event.currentTarget.value})
    }

    handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        alert('Your favourite flavor is: ' + this.state.value)
    }

    render(): React.ReactNode {
        return (
            <form onSubmit={this.handleSubmit}>
                <label>
                    Pick your favourite flavor:
                    <select value={this.state.value} onChange={this.handleChange}>
                        <option value="grapefruit">Grapefruit</option>
                        <option value="lime">Lime</option>
                        <option value="coconut">Coconut</option>
                        <option value="mango">Mango</option>
                    </select>
                </label>
                <input type="submit" value="Submit" />
            </form>
        )
    }
}

export default FlavorForm