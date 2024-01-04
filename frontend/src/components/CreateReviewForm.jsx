import React from 'react'
import { useState, useEffect } from 'react'

const CreateReviewForm = () => {

    const [reviewForm, setReviewForm] = useState({
        book_title:'',
        review_title:'',
        genre:'',
        body: ''
    })

    const handleChange = (e) => {
        setReviewForm({...reviewForm, [e.target.name]: e.target.value})
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log('oh ye')
    }

    useEffect(() => {
      console.log(reviewForm)
    }, [reviewForm])
    

  return (
    <>
    <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
          Create your book review
        </h2>
      </div>
      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <form className="space-y-6" onSubmit={handleSubmit}>
          <div>
            <label htmlFor="book_title" className="block text-sm font-medium leading-6 text-gray-900">
              Book Title
            </label>
            <div className="mt-2">
              <input
                id="book_title"
                name="book_title"
                type="text"
                required
                onChange={handleChange}
                className="block w-full rounded-md border-0 py-1.5 px-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          <div>
            <div className="flex items-center justify-between">
              <label htmlFor="review_title" className="block text-sm font-medium leading-6 text-gray-900">
                Review Title
              </label>
            </div>
            <div className="mt-2">
              <input
                id="review_title"
                name="review_title"
                type="text"
                onChange={handleChange}
                required
                className="block w-full rounded-md border-0 py-1.5 px-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          <div>
            <div className="flex items-center justify-between">
              <label htmlFor="review_title" className="block text-sm font-medium leading-6 text-gray-900">
                Review
              </label>
            </div>
            <div className="mt-2">
              <textarea
                id="body"
                name="body"
                onChange={handleChange}
                required
                className="block w-full rounded-md border-0 py-1.5 px-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          <div>
            <button
              type="submit"
              className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Create
            </button>
          </div>
        </form>
      </div>
    </div>
  </>
  )
}

export default CreateReviewForm