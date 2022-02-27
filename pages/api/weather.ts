import { NextApiRequest, NextApiResponse } from "next";

type dataType = {
   data: any
}

export default  function weatherApi(req: NextApiRequest, res: NextApiResponse) {
    fetch("https://www.metaweather.com/api/location/44418/")
        .then(response => response)
        .then(data => data.json())
        .then(data => {
            res.json(data);
        });     

}


