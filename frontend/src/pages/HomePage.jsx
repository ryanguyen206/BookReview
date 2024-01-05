import React from 'react'
import Genre from '../components/Genre'
import BookFeed from '../components/BookFeed'
import Hero from '../components/Hero'
import CreateReviewForm from '../components/Forms/CreateReviewForm'

const HomePage = () => {
  return (
    <div>
        <Hero/>
        <Genre/>
        <BookFeed/>
    </div>
  )
}

export default HomePage