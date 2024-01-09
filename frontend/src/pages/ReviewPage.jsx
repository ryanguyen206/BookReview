import React from 'react'
import { useParams } from 'react-router-dom';
import SingleReviewHeader from '../components/ReviewPage/SingleReviewHeader'
import SingleReviewFeed from '../components/ReviewPage/SingleReviewFeed';




const ReviewPage = ({}) => {


    let { id } = useParams();

    return (
        <div className='p-10 border shadow-md'>
        <SingleReviewHeader id={id}/>
        <SingleReviewFeed id={id}/>
        </div>
    )
}

export default ReviewPage