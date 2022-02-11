interface Props {
    data:any[] 
}

export function destruData({data}:Props) {
  return  data.map(d => {
        const {the_temp, max_temp, min_temp, applicable_date, id, weather_state_name} = d
        return {
            id,
            the_temp,
            max_temp,
            min_temp,
            weather_state_name, 
            applicable_date
        }
    })
}

export function destruDataToday({data}) {

    const { visibility, air_pressure, humidity, wind_speed} = data

    return [
        {name: "visibility", value:Number.parseFloat(visibility).toFixed(1)}, 
        {name:"wind status", value:Math.round(wind_speed)}, 
        {name:"air pressure", value:air_pressure}, 
        {name:"humidity", value:humidity}
    ]

}

export const arrDay = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']

/* 
air_pressure: 1023
applicable_date: "2022-02-10"
created: "2022-02-10T21:59:01.657426Z"
humidity: 61
id: 6036764985655296
max_temp: 9.105
min_temp: 3.8049999999999997
predictability: 73
the_temp: 7.9
visibility: 10.2641200389724
weather_state_abbr: "s"
weather_state_name: "Showers"
wind_direction: 280.0127652743675
wind_direction_compass: "W"
wind_speed: 6.0242055806543116 */