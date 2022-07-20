function UserGreeting() {
    return <h1>Welcome back!</h1>
}

function GuessGreeting() {
    return <h1>Please sign up.</h1>
}

function Greeting(props: {isLoggedIn: boolean}) {
    if(props.isLoggedIn) {
        return (
            <UserGreeting />
        )
    }
    else {
        return (
            <GuessGreeting /> 
        )
    }
}

export default Greeting