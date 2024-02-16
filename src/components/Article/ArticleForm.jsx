import React, { useState } from 'react';
import { Form } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';

const SubtitleWithButtons = ({ onAdd, onRemove, index }) => (
  <div className=' subtitle d-flex'>
    <div className=' col-10 p-0'>
      <Form.Group className="ms-1 mt-3" controlId={`subtitle-${index}`}>
        <div className='d-flex align-items-center'>
          <span className='fw-bolder ms-1 text-blue'> # </span>
          <Form.Control type="text" className='bg-light' />
        </div>
      </Form.Group>
    </div>
    <div className=' col-2 p-0 '>
      <div className='d-flex align-items-center justify-content-center mt-3'>
        <button className='btn-min-info' onClick={(e) => { e.preventDefault(); onAdd(index); }}>+</button>
        <button className='btn-min-danger me-1'  onClick={(e) => { e.preventDefault(); onRemove(index); }} >-</button>
      </div>
    </div>
  </div>
);

function ArticleForm() {
  const subtitleCount = 1;
  const [subtitles, setSubtitles] = useState(Array.from({ length: subtitleCount }, (_, index) => index));

  const handleAddSubtitle = (index) => {
    const newSubtitles = [...subtitles];
    newSubtitles.splice(index + 1, 0, newSubtitles.length);
    setSubtitles(newSubtitles);
  };

  const handleRemoveSubtitle = (index) => {
    if (subtitles.length > 1) {
      const newSubtitles = [...subtitles];
      newSubtitles.splice(index, 1);
      setSubtitles(newSubtitles);
    }
  };

  const renderSubtitles = () => {
    return subtitles.map((subtitleIndex) => (
      <SubtitleWithButtons
        key={subtitleIndex}
        index={subtitleIndex}
        onAdd={handleAddSubtitle}
        onRemove={handleRemoveSubtitle}
      />
    ));
  };

  return (
    <div>
      <Form className='justify-content-center align-items-center pe-5 ps-5'>
        <div className='row align-items-center justify-content-end'>
          <div className='col-12'>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>العنوان الرئيسي</Form.Label>
              <Form.Control type="text"  />
            </Form.Group>
          </div>

          <div className='col-10 p-1'>
            <Form.Group className="ms-1 " controlId="formBasicEmail">
              <Form.Label>العناوين الفرعية</Form.Label>
              <div className='d-flex align-items-center'>
                <span className='fw-bolder ms-1 text-blue'> # </span>
                <Form.Control type="text"  />
              </div>
            </Form.Group>
          </div>

          <div className='col p-0 ps-1 mt-1'>
            <Form.Group className="mt-4 p-0" controlId="formBasicEmail">
              <Form.Control type="number" min={0-9} className=' w-75' />
            </Form.Group>
          </div>

          {renderSubtitles()} {/* Render the subtitles using the loop */}
     
        </div>
        <div className=' form-section3 mt-3'>
          <Form.Group className="mb-3 py" controlId="formBasicEmail">
            <Form.Label> الكلمات المفتاحية</Form.Label>
            <Form.Control type="text" className='p-md-2 '  />
          </Form.Group>
          <Form.Group className="mb-3 py" controlId="formBasicEmail">
            <Form.Label> أسلوب المحتوى</Form.Label>
            <Form.Control type="text" className='p-md-2 '  />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label htmlFor="disabledSelect">اختر اللغة</Form.Label>
            <Form.Select id="disabledSelect" className=' text-center p-md-2 '>
              <option>لغه عربية</option>
              <option>لغة انجليزية</option>
            </Form.Select>
          </Form.Group>
        </div>
      </Form>
    </div>
  );
}

export default ArticleForm;
