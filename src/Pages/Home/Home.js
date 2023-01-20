import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { Button, ListGroup } from 'react-bootstrap';


const Home = () => {
    const courses = useLoaderData()
    const course = courses[1]
    return (
        <div>
            <h1 className='mt-4 text-center'>Learn in-demand professional skills  </h1>
            <h6 className='mb-4 text-center'>Choose from courses in English and many other languages</h6>
            <Row xs={1} md={2} lg={3} className="g-4">
                {Array.from({ length: courses.length }).map((_, idx) => (
                    <Col>
                        <Card>
                            <Card.Img variant="top" src={course.image} />
                            <Card.Body>
                                <Card.Title>{course.title}</Card.Title>
                                <Card.Text>
                                    {course.description}
                                </Card.Text>
                                <ListGroup className="list-group-flush">
                                    <ListGroup.Item>Course Last Updaed {course.Updated}</ListGroup.Item>
                                    <ListGroup.Item> <p>Course Prize: {course.prize}</p>
                                        <p>Discount Percentage: {course.discountPercentage}</p>
                                        <h3>Discounted Price: {course.discountedPrice}</h3>
                                    </ListGroup.Item>

                                </ListGroup>
                                <Card.Body>
                                    <Link to={`/courses/${course.id}`}><Button variant="primary">Bay Now</Button></Link>
                                </Card.Body>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
        </div>
    );
};

export default Home;