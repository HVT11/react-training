function ListItem(props: {value: number}) {
    return <li>Number {props.value}</li>
}

function NumberList(props: {numbers: number[]}) {
    const listItem = props.numbers.map((number) => (
        <ListItem key={number.toString()} value={number}/>
    ))

    return (
        <div>
            <h1>List Number</h1>
            <ul>
                {listItem}
            </ul>
        </div>
    )
}

export default NumberList