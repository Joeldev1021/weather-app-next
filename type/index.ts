export interface DayType {
    id: number,
    the_temp: number,
    max_temp: number,
    min_temp: number,
    aplicate_date: string,
    whater_state_name: string,
    applicable_date: string
}


export interface TodayType {
    visibility: number,
    air_pressure: number,
    wind_speed:number,
    humidity:number
}

export interface TodayProps {
    name: string,
    value: number
}