const Card = ({ children }) => {
    return (
        <div className="max-w-full">{children}</div>
    )
}

export const CardToday = () => {
    return(
        <div className="bg-violet-secondary p-4 rounded-3xl">test</div>
    )
}


export const CardNextDays = () => {
    return(
        <div className="bg-white-text opacity-15 rounded-2xl py-4 px-8">Test test test</div>
    )
}

Card.Today = CardToday;
Card.nextDays = CardNextDays;



export default Card;

