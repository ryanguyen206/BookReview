import React from 'react'
import { useQuery } from 'react-query'
import { getData } from '../../utils/helper';

const SingleReviewFeed = ({id}) => {


    const url =  `http://127.0.0.1:8000/api/book-review/${id}/messages/`

    const {data} = useQuery({
        queryKey: ['messages', id],
        queryFn: () => getData(url),
        onSuccess: () => console.log(data)
    })

    return (
        <>
        
            { data && data?.length > 0 ? 
                <div>
                    {data.map(message => (
                        <div key={message.id}>
                            <p className='text-indigo-400'>@{message?.username} says:</p>
                            <p>{message.body}</p>
                        </div>
                  
                    ))}
                </div>
                :
                <p>Currently no replies</p>
            
            }
        </>
    
    )
}

export default SingleReviewFeed