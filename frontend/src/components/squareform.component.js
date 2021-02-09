import React, { useState, useEffect } from 'react';
import {
    Col,
    Row,
    Form,
    FormGroup,
    InputGroup,
    Badge
} from 'reactstrap';
import { GiStrong } from 'react-icons/gi';

function SquareForm(props) {
    const [booktitle, setBookTitle] = useState(props.booktitle);
    const [author, setAuthor] = useState(props.author);
    const [percent, setPercent] = useState(props.percent);
    const [complete, setComplete] = useState(props.complete);
    const [hardmode, setHardmode] = useState(props.hardmode);

    const handleBookTitle = (event) => { setBookTitle(event.target.value); localStorage.setItem('bookTitle', event.target.value) }
    const handleAuthor = (event) => { setAuthor(event.target.value); localStorage.setItem('author', event.target.value) }
    const handleHardmode = (event) => { setHardmode(event.target.value); localStorage.setItem('hardMode', event.target.value) }
    const handlePercent = (event) => { setPercent(event.target.value); localStorage.setItem('perCent', event.target.value) }
    const handleComplete = (event) => { setComplete(event.target.value); localStorage.setItem('complete', event.target.value) }

    useEffect(() => {
        console.log("useEffect fired.")
    }, [booktitle, author, percent, complete, hardmode]);

    return(
        <div>
            <Form className="form">
                <Form.Group as={Row} controlId="formBookTitle">
                <Form.Label column sm={3}>Book Title:</Form.Label>
                <Col>
                    <Form.Control
                    size="sm"
                    name="bookTitle"
                    value={booktitle}
                    onChange={handleBookTitle}
                    />
                </Col>
                </Form.Group>
                <Form.Group as={Row} controlId="formAuthor">
                <Form.Label column sm={3}>Author:</Form.Label>
                <Col>
                    <Form.Control
                    size="sm"
                    name="author"
                    value={author}
                    onChange={handleAuthor}
                    />
                </Col>
                </Form.Group>
                <Form.Group as={Row} id="formHardMode" className="hardmodecheck">
                <Col sm={3}>&nbsp;</Col>
                <Col>
                    <Form.Check 
                    inline
                    name="hardModeCheck"
                    checked={hardmode}
                    type="checkbox"  
                    label="Hard Mode?" 
                    onChange={handleHardmode}
                    /><Badge pill color="danger"><GiStrong /></Badge>
                </Col>
                </Form.Group>
                <Form.Group>
                <InputGroup as={Row} size="sm">
                    <Form.Label column sm={5}>Percent Complete:</Form.Label>
                    <Col>
                    <Form.Control 
                        name="PercentCompleteOfBook"
                        type="text" 
                        size="sm" 
                        placeholder="Percent Complete" 
                        value={percent} 
                        onChange={handlePercent}
                    />
                    <Form.Check 
                        type="checkbox" 
                        name="bookFinishedCheck"
                        label="Completed?" 
                        checked={complete}
                        onChange={handleComplete}
                    />
                    </Col>
                </InputGroup>
                </Form.Group>
            </Form> 
        </div>        
    );
}

export default SquareForm;