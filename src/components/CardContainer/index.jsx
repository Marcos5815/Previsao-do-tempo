import { GetNextDays } from "../GetNextDays"
import Card from "../Cards"


export const CardContainer = () => {

    return (
        <div className="flex flex-col gap-10 justify-center items-center">
            <Card.Today />
            <GetNextDays />
        </div>
    )
}