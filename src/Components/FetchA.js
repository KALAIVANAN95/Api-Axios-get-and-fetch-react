import axios from "axios";
import React, { useEffect, useState } from "react";

const apiLink='https://jsonplaceholder.typicode.com/todos'

const FetchA =()=> {

    const [post,setPost]=useState([]);

   
    useEffect(()=>{
        const data=axios.get(apiLink).then((response)=>{
            setPost(response.data);
        })
    
    },[]);

    return(
        <>
        <h2 className="heading">Axios with React</h2>
        <div className='container'>
            {
                post.map((values)=>{

                    return(
                        <>
                <div className='box'>
                <div className='content'>

                <h5 className='titles'>{values.title}</h5>
                
                </div>

            

            </div>

                        </>
                    );
                })
            }    
        
        </div>
        </>
    );
}

export default FetchA;