import React from 'react';
import { Button, Card, ListGroup } from 'react-bootstrap';
import { BsArrowDownShort } from "react-icons/bs";
import { Link, useLoaderData } from 'react-router-dom';
// import Pdf from "react-pdf";
// import cdms from '../../images/CDMS.pdf';
// const ref = React.createRef();
const Course = () => {
    const courses = useLoaderData();

    return (
        <Card className='d-flex m-5' style={{ width: '75%' }} >
            <div style={{ alignItems: 'center' }}>
                <Card.Img style={{ width: '300px', margin: '0px auto' }} variant="top" src={courses.image} />
            </div>
            <Card.Body>
                <Card.Title>{courses.title}</Card.Title>
                <Card.Text>
                    {courses.description}
                </Card.Text>
                <ListGroup className="list-group-flush">
                    <ListGroup.Item>Course Last Updaed {courses.Updated}</ListGroup.Item>
                    <ListGroup.Item> <p>Course Prize: {courses.prize}</p>
                        <p>Discount Percentage: {courses.discountPercentage}</p>
                        <h3>Discounted Price: {courses.discountedPrice}</h3>
                    </ListGroup.Item>

                </ListGroup>
                <div className='d-flex justify-content-between'>
                    <Link to='/Parches'><Button variant="primary">Parches</Button></Link>
                    {/* <div className="App">
                        <Pdf targetRef={ref} filename="code-example.pdf">
                            {({ toPdf }) => <button onClick={toPdf}>Generate Pdf</button>}
                        </Pdf>
                        <div ref={ref}>
                            <h1>Hello CodeSandbox</h1>
                            <h2>Start editing to see some magic happen!</h2>
                        </div>
                    </div> */}

                    {/* <div className="App">

                        <Pdf targetRef={ref} filename={cdms}>
                            {({ toPdf }) =>
                                <Button onClick={toPdf} variant="primary"><BsArrowDownShort /> Download</Button>}
                        </Pdf>
                    </div> */}
                    <Button variant="primary"><BsArrowDownShort /> Download</Button>
                </div>
            </Card.Body>

        </Card>
    );
};

export default Course;