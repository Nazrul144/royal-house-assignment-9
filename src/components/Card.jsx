
import { Link } from 'react-router-dom';

const Card = ({house}) => {
    const {segment, estate_title, image, description, price, status, area, location, facilities,} = house;
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
                    <div className="card-actions">
                    <Link to={`/homeDetails/${house.id}`} className='bg-sky-400 rounded-full px-4 py-2 font-poppins text-xl'>View Details</Link>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Card;