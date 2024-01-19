

export const Feedback = ({ values: { good, neutral, bad }}) => {
    return (
        <div>
            <p>Good: <span>{ good}</span></p>
            <p>Neutral: <span>{neutral }</span></p>
            <p>Bad: <span>{ bad}</span></p>
            <p>Total: <span>{ }</span></p>
            <p>Positive: <span>{ }</span></p>
        </div>
    )
}