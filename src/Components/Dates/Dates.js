import React from 'react';
import './Dates.css';
import Datepicker from 'react-datepicker/';
import 'react-datepicker/dist/react-datepicker.css';
import addDays from '../../../node_modules/date-fns/addDays'

const max = (start) =>{
    let x = new Date();
    let y= addDays(start, 90);
    if(y > x){
        return x
    }else{
        return y
    }
}

const Dates = (props) =>{
    return (
        <div>
             <label  id='start' name='startDate' >Start Date : </label>
                 <div style={{display: 'inline-flex'}}>
                <Datepicker
                    style={{display: 'inline-flex'}}
                    selected={props.startDate}
                    closeOnScroll={true}
                    onChange={date => props.onChangeStart(date)} 
                    maxDate={new Date()}
                    minDate={new Date('1995-06-15')}
                    isClearable={true}
                    placeholderText="Click to select"
                    showYearDropdown
                    showMonthDropdown
                    dropdownMode="select"
                    todayButton="Today's Date"
                />
            </div>
                <label  id='end' name='endDate' > End Date : </label>
                <div style={{display: 'inline-flex'}}>
                <Datepicker
                    openToDate={props.startDate}
                    style={{display: 'inline-flex'}}
                    selected={props.endDate}
                    closeOnScroll={true}
                    onChange={date => props.onChangeEnd(date)} 
                    maxDate={max(props.startDate)}
                    minDate={props.startDate}
                    isClearable={true}
                    placeholderText="Click to select"
                    showYearDropdown
                    showMonthDropdown
                    dropdownMode="select"
                    todayButton="Today's Date"
                />
            </div>
                <div>
                    <ul className='ViewOptions'>        
                    <li className='GridView' onClick={props.showGrid}> Grid View</li> 
                    <li className = 'ListView' onClick={props.showList}>List View</li> 
                    </ul>
                </div>
        </div>
    )
}

export default Dates;