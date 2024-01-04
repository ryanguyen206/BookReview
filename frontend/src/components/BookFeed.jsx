import React from 'react'
import {useQuery} from 'react-query'
import { getData, timeAgo } from '../utils/helper'

const BookFeed = () => {
    const {isLoading, data} = useQuery({
      queryKey:['reviews'], 
      queryFn: async () => await getData('http://127.0.0.1:8000/api/book-review/'),
      onSuccess: () => console.log(data)
  })


  return (
    <div className='mt-20 grid gap-8 grid-cols-2 text-stone-500 font-medium'>
        {data?.map(review => (
          <div className='border p-10 shadow-md' key={review.id}>
            <div className='flex justify-between items-center'>
              <div className='flex gap-4 items-center '>
                <p className='text-indigo-400 text-lg '>@{review.username}</p>
                <p className='border px-2 rounded-xl bg-stone-400 text-white '>{review.genre_name}</p>
              </div>
              <small>{timeAgo(review.created)}</small>
            </div>
     
            <p className='uppercase mt-4 text-2xl font-semibold '>{review.book_title}</p>
            <small className='text-base'>{review.review_title}</small>
            <p className='mt-10'>{review.body.slice(0, 100)}...</p>

            <button className='mt-10 bg-indigo-400 text-white border p-2 px-4 rounded-xl hover:bg-indigo-500 shadow-lg'>Join this review</button>
          
          </div>
        ))}
    </div>
  )
}

export default BookFeed