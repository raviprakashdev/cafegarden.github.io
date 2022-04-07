import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import Pagination from 'react-bootstrap/Pagination';


class Coffee extends React.Component {

    render() {

        return (
            <div>

                <div className="cakee-head2">

                    <img className="cofimg" src="assets/images/s3.png" />
                    <h1 className="cofff2"> Our Icecreams Items</h1>
                   <div> <img className="cofimg2" src="assets/images/s5.png" />
                   </div>
                </div>

                <CardGroup className="cardgroup" >
                    <div className="carrd"  >  <Card  >

                        <Card.Body className="cardbody2"  >
                            <Card.Title className="cardtitle2">Card title</Card.Title>
                            <Card.Subtitle className="subtitle2">price &#x20b9; 50</Card.Subtitle>
                            <Card.Img className="cardimage" src="assets/images/icecreams/ice creams/Strawberry ice cream.jpg"  />

                            <br /><br />

                            <Card.Link className="cardlink2" href="#">Order Now</Card.Link>
                            <Card.Link className="cardlink2" href="#">Add to Cart</Card.Link>
                        </Card.Body>



                    </Card>
                    </div>

                    <div className="carrd"> 
                     <Card   >

                        <Card.Body className="cardbody2" >
                            <Card.Title className="cardtitle2">Card title</Card.Title>
                            <Card.Subtitle className="subtitle2">price &#x20b9; 50</Card.Subtitle>
                            <Card.Img className="cardimage" src="assets/images/icecreams/ice creams/Matcha.jpg"  />

                            <br /><br />

                            <Card.Link className="cardlink2" href="#">Order Now</Card.Link>
                            <Card.Link  className="cardlink2" href="#">Add to Cart</Card.Link>
                        </Card.Body>



                    </Card>
                    </div>

                    <div className="carrd" >
                        <Card  >
                            <Card.Body className="cardbody2"  >
                                <Card.Title className="cardtitle2">Card title</Card.Title>
                                <Card.Subtitle className="subtitle2">price &#x20b9; 50</Card.Subtitle>
                                <Card.Img className="cardimage" src="assets/images/icecreams/ice creams/Mango-Ice-Cream.jpg"  />

                                <br /><br />

                                <Card.Link className="cardlink2" href="#">Order Now</Card.Link>
                                <Card.Link  className="cardlink2" href="#">Add to Cart</Card.Link>
                            </Card.Body>



                        </Card>
                    </div>


                    


                </CardGroup>

                <CardGroup className="cardgroup2" >
                    <div className="carrd"  >  <Card  >

                        <Card.Body className="cardbody2"  >
                            <Card.Title className="cardtitle2">Card title</Card.Title>
                            <Card.Subtitle className="subtitle2">price &#x20b9; 50</Card.Subtitle>
                            <Card.Img className="cardimage" src="assets/images/icecreams/ice creams/Lemon Custard ice cream.jpg" />

                            <br /><br />

                            <Card.Link className="cardlink2" href="#">Order Now</Card.Link>
                            <Card.Link className="cardlink2" href="#">Add to Cart</Card.Link>
                        </Card.Body>



                    </Card>
                    </div>

                    <div className="carrd"> 
                     <Card   >

                        <Card.Body className="cardbody2" >
                            <Card.Title className="cardtitle2">Card title</Card.Title>
                            <Card.Subtitle className="subtitle2">price &#x20b9; 50</Card.Subtitle>
                            <Card.Img className="cardimage" src="assets/images/icecreams/ice creams/Eggnog.jpg"  />

                            <br /><br />

                            <Card.Link className="cardlink2" href="#">Order Now</Card.Link>
                            <Card.Link  className="cardlink2" href="#">Add to Cart</Card.Link>
                        </Card.Body>



                    </Card>
                    </div>

                    <div className="carrd" >
                        <Card  >
                            <Card.Body className="cardbody2"  >
                                <Card.Title className="cardtitle2">Card title</Card.Title>
                                <Card.Subtitle className="subtitle2">price &#x20b9; 50</Card.Subtitle>
                                <Card.Img className="cardimage" src="assets/images/icecreams/ice creams/Cotton Candy ice cream.jpg"  />

                                <br /><br />

                                <Card.Link className="cardlink2" href="#">Order Now</Card.Link>
                                <Card.Link  className="cardlink2" href="#">Add to Cart</Card.Link>
                            </Card.Body>



                        </Card>
                    </div>


                    


                </CardGroup>

                <CardGroup className="cardgroup2" >
                    <div className="carrd"  >  <Card  >

                        <Card.Body className="cardbody2"  >
                            <Card.Title className="cardtitle2">Card title</Card.Title>
                            <Card.Subtitle className="subtitle2">price &#x20b9; 50</Card.Subtitle>
                            <Card.Img className="cardimage" src="assets/images/icecreams/ice creams/Chocolate Chip Cookie Dough.jpg"  />

                            <br /><br />

                            <Card.Link className="cardlink2" href="#">Order Now</Card.Link>
                            <Card.Link className="cardlink2" href="#">Add to Cart</Card.Link>
                        </Card.Body>



                    </Card>
                    </div>

                    <div className="carrd"> 
                     <Card   >

                        <Card.Body className="cardbody2" >
                            <Card.Title className="cardtitle2">Card title</Card.Title>
                            <Card.Subtitle className="subtitle2">price &#x20b9; 50</Card.Subtitle>
                            <Card.Img className="cardimage" src="assets/images/icecreams/ice creams/Butterscotch-Ice-Cream.jpg"  />

                            <br /><br />

                            <Card.Link className="cardlink2" href="#">Order Now</Card.Link>
                            <Card.Link  className="cardlink2" href="#">Add to Cart</Card.Link>
                        </Card.Body>



                    </Card>
                    </div>

                    <div className="carrd" >
                        <Card  >
                            <Card.Body className="cardbody2"  >
                                <Card.Title className="cardtitle2">Card title</Card.Title>
                                <Card.Subtitle className="subtitle2">price &#x20b9; 50</Card.Subtitle>
                                <Card.Img className="cardimage" src="assets/images/icecreams/ice creams/butter-pecan-ice-cream.jpg"  />

                                <br /><br />

                                <Card.Link className="cardlink2" href="#">Order Now</Card.Link>
                                <Card.Link  className="cardlink2" href="#">Add to Cart</Card.Link>
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