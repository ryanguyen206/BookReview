import React from 'react'
import { getData } from '../utils/helper'
import {useQuery} from 'react-query'
import { v4 as uuidv4 } from 'uuid';

const Genre = () => {

    const {data} = useQuery({
        queryKey:['genres'], 
        queryFn: async () => await getData('http://127.0.0.1:8000/api/genre/'),
        onSuccess: () => console.log(data)
    })


    return (
        <div className='mt-20 text-center text-indigo-400'>
            <h3 className='text-3xl mb-10 text-stone-500 font-bold '>Browse reviews through genres</h3>
            <div className='flex justify-center gap-6'>
                {data?.map(genre => (
                    <button key={uuidv4()} className='p-4 rounded-xl border border-indigo-400 hover:bg-indigo-400 hover:text-white'>
                        {genre}
                    </button>
                ))}
            </div>
         
        </div>
    )
}

export default Genre