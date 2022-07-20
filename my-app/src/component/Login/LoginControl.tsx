import React from "react"
import Greeting from "./Greeting";

function LoginButton(props: {onClick: ()=> void}) {
    return(
        <button onClick={props.onClick}>
            Login
        </button>
    )
}

function LogoutButton(props: {onClick: ()=> void}) {
    return(
        <button onClick={props.onClick}>
            Logout
        </button>
    )
}

export default class LoginControl extends React.Component {
    state: Readonly<{isLoggedIn: boolean}>;
    constructor(props: any){
        super(props)
        this.state = {isLoggedIn: false}
        console.log(props)
    }

    handleLoginClick = () => {
        this.setState({isLoggedIn: true})
    }

    handleLogoutClick = () => {
        this.setState({isLoggedIn: false})
    }

    render(): React.ReactNode {
        let button: JSX.Element
        if(this.state.isLoggedIn) {
            button = <LogoutButton onClick={this.handleLogoutClick}/>
        }
        else {
            button = <LoginButton onClick={this.handleLoginClick}/>
        }

        return (
            <div>
                <Greeting isLoggedIn={this.state.isLoggedIn}/>
                {button}
            </div>
        )
    }
}