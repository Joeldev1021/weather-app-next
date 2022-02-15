export interface DayType {
    id: number,
    the_temp: number,
    max_temp: number,
    min_temp: number,
    weather_state_name: string,
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
    value: number,
    measure: string
}

export interface TodayInterface {
    data: TodayProps[],
    weather_state_name: string,
    the_temp: number,
    applicable_date: string
}
export type typeImgWeather = {
    [key:string]:string
}

export type DataWeather = {
    dataDays: DayType[],
    dataToday: TodayInterface,
    title: string
}

