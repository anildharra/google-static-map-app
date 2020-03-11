import React from 'react'
 

const RenderMapImg = (props) => {
    console.log("RenderMapImg()");
    console.log("RenderMapImg() props.mapUrl ="+props.mapUrl);
    return (
         <div>
             <img src ={props.mapUrl} alt='' style={{width:'100%', height:'100%'}} />
         </div>
    )
}

export default RenderMapImg
