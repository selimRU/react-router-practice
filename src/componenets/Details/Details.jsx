import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Details = () => {
    const data = useLoaderData()
    const { title} = data
    return (
        <div>
            <h3>deatils</h3>
            {
                title
            }
        </div>
    );
};

export default Details;