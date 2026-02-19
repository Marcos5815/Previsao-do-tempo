export interface Weather {
    temp: number;
    city: string;
    humidity: string;
    condition_slug: string;
    description: string;
    forecast: Array<{
        date: string;
        weekday: string;
        max: number;
        min: number;
        
    }>
}