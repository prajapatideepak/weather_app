import { identifier } from '@babel/types'
import React from 'react'
import MYimage from '../immg/leo.png'
import wait from '../immg/wait1.gif'
function Weather({city }) {
    const [datas ,setdata] = React.useState(null)
    const [loading , setLoading] = React.useState(false)
    const [error, setError] = React.useState(false)
    const [resolved , setreloved] = React.useState(false)
    console.log(datas)
    React.useEffect(()=>{
        if(city==="") return
        setError(false)
        setLoading(true)
        setreloved(false)
        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=7dd493870937890d938d5c9b7366b5d8`).then(
            data => 
                data.json()
            
        ).then(result =>{
             setdata(result)
             
             setLoading(false)
             setreloved(true)
            })
        .catch(
            () => {
                setError(true)
                             setLoading(false)
                    
                console.log('ho raha he ')
            }
        )
    },[city])
    console.log(`error : ${error}`)
    if(loading){
        return (
                    <div className="App">
                    <img alt="" src={wait} />
                              
                     </div>
            
        )
    }
    
    if(error){
        <h1> This city is not in our list or you type {error.message}</h1>
    }
    
    if(resolved){
        
        return (
            
            <div className="App">
        
                    {datas.main? 
                    <>
             <div className="weather">
                <h1>{`${Math.ceil(datas.main.temp-273.15 )}°C`}</h1>
                <img src={MYimage} alt="notsh"  /> 
                <h6>{datas.weather[0].main}</h6>
                </div>
                <div className="city">

                 <h1>
                  {datas.name}
                 </h1>
                </div>
            </>   
            : <h1> Enter City name</h1>
              }
                     
            </div>
    
    )
}
else{
  return (
              <div className="App">
                        <h1> Enter your city name</h1>
               </div>
      
  )
}
}

export default Weather
