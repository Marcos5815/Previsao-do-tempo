import Card from "../Cards"
import { useWeather } from "../../hooks/useWeather";
import { getWeatherIcon } from "../../utils/getWeatherIcon";


export const GetNextDays = () => {

    const days = []
    const {weather, loading} = useWeather()

    for(let i = 1; i <= 3; i++) {
        const date = new Date()
        date.setDate(date.getDate() + i);
        const weekday = date.toLocaleDateString("pt-BR", {
            timeZone: "America/Sao_Paulo",
            weekday: "long",
        })

        const capitalized = weekday.charAt(0).toUpperCase() + weekday.slice(1);
        days.push(capitalized);
    }


    if(loading || !weather) {
        console.log("The API is loading")
    }


    const iconPath = getWeatherIcon(weather?.condition_slug)



  return (
    <div className="flex gap-2">
      <Card.nextDays day="Amanhã" 
        date={weather?.forecast[1].date} 
        min={weather?.forecast[1].min}
        max={weather?.forecast[1].max}
        icon={iconPath}
      />
      <Card.nextDays day={days[1]} 
        date={weather?.forecast[1].date} 
        min={weather?.forecast[1].min}
        max={weather?.forecast[1].max}
        icon={iconPath}
      />

      <Card.nextDays day={days[2]} 
        date={weather?.forecast[1].date} 
        min={weather?.forecast[1].min}
        max={weather?.forecast[1].max}
        icon={iconPath}   
      />
    </div>
  );
};
