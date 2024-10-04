import axios from 'axios'

const URL = 'https://travel-advisor.p.rapidapi.com/restaurants/list-in-boundary'




export const getPlacesData = async (sw, ne) => {
    try {
        const { data: {data}} = await axios.get(URL, 
        {
          params: {
            bl_latitude: sw.lat,
            tr_latitude: ne.lat,
            bl_longitude: sw.lng,
            tr_longitude: ne.lng,
            
          },
          headers: {
            'x-rapidapi-key': 'dd680403a9msh5d37c108eb07fc8p1c4464jsn5f973d61fd75',
            'x-rapidapi-host': 'travel-advisor.p.rapidapi.com'
          }
          
        }
        
        );
        
        return data;
    } catch (error) {
        console.log(error)
    }
}