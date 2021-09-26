import React, { useEffect, useState } from 'react';
import './Billionaire.css'
import Person from './Person/Person';
import TotalAmount from './TotalAmount/TotalAmount';
const Billionaire = () => {
    const [billionaires,setBillionaire]=useState([]);
    const [person,setPerson]=useState([])
    useEffect(()=>{
        fetch(`./generated.json`)
        .then(response=>response.json())
        .then(data=>setBillionaire(data))

    },[])
    const passInfoPerson= (info)=>{
        const addPerson=[...person,info];
        setPerson(addPerson);
    };
    return (
        <div className='continerOfComponent'>
            <div className='componentPerson'>
                {
                  billionaires.map(billionaire=><Person
                    key={billionaire._id} 
                    info={billionaire} 
                    passInfoPerson={passInfoPerson}

                  ></Person>)  
                }
            </div>
            <div>
                <TotalAmount person={person}></TotalAmount>
            </div>       
        </div>
    );
};

export default Billionaire;