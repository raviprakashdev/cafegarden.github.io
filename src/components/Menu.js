import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
class Navbar extends React.Component {



    render() {
        return (
            <div>

                <div className="cntnr">


                    <img className="imm-fluid" src="assets/images/AarShm.jpg" />
                    <img className="immm1-fluid" src="assets/images/Asset 2.png" height="100" width="500" />
                    <h3 className="mm">Our &nbsp; Menu {/*<h3 className="mm11"> Menu </h3> */}</h3>

                </div>

                <div className="conn">
                    <h1 className="head1">COFFEE</h1>
                    <div className="cntnrr">


                        <Container>

                            <Row>
                                <Col><img src="assets/images/coffee/Cafe_Mocha.jpg" height={200} width={200} /> <h3>Cafe Mocha</h3> </Col>
                                <Col><img src="assets/images/coffee/Caffe_Latte.jpg" height={200} width={200} /> <h3>Cafe Latte</h3> </Col>
                                <Col><img src="assets/images/coffee/cappuccino_0.jpg" height={200} width={200} /> <h3>Cappuccino</h3> </Col>

                            </Row>
                            <div className="more">
                                <a href="/coffee" >
                                    <h1> +more </h1> </a>
                            </div>

                            <h1 className="head2">CAKES</h1>
                            <Row>
                                <Col><img src="assets/images/cakes/Black-forest-cake.jpg"  height={200} width={200} /> <h3>Black-Forest</h3> </Col>
                                <Col><img src="assets/images/cakes/Butterscotch.jpg" height={200} width={200} /> <h3>ButterScotch</h3> </Col>
                                <Col><img src="assets/images/cakes/Fruit-cake-2.jpg" height={200} width={200} /> <h3>Fruit-Cake</h3> </Col>

                            </Row>
                            <div className="more">
                                <a href="/cakes" >
                                    <h1> +more </h1> </a>
                            </div>

                            <h1 className="head2">Ice-Creams</h1>

                            <Row>
                                <Col><img src="assets/images/icecreams/choco.jpg"  height={200} width={200} /> <h3>Chocalate</h3> </Col>
                                <Col><img src="assets/images/icecreams/vanilla.jpg" height={200} width={200} /> <h3>Vanilla</h3> </Col>
                                <Col><img src="assets/images/icecreams/chocolate-chips-ice-cream.jpg" height={200} width={200} /> <h3>Chocolate-chips</h3> </Col>

                            </Row>
                            <div className="more">
                                <a href="/icecreams" >
                                    <h1> +more </h1> </a>
                            </div>
                            
                        </Container>
                    </div>



                </div>




            </div >


        )

    }
}
export default Navbar;