import css from './Feedback.module.css'

export const Feedback = ({ values: { good, neutral, bad }, totalFeedback, positiveFeedback}) => {
    return (
        <div className={css.wrapper}>
            <div className={css.subWrapper}>
                <div className={css.optionsWrapper}>
                    <p className={css.option}>Good</p>
                    <p className={css.value}>{good}</p>
                </div>
                <div className={css.optionsWrapper}>
                    <p className={css.option}>Neutral</p>
                    <p className={css.value}>{neutral}</p>
                </div>
                <div className={css.optionsWrapper}>
                    <p className={css.option}>Bad</p>
                    <p className={css.value}>{bad}</p>
                </div>
                <div className={css.optionsWrapper}>
                    <p className={css.totalOption}>Total</p>
                    <p className={css.totalValue}>{totalFeedback}</p>
                </div>
            </div>
            <div className={css.positiveWrapper}>
                <p className={css.positiveOption}>Positive</p>
                <p className={css.positiveValue}>{positiveFeedback}%</p>
            </div>
        </div>
    )
}