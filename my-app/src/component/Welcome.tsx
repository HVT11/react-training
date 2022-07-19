type People = {
    name: string
}

function Welcome(props: People) {
    return (
        <h1>Hello, {props.name}</h1>
    )
}

export default Welcome