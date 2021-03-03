import React from 'react';
import './Explanation.css';


const Explanation =()=>{
    return(
        <div className='wholeContainer'>
        <div className='topContainer'>
            <h1 className='heading'> NASA Astronomy Photographs </h1>
            <p className='explanation'>
            This website will show you images of space taken by NASA on a specific date or betwen specific dates. The images will be loaded below once the dates have been picked and the specific view is chosen. 
            You will be able to select dates 3 months from the start date.
            </p>
        </div>
    </div>
    )
}



export default Explanation;