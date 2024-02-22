import React from 'react'

import { Form, Col } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';

function AdressForm() {
  return (
    <div>
    <div>
    <Form className=' justify-content-center align-items-center  mt-0 ps-5 pe-5 '>
          
    <Form.Group className="mb-3" controlId="formBasicEmail">
      <Form.Label>الموضوع</Form.Label>
      <Form.Control type="text"  className='p-md-2 ' />
    </Form.Group>

    <Form.Group className="mb-3 py" controlId="formBasicEmail">
      <Form.Label> الكلمات المقترحة</Form.Label>
      <Form.Control type="text" className='p-md-2 '  />
    </Form.Group>

    <Form.Group className="mb-3 py" controlId="formBasicEmail">
    <Form.Label> عدد العناوين</Form.Label>
    <Form.Control type="number" className='p-md-2 '   min="1"  // Set minimum value to 1
    pattern="[0-9]*"  />
  </Form.Group>

  
  <Form.Group className="mb-3 py" controlId="formBasicEmail">
  <Form.Label>  أسلوب المحتوى</Form.Label>
  <Form.Control type="text" className='p-md-2 '  />
</Form.Group>
    <Form.Group className="mb-3">
      <Form.Label htmlFor="disabledSelect">اختر اللغة</Form.Label>
      <Form.Select id="disabledSelect" className=' text-center p-md-2 '>
        <option>لغه عربية</option>
        <option>لغة انجليزية</option>
      </Form.Select>
    </Form.Group>

    <Button className='btn-pink' type="btn">
      اقتراح عنواين 
    </Button>



  
 
  </Form>
    
    </div>
    
    </div>
  )
}

export default AdressForm