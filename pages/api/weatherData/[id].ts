import { NextApiRequest, NextApiResponse } from "next";


export default function getWeatherData (req: NextApiRequest, res: NextApiResponse){
    const {id } = req.query;
    fetch(`https://www.metaweather.com/api/location/${id}`)
        .then(response => response)
        .then(data => data.json())
        .then(data => {
            res.json(data);
        })
        .catch(err => res.json(err));
}