import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

class Gallery extends React.Component {
    render() {

        return (

            <div>
                <div className="cntnr">


                    <img className="imm-fluid" src="assets/images/wall-g1c1348833_1920.jpg" />
                    <img className="immm-fluid" src="assets/images/Cafe Garden_logo.png" height={200} width={500} />
                    <h1 className="hh1-fluid">Gallery</h1>

                </div>
                <Container>
                    <h1 className="hhhh">Coffee</h1>
                    <Row>
                        <Col xs><img className="image"src="assets/images/1cf.jpg" height={300} width={300} /></Col>
                        <Col xs={{ order: 1 }}> <img src="assets/images/2cf.jpg" height={300} width={300} /> </Col>
                        <Col xs={{ order: 1 }}> <img src="assets/images/3cf.jpg" height={300} width={300} /> </Col>
                        <br /> <br />
                        <Col xs={{ order: 1 }}> <img src="assets/images/4cf.jpg" height={300} width={300} /> </Col>
                        <Col xs> <img src="assets/images/5cf.jpg" height={300} width={300} /> </Col>
                        <Col xs={{ order: 1 }}><img src="assets/images/6cf.jpg" height={300} width={300} /> </Col>
                        <Col xs={{ order: 1 }}> <img src="assets/images/7cf.jpg" height={300} width={300} /> </Col>
                        <Col xs={{ order: 1 }}> <img src="assets/images/8cf.jpg" height={300} width={300} /> </Col>
                        <Col xs={{ order: 1 }}> <img src="assets/images/9cf.jpg" height={300} width={300} /> </Col>

                    </Row>
                    <h1 className="hhhh">Ice-Cream</h1>
                    <Row>
                        <Col xs><img src="assets/images/1ic.jpg" height={300} width={300} /></Col>
                        <Col xs={{ order: 1 }}> <img src="assets/images/2ic.jpg" height={300} width={300} /> </Col>
                        <Col xs={{ order: 1 }}> <img src="assets/images/3ic.jpg" height={300} width={300} /> </Col>
                        <Col xs={{ order: 1 }}> <img src="assets/images/4ic.jpg" height={300} width={300} /> </Col>
                        <Col xs> <img src="assets/images/5ic.jpg" height={300} width={300} /> </Col>
                        <Col xs={{ order: 1 }}><img src="assets/images/6ic.jpg" height={300} width={300} /> </Col>
                        <Col xs={{ order: 1 }}> <img src="assets/images/7ic.jpg" height={300} width={300} /> </Col>
                        <Col xs={{ order: 1 }}> <img src="assets/images/8ic.jpg" height={300} width={300} /> </Col>
                        <Col xs={{ order: 1 }}> <img src="assets/images/9ic.jpg" height={300} width={300} /> </Col>


                    </Row>
                    <h1 className="hhhh"> Cakes</h1>
                    <Row>
                        <Col xs><img src="assets/images/1ck.jpg" height={300} width={300} /></Col>
                        <Col xs={{ order: 12 }}> <img src="assets/images/2ck.jpg" height={300} width={300} /> </Col>
                        <Col xs={{ order: 1 }}> <img src="assets/images/3ck.jpg" height={300} width={300} /> </Col>
                        
                        
                    </Row>

                </Container>
            </div>
        )
    }
}
export default Gallery;