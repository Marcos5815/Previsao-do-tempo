import { useWeather } from "../../hooks/useWeather"

export const CityCard = () => {

    const {weather, loading} = useWeather()

    if(loading) {
        return console.log("The API is loading")
    }

    return (
        <div className="bg-transparent flex justify-center items-center h-6">
            <p className="text-[20px] font-semibold text-white-text">{weather.city}</p>
        </div>
    )
}