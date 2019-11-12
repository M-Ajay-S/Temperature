import React from 'react'
import ReactDOM from 'react-dom'
import SeasonDisplay from './SeasonDisplay'
import Loading from './Loading'

class App extends React.Component{
 /*   constructor(props) {
        super(props);
        this.state={lat:null,errorMessage:''}
    }  */
    state={lat:null,errorMessage:''}
    componentDidMount(){
        window.navigator.geolocation.getCurrentPosition((position)=>{
         this.setState({lat:position.coords.latitude})   
        },(err)=>{this.setState({errorMessage:err.message})})
        
        }
    renderContent(){
        if(this.state.errorMessage && !this.state.lat){

            return (
                <div>Error:{this.state.errorMessage}</div>
                )
        }
         if(this.state.lat &&!this.state.errorMessage){
            return(  
               <SeasonDisplay lat={this.state.lat}/>
                )
            }
        
            return <Loading message="please accept the location request"/>
    
    }
    render(){
        return (<div>{this.renderContent()}</div>)
        }
    
}
const rootElement=document.getElementById("root");

ReactDOM.render(<App/>,rootElement)