import React from 'react';
import { useLoaderData, useNavigate } from 'react-router-dom';

const Details = () => {
    const navigate = useNavigate()
    const meals = useLoaderData()
    const meal = meals.meals
    console.log(meal);
    const { strCategory, strMealThumb } = meal[0]

    const handleBack = () => {
        navigate(-1)
    }
    return (
        <div className=' text-center py-4'>
            <div className=' flex justify-center'>
                <img className='w-[200px]' src={strMealThumb} alt="" />
            </div>
            <p>{strCategory}</p>
            <br />
            <button onClick={handleBack} className=' bg-slate-600 px-3 py-2 rounded-md text-white'>Go back</button>
        </div>
    );
};

export default Details;