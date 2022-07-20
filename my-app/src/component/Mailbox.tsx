export default function Mailbox(props: {unreadMessages: string[]}) {
    return(
        <div>
            {props.unreadMessages.length > 0 &&
                <h2>
                    You have {props.unreadMessages.length} unread messages.
                </h2>
            }
        </div>
    )
}

