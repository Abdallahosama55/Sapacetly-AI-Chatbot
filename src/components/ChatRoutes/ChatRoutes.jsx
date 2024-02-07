// ChatRoutes.jsx

import { Sidebar, Menu, MenuItem, useProSidebar } from "react-pro-sidebar";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import StartChat from "../StartChat/StartChat";
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import ChatOutlinedIcon from '@mui/icons-material/ChatOutlined';
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';
import '../../pages/ChatRoutes/StartChatPage.css';
import InputBase from '@mui/material/InputBase';

function ChatRoutes() {
  const { collapseSidebar, rtl  } = useProSidebar();

  return (
    
    <div    style={

                ({ height: "90vh" }, { display: "flex", flexDirection: "row-reverse"  })
                
              } >
            


              <div className=" rounded-4   shadow mt-3 mb-3 bg-white">
              
              
              <Sidebar rtl={true} style={{ height: "85vh" ,backgroundColor:"white" }} className=" rounded-4">
        <Menu>
          <MenuItem
            icon={<MenuOutlinedIcon />}
            onClick={() => {
              collapseSidebar();
            }}
            style={{ textAlign: "center" }}
          >
        
          </MenuItem>
          <MenuItem icon={<AddOutlinedIcon />}>اضف محادثة</MenuItem>
          
          <MenuItem icon={<SearchOutlinedIcon />}>  
          <div
          component="form"
          dir='rtl'
          sx={{ p: '2px 4px', display: 'flex', alignItems: 'center',}}
          className=' e rounded-3'
          >
      
          <InputBase
          placeholder='بحث'
          
           
          />
          
          
          </div>
          </MenuItem>
          <MenuItem ><span className='  text-muted'>
          اخر محادثات</span>
          </MenuItem>
       
          <MenuItem icon={<ChatOutlinedIcon />} >  <small className='text-muted  opacity-75 fw-light'>كيفية التسويق الرقمي عبر الانترنت</small>   </MenuItem>
          <MenuItem icon={<ChatOutlinedIcon />} >  <small className='text-muted  opacity-75 fw-light'>كيفية التسويق الرقمي عبر الانترنت</small>   </MenuItem>
          <MenuItem icon={<ChatOutlinedIcon />} >  <small className='text-muted  opacity-75 fw-light'>كيفية التسويق الرقمي عبر الانترنت</small>   </MenuItem>
      
        </Menu>
      </Sidebar>
              
              </div>
    
      <div>
      <div className=" rounded-4 shadow  bg-white m-3">
      
      <StartChat/>
      </div>
      
      </div>
    </div>
  );
}

export default ChatRoutes; // Ensure to export ChatRoutes as default
