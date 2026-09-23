import React from 'react';

function LeftSection({
    imageURL,
    productName,
    productDescription,
    tryDemo,
    learnMore,
    googlePlay,
    appStore,
      }){
    return (
    
       <div className='container mt-5'>
        <div className='row '>
            <div className='col-6 '>
                <img src={imageURL} />
            </div>
            
            <div className='col-6 p-5 mt-5'>
                <h4>{productName}</h4>
                <p>{productDescription}</p>
                <div>
                <a href={tryDemo} style={{textDecoration:"none"}}>Try Demo→</a>
                <a href={learnMore} style={{marginLeft: "50px",textDecoration:"none"}}>Learn More→</a>
                </div>
                <div className='mt-5'>
                <a href={googlePlay}><img src='media\googlePlayBadge.svg'/></a>
                <a href={appStore}><img src='media\appstoreBadge.svg' style={{marginLeft: "50px"}} /></a>
                </div>
            </div>
        </div>
       </div> 
           
    );       

}

export default LeftSection;