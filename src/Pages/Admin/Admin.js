import React, { useEffect, useState } from 'react';
import Description from './Description';
import Features from './Features';

const Admin = () => {
    const [feature, setFeature] = useState({});
    const [info, setInfo] = useState({category: "All"});
    const [categories, setCategories] = useState([]);    

    useEffect(() => {
        fetch("http://localhost:4000/category")
        .then(response => response.json())
        .then(data => {
            setCategories(data);
        })
    },[])

    function handleImgUrl(text){
        const urls = text.split(",");
        console.log(urls);
        setInfo({...info, imgUrls: urls});
    }

    function handleSubmit() {
        const date = new Date();
        fetch("http://localhost:4000/add-product", {
            method: "POST",
            body: JSON.stringify({...info, features: feature, date: date.toLocaleDateString()}),
            headers: {"Content-Type": "application/json"}
        })
    }
    
    return (
        <>
        <div className="row">
            <div className="col-md-6">
                <select onChange={(e) => setInfo({...info, category: e.target.value})} className="form-control" name="category" id="category">                
                    {
                        categories.map(category => <option value={category}>{category}</option>)
                    }
                </select>
            </div>
            <div className="col-md-6">
                {info.category}
            </div>
        </div>
        <div className="row">            
            <div className="col-md-6 my-2">
                <input className="form-control" placeholder="Product Title" onBlur={e => setInfo({...info, title: e.target.value})} type="text"/>
            </div>
            <div className="col-md-6">
                <p>{info.title}</p>
                <br/>
            </div>
            <div className="col-md-6">
                <textarea className="form-control" rows="4" cols="50" placeholder="image URL" onBlur={e => handleImgUrl(e.target.value)}  type="text"/>
            </div>
            <div className="col-md-6">
                {
                    info.imgUrls && info.imgUrls.map(url => <img alt="img" height="50" width="50" key={url} src={url}/>)
                }
            </div>
        </div>
        <br/>
        <Features feature={feature} setFeature={setFeature}/>
        <br/>
        <Description info={info} setInfo={setInfo}/>
        <input className="form-control" placeholder="Amazon URL ( https://www.amazon.com/product/... )" onBlur={e => setInfo({...info, productUrl: e.target.value})} type="text"/>
        {
            Object.keys(feature).length > 0 ?
            <button onClick={handleSubmit} className="btn btn-success w-100 p-3 mt-3">Add Product</button>
            :
            <button disabled className="btn btn-secondary w-100 p-3 mt-3 disabled">First Click On The View Button</button>
        }
        </>
    );
};

export default Admin;