import React, {useContext} from 'react'
import { useQuery } from 'react-query'
import { getData, timeAgo } from '../../utils/helper'
import AuthContext from '../../context/AuthContext'




const SingleReviewHeader = ({id}) => {

  let {user} = useContext(AuthContext)

  const url = `http://127.0.0.1:8000/api/book-review/${id}`

  const {data : review} = useQuery({
    queryKey:['review', id],
    queryFn: () => getData(url),
    onSuccess: () => {
      console.log(review)
    }
  })


  return (
    <div>
      {review && 
          <div key={review.id}>
           <div className='flex justify-between items-center'>
             <div className=''>
               <p className='uppercase mt-4 text-2xl font-semibold mb-2 '>{review?.book_title}</p>
               <p className='text-indigo-400 mb-2'>Hosted by: {review?.username}</p>
                <p className='border px-2 rounded-xl bg-stone-400 text-white inline-block'>
                  {review?.genre_name}
                </p>

             </div>
             <small>{timeAgo(review.created)}</small>
           </div>
    
    
          
       </div> 
      }

      <h2 className='mt-20 mb-10'>Replies to <span className='uppercase mt-4 text-xl font-semibold'>{review?.review_title}:</span></h2>
    </div>
  )
}

export default SingleReviewHeader