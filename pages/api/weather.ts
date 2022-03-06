import { NextApiRequest, NextApiResponse } from "next";



export default async function weatherApi(req: NextApiRequest, res: NextApiResponse) {
    const response = await fetch("https://www.metaweather.com/api/location/44418/");
    const data = await response.json();          
    res.status(200).json(data);
}


