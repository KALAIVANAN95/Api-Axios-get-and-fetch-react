import React, { useEffect, useState } from 'react';

const Api =()=> {

    const [data,setData]=useState([]);

    const getData = async ()=>{

        const response=await fetch('https://fakestoreapi.com/products');
        const jsonData=await response.json();
        setData(jsonData);
    }

    useEffect(()=>{
        getData();
    },[]);

    return (
        <>
        
        <h2 className='heading'>Hello World</h2>
        <div className='container'>

            {
                data.map((Value)=>{

                    return(
                        <>
                        <div className='box'>
                <div className='content'>

                <h5 className='titles'>{Value.title}</h5>
                <p className='para'>{Value.description}</p>
                </div>

                <img className='images' src={Value.image} alt='' />

            </div>
                        </>
                    );
                })
            }
            

        </div>
        
        </>
    );
}

export default Api;