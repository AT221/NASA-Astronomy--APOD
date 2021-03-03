import React, {useState, useEffect} from 'react';

import './App.css';
import NavBar from '../NavBar/NavBar';
import Explanation from '../Explanation/Explanation';
import Dates from '../Dates/Dates'
import GridImages from '../GridView/GridImages';
import List from '../ListView/ListImages';
import Footer from '../Footer/Footer';
import axios from 'axios';

const App = () =>{
  const initialState = {
    gridState: false,
    listState: false,
  }

  const [value, setValue] = useState(initialState);

  const [startDate, setStartDate] = useState(undefined);
  const [endDate, setEndDate] = useState(undefined);

  const [isLoading, setIsLoading] = useState(true)
  const [items, setItems] = useState([])

  const key = process.env.REACT_APP_API_KEY;

   var newStartDate = reFormatDate(startDate).toString();
   var newEndDate = reFormatDate(endDate).toString();

useEffect(()=> {
  axios.get(`https://api.nasa.gov/planetary/apod?api_key=${key}&start_date=${newStartDate}&end_date=${newEndDate}&thumbs=true`)
  .then(res =>{
    setItems(res.data);
    setIsLoading(false);
  })
  .catch(err =>{
    console.log(err)
    setIsLoading(true);
  })
},[newStartDate, newEndDate])

const showGrid=()=>{
  setValue({
    gridState:!value.gridState,
    listState:false,
  });
}

const showList=()=>{
  setValue({
    listState:!value.listState,
    gridState: false,
  });
}

function reFormatDate(date) {
  var x = new Date(date),
      month = '' + (x.getMonth() + 1),
      day = '' + x.getDate(),
      year = x.getFullYear();

  if (month.length < 2) 
      month = '0' + month;
  if (day.length < 2) 
      day = '0' + day;

  return [year, month, day].join('-');
}

    return(
      <>
        <div className='Components'>
          <NavBar  />
          <Explanation /> 
          <Dates showGrid={showGrid} showList={showList} startDate={startDate} onChangeStart={(date) => setStartDate(date)}  endDate={endDate}onChangeEnd={(date) => setEndDate(date)}/>
          {value.gridState  ? <GridImages isLoading={isLoading} items={items}/> : null}
          {value.listState  ? <List  isLoading={isLoading} items={items}/> : null}

          <Footer />
        </div>
      </>
    )
  }



export default App;
