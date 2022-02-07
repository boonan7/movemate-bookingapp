import React from 'react';
import Dropdown from 'react-bootstrap/Dropdown';

const TimePick = () => {
    return (
        <div>
            <Dropdown className="d-inline mx-2">
                <Dropdown.Toggle id="dropdown-autoclose-true">
                    Select a Time
                </Dropdown.Toggle>

                <Dropdown.Menu>
                    <Dropdown.Item eventKey={1}> 9:00 AM</Dropdown.Item>
                    <Dropdown.Item eventKey={2}>10:00 AM</Dropdown.Item>
                    <Dropdown.Item eventKey={3}>11:00 AM</Dropdown.Item>
                    <Dropdown.Item eventKey={4}>12:00 AM</Dropdown.Item>
                    <Dropdown.Item eventKey={5}> 1:00 PM</Dropdown.Item>
                    <Dropdown.Item eventKey={6}> 2:00 PM</Dropdown.Item>
                    <Dropdown.Item eventKey={7}> 3:00 PM</Dropdown.Item>
                    <Dropdown.Item eventKey={8}> 4:00 PM</Dropdown.Item>
                    <Dropdown.Item eventKey={8}> 5:00 PM</Dropdown.Item>
                    <Dropdown.Item eventKey={8}> 6:00 PM</Dropdown.Item>
                    <Dropdown.Item eventKey={8}> 7:00 PM</Dropdown.Item>

                </Dropdown.Menu>
            </Dropdown>
        </div>

    )

};

export default TimePick;
