import React from 'react';
import './ListView.css';
import Spinner from '../Spinner/Spinner';

 const List =({items, isLoading}) =>{
     return( isLoading ? <Spinner />  :
        <>
            {items.map((item, index) =>(
                item.media_type !== 'image' ? 
                
                <figure className='ListViewContainer'>    
                <img
                    src={item.thumbnail_url}
                    alt={item.title}
                    title={item.title}
                    key={index}
                />
                <figcaption className='ListViewcaption'>
                    <h4>{item.title}</h4>
                    {item.explanation}
                    <h4>{item.date}</h4>
                    <h4>{item.copyright}</h4>
                    <a href= {item.url} target="_blank">Click here to watch Video</a>
                </figcaption>
            </figure>
            :
            <figure className='ListViewContainer'>    
                <img
                    src={item.hdurl}
                    alt={item.title}
                    title={item.title}
                    key={index}
                />
                <a>{item.thumbnail_url}</a>
                <figcaption className='ListViewcaption'>
                    <h4>{item.title}</h4>
                    {item.explanation}
                    <h4>{item.date}</h4>
                    <h4>{item.copyright}</h4>
                </figcaption>
            </figure>
            ))}
        </>
        
        )
 }
export default List;