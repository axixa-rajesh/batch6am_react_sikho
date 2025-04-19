import React from 'react';

function Returnc(props) {
    let age = 26; let name = "Suresh";
    return <div>
        hello {name}
        {
            (age > 60) ? <b> You are Retired person</b> : <> You have  {60 - age} years in services</>
        }    
        </div>
 
    // let employee = [
    //   {name:"Rakhi",gender:"female"},  
    //   {name:"Rakesh",gender:"male"},  
    //   {name:"Rama",gender:"female"},  
    //   {name:"Rani",gender:"female"},  
    //   {name:"Raki",gender:"male"},  
    // ];
    // return [
    //     employee.map(va => {
    //         if (va.gender == 'female')
    //             return <h2>Hello {va.name} Ma'am</h2>
    //        return <h2>Hello {va.name} Sir</h2>
        
    //     })
    // ]
    // return [
    //         <h1>Rajesh</h1>,
    //         <h2>9251435299</h2>
    //     ]
    // return <>
    //         <h1>Rajesh</h1>
    //         <h2>9251435299</h2>
    //     </>

}

export default Returnc;