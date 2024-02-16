import React from 'react'

import { Form} from 'react-bootstrap';
import Button from 'react-bootstrap/Button';

import './KeyWordResult.css'
function KeyWordForm() {
  return (
    <div>
    <Form className=' justify-content-center  align-items-center p-5 pb-0 pt-0   '>
          
    <Form.Group className="mb-3" controlId="formBasicEmail">
      <span>الموضوع</span>
      <Form.Control type="text"/>
    </Form.Group>

    <Form.Group className="mb-3 " controlId="formBasicEmail">
      <Form.Label>عدد الكلمات المفتاحية</Form.Label>
      <Form.Control type="number" min={0}   />
    </Form.Group>

    <Form.Group className="mb-3">
      <Form.Label htmlFor="disabledSelect">اختر اللغة</Form.Label>
      <Form.Select id="disabledSelect" className=' text-center'>
        <option>لغه عربية</option>
        <option>لغة انجليزية</option>
      </Form.Select>
    </Form.Group>

    <Button className='btn-pink mt-1' type="btn">
      اقتراح كلمات مفتاحية
    </Button>

    <div className=' p-2 position-relative'>
      <h6 className='text-center position-absolute z-3 mt-1 text-center  line-text '>
        أو
      </h6>
      <hr className='  z-1' >
      
      
      </hr>
    </div>

    <small className=' text-muted  small-text text-center ms-3'>هل لديك كلمات مفتاحية بالفعل؟ أدخل كلماتك المفتاحية وتخطي هذه الخطوة.</small>

    <Form.Group className=" py-3">
      <Form.Label>الكلمات المفتاحية</Form.Label>
      <Form.Control type="text" className='p-md-2 '  />
    </Form.Group>

 
  </Form>
    
    </div>
  )
}

export default KeyWordForm