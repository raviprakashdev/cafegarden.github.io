import React from 'react';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';



class Blogs extends React.Component {



    render() {


        return (

            <div>
                <div className="cntnr">


                    <img className="imm-fluid" src="assets/images/10.jpeg" />
                    <img className="immm-fluid" src="assets/images/Cafe Garden_logo.png" height={200} width={500} />
                    <h1 className="hh1-fluid">BLOGS</h1>

                </div>


                <div className="cntrrr">
                    <img className="img" src="assets/images/Coffee/Caffe_Latte.jpg" height={150} width={200} />
                    <h5 className="heaad">LATTE COFFEE</h5>
                    <p className="pp" >
                        An espresso with steamed milk and only a little milk foam poured over it. Serve in a latte glass or a coffee cup. Flavoured syrup can be added. </p>

                </div>

                <div className="cntrrr1">
                    <img className="immm2" src="assets/images/cakes/Fruit-cake-2.jpg" height={150} width={200} />
                    <h5 className="heaad">FRUIT CAKE</h5>
                    <p className="pp">Fruit cake is so healthy and tasty packed with rich minerals, vitamins, and fibers, which are quite essential to keep your body fresh and strong.</p>
                </div>
                <div className="cntrrr2">
                    <img className="immm2" src="assets/images/cakes/strawberry-ice-cream.jpg" height={150} width={200} />
                    <h5 className="heaad">STRAWBERRY ICE-CREAM</h5>
                    <p className="pp">Homemade ice cream is delicious and surprisingly easy. With just 20 minutes of prep, create frosty treats ready for cones, floats, and more!</p>
                </div>
                <hr />

                <br />
                <div className="div">  <Container className="contr">
                    <Row>
                        <Col className="col1"> <img src="assets/images/design-cafe.webp" height={400} width={400} /> </Col>
                        <Col className="col2">
                            <h5 className="colhd"> Design Cafe to open 25 &apos;experience centres &apos; in 12 cities by September</h5>
                            <br />
                            <p> In accumsan elementum lorem, sit amet pulvinar lorem laoreet at. Donec et velit pharetra, lobortis mi ac, eleifend lectus. Vivamus a lobortis arcu, vitae malesuada nulla. Aenean vel ornare ante, ut viverra nisl. Mauris tristique dolor sed ipsum vehicula malesuada. Nunc tellus sem, pretium sit amet dui quis, mollis placerat neque. Ut lacinia diam ut rhoncus tristique. Vivamus at pretium augue. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Phasellus sodales est eget hendrerit dapibus. Nam dictum odio ut posuere fringilla.</p></Col>
                    </Row>

                </Container>
                </div>

            </div>



        )

    }
}



export default Blogs;
