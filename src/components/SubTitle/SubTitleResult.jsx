import React, { useState } from "react";
import { Form, Col, Pagination } from "react-bootstrap";

const checkboxLabels = ["تسويق وبرمجة", "تصميم"];

function SubTitleResult() {
  const [currentPage, setCurrentPage] = useState(1);
  const resultsPerPage = 6;
  const totalPages = Math.ceil(checkboxLabels.length / resultsPerPage);

  // Get the current page's results
  const getCurrentPageResults = () => {
    const startIndex = (currentPage - 1) * resultsPerPage;
    const endIndex = startIndex + resultsPerPage;
    return checkboxLabels.slice(startIndex, endIndex);
  };

  // Render checkbox item
  const renderCheckboxItem = (label, index) => (
    <div
      key={index}
      className="row bg-light align-items-center mb-2 justify-content-center border-form-text">
      <div className="col-11 p-4 height-result ">
        <p>{label}</p>
      </div>
    </div>
  );

  // Render checkbox group
  const renderCheckboxGroup = () => {
    const currentPageResults = getCurrentPageResults();
    return (
      <div className="container">
        {currentPageResults.map((label, index) =>
          renderCheckboxItem(label, index)
        )}
      </div>
    );
  };

  // Handle pagination page change
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div>
      <div>
        {/* Checkbox Form */}
        <div
          className="border-1 shadow-1 justify-content-center align-items-center m-2 "
          dir="rtl">
          <h5 className="fw-bold pb-2">العناوين المقترحة</h5>
          {renderCheckboxGroup()}
          {totalPages > 1 && (
            <Pagination className="justify-content-center">
              {Array.from({ length: totalPages }, (_, index) => (
                <Pagination.Item
                  key={index + 1}
                  active={currentPage === index + 1}
                  onClick={() => handlePageChange(index + 1)}>
                  {index + 1}
                </Pagination.Item>
              ))}
            </Pagination>
          )}
        </div>
      </div>
    </div>
  );
}

export default SubTitleResult;
