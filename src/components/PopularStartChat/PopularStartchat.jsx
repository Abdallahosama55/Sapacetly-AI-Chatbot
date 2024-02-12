import React from 'react'
import Header from '../StartChat/Header';

  const PopularStartchat = ({ items, handleClick }) => {
    
  
  return (
    <div>
    <Header />

    <div className="chat-details ar mt-5 pb-4">
      <div className="row justify-content-center align-content-md-stretch" dir="rtl">
        {items.map((item, index) => (
          <a key={index} href={`#${index}`} onClick={() => handleClick(item.title)} className="m-1 col-lg-5 col-xl-5 col-sm-12 col-xs-12 col-md-6 shadow-3 border-col rounded link">
            <div className="mt-4 p-2 text-Light">
              <h5>{item.title}</h5>
              <small className="fw-light text-muted ">{item.description}</small>
            </div>
          </a>
        ))}
      </div>
    </div>
    
    </div>
  )
}

export default PopularStartchat