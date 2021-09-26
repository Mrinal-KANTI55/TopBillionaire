import React from 'react';
import './TotalAmount.css'
const TotalAmount = (props) => {
    console.log(props.person);
    let TotalAmounts=0;
    let name='';
    // calculate total balence and add those person name
    for (const eachPerson of props.person){
        TotalAmounts=TotalAmounts+eachPerson.balance;
        name =name +eachPerson.name +',  ';
    }
    return (
        <div className='setPosition'>
            <h4>total :${TotalAmounts}</h4>
            <p>Name:{name}</p>
            <br />
        </div>
        
    );
};

export default TotalAmount;