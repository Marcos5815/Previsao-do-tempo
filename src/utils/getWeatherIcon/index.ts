import clearDay from '../../components/IconsWeather/clear_day.svg'
import clearNight from '../../components/IconsWeather/clear_night.svg'
import cloud from '../../components/IconsWeather/cloud.svg'
import cloudlyDay from '../../components/IconsWeather/cloudly_day.svg'
import cloudlyNight from '../../components/IconsWeather/cloudly_night.svg'
import fog from '../../components/IconsWeather/fog.svg'
import hail from '../../components/IconsWeather/hail.svg'
import noneDay from '../../components/IconsWeather/none_day.svg'
import noneNight from '../../components/IconsWeather/none_night.svg'
import rain from '../../components/IconsWeather/rain.svg'
import snow from '../../components/IconsWeather/snow.svg'
import storm from '../../components/IconsWeather/storm.svg'


const iconMap: Record<string, string> = {
    "clear_day": clearDay,
    "clear_night": clearNight,
    "cloud": cloud,
    "cloudly_day": cloudlyDay,
    "cloudly_night": cloudlyNight,
    "fog": fog,
    "hail": hail,
    "none_day": noneDay,
    "none_night": noneNight,
    "rain": rain,
    "snow": snow,
    "storm": storm,
}

export const getWeatherIcon = (slug: string) => {
    return iconMap[slug] || clearDay;
}