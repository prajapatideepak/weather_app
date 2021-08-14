import React from 'react'

function Navbar({city , setcity}) {
    console.log(city)
    function handleChange(){
        setcity(inputref.current.value)
    }
    const inputref = React.createRef()
    
    return (
        <div className="navbar">
            <h1>
                Weather App 
            </h1>
            <div className="input">
            <input ref={inputref}   type="text" placeholder="Search City ... " />
            <button onClick={handleChange} > Search</button> 

            </div>
        </div>
    )
}

export default Navbar
