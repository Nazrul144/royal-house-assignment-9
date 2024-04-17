

const ShowCard = ({ regalHouse }) => {
    const { id, description, image, segment } = regalHouse;

   
    return (
        <div>
            <div className="card h-full bg-base-100 shadow-xl ">
                <figure><img src={image} alt="Shoes" /></figure>
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