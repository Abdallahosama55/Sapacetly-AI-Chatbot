import React from 'react'

import { Form, Col } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';

function SubTite() {
  return (
    <div>
    <div>
    <Form className=' justify-content-center align-items-center m-3  '>
          
    <Form.Group className="mb-3" controlId="formBasicEmail">
      <Form.Label>العنوان</Form.Label>
      <Form.Control type="text"  className='p-md-2 bg-light' />
    </Form.Group>

    <Form.Group className="mb-3 py" controlId="formBasicEmail">
      <Form.Label> الكلمات المفتاحية</Form.Label>
      <Form.Control type="text" className='p-md-2 bg-light'  />
    </Form.Group>

    <Form.Group className="mb-3 py" controlId="formBasicEmail">
    <Form.Label> عدد العناوين</Form.Label>
    <Form.Control type="number" className='p-md-2 bg-light'   min="1"  // Set minimum value to 1
    pattern="[0-9]*"  />
  </Form.Group>

  
  <Form.Group className="mb-3 py" controlId="formBasicEmail">
  <Form.Label>  أسلوب المحتوة </Form.Label>
  <Form.Control type="text" className='p-md-2 bg-light'  />
</Form.Group>
    <Form.Group className="mb-3">
      <Form.Label htmlFor="disabledSelect">اختر اللغة</Form.Label>
      <Form.Select id="disabledSelect" className=' text-center p-md-2 bg-light'>
        <option>لغه عربية</option>
        <option>لغة انجليزية</option>
      </Form.Select>
    </Form.Group>
<div className='row align-items-center justify-content-center'>
<div className=' col-md-4'>
   <Form.Group className="mb-3 mt-3 ">
     
      <Form.Select id="disabledSelect" className=' text-center p-md-2 bg-light'>
        <option>3 </option>
        <option>5 </option>
      </Form.Select>
    </Form.Group>

</div>

<div className=' col-md-8'>

   <Button className='btn-pink' type="btn">
      اقتراح عنواين 
    </Button>
</div>


</div>
 



  
 
  </Form>
    
    </div>
    
    </div>
  )
}

export default  SubTite