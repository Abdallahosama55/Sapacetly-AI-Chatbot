import React from 'react'
import './ChatMassage.css'
function ChatMassage() {
  return (
    <div className='chat-height'>
    
    <div className='  d-flex  py-4 ar justify-content-start ' dir='rtl'>
    
    <div>
    
    <img src={require('../../assets/Images/Ellipse 3254 (1).png')} className=' rounded-circle ' width={61}  />
    </div>
    <div className='  ar me-3'>
    <div>
    <h5 className=' '>أنت</h5>
    <p className=' fw-light  font-light '>  ممكن الترجمة الي اللغة العرب ممكن الترجمة الي اللغة العرب ممكن الترجمة الي اللغة العرب ممكن الترجمة الي اللغة العرب ممكن الترجمة الي اللغة العرب ممكن الترجمة الي اللغة العرب ممكن الترجمة الي اللغة العرب ممكن الترجمة الي اللغة العربية</p>
    
    
    </div>
 
    </div>
    
    </div>


    <div className=' d-flex  ar justify-content-start align-items-center' dir='rtl'>
    
    <div className=' '>
    
    <img src={require('../../assets/Images/Frame 1171276373 (2).png')} className=' rounded-circle ' width={61}  />
    </div>
    <div className='  ar me-3 '>
    <div>
    <h5 className=' mt-1'>سبيس شات</h5>
    <p className='   font-light'>نعم  بالطبع  يسعدنا ان يتم مساعدتك بافضل طريقة
    هل يمكنك ان تضع لنا النص الذي تريد ترجمتة ؟</p>
    
    
    </div>
 
    </div>
    
    </div>
    
    
    
    </div>
  )
}

export default ChatMassage