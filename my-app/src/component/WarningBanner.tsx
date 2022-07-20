import React from "react"

function WarningBanner(props: {warn: boolean}) {
    if(!props.warn) {
        return null
    }

    return (
        <h1>Warning !</h1>
    )
}

export default class Page extends React.Component {
    state: Readonly<{showWarning: boolean}>;
    constructor(props: any) {
        super(props)
        this.state = {showWarning: true}
    }

    handleToggleClick = () => {
        this.setState((prevState: {showWarning: boolean}) => ({
            showWarning: !prevState.showWarning 
        }))
    }

    render(): React.ReactNode {
        return(
            <div>
                <WarningBanner warn={this.state.showWarning}/>
                <button onClick={this.handleToggleClick}>
                    {this.state.showWarning ? 'Hide' : 'Show'}
                </button>
            </div>
        )
    }
}