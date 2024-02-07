
import './App.css';

import Edit from './components/Edit/Edit';
import Editor from './components/Edtior/Editor';
import SignUp from './components/Auth/SignUp/SignUp';
import SignIn from './components/Auth/SignIn/SignIn';
import ChatRoutesPages from './pages/ChatRoutes/ChatRoutesPages';
import WriteArticle from './pages/WriteArticle/WriteArticle';
import ForgotPassword from './components/Auth/ForgotPassword/ForgotPassword';
import VerifyAccount from './components/Auth/VerifyAccount/VerifyAccount';
import NewPassword from './components/Auth/NewPassword/NewPassword'
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route >
      
     
        <Route path="/" element={<SignIn />}/>
        <Route path="/edit" element={<Edit/>}/>
        <Route path="/editor" element={<Editor/>}/>
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/forgotpassword" element={<ForgotPassword />} />
        <Route path="/verifyaccount" element={<VerifyAccount />} />
        <Route path="/newpassword" element={<NewPassword />} />


        <Route path="/ChatRoutes" element={<ChatRoutesPages/>}/>
        
       
      </Route>
    </Routes>
  </BrowserRouter>

  );

  
}

export default App;
