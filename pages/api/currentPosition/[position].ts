import type { NextApiRequest, NextApiResponse } from 'next'



export default function getIdCurrentLocation(req: NextApiRequest, res: NextApiResponse) {
   const {position }  = req.query 
   console.log(position)   
   fetch(`https://www.metaweather.com/api/location/search/?lattlong=${position}`)
    .then(response => response)
    .then(data => data.json())
    .then(data => {
        res.json({data: data[0]})
    })
    .catch(err => res.json(err))
}


