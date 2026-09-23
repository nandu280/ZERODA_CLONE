import React from 'react';
function Footer() {
    return ( 
      <footer style={{backgroundColor:"rgb(250,250,250"}}>
       <div className='container border-top mt-5' >
        <div className='row mt-5'>
            <div className='col'>
               <img src ="media/logo.svg" style={{ width:"50%"}} /> 
               <p>
                 © 2010 - 2024, Not Zerodha Broking Ltd. All rights reserved.</p>
            </div>
             <div className='col'>
                <p>Company</p>  
                
                 <a href="" className='text-muted text-decoration-none d-inline-block mb-1'>About</a>
                 <br />
                   <a href=""  className='text-muted text-decoration-none d-inline-block mb-1'>Products</a>
                   <br />
                   <a href="" className='text-muted text-decoration-none d-inline-block mb-1'>Pricing</a>
                   <br />
                  <a href="" className='text-muted text-decoration-none d-inline-block mb-1'>Referral programme</a>
                  <br />
                  <a href="" className='text-muted text-decoration-none d-inline-block mb-1'>Careers</a>
                  <br />
                   <a href="" className='text-muted text-decoration-none d-inline-block mb-1'>Zeroda.tech</a>
                   <br />
                   <a href="" className='text-muted text-decoration-none d-inline-block mb-1'>Press & media</a>
                   <br />
                   <a href="" className='text-muted text-decoration-none d-inline-block mb-1'>Zeroda cares(CSR)</a>
                   <br />
                  
             </div>
             <div className='col'>
                <p>Support</p>
               <a href="" className='text-muted text-decoration-none d-inline-block mb-1' > Contact</a>
               <br />
               <a href="" className='text-muted text-decoration-none d-inline-block mb-1' > Support portal</a><br />
               <a href="" className='text-muted text-decoration-none d-inline-block mb-1' > Z-Connect blog</a><br />

               <a href="" className='text-muted text-decoration-none d-inline-block mb-1' >List of charges</a><br />

               <a href="" className='text-muted text-decoration-none d-inline-block mb-1'>Downloads & resources</a><br />

             </div>
             <div className='col'>
                <p>Account</p>
                <a href=" " className='text-muted text-decoration-none d-inline-block mb-1'>Open an account</a><br />
                <a href=" " className='text-muted text-decoration-none d-inline-block mb-1'>Fund transfer</a><br />

                <a href=" " className='text-muted text-decoration-none d-inline-block mb-1'>60 day challenge</a><br />
             </div>

            </div>
            <div className='mt-5  text-muted' style={{fontSize:"14px"}}>
           <p> Zerodha Broking Ltd.: Member of NSE & BSE – SEBI Registration no.: INZ000031633 CDSL: Depository services through Zerodha Securities Pvt. Ltd. – SEBI Registration no.: IN-DP-100-2015. Commodity Trading through Zerodha Commodities Pvt. Ltd. MCX: 46025 – SEBI Registration no.: INZ000038238 Registered Address: Zerodha Broking Ltd., #153/154, 4th Cross, Dollars Colony, Opp. Clarence Public School, J.P Nagar 4th Phase, Bengaluru - 560078, Karnataka, India. For any complaints pertaining to securities broking please write to complaints@zerodha.com, for DP related complaints write to dp@zerodha.com. Please ensure you carefully read the Risk Disclosure Document as prescribed by SEBI | ICF</p>

<p>Procedure to file a complaint on SEBI SCORES: Register on SCORES portal. Mandatory details for filing complaints on SCORES: Name, PAN, Address, Mobile Number, Email ID, Communication, Speedy redressal of the grievances.</p>

<p>Investments in securities market are subject to market risks; read all the related documents carefully before investing.</p>

<p>Prevent unauthorised transactions in your account. Update your mobile numbers/email IDs with your stock brokers. Receive information of your transactions directly from Exchanges on your mobile/email at the end of the day. Issued in the interest of investors. KYC is one time exercise while dealing in securities markets - once KYC is done through a SEBI registered intermediary (broker, DP, Mutual Fund etc.), you need not undergo the same process again when you approach another intermediary.</p>

<p>Dear Investor, if you are subscribing to an IPO, there is no need to issue a cheque. Please write the bank account number and sign the IPO application form to authorize your bank to make payment in case of allotment. In case of non allotment, the funds will remain in your bank account.</p>
</div> 
<div className='row  fs6 text-muted justify-content-center '  style={{ textAlign: "center", fontSize: "14px", gap: "5px" }}>
  <div className='col-auto'>NSE</div>
  <div className='col-auto'>BSE</div>
  <div className='col-auto'>MCX</div>
  <div className='col-auto'>Terms and condtions</div>
  <div className='col-auto'>Policy and Products</div>
  <div className='col-auto'>Privacy policy</div>
  <div className='col-auto'>Disclosure</div>
</div>
       </div>
 

       </footer>
     );
}

export default Footer;