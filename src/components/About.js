import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
class About extends React.Component {

  render() {
    return (
      <div>
        <div className="cntnr">


          <img className="imm-fluid" src="assets/images/tbl.png" />
          <img className="immm-fluid" src="assets/images/Cafe Garden_logo.png" height={200} width={500} />
          <h1 className="hh-fluid">About Us</h1>
          
        </div>
        <div className="cnnn">
            <h5 className="hhh"> <strong>Cafe Garden</strong> is a recently established in the city xyz.
              Coffee, Cakes, Pastries,   Ice-Creams, Snacks
              and Cookies <br />are some of our specialty.  <br />It's ambiences,
              service and <br />the consistent quality  it provides to customers
              is <br /> always  in Great way.Our <br />priority is to serve
              best in <br />taste, quality and hygiene. </h5>
          </div>
          <img className="ice" src="assets/images/cf.png" height={200} width={300} />

          <img className="ice2" src="assets/images/ice (1).png" height={200} width={300} />
          <img className="ice3" src="assets/images/ice (2).png" height={200} width={200} />
          <img className="ice4"  src="assets/images/ice (3).png" height={200} width={300} />
      </div>


    )

  }
}
export default About;