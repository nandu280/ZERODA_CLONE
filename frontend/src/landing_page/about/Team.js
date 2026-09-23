import React from 'react';
function Team() {
    return (  

        <div className='container'>
            <div className='row p-3 mt-5  border-top'>
                <h1 className='text-center  '>People</h1>
            </div>
          <div className="row p-3 text-muted" 
      style={{lineHeight: "1.8",fontSize:"1.2em"}}>
        <div className="col-6 p-3 text-center">
         <img src="media/nanditha.jpg" style={{borderRadius:"100%",width:"60%",height:"50%"}} />
         <h4 className="mt-5"> M Nanditha</h4>
         <h6>Software Engineer</h6>
        </div>
        <div className="col-6 p-3">
          <p>I’m Nanditha, a computer science student with an interest in web development and modern technologies. I enjoy learning through practical projects and building user-friendly applications.</p>

<p>Today, I’m focused on strengthening my skills in  development. This Zerodha clone is one of my projects, built to understand real-world website design and development.</p>

<p>Built using React, JSX, CSS, Bootstrap and React Router, the project recreates the major pages and features of the Zerodha website.</p>
<p >Connect on <a href="" style={{textDecoration:"none"}}>Homepage</a>/<a href="" style={{textDecoration:"none"}}>TradingQ&A</a>/<a href="" style={{textDecoration:"none"}}>Twitter</a></p>

        </div>  
        </div>
        </div>
    )       
}

export default Team;