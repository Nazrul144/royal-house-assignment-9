
import { Link } from 'react-router-dom';
import 'animate.css';
import PropTypes from 'prop-types';

const Card = ({house}) => {
    const {segment, estate_title, image,  price, status} = house;
    return (
        <div>
            <div className="card h-full bg-base-100 shadow-xl animate__animated animate__zoomInRightbg-sky-500 transition-colors duration-1000 ease-in-out hover:bg-violet-200 active:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-300 ">
                <figure className="px-10 pt-10">
                    <img src={image} alt="Shoes" className="rounded-xl" />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title">{segment}</h2>
                    <p>{estate_title}</p>
                    <p className='font-semibold'>Price: {price}</p>
                    <p className='font-semibold'>Status: {status}</p>
                    <div className="card-actions">
                    <Link to={`/homeDetails/${house.id}`} className=' rounded-full px-4 py-2 font-poppins text-xl bg-sky-500 hover:bg-sky-700 hover:text-white transition-colors duration-1000 ease-in-out'>View Details</Link>

                    </div>
                </div>
            </div>
        </div>
    );
};

Card.propTypes = {
    house: PropTypes.node 
  };
  
export default Card;