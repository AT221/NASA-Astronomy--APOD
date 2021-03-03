import React from 'react';
import './GridView.css';
import Spinner from '../Spinner/Spinner';
import { SRLWrapper } from "simple-react-lightbox";


const GridImages = ({items, isLoading}) =>{
    return( isLoading ? <Spinner /> :
    <figure className='ImgContainer'>
        <SRLWrapper>
            {items.map((item, index) =>(
            item.media_type !== 'image' ? 
           
        <figure class='container'>
           <img 
                src={item.thumbnail_url}
                alt={item.title} 
                title={item.title}
                key={index}
                /> 
            <figcaption className='link'>
                <a href= {item.url} target="_blank">Click here to watch Video</a>
            </figcaption>
        </figure>
                :
        <div class='container'>
                <img 
                src={item.hdurl}
                alt={item.title} 
                title={item.title}
                key={index}
                />
         </div>    
            ))}
                     
        </SRLWrapper>
    </figure>
    )
}


export default GridImages;

