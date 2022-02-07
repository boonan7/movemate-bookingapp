import React, { useState } from 'react';
import { Calendar } from '@natscale/react-calendar';
import '@natscale/react-calendar/dist/main.css'
import { Row, Col, FloatingLabel, Modal, Button, Form } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import NavBar from './components/NavBar';


function App() {
  const [date, setDate] = useState(new Date());
  const [hours, setHours] = useState(0)
  const [startTime, setStartTime] = useState(0)
  const [total, setTotal] = useState(0)
  const [show, setShow] = useState(false)
  const [invalid, setInvalid] = useState(true)

  let curDate = 0
  let curTime = 0
  let premium = 0;


  const onChange = (date) => {
    setDate(date)
    document.getElementById("myForm").reset()
  }

  const changeHours = (e) => {
    setHours(e.target.value)
  }

  const handleStartTime = (e) => {
    setStartTime(e.target.value)
    date.setHours(e.target.value, 0, 0)
  }

  const handleClose = () => setShow(false)
 
  const handleSubmit = (e) => {
    e.preventDefault();
    
    curDate = date.getDay()
    curTime = date.getHours()
    if (curDate == 0 || curDate == 6) {
      premium = 150
    }
    else {
      premium = 100
    }

    if (hours == 0 || curTime == 0) {
      setInvalid(true)
    }
    else{
      setInvalid(false)
    }

    setTotal(hours*premium)
    setShow(true)
    
    e.target.reset()

  };

  return (
    <div >
      <NavBar />
      <Row className="text-center"> 
        <h1>Sooo when do you want to move?</h1>
      </Row>

      <Form id = 'myForm' onSubmit={handleSubmit}>
        <Row className="col-md-5 mx-auto" >
          <Form.Group as={Col} controlId="formGridZip" className='mb-3'>
            <Calendar
              value={date}
              onChange={onChange}
              startOfWeek={0}
              disablePast />
          </Form.Group>

          <Form.Group as={Col} controlId="formGridState" className='mb-3'>
            <FloatingLabel controlId='floatingSelect' label='Start Time' className='mb-3'>
              <Form.Select defaultValue={0} onChange={handleStartTime}>
                <option value={0}>Please Select</option>
                <option value={9}>9:00 AM</option>
                <option value={10}>10:00 AM</option>
                <option value={11}>11:00 AM</option>
                <option value={12}>12:00 AM</option>
                <option value={13}>1:00 PM</option>
                <option value={14}>2:00 PM</option>
                <option value={15}>3:00 PM</option>
                <option value={16}>4:00 PM</option>
                <option value={17}>5:00 PM</option>
              </Form.Select>
            </FloatingLabel>
            <FloatingLabel controlId='floatingSelect' label='How many hours' className='mb-5'>
              <Form.Select defaultValue={0} onChange={changeHours}>
                <option value={0}>Choose Time</option>
                <option value={1}>1 Hour</option>
                <option value={2}>2 Hours</option>
                <option value={3}>3 Hours</option>
                <option value={4}>4 Hours</option>
                <option value={5}>5 Hours</option>
                <option value={6}>6 Hours</option>
                <option value={7}>7 Hours</option>
                <option value={8}>8 Hours</option>
                <option value={9}>9 Hours</option>
                <option value={10}>10 Hours</option>
                <option value={11}>11 Hours</option>
                <option value={12}>12 Hours</option>
                <option value={13}>13 Hours</option>
                <option value={14}>14 Hours</option>
              </Form.Select>
            </FloatingLabel>
            
          <Button variant="primary" type="submit">
            Calculate Price!
          </Button>
          </Form.Group>
        </Row>
      </Form>

      <Row className='col-md-5 mx-auto'>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Total Price</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {invalid ? 'Invalid! Please fill everything out' :
          `$${total} on ${date.toDateString()} at ${date.toLocaleTimeString('en-us', {hour12: true})}`} 
          </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
      </Row>
    </div>
  );
}

export default App;

