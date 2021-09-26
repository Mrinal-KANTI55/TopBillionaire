import React, { useEffect, useState } from 'react';
import './Billionaire.css'
import Person from './Person/Person';
import TotalAmount from './TotalAmount/TotalAmount';
const Billionaire = () => {
    const [billionaires,setBillionaire]=useState([]);
    const [person,setPerson]=useState([]);
    // here we get the local data
    useEffect(()=>{
        fetch(`./generated.json`)
        .then(response=>response.json())
        .then(data=>setBillionaire(data))

    },[])
    // set event handeler for child totalCard
    const passInfoPerson= (info)=>{
        const addPerson=[...person,info];
        setPerson(addPerson);
    };
    return (
        <div className='continerOfComponent'>
            <div className='componentPerson'>
                {/* work on person card details */}
                {
                  billionaires.map(billionaire=><Person
                    key={billionaire._id} 
                    info={billionaire} 
                    passInfoPerson={passInfoPerson}

                  ></Person>)  
                }
            </div>
            {/* work on total count */}
            <div>
                <TotalAmount 
                person={person}
                key={person._id} 
                ></TotalAmount>
            </div>       
        </div>
    );
};

export default Billionaire;