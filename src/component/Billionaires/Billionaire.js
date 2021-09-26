import React, { useEffect, useState } from 'react';
import './Billionaire.css'
import Person from './Person/Person';
const Billionaire = () => {
    const [billionaires,setBillionaire]=useState([]);
    useEffect(()=>{
        fetch(`./generated.json`)
        .then(response=>response.json())
        .then(data=>setBillionaire(data))

    },[])
    return (
        <div className='continerOfComponent'>
            <div className='componentPerson'>
                {
                  billionaires.map(billionaire=><Person info={billionaire}></Person>)  
                }
            </div>
            <div>
                <h1>another Boss</h1>
            </div>       
        </div>
    );
};

export default Billionaire;