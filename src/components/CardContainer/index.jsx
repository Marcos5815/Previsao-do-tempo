import Card from "../Cards"

export const CardContainer = () => {
    return (
        <div className="flex flex-col gap-10">
            <Card.Today />
            <div className="flex gap-2">
                <Card.nextDays />
                <Card.nextDays />
                <Card.nextDays />
            </div>
        </div>
    )
}