import React from 'react';

const Features = ({feature, setFeature}) => {
    function handleView(){
        const inputText = document.getElementById("feature-input").value.replaceAll("\n","");
        const featuresArray = inputText.split(";");
        const featureObject = {};
        featuresArray.forEach(element => {
            const featureArr = element.split(":");
            featureObject[featureArr[0].trim()] = featureArr[1].trim();
        })
        console.log(featureObject);
        setFeature(featureObject);
    }
    return (
        <div className="row">
            <div className="col-md-6">
                <textarea placeholder="feature1: details; feature2: details" id="feature-input" style={{textAlign: 'justify'}} rows="4" cols="50"/>
                <br/>
                <button onClick={handleView}>View</button>
            </div>
            <div className="col-md-6 border">
                {
                    Object.keys(feature).map(key => <p key={key}><span className="font-weight-bold">{key} :</span> {feature[key]}</p>)
                }
            </div>
        </div>
    );
};

export default Features;