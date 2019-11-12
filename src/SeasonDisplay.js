import './seasonDisplay.css'
import React,{Component} from "react";
const seasonConfig={
    summer:{
        text:"Let's hit the Beach!",
        iconName:"sun"
    },
    winter:{
        text:"Burr,it's chilly!",
        iconName:"snowflakes"
    }
}

function getSeason(lat,month){
if(month>2&&month<9){
    return lat>0?"summer":"winter"
}
else{
    return lat>0?"winter":"summer"
}
}

const SeasonDisplay=(props)=>{
    const season= getSeason(props.lat,new Date().getMonth())
    const {text,iconName}=seasonConfig[season]
            return(
            <div className={`season-display ${season}`}>
                <i className={`${iconName} icon-left icon massive`}/>
                <h2>{text}</h2>
                <i className={`${iconName} icon-right icon massive`}/>
            </div>
            )


}

export default SeasonDisplay;