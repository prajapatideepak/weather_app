import React from 'react'

class ErrorBoundary extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            hasError:false
        }
    }
    static getDerivedStateFromError(error){
        return {hasError:true}
    }
    render(){
            if(this.state.hasError){
                return(
                    <div class="App">
                    <h1> Please Enter current city</h1>
                    </div>
                )
                
            }
            return this.props.children; 
        }
}

export default ErrorBoundary