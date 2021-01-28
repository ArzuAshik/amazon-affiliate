import React, { useEffect, useState } from 'react';
import HomeCard from './HomeCard';

const Home = () => {
    const [productInfo, setProductInfo] = useState([]);
    const [showOnPage, setSOP] = useState([]);
    const [currentPage, setCP] = useState(1);
    const [totalPages, setTotalPages] = useState([]);
    
    useEffect(() => {
        fetch("http://localhost:4000/")
        .then(response => response.json())
        .then(result => {
            setProductInfo(result);
            let pages = [];
            for(let i = 0; i *3 <= result.length; i++) {
                pages.push(i+1);
            }
            setTotalPages(pages);
        });
    }, []);

    useEffect(() => {
        const newShow = productInfo.slice((currentPage - 1) * 3, currentPage * 3)
        setSOP(newShow);        
    }, [currentPage, productInfo]);

    return (
        <>
        <div className="row home-card-container">
            {/* <div className="col-12">
                <input className="form-control text-center"placeholder="Search" type="text"/>
            </div> */}
            {
                showOnPage.map(product => <HomeCard key={product.id} data={product}/>)
            }
        </div>
        <div className="btn-group">
            {
                currentPage > 1 ? 
                    <button onClick={() => setCP(currentPage - 1)} className="btn btn-secondary">Previous</button>
                :
                    <button className="btn btn-secondary disabled">Previous</button>
            }
            {
                totalPages.map(page => <button key={page} className={currentPage === page ? "btn btn-light" : "btn btn-secondary"} onClick={() => setCP(page)}>{page}</button>)
            }
            {
                currentPage * 3 < productInfo.length ?
                    <button onClick={() => setCP(currentPage + 1)} className="btn btn-secondary">Next</button>
                :
                    <button className="btn btn-secondary disabled">Next</button>
            }
        </div>
        </>
    );
};

export default Home;