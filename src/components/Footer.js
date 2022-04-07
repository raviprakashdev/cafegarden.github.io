import React, { Component } from 'react'
import { Link } from 'react-router-dom';

 class Footer extends Component {
 
  render() {
    return (
      <>
        <div className="contaiiner-fluid ">
          <footer className="footer">
            <div className="row">
              

              <div className="col">
             
                  <h5 className="footer-h">Contact Us</h5>
                  <p className='text'>Mob no-123-456-7890
                    <p>Location - xyz,New Delhi</p>
                  </p>

                 
              </div>
            </div>


          </footer>
        </div>
        


      </>
    )
  }
}
export default Footer;