import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


const DetailsCard = ({ cardTitle, cardDescription }) => {
    return (
        <div>
            <Card className=''>
                <Card.Img
                    variant="top"
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSkCoI7IGMkeQ_C
                 8KSc-VDj27wj8VPmiDK16waC69gsmGcdawcZTtGoRws&s" />
                <Card.Body>
                    <Card.Title>{cardtitle}</Card.Title>
                    <Card.Text>
                        {cardDescription}
                    </Card.Text>
                    <Button variant="primary">click</Button>
                </Card.Body>
            </Card>
        </div>
    );
};

export default DetailsCard