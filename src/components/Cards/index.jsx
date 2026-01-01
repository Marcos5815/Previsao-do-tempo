import { WeatherNextDays } from "../WeatherNextDays"
import { WeatherToday } from "../WeatherToday"

const Card = ({ children }) => {
    return (
        <div className="">{children}</div>
    )
}

export const CardToday = () => {
    return(
        <div className="bg-violet-secondary p-4 rounded-3xl w-82 h-74 ">
            <WeatherToday />
        </div>
    )
}


export const CardNextDays = ({ day, date, min, max, icon }) => {
    return(
        <div className="bg-white-text/15 rounded-2xl">
            <WeatherNextDays day={day} date={date} min={min} max={max} icon={icon} />
        </div>
    )
}

Card.Today = CardToday;
Card.nextDays = CardNextDays;



export default Card;

