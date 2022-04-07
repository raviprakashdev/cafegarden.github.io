import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import Pagination from 'react-bootstrap/Pagination';


class Coffee extends React.Component {

    render() {

        return (
            <div>

                <div className="coffee-head">

                    <img className="cofimg" src="assets/images/coffee/middle (1).png" />
                    <h1 className="cofff"> Our Coffee Items</h1>
                   <div> <img className="cofimg2" src="assets/images/coffee/middle1.png" />
                   </div>
                </div>

                <CardGroup className="cardgroup" >
                    <div className="carrd"  >  <Card  >

                        <Card.Body className="cardbody"  >
                            <Card.Title className="cardtitle">Card title</Card.Title>
                            <Card.Subtitle className="subtitle">price &#x20b9; 50</Card.Subtitle>
                            <Card.Img className="cardimage" src="assets/images/coffee/cappucinoo.jpeg"  />

                            <br /><br />

                            <Card.Link className="cardlink" href="#">Order Now</Card.Link>
                            <Card.Link className="cardlink" href="#">Add to Cart</Card.Link>
                        </Card.Body>



                    </Card>
                    </div>

                    <div className="carrd"> 
                     <Card   >

                        <Card.Body className="cardbody" >
                            <Card.Title className="cardtitle">Card title</Card.Title>
                            <Card.Subtitle className="subtitle">price &#x20b9; 50</Card.Subtitle>
                            <Card.Img className="cardimage" src="assets/images/coffee/cafelatte.jpeg"  />

                            <br /><br />

                            <Card.Link className="cardlink" href="#">Order Now</Card.Link>
                            <Card.Link  className="cardlink" href="#">Add to Cart</Card.Link>
                        </Card.Body>



                    </Card>
                    </div>

                    <div className="carrd" >
                        <Card  >
                            <Card.Body className="cardbody"  >
                                <Card.Title className="cardtitle">Card title</Card.Title>
                                <Card.Subtitle className="subtitle">price &#x20b9; 50</Card.Subtitle>
                                <Card.Img className="cardimage" src="assets/images/coffee/cafemoccha.jpeg"  />

                                <br /><br />

                                <Card.Link className="cardlink" href="#">Order Now</Card.Link>
                                <Card.Link  className="cardlink" href="#">Add to Cart</Card.Link>
                            </Card.Body>



                        </Card>
                    </div>


                    


                </CardGroup>

                <CardGroup className="cardgroup2" >
                    <div className="carrd"  >  <Card  >

                        <Card.Body className="cardbody"  >
                            <Card.Title className="cardtitle">Card title</Card.Title>
                            <Card.Subtitle className="subtitle">price &#x20b9; 50</Card.Subtitle>
                            <Card.Img className="cardimage" src="assets/images/coffee/coldbrew.jpeg" />

                            <br /><br />

                            <Card.Link className="cardlink" href="#">Order Now</Card.Link>
                            <Card.Link className="cardlink" href="#">Add to Cart</Card.Link>
                        </Card.Body>



                    </Card>
                    </div>

                    <div className="carrd"> 
                     <Card   >

                        <Card.Body className="cardbody" >
                            <Card.Title className="cardtitle">Card title</Card.Title>
                            <Card.Subtitle className="subtitle">price &#x20b9; 50</Card.Subtitle>
                            <Card.Img className="cardimage" src="assets/images/coffee/coldbrew.jpeg"  />

                            <br /><br />

                            <Card.Link className="cardlink" href="#">Order Now</Card.Link>
                            <Card.Link  className="cardlink" href="#">Add to Cart</Card.Link>
                        </Card.Body>



                    </Card>
                    </div>

                    <div className="carrd" >
                        <Card  >
                            <Card.Body className="cardbody"  >
                                <Card.Title className="cardtitle">Card title</Card.Title>
                                <Card.Subtitle className="subtitle">price &#x20b9; 50</Card.Subtitle>
                                <Card.Img className="cardimage" src="assets/images/coffee/coldbrew.jpeg"  />

                                <br /><br />

                                <Card.Link className="cardlink" href="#">Order Now</Card.Link>
                                <Card.Link  className="cardlink" href="#">Add to Cart</Card.Link>
                            </Card.Body>



                        </Card>
                    </div>


                    


                </CardGroup>

                <CardGroup className="cardgroup2" >
                    <div className="carrd"  >  <Card  >

                        <Card.Body className="cardbody"  >
                            <Card.Title className="cardtitle">Card title</Card.Title>
                            <Card.Subtitle className="subtitle">price &#x20b9; 50</Card.Subtitle>
                            <Card.Img className="cardimage" src="assets/images/coffee/coldbrew.jpeg"  />

                            <br /><br />

                            <Card.Link className="cardlink" href="#">Order Now</Card.Link>
                            <Card.Link className="cardlink" href="#">Add to Cart</Card.Link>
                        </Card.Body>



                    </Card>
                    </div>

                    <div className="carrd"> 
                     <Card   >

                        <Card.Body className="cardbody" >
                            <Card.Title className="cardtitle">Card title</Card.Title>
                            <Card.Subtitle className="subtitle">price &#x20b9; 50</Card.Subtitle>
                            <Card.Img className="cardimage" src="assets/images/coffee/coldbrew.jpeg"  />

                            <br /><br />

                            <Card.Link className="cardlink" href="#">Order Now</Card.Link>
                            <Card.Link  className="cardlink" href="#">Add to Cart</Card.Link>
                        </Card.Body>



                    </Card>
                    </div>

                    <div className="carrd" >
                        <Card  >
                            <Card.Body className="cardbody"  >
                                <Card.Title className="cardtitle">Card title</Card.Title>
                                <Card.Subtitle className="subtitle">price &#x20b9; 50</Card.Subtitle>
                                <Card.Img className="cardimage" src="assets/images/coffee/coldbrew.jpeg"  />

                                <br /><br />

                                <Card.Link className="cardlink" href="#">Order Now</Card.Link>
                                <Card.Link  className="cardlink" href="#">Add to Cart</Card.Link>
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