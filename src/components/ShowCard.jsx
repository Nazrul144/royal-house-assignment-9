import 'animate.css';

const ShowCard = ({ regalHouse }) => {
    const { id, description, image, segment } = regalHouse;

   
    return (
        <div>
            <div className="card h-full bg-base-100 shadow-xl animate__animated animate__zoomIn  transition-colors duration-1000 ease-in-out hover:bg-violet-200 active:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-300 ">
                <figure><img src={image} alt="house" /></figure>
                <div className="card-body">
                    <h2 className="card-title">
                        {segment}
                        <div className="badge badge-secondary">NEW</div>
                    </h2>
                    <p>{description}</p>
                </div>
            </div>
        </div>
    );
};

export default ShowCard;