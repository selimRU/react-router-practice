import React from 'react';
import { Link } from 'react-router-dom';

const Datum = ({ datum }) => {
    const { id, title} = datum
    return (
        <div className=' border shadow-md px-4 text-center py-5'>
            <h3>{title}</h3>
            <Link to={`/datum/${id}`}><button className=' bg-slate-500 py-2 my-4 px-4 rounded-md'>Show Detailes</button></Link>
        </div>
    );
};

export default Datum;