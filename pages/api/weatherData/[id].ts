import { NextApiRequest, NextApiResponse } from "next";


export default async function getWeatherData (req: NextApiRequest, res: NextApiResponse){
    const {id } = req.query;
    const response = await fetch(`https://www.metaweather.com/api/location/${id}`);
    const data = await response.json();
    res.status(200).json(data); 
}