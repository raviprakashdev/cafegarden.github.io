import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import Pagination from 'react-bootstrap/Pagination';


class Coffee extends React.Component {

    render() {

        return (
            <div>

                <div className="cakee-head">

                    <img className="cofimg" src="assets/images/cakes/ck1.png" />
                    <h1 className="cofff"> Our Cake Items</h1>
                   <div> <img className="cofimg2" src="assets/images/cakes/ck2.png" />
                   </div>
                </div>

                <CardGroup className="cardgroup" >
                    <div className="carrd"  >  <Card  >

                        <Card.Body className="cardbody1"  >
                            <Card.Title className="cardtitle1">Sponge Cake</Card.Title>
                            <Card.Subtitle className="subtitle1">price &#x20b9; 50</Card.Subtitle>
                            <Card.Img className="cardimage" src="assets/images/cakes/Sponge Cake.jpg"  />

                            <br /><br />

                            <Card.Link className="cardlink1" href="#">Order Now</Card.Link>
                            <Card.Link className="cardlink1" href="#">Add to Cart</Card.Link>
                        </Card.Body>



                    </Card>
                    </div>

                    <div className="carrd"> 
                     <Card   >

                        <Card.Body className="cardbody1" >
                            <Card.Title className="cardtitle1">Flourless Cake</Card.Title>
                            <Card.Subtitle className="subtitle1">price &#x20b9; 50</Card.Subtitle>
                            <Card.Img className="cardimage" src="assets/images/cakes/Unbaked Flourless Cake.jpg"  />

                            <br /><br />

                            <Card.Link className="cardlink1" href="#">Order Now</Card.Link>
                            <Card.Link  className="cardlink1" href="#">Add to Cart</Card.Link>
                        </Card.Body>



                    </Card>
                    </div>

                    <div className="carrd" >
                        <Card  >
                            <Card.Body className="cardbody1"  >
                                <Card.Title className="cardtitle1">Red Velvet Cake</Card.Title>
                                <Card.Subtitle className="subtitle1">price &#x20b9; 50</Card.Subtitle>
                                <Card.Img className="cardimage" src="assets/images/cakes/Red Velvet Cake.jpg"  />

                                <br /><br />

                                <Card.Link className="cardlink1" href="#">Order Now</Card.Link>
                                <Card.Link  className="cardlink1" href="#">Add to Cart</Card.Link>
                            </Card.Body>



                        </Card>
                    </div>


                    


                </CardGroup>

                <CardGroup className="cardgroup2" >
                    <div className="carrd"  >  <Card  >

                        <Card.Body className="cardbody1"  >
                            <Card.Title className="cardtitle1">Pound Cake</Card.Title>
                            <Card.Subtitle className="subtitle1">price &#x20b9; 50</Card.Subtitle>
                            <Card.Img className="cardimage" src="assets/images/cakes/Pound Cake.jpg" />

                            <br /><br />

                            <Card.Link className="cardlink1" href="#">Order Now</Card.Link>
                            <Card.Link className="cardlink1" href="#">Add to Cart</Card.Link>
                        </Card.Body>



                    </Card>
                    </div>

                    <div className="carrd"> 
                     <Card   >

                        <Card.Body className="cardbody1" >
                            <Card.Title className="cardtitle1">Chiffon Cake</Card.Title>
                            <Card.Subtitle className="subtitle1">price &#x20b9; 50</Card.Subtitle>
                            <Card.Img className="cardimage" src="assets/images/cakes/Chiffon Cake.jpg"  />

                            <br /><br />

                            <Card.Link className="cardlink1" href="#">Order Now</Card.Link>
                            <Card.Link  className="cardlink1" href="#">Add to Cart</Card.Link>
                        </Card.Body>



                    </Card>
                    </div>

                    <div className="carrd" >
                        <Card  >
                            <Card.Body className="cardbody1"  >
                                <Card.Title className="cardtitle1">Carrot Cake</Card.Title>
                                <Card.Subtitle className="subtitle1">price &#x20b9; 50</Card.Subtitle>
                                <Card.Img className="cardimage" src="assets/images/cakes/Carrot Cake.jpg"  />

                                <br /><br />

                                <Card.Link className="cardlink1" href="#">Order Now</Card.Link>
                                <Card.Link  className="cardlink1" href="#">Add to Cart</Card.Link>
                            </Card.Body>



                        </Card>
                    </div>


                    


                </CardGroup>

                <CardGroup className="cardgroup2" >
                    <div className="carrd"  >  <Card  >

                        <Card.Body className="cardbody1"  >
                            <Card.Title className="cardtitle1">Biscuit Cake</Card.Title>
                            <Card.Subtitle className="subtitle1">price &#x20b9; 50</Card.Subtitle>
                            <Card.Img className="cardimage" src="assets/images/cakes/Biscuit Cake.jpg"  />

                            <br /><br />

                            <Card.Link className="cardlink1" href="#">Order Now</Card.Link>
                            <Card.Link className="cardlink1" href="#">Add to Cart</Card.Link>
                        </Card.Body>



                    </Card>
                    </div>

                    <div className="carrd"> 
                     <Card   >

                        <Card.Body className="cardbody1" >
                            <Card.Title className="cardtitle1">Baked FLourless Cake</Card.Title>
                            <Card.Subtitle className="subtitle1">price &#x20b9; 50</Card.Subtitle>
                            <Card.Img className="cardimage" src="assets/images/cakes/Baked Flourless Cake.jpg"  />

                            <br /><br />

                            <Card.Link className="cardlink1" href="#">Order Now</Card.Link>
                            <Card.Link  className="cardlink1" href="#">Add to Cart</Card.Link>
                        </Card.Body>



                    </Card>
                    </div>

                    <div className="carrd" >
                        <Card  >
                            <Card.Body className="cardbody1"  >
                                <Card.Title className="cardtitle1">Food cake</Card.Title>
                                <Card.Subtitle className="subtitle1">price &#x20b9; 50</Card.Subtitle>
                                <Card.Img className="cardimage" src="assets/images/cakes/Angel Food Cake.jpg"  />

                                <br /><br />

                                <Card.Link className="cardlink1" href="#">Order Now</Card.Link>
                                <Card.Link  className="cardlink1" href="#">Add to Cart</Card.Link>
                            </Card.Body>



                        </Card>
                    </div>


                    


                </CardGroup>


                <div className="paginatioon">
                <Pagination >
                    <Pagination.First />
                    <Pagination.Prev > prev </Pagination.Prev>
                    <Pagination.Item >{1}</Pagination.Item>
                    

                    <Pagination.Item active>{2}</Pagination.Item>
                    <Pagination.Item>{3}</Pagination.Item>
                    <Pagination.Item >{4}</Pagination.Item>
                    <Pagination.Item>{5}</Pagination.Item>
                    <Pagination.Item >{6}</Pagination.Item>

                    
                    <Pagination.Next>next</Pagination.Next>
                    <Pagination.Last />
                </Pagination>
            </div>
                


            </div>
        )
    }
}
export default Coffee;