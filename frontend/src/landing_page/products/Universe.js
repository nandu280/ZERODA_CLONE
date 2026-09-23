import React from 'react';
function Universe() {
    return ( 
       <div className='container mt-5'>
      <div className='row text-center'>
        <h3 className='mb-4  mt-4'>The Zerodha Universe</h3>
        <p>Extend your trading and investment experience even further with our partner platforms</p>
      

        <div className='col-4 p-3'>
          <img src="media\zerodhaFundhouse.png" style={{height:"40px"}} />
          <p className='text-small text-muted mt-3 '>Our asset management venture
that is creating simple and transparent index
funds to help you save for your goals.
</p>
          
        </div>
         <div className='col-4 p-3'>
          <img src="media\sensibullLogo.svg" style={{height:"40px"}} />
          <p className='text-small text-muted mt-3'>Options trading platform that lets you
create strategies, analyze positions, and examine
data points like open interest, FII/DII, and more.
</p>

        </div>
         <div className='col-4 p-3'>
          <img src="media\goldenpiLogo.png" style={{height:"40px"}}/>

          <p className='text-small text-muted mt-3'>Bonds trading platform</p>
        </div>

      

              <div className='col-4 p-3 mt-3'>
          <img src="media\streakLogo.png" style={{height:"40px"}} />
          <p className='text-small text-muted mt-3'>Systematic trading platform
that allows you to create and backtest
strategies without coding.
</p>
          
        </div>
         <div className='col-4 p-3 mt-3'>
          <img src="media\smallcaseLogo.png" style={{height:"40px"}} />
          <p className='text-small text-muted mt-3'>Thematic investing platform
that helps you invest in diversified
baskets of stocks on ETFs.
</p>

        </div>
         <div className='col-4 p-3 mt-3 '>
          <img src="media\dittoLogo.png" style={{height:"40px"}}/>

          <p className='text-small text-muted mt-3'>Personalized advice on life
and health insurance. No spam
and no mis-selling</p>
        </div>

      </div>
    </div>
     );
}

export default Universe;