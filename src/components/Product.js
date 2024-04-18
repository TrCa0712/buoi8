import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { Button, Card, CardBody, CardSubtitle, CardText, CardTitle, Col, Container, Row } from 'reactstrap';
const Products = () => {
    const [data, setData] = useState(null)
    const url = "https://661b91e465444945d04fc6c2.mockapi.io/product"
    const getData = () => {
        axios.get(url)
            .then(function (res) {
                console.log(res)
                setData(res.data)
            })
            .catch((error) => {
                console.log(error)
            })
    }
    useEffect(() => {
        getData()
    }, [])
    return (
        <div>
            <h1>Danh sách các sản phẩm</h1>
            <Container>
                <Row>
                    {
                        data &&
                        data.map((item, index) => (
                            <Col sm={3}>
                                <Link to={`/products/${item.id}`} key={index}>
                                    
                                    <Card
                                       
                                    >
                                        <img
                                            alt="Sample"
                                            src="https://picsum.photos/300/200"
                                        />
                                        <CardBody>
                                            <CardTitle tag="h5">
                                            <h1 >{item.NameProduct}</h1>
                                            </CardTitle>
                                            <CardSubtitle
                                                className="mb-2 text-muted"
                                                tag="h6"
                                            >
                                                Card subtitle
                                            </CardSubtitle>
                                            <CardText>
                                                Some quick example text to build on the card title and make up the bulk of the card‘s content.
                                            </CardText>
                                            <Button>
                                                Button
                                            </Button>
                                        </CardBody>
                                    </Card>
                                </Link>
                            </Col>
                        ))
                    }
                </Row>
            </Container>


        </div>
    );
}

export default Products;