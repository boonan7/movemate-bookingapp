import React, { useState, useCallback } from 'react';
import { Calendar } from '@natscale/react-calendar';
import '@natscale/react-calendar/dist/main.css'

import { Navbar, Container, Row, Col, FloatingLabel, Image, Alert } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import NavBar from './components/NavBar';
import TimePick from './components/TimePick';
import Form from 'react-bootstrap/Form'

import Button from 'react-bootstrap/Button'
import backG from './bG.png'





function App() {
  const [visible, setVisible] = useState(true);
  const [date, setDate] = useState(new Date());
  const [hours, setHours] = useState(0)
  const [startTime, setStartTime] = useState(0)

  let curDate = 0
  let curTime = 0
  let totalCost = 0
  let premium = 0;


  const onChange = useCallback(
    (date) => {
      setDate(date);
    },
    [setDate],
  );

  const changeHours = (e) => {

    setHours(e.target.value)
  }

  const handleStartTime = (e) => {
    setStartTime(e.target.value)
    date.setHours(e.target.value, 0, 0)
  }

  const togglePicker = () => setVisible((v) => !v);

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
      console.log('invalid')
    }

    totalCost = hours * premium;

    alert(`Total Cost = ${totalCost} on ${curDate} with ${date.toTimeString()}`)

  };

  return (
    <div >
      <NavBar />

      <Row className="text-center"> 
        <h1>
        Sooo when do you want to move?
        
        </h1>
      </Row>


      <Form onSubmit={handleSubmit}>
        <Row className="col-md-5 mx-auto" >
          <Form.Group as={Col} controlId="formGridZip" className='mb-3'>
            {visible ? <Calendar
              value={date}
              onChange={onChange}
              startOfWeek={0}
              disablePast />
              : null}
          </Form.Group>

          <Form.Group as={Col} controlId="formGridState" className='mb-3'>
            <FloatingLabel controlId='floatingSelect' label='Start Time' className='mb-3'>
              <Form.Select defaultValue="Choose Time" onChange={handleStartTime}>
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
              <Form.Select defaultValue="Choose Time" onChange={changeHours}>
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
            Calculate!
          </Button>
          </Form.Group>
        </Row>
      </Form>

      <Row className='col-md-5 mx-auto'>

      <Alert variant='success'>
        <Alert.Heading>
          Great job filling the form out properly!
        </Alert.Heading>
        <p> Here's the pricing: </p>
        <hr />
        <p>Total Cost = ${totalCost} on ${curDate} with ${date.toTimeString()}</p>
        

        </Alert>


      </Row>


    </div>
  );
}


// {/* <div className='container'>
{/* <h1>Find Flights ✈️</h1>
<form className="mt-8 w-9/12 mx-auto space-y-2" onSubmit={handleSubmit}>
  <h3 className="font-bold text-lg">Select date of Departure</h3>
  <div>
    <label className="font-bold mr-2">Date of Departure</label>
    <div className="relative mt-2">
      <Button />
      <button
        className="px-2 py-1 bg-indigo-400 text-sm rounded-lg border-none text-white mr-2 outline-none focus:ring ring-indigo-100"
        onClick={togglePicker}
        type="button"
      >
        Choose Date
      </button>
      <p className="inline">{date.toDateString()}</p>
      {visible ? (
        <Calendar
          value={date}
          onChange={onChange}
        />
      ) : null}
    </div>
  </div>
  
  <button
    className="px-6 py-1.5 bg-green-400 rounded-lg border-none text-white outline-none focus:ring ring-green-100"
    type="submit"
  >
    Find flights
  </button>
</form>
</div > * /} */}

export default App;

