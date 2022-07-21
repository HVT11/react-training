import React, { MouseEventHandler } from "react";

interface Message {
    title: string,
    message: string,
    children: React.ReactNode
}

function FancyBorder(props: {color: string, children: React.ReactNode}) {
    return (
      <div className={'FancyBorder FancyBorder-' + props.color}>
        {props.children}
      </div>
    );
}

function Dialog(props: Message) {
    return(
        <FancyBorder color="blue">
            <h1>{props.title}</h1>
            <p>{props.message}</p>
            {props.children}
        </FancyBorder>
    )
}

class SignUpDialog extends React.Component {
    state: Readonly<{login: string}>;
    constructor(props: {}) {
        super(props)
        this.state = {login: ''}
    }

    handleChange = (event: React.FormEvent<HTMLInputElement>) => {
        this.setState({login: event.currentTarget.value})
    }

    handleSignUp = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault()
        alert('Welcome aboard, '+ this.state.login)
    }

    render(): React.ReactNode {
        return (
            <Dialog title="Mars Exploration Program" message="How should we refer to you?">
                <input value={this.state.login} onChange={this.handleChange}/>
                <button onClick={this.handleSignUp}>Sign up</button>
            </Dialog>
        )
    }
}

export default SignUpDialog