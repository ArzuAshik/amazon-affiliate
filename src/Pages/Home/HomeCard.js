import React from 'react';
import { Link } from 'react-router-dom';

const HomeCard = ({data: {id, title, price, imgUrls}}) => {
    return (
        <div className="col-md-4 my-2">
                <Link to={`/details/${id}`}>
                <div className="card">
                    <img src={imgUrls[0]} className="card-img-top" alt={title}/>
                    <div className="card-body">
                        <h5 className="card-title">{title}</h5>
                        <h4>{price}</h4>
                        <button className="btn btn-success">View Details</button>
                    </div>
                </div>
            </Link>
        </div>
    );
};

export default HomeCard;