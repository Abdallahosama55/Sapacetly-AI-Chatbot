import React, { useState } from 'react'
import './Table.css'
import { Checkbox } from '@mui/material'
import { LazyLoadImage } from 'react-lazy-load-image-component';
import setting from '../../assets/Images/setting-2-svgrepo-com 1.svg';
import menu from '../../assets/Images/menu-vertical.svg'
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
export default function TableC() {

    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
      setAnchorEl(null);
    };
    const initialCheckboxes = [
        { id: 1, label: 'افضل دكتور...', checked: false, created: 'مند 5 ساعة', condtion: false },
        { id: 2, label: 'افضل دكتور...', checked: false, created: 'مند 5 ساعة', condtion: false },
        { id: 3, label: 'افضل دكتور...', checked: false, created: 'مند 5 ساعة', condtion: false },
        { id: 4, label: 'افضل دكتور...', checked: false, created: 'مند 5 ساعة', condtion: false },
        { id: 5, label: 'افضل دكتور...', checked: false, created: 'مند 5 ساعة', condtion: false },

        // Add more checkboxes as needed
    ];

    const [checkboxes, setCheckboxes] = useState(initialCheckboxes);

    const handleCheckboxChange = (id) => {
        const updatedCheckboxes = checkboxes.map((checkbox) =>
            checkbox.id === id ? { ...checkbox, checked: !checkbox.checked } : checkbox
        );
        setCheckboxes(updatedCheckboxes);
    };

    const handleSelectAllChange = () => {
        const allChecked = checkboxes.every((checkbox) => checkbox.checked);
        const updatedCheckboxes = checkboxes.map((checkbox) => ({
            ...checkbox,
            checked: !allChecked,
        }));
        setCheckboxes(updatedCheckboxes);
    };
    return (
        <div className='table-c mt-5'>
            <div className='d-flex'>
                <div className='col-1'>
                    <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" onChange={handleSelectAllChange} checked={checkboxes.every((checkbox) => checkbox.checked)} />
                </div>
                <div className='col-xl-5 col-lg-5 col-md-5 col-sm-5 col-3'><p>الاسم</p></div>
                <div className='col-xl-1 col-lg-1 col-md-1 col-sm-1 col-2'><p>الحالة</p></div>
                <div className='col-xl-1 col-lg-1 col-md-1 col-sm-1 col-2'><p>تم انشاءه</p></div>
                <div className='col-4'>
                    <LazyLoadImage src={setting} className='img d-block text-end me-auto ' />
                </div>
            </div>
            {checkboxes.map(item => {
                return (
                    <div className='d-flex border-bottom mt-3'>
                        <div className='col-1'>
                            <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" onChange={() => handleCheckboxChange(item.id)} checked={item.checked} />
                        </div>
                        <div className='col-xl-5 col-lg-5 col-md-5 col-sm-5 col-3 '><p>{item.label}</p></div>
                        <div className='col-xl-1 col-lg-1 col-md-1 col-sm-1 col-2'><p>{item.condtion ? <p>not empty</p> : <p className='condtion w-50 text-center'>فارغ</p>}</p></div>
                        <div className='col-xl-1 col-lg-1 col-md-1 col-sm-1 col-2'><p>{item.created}</p></div>
                        <div className='col-4  '>
                        <div className=' d-flex justify-content-end'>
                        
                        <div>
                        <Button
                            id="basic-button"
                            aria-controls={open ? 'basic-menu' : undefined}
                            aria-haspopup="true"
                            aria-expanded={open ? 'true' : undefined}
                            onClick={handleClick}
                          >
                          <LazyLoadImage src={menu} className='img d-block text-end me-auto ' />      
                          </Button>
                          <Menu
                            id="basic-menu"
                            anchorEl={anchorEl}
                            open={open}
                            onClose={handleClose}
                            MenuListProps={{
                              'aria-labelledby': 'basic-button',
                            }}
                          >
                            <MenuItem onClick={handleClose}>Edit</MenuItem>
                            <MenuItem onClick={handleClose}>Remove</MenuItem>
                            <MenuItem onClick={handleClose}>Logout</MenuItem>
                          </Menu>
                        
                        
                        
                        
                        </div>
                        
                        
                        
                        
                        </div>
  
                            
                           
                            
                            
                        </div>
                    </div>
                )
            })}
        </div>
    )
}

