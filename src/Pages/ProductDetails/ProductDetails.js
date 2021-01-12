import React, { useState } from 'react';

const ProductDetails = () => {
    const  { title, features, description, productUrl, images } = {
        title: "Product Title",
        features: {
            name: "Product Name",
            price: "$80",
            feature: "Product Feature",
        },
        description: "Product Description",
        productUrl: "#",
        images: [
            "https://dummyimage.com/600x400/000000/fff",
            "https://dummyimage.com/600x400/eb330e/fff",
            "https://dummyimage.com/600x400/0eebbf/fff",
            "https://dummyimage.com/600x400/660eeb/fff",
            "https://dummyimage.com/1080x1920/660eeb/fff"
        ],
    }

    // const { title, features, description, productUrl, images } = info;
    const [viewImage, setViewImage] = useState(0);
    return (
        <>
        <div className="hero-section">
            <div className="row">
                <div className="col-md-6">
                    <div className="image-viewer">
                        <img src={images[viewImage]} alt="Preview" className="img-fluid"/>
                    </div>
                    <div className="gallery">
                        {
                            images.map((image, index) => <div onClick={() => setViewImage(index)} className={viewImage === index ? "gallery-image active" : "gallery-image"}>
                                <img className="img-fluid" src={image} alt="Gallery"/>
                                </div>)
                        }
                    </div>
                </div>
                <div className="col-md-6 product-info">
                    <h1>{title}</h1>
                    <ul>
                        {
                            Object.keys(features).map(feature => <li><span>{feature}:</span> {features[feature]}</li>)
                        }
                    </ul>
                    <a href={productUrl} rel="noreferrer" target="_blank" className="btn btn-success mt-3">Buy from Amazon</a>
                </div>
            </div>
        </div>
        <div className="description-section">
            <h3>Description</h3>
            <p>{description}</p>
        </div>
        </>
    );
};

export default ProductDetails;