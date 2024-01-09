import React from 'react'
import {useQuery} from 'react-query'
import { getData } from '../../utils/helper'
import SingleBookFeed from './SingleBookFeed'

const BookFeed = ({currentGenre}) => {
    const {isLoading, data} = useQuery({
      queryKey:['reviews'], 
      queryFn: async () => await getData('http://127.0.0.1:8000/api/book-review/'),
      onSuccess: () => console.log(data)
  })


  const filteredReviews = currentGenre ? data.filter((review) => review.genre_name === currentGenre) : data;

    console.log(filteredReviews)

  return (
    
      filteredReviews && filteredReviews.length === 0 ? <p className='text-center my-20 text-stone-500 text-2xl uppercase'>No book reviews</p> :
      <div className='mt-20 grid gap-8 grid-cols-2 grid-rows-2 text-stone-500 font-medium'>
        {filteredReviews?.map(review => (
            <SingleBookFeed key={review.id} review={review}/>
        ))}
      </div>
    

  )
}

export default BookFeed