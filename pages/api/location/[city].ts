import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
  name: string
}

export default function getIdLocation(req: NextApiRequest, res: NextApiResponse) {
   const {city }  = req.query 
   fetch(`https://www.metaweather.com/api/location/search/?query=${city}`)
    .then(response => response)
    .then(data => data.json())
    .then(data => {
        res.json({data})
    })
    .catch(err => res.json(err))
}

