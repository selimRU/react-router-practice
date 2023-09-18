import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Datum from '../Datum/Datum';
import { key } from 'localforage';

const Home = () => {
    const data = useLoaderData()
    console.log(data);
    return (
        <div className=' grid md:grid-cols-2 lg:grid-cols-3 justify-between items-center gap-5 py-5'>
            {

                data.map(datum => <Datum key={datum.id} datum={datum}></Datum>)
            }
        </div>
    );
};

export default Home;