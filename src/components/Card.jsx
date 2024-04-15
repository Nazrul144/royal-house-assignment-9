import React from 'react';

const Card = ({house}) => {
    const {segment, estate_title, image, description, price, status, area, location, facilities, rating} = house;
    console.log(segment)
    return (
        <div>
            <div className="card h-full bg-base-100 shadow-xl">
                <figure className="px-10 pt-10">
                    <img src={image} alt="Shoes" className="rounded-xl" />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title">{segment}</h2>
                    <p>{estate_title}</p>
                    <p>Price:{price}</p>
                    <p>Status:{status}</p>
                    <p>Rating:{rating}</p>
                    <div className="card-actions">
                        <button className="btn btn-primary">View Details</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Card;