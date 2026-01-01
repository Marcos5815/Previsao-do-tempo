import { useWeather } from "../../hooks/useWeather"
import { IconHumidity, IconTemperature } from "../icons"
import { getWeatherIcon } from "../../utils/getWeatherIcon"

export const WeatherToday = () => {

    const {weather, loading} = useWeather()

    if(loading || !weather) {
        return console.log("Api loading")
    }

    const iconPath = getWeatherIcon(weather?.condition_slug)
    const today = weather?.forecast[0].date


    return (
        <div className="text-white-text flex flex-col gap-7">
            <div className="flex flex-col justify-center items-center">
                <p className="font-semibold">{`Hoje (${today})`}</p>
                <div className="w-24 h-16 p-2">
                    <img src={iconPath} alt={weather?.description} />
                </div>
                <p className="text-[43px] font-bold py-2">{weather?.temp}°</p>
                <p className="text-[13px] leading-[120%]">{weather?.description}</p>
            </div>
            <div className="flex flex-col gap-2.5">
                <div className="flex justify-between">
                    <div className="flex gap-2">
                        <IconHumidity /> <p className="font-semibold">Umidade:</p>
                    </div>
                        <p>{weather?.humidity}%</p>
                </div>
                <div className="flex justify-between"> 
                    <div className="flex gap-2">
                        <IconTemperature /> <p className="font-semibold">Min/Max:</p>
                    </div>
                    <p>{weather?.forecast[0].min}/{weather?.forecast[0].max}°</p>
                </div>
            </div>
        </div>
    )
} 