import React from "react";

class Toggle extends React.Component {
    state: {isToggleOn: boolean}
    constructor(props: any) {
        super(props)
        this.state = {isToggleOn: true}
    }

    handleClick = () => {
        this.setState((prevState: {isToggleOn: boolean}) => ({
            isToggleOn: !prevState.isToggleOn
        }))
    }

    render() {
        return(
            <button onClick={this.handleClick}>
                {this.state.isToggleOn ? 'ON' : 'OFF'}
            </button>
        )
    }
    
}

export default Toggle