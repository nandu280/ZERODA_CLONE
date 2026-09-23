import React from 'react';
function Hero() {
    return (  
          <div className="container ">

      <div className="row p-5 mt-5 border-buttom text-center" 
      style={{lineHeight: "1.8",fontSize:"1.2em"}}>
        <h2>Charges</h2>
        <h5 className='text-muted mt-3 mb-8'>List of all charges and taxes</h5>

        <div className="col-4 mt-5 p-4">
          <img src='media\pricing0.svg' style={{width:"250px",height:"184px" , marginBottom:"15px"}}/>
          <h2 className='text-center mb-3'>Free equity delivery</h2>
          <p className='text-muted mt-3'>All equity delivery investments (NSE, BSE), are absolutely free — ₹ 0 brokerage.</p>
        </div>

        <div className="col-4 mt-5 p-4">
          <img src='media\intradayTrades.svg' style={{width:"250px",height:"184px" , marginBottom:"15px"}}/>
          <h2 className='text-center mb-3'>Intraday and F&O trades</h2>
          <p className='text-muted mt-3'>Flat ₹ 20 or 0.03% (whichever is lower) per executed order on intraday trades across equity, currency, and commodity trades. Flat ₹20 on all option trades.</p>
        </div>
        <div className="col-4 mt-5 p-4">
          <img src='media\pricing0.svg' style={{width:"250px",height:"184px" , marginBottom:"15px"}}/>
          <h2 className='text-center mb-3'>Free direct MF</h2>
          <p className='text-muted mt-3'>All direct mutual fund investments are absolutely free — ₹ 0 commissions & DP charges.</p>
        </div>
       
          
       
      </div>
    </div>
    );
}

export default Hero;