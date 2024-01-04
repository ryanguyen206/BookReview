import React from 'react'
import Genre from '../components/Genre'
import BookFeed from '../components/BookFeed'
import Hero from '../components/Hero'
import CreateReviewForm from '../components/CreateReviewForm'

const HomePage = () => {
  return (
    <div>
        <Hero/>
        <CreateReviewForm/>
        <Genre/>
        <BookFeed/>
    </div>
  )
}

export default HomePage