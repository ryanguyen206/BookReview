import { getData } from "../utils/helper"
import { useQuery } from "react-query"

const useGenre = () => {
    const {data: genres} = useQuery({
        queryKey:['genres'], 
        queryFn: async () => await getData('http://127.0.0.1:8000/api/genre/'),
        onSuccess: () => console.log(genres)
    })

  
    return {genres}
}

export default useGenre