import React from 'react'
import './header.css'
import main_logo from "../../assets/Images/logo only main.svg";

export default function Header() {
    return (
        <div className="chat-heading  me-auto ms-auto text-center ">
            <div className="img  m-auto text-center">
                <img src={main_logo} alt="" />
            </div>
            <span className=' fw-bold fs-5 '>  Space Chat مرحبا بك في   </span>
            <h3 className='header-name mt-3'>كيف استطيع مساعدتك اليوم؟</h3>
        </div>
    )
}
