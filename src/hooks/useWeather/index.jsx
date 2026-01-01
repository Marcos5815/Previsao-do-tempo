import { useEffect, useState } from "react"
import { HTTP } from "../../API"

export const useWeather = () => {
    
        const [weather, setWeather] = useState(null)
        const [loading, setLoading] = useState(true)
    
        useEffect(() => {
            HTTP.get('/weather')
            .then(response => {
                setWeather(response.data.results)
                console.log(response.data.results)
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