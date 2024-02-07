import React from 'react'

import { Form} from 'react-bootstrap';
import Button from 'react-bootstrap/Button';


function KeyWordForm() {
  return (
    <div>
    <Form className=' justify-content-center align-items-center m-3  '>
          
    <Form.Group className="mb-3" controlId="formBasicEmail">
      <Form.Label>الموضوع</Form.Label>
      <Form.Control type="text" placeholder="text" className='p-md-2 bg-light' />
    </Form.Group>

    <Form.Group className="mb-3 py" controlId="formBasicEmail">
      <Form.Label>عدد الكلمات المفتاحية</Form.Label>
      <Form.Control type="text" className='p-md-2 bg-light' placeholder="text" />
    </Form.Group>

    <Form.Group className="mb-3">
      <Form.Label htmlFor="disabledSelect">اختر اللغة</Form.Label>
      <Form.Select id="disabledSelect" className='p-md-2 bg-light text-center'>
        <option>لغه عربية</option>
        <option>لغة انجليزية</option>
      </Form.Select>
    </Form.Group>

    <Button className='btn-pink' type="btn">
      اقتراح كلمات مفتاحية
    </Button>

    <div className=' p-3'>
      <h5 className='text-center'>
        أو
      </h5>
      <hr />
    </div>

    <small className='text-center ms-3'>هل لديك كلمات مفتاحية بالفعل؟ أدخل كلماتك المفتاحية وتخطي هذه الخطوة.</small>

    <Form.Group className="mb-3 py-3">
      <Form.Label>الكلمات المفتاحية</Form.Label>
      <Form.Control type="text" className='p-md-2 bg-light' placeholder="text" />
    </Form.Group>

 
  </Form>
    
    </div>
  )
}

export default KeyWordForm