import React from 'react';

function Footer()
{
    return(
        <div className="container">
        <div className="footer row">
        
            <div className="justify-content-center">             
               
                <div className="col-12 col-sm-5">
                    <h5>Our Address</h5>
                    <address>
		              4th MAIN ROAD,<br />
		              KHM BLOCK RT NAGAR<br />
		              BANGALORE<br />
		              <i className="fa fa-phone fa-lg"></i>:080-2334716 <br />
		              <i className="fa fa-fax fa-lg"></i>:7996293760 <br />
		              <i className="fa fa-envelope fa-lg"></i>: <a href="mailto:gpsuhas20@@gmail.com">
                         gpsuhas20@gmail.com</a>
                    </address>
                </div> 
                <div className="col-12 col-sm-5 ">
                    
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.210696164207!2d77.58947291409599!3d13.022250590822683!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae17b0b8ca8bf7%3A0x401f13df09cce5db!2sSri%20Balaji%20Stores!5e0!3m2!1sen!2sin!4v1597945725467!5m2!1sen!2sin" ></iframe>
                </div>
            </div>
            <div className="row justify-content-center">
                <div className=" col-12 col-sm-3"><h4>Payments Options</h4></div>
                <div className=" col-6  col-sm-1 btn menu">
        <img src={`${process.env.PUBLIC_URL}/images/phonepe.png`}style={{width:"20px"},{height:"20px"}}></img>

        </div>
        <div className="col-6 col-sm-1  btn menu">
        <img src={`${process.env.PUBLIC_URL}/images/googlepay.png`}style={{width:"20px"},{height:"20px"}}></img>

        </div>
        <div className=" col-6 col-sm-1  btn menu">
        <img src={`${process.env.PUBLIC_URL}/images/amazon.png`}style={{width:"20px"},{height:"20px"}}></img>

        </div>
        <div className="col-6 col-sm-1   btn menu">
        <img src={`${process.env.PUBLIC_URL}/images/paytm.png`}style={{width:"15px"},{height:"15px"}}></img>

        </div>
        <div className="offset-6  offset-sm-0 col -6"><p style={{margintop:"20px"}}>Cash On Delivery</p></div>
            </div>
            <div className="row justify-content-center">             
                <div className="col-auto">
                    <p>© Copyright 2020 Sri Balaji Stores</p>
                </div>
            </div>
        </div>
    </div>
    )
      
    
}
export default Footer