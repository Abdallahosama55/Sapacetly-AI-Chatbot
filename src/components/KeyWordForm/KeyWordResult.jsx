import React, { useState } from 'react';
import { Form, Col } from 'react-bootstrap';

const checkboxLabels = [
  'تسويق وبرمجة',
  'تصميم',
  'تسويق وبرمجة',
  'تصميم',
  'تسويق وبرمجة',
  'تصميم',
  'تسويق وبرمجة',
  'تصميم',
  'تسويق وبرمجة',
  'تسويق وبرمجة',
  'تسويق وبرمجة',
];

const resultsPerPage = 10;

function KeyWordResult() {
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(checkboxLabels.length / resultsPerPage);

  const renderCheckboxItem = () => (
    <div className='border-1 shadow-1 justify-content-center align-items-center m-2 btn'>
      <Form.Check type="checkbox" />
    </div>
  );

  const renderCheckboxGroup = (label, index) => (
    <div key={index} className='row align-items-center mb-2 justify-content-center border-form-text'>
      <div className='col-1'>
        <Form.Group as={Col} controlId={`exampleCheckbox${index}`}>
          {renderCheckboxItem()}
        </Form.Group>
      </div>
      <div className='col-11'>
        <h6>{label}</h6>
      </div>
    </div>
  );

  const renderCurrentPageResults = () => {
    const startIndex = (currentPage - 1) * resultsPerPage;
    const endIndex = startIndex + resultsPerPage;
    const currentResults = checkboxLabels.slice(startIndex, endIndex);

    return currentResults.map((label, index) => renderCheckboxGroup(label, startIndex + index));
  };

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };

  return (
    <div>
      <div className=' border-1 shadow-1 justify-content-center align-items-center m-2'>
        {/* Checkbox Form */}
        <Form className=' ' dir='rtl'>
          <div className='container'>
            {renderCurrentPageResults()}
          </div>
        </Form>

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="d-flex justify-content-center mt-3">
            {[...Array(totalPages).keys()].map((page) => (
              <button
                key={page}
                onClick={() => handlePageChange(page + 1)}
                className={`btn ${currentPage === page + 1 ? 'btn-primary' : 'btn-light'}`}
              >
                {page + 1}
              </button>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default KeyWordResult;
