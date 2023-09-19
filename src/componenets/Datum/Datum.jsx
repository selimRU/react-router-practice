import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Datum = ({ meal }) => {
    const navigate = useNavigate()
    const { idMeal, strCategory, strMealThumb } = meal

    const hadleNavigate = () => {
        navigate(`/datum/${idMeal}`)
    }
    return (
        <div className=' border shadow-md px-4 text-center py-5'>
            <img src={strMealThumb} alt="" />
            <h3>{strCategory}</h3>
            <button onClick={hadleNavigate} className=' bg-slate-500 py-2 my-4 px-4 rounded-md'>Show Detailes</button>
        </div>
    );
};

export default Datum;