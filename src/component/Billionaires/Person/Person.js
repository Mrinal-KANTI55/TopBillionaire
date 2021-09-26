import React from 'react';
import './Person.css';
const Person = (props) => {
    // here deconstracter for show person information
    const {picture,age,address,company,name}=props.info;
    return (
        <div>
            <div className='personCard'>
            <img src={picture} alt="" width="250px" />
            <h3>Name :{name}</h3>
            <h4>Address:{address}</h4>
            <h4>Company:{company}</h4>
            <h4>Age:{age}</h4>
            <button className='btnDegin'onClick={()=>props.passInfoPerson(props.info)}>Add Blance</button>
            </div>
        </div>
    );
};

export default Person;