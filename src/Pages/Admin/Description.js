import React from 'react';

const Description = ({info, setInfo}) => {
    return (
        <div className="row">
            <div className="col-md-6">
                <textarea className="form-control"  onBlur={e => setInfo({...info, description: e.target.value})} placeholder="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ducimus dignissimos repellendus saepe laborum, impedit pariatur tempora libero accusantium voluptates laudantium." style={{textAlign: 'justify'}} rows="4" cols="50"/>            
                <br/>
            </div>
            <div className="col-md-6">
                <p>{info.description}</p>
            </div>
        </div>
    );
};

export default Description;