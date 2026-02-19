import { useEffect, useState } from "react"
import { HTTP } from "../../API"
import type { Weather } from '../../../types/Weather';

export const useWeather = () => {


    
        const [weather, setWeather] = useState<Weather | null>(null)
        const [loading, setLoading] = useState<boolean>(true)
    
        useEffect(() => {
            HTTP.get<{ results: Weather}>('/weather?format=json-hook&woeid=455827')
            .then(response => {
                setWeather(response.data.results)
                setLoading(false)
    
            })
            .catch(error => {
              console.error(error)
              setLoading(false)
            })
          
        }, [])

        return {
          weather,
          loading
        }
    
}