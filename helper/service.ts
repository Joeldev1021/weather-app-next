import { typeImgWeather } from "../type";

interface Props {
    data: {
        consolidated_weather: any[],
        title: string
    } 
}


export function destruData({data}:Props) {
    const dataDays =  data.consolidated_weather.map((d) => {
        const {the_temp, max_temp, min_temp, applicable_date, id, weather_state_name} = d;
        return {
            id,
            the_temp,
            max_temp,
            min_temp,
            weather_state_name, 
            applicable_date
        };
    }).filter((d, index)=> index > 0);
    // data today
    const { visibility, air_pressure, humidity, wind_speed, weather_state_name, the_temp, applicable_date} = data.consolidated_weather[0];

    // array data today 
    const dataToday= {
        data : [
            {name:"Wind status", value:Math.round(wind_speed), measure:"mph"}, 
            {name:"Humidity", value:humidity, measure:"%"},
            {name: "visibility", value:Number.parseFloat(visibility).toFixed(1), measure:"miles"}, 
            {name:"Air pressure", value:air_pressure, measure:"mb"} 
        ],
        weather_state_name,
        the_temp,
        applicable_date
    };

    return {
        dataDays,
        dataToday,
        title: data.title,
    };
}

export const imgWeather:typeImgWeather = {
    "clear": "/clear.png",
    "hail": "/hail.png",
    "heavy cloud": "/heavyCloud.png",
    "heavy rain": "/heavyRain.png",
    "light cloud": "/lightCloud.png",
    "light rain": "/lightRain.png",
    "showers": "/shower.png",
    "snow": "/snow.png",
    "sleet": "/Sleet.png",
    "thunderstorm": "/thunderstorm.png",
};

export const centigrateToFarenheit= (centigrate: number) => { 
    return Math.round((centigrate * 9 / 5) + 32);
};


/* export function destruDataToday({data}:PropToday) {

    const { visibility, air_pressure, humidity, wind_speed, weather_state_name, the_temp, applicable_date} = data

    return {
      data : [
        {name:"Wind status", value:Math.round(wind_speed), measure:"mph"}, 
        {name:"Humidity", value:humidity, measure:"%"},
        {name: "visibility", value:Number.parseFloat(visibility).toFixed(1), measure:"miles"}, 
        {name:"Air pressure", value:air_pressure, measure:"mb"} 
    ],
    weather_state_name,
    the_temp,
    applicable_date
 }
} */


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