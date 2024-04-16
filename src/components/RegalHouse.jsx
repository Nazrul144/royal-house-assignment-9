import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import ShowCard from './ShowCard';

const RegalHouse = () => {
    const [regalHouses, setRegalHouses] = useState([])

    useEffect(()=>{
        fetch('regalHouse.json')
        .then(res => res.json())
        .then(data => setRegalHouses(data));
    },[])
    return (
        <div>
            <Helmet>
                <title>Regal House | Home</title>
            </Helmet>
                <h1>This is vip page!</h1>

              <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-4'>
              {
                regalHouses.map(regalHouse => <ShowCard key={regalHouse.id} regalHouse={regalHouse}></ShowCard>)
               }
              </div>
            
        </div>
    );
};

export default RegalHouse;