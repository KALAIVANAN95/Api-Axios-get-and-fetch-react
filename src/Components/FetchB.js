import axios from "axios";
import React, { useState } from "react";

const FetchB = () => {

const [quote,setQuote] = useState('');

    const getQuote=()=>{
        axios.get('https://api.quotable.io/random').then((res)=>{
setQuote(res.data.content);
        }).catch(err =>{
            console.log(err);
        })
    }
    return(
        <>
        <h2 className="heading">Axis with Get Data</h2>

        <div className="container">
        <div className='box'>
                <div className='content'>

                
                <p className='para'>{quote}</p>
                </div>

                <button onClick={getQuote}>Get Quote</button>

            </div>           
            

        </div>
        
        </>
    );
}


export default FetchB;