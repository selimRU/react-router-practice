import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Datum from '../Datum/Datum';
import { key } from 'localforage';

const Home = () => {
    const data = useLoaderData()
    const meals = data.meals
    console.log(meals);
    return (
        <div className=' grid md:grid-cols-2 lg:grid-cols-3 justify-between items-center gap-5 py-5'>
            {

                meals.map(meal => <Datum key={meal.idMeal} meal={meal}></Datum>)
            }
        </div>
    );
};

export default Home;