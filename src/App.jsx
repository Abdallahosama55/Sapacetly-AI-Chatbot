import "./App.css";
import Control from "./pages/ControlPanal/Control"
import Edit from "./components/Edit/Edit";
import Editor from "./components/Edtior/Editor";
import SignUp from "./components/Auth/SignUp/SignUp";
import SignIn from "./components/Auth/SignIn/SignIn";
import ChatRoutesPages from "./pages/ChatRoutes/ChatRoutesPages";
import WriteArticle from "./pages/WriteArticle/WriteArticle";
import ForgotPassword from "./components/Auth/ForgotPassword/ForgotPassword";
import VerifyAccount from "./components/Auth/VerifyAccount/VerifyAccount";
import NewPassword from "./components/Auth/NewPassword/NewPassword";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AppLayout from "./Util/AppLayout";
import { useState } from "react";
function App() {
  
  const [chats, setChats] = useState([
    { id: 1, content: "content1" },
    { id: 2, content: "content2" },
    { id: 3, content: "content3" },
    { id: 4, content: "content4" },
  ]);
  const [showChat, setShowChat] = useState(0);
  return (
    <BrowserRouter>
      <Routes>
        <Route>
          <Route
            path="/"
            element={<SignIn />}
          />
      
          <Route
            path="/edit"
            element={<Edit />}
          />
          <Route
            path="/editor"
            element={<Editor />}
          />
          <Route
            path="/signin"
            element={<SignIn />}
          />
          <Route
            path="/signup"
            element={<SignUp />}
          />
          <Route
            path="/forgotpassword"
            element={<ForgotPassword />}
          />
          <Route
            path="/verifyaccount"
            element={<VerifyAccount />}
          />
          <Route
            path="/newpassword"
            element={<NewPassword />}
          />
              <Route
            element={
              <AppLayout
                chats={chats}
                setChats={setChats}
                showChat={showChat}
                setShowChat={setShowChat}
              />
            }>
       
          <Route
          path="control"
          element={<Control/>}
        />
        
        <Route
        index
        path="/ChatRoutes"
        element={
          <ChatRoutesPages
            chats={chats}
            setChats={setChats}
            showChat={showChat}
            setShowChat={setShowChat}
          />
        }
      />
      <Route
        path="/ChatRoutes/:id"
        element={
          <ChatRoutesPages
            chats={chats}
            setChats={setChats}
            showChat={showChat}
            setShowChat={setShowChat}
          />
        }
      />
    </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;