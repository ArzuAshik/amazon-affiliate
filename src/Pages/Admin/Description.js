import React from 'react';

const Description = ({info, setInfo}) => {
    return (
        <div className="row">
            <div className="col-md-6">
                <textarea onBlur={e => setInfo({...info, description: e.target.value})} id="description" placeholder="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ducimus dignissimos repellendus saepe laborum, impedit pariatur tempora libero accusantium voluptates laudantium." id="feature-input" style={{textAlign: 'justify'}} rows="4" cols="50"/>            
                <br/>
            </div>
            <div className="col-md-6">
                <p>{info.description}</p>
            </div>
        </div>
    );
};

export default Description;