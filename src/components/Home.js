import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import Slider from "react-slick";

class Home extends React.Component {

    render() {

        var settings = {
            dots: false,
            showarrows:true,
            infinite: true,
            speed: 1000,
            autoplay: true,
            slidesToShow: 1,
            slidesToScroll: 1
        };

        return (
            <div>
                <div className="container">

                    <Slider {...settings}>
                        <div className="position-relative ">
                            <img src="assets/images/home.jpeg" className="img-fluid" height={1000} width={1300} />

                            <h2 className="text1-fluid">WELCOME TO OUR <span>CAFE GARDEN</span></h2>
                            <h5 className="tt">Come & Enjoy Here </h5>
                            <div className="header-btns">
                                <a href="/menu" className="m-btn">Menu</a>
                                &nbsp; &nbsp;
                                <a href="/contact" className="b-btn">Booking</a>

                            </div>
                        </div>
                        <div className="position-relative">
                            <img src="assets/images/773814.jpg" className="img-fluid" height={1000} width={1300} />

                           <div className="hdd"> <h3 className="text2-fluid">It's time to  <span>Need a break</span></h3>
                            </div>
                        </div>
                        <div className="position-relative">
                            <img src="assets/images/11.jpeg" className="img-fluid" height={1200} width={1300} />

                            <h3 className="text3-fluid">Have Some Fresh and Change the Taste</h3>
                        </div>
                        <div className="position-relative">
                            <img src="assets/images/Chocolate_Cake_HDXBYL.jpg" className="img-fluid" height={1200} width={1300} />

                            <h3 className="text4-fluid" >Take your time and love yourself </h3>
                        </div>
                    </Slider>
                </div>
            </div>
        );
    }
}

export default Home;
//ReactDOM.render(<Home />, document.getElementById("container"));

