import  { useEffect, useState } from 'react';

export function useLocation (searchLocation:boolean = false)  {
    const [currentLocation, setCurrentLocation] = useState<string>('');

    useEffect(() => {
        if(searchLocation) {
            navigator.geolocation.getCurrentPosition((position) => {
                const { latitude, longitude } = position.coords;
                setCurrentLocation(`${latitude},${longitude}`);
            });
        }
    }, [searchLocation]);
    
    return { currentLocation };
    
}
