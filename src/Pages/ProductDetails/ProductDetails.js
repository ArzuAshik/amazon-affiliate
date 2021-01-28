import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import HomeCard from '../Home/HomeCard';

const ProductDetails = () => {
    const {id} = useParams();
    const [info, setInfo] = useState({
        title: "Product Title",
        features: {
            name: "Product Name",
            price: "$...",
            feature: "Product Feature",
        },
        description: "Product Description",
        productUrl: "#",
        imgUrls: [
            "https://dummyimage.com/600x400/000000/fff&text=Product-Image",
            "https://dummyimage.com/600x400/eb330e/fff&text=Product-Image",
            "https://dummyimage.com/600x400/0eebbf/fff&text=Product-Image",
            "https://dummyimage.com/600x400/660eeb/fff&text=Product-Image",
            "https://dummyimage.com/1080x1920/660eeb/fff&text=Product-Image"
        ],
        relatedProducts: []
    });
    
    useEffect(() =>{
        fetch("http://localhost:4000/product-details/" + id)
        .then(response => response.json())
        .then(data => {
            setInfo(data);
        })
    },[id])

    

    // const { title, features, description, productUrl, images } = info;
    const [viewImage, setViewImage] = useState(0);
    return (
        <>
        <div className="hero-section">
            <div className="row">
                <div className="col-md-6">
                    <div className="image-viewer">
                        <img src={info.imgUrls[viewImage]} alt="Preview" className="img-fluid"/>
                    </div>
                    <div className="gallery">
                        {
                            info.imgUrls.map((image, index) => <div onClick={() => setViewImage(index)} className={viewImage === index ? "gallery-image active" : "gallery-image"}>
                                <img className="img-fluid" src={image} alt="Gallery"/>
                                </div>)
                        }
                    </div>
                </div>
                <div className="col-md-6 product-info">
                    <h1>{info.title}</h1>
                    <ul>
                        {
                            Object.keys(info.features).map(feature => <li><span>{feature}:</span> {info.features[feature]}</li>)
                        }
                    </ul>
                    <a href={info.productUrl} rel="noreferrer" target="_blank" className="btn btn-success mt-3">Buy Now</a>
                </div>
            </div>
        </div>
        <div className="description-section">
            <h3>Description</h3>
            <p>{info.description}</p>
        </div>

        <h3 className="mt-3">Related Products</h3>
        <div className="row">
            {
                info.relatedProducts.map(product => <HomeCard data={product}/>)
            }
        </div>
        </>
    );
};

export default ProductDetails;