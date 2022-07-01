import React, { useState } from "react";
import axios from 'axios';

const FetchC = () => {

    const [numbers,setNumbers]=useState(1);

    const[title,setTitle]=useState([]);
    const[description,setDescription]=useState([]);
    const[image,setImage]=useState([]);


    async function getData (){
        const response=await axios.get(`https://fakestoreapi.com/products/${numbers}`);
        setTitle(response.data.title);
               setImage(response.data.image);
        setDescription(response.data.description);
    }
    getData();
    
    return (
        <>
        <h1 className="title-top">Our Shop</h1>
        <div className="app">
            <select value={numbers} onChange={(event)=>{setNumbers(event.target.value)}}>
                <option value='1'>1</option>
                <option value='2'>2</option>
                <option value='3'>3</option>

                <option value='4'>4</option>
                <option value='5'>5</option>
                <option value='6'>6</option>

                <option value='7'>7</option>
                <option value='8'>8</option>
                <option value='9'>9</option>

                <option value='10'>10</option>
                
                <option value='11'>11</option>
                <option value='12'>12</option>
                <option value='13'>13</option>

                <option value='14'>14</option>
                <option value='15'>15</option>
                <option value='16'>16</option>

                <option value='17'>17</option>
                <option value='18'>18</option>
                <option value='19'>19</option>

                <option value='20'>20</option>




            </select>
            <h1>Product {numbers} is listed here is :<br /> <span>{title}</span> </h1>
            <div className="product">
                <h2 className="title-end">{title}</h2>
                
                <p>{description}</p>
                <img src={image} alt='random images' className="images-random" />
                

            </div>
        </div>
        
        </>
    );
}

export default FetchC;