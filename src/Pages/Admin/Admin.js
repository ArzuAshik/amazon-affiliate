import React, { useState } from 'react';
import Description from './Description';
import Features from './Features';

const Admin = () => {
    const [feature, setFeature] = useState({});
    const [info, setInfo] = useState({});

    function handleImgUrl(text){
        const urls = text.split(",");
        console.log(urls);
        setInfo({...info, imgUrls: urls});
    }
    
    return (
        <>
        <div className="row">
            <div className="col-md-6">
                <input placeholder="Product Title" onBlur={e => setInfo({...info, title: e.target.value})} type="text"/>
            </div>
            <div className="col-md-6">
                <p>{info.title}</p>
                <br/>
            </div>
            <div className="col-md-6">
                <textarea rows="4" cols="50" placeholder="image URL" onBlur={e => handleImgUrl(e.target.value)}  type="text"/>
            </div>
            <div className="col-md-6">
                {
                    info.imgUrls && info.imgUrls.map(url => <img height="50" width="50" key={url} src={url}/>)
                }
            </div>
        </div>
        <br/>
        <Features feature={feature} setFeature={setFeature}/>
        <br/>
        <Description info={info} setInfo={setInfo}/>
        </>
    );
};

export default Admin;