import "./App.css";
import SignUp from "./components/Auth/SignUp/SignUp";
import SignIn from "./components/Auth/SignIn/SignIn";
import ChatRoutesPages from "./pages/ChatRoutes/ChatRoutesPages";
import Control from "./pages/ControlPanal/Control";
import WriteArticle from "./pages/WriteArticle/WriteArticle";
import Edit from "./components/Edit/Edit";
import Editor from "./components/Edtior/Editor";
import ForgotPassword from "./components/Auth/ForgotPassword/ForgotPassword";
import VerifyAccount from "./components/Auth/VerifyAccount/VerifyAccount";
import NewPassword from "./components/Auth/NewPassword/NewPassword";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AppLayout from "./Util/AppLayout";
import { useState } from "react";
import Packages from "./pages/Packages/Packages";
import CreatePhoto from "./pages/CreatePhoto/CreatePhoto";
import Protection from "./components/Auth/Protection/Protection";

function App() {
  const [chats, setChats] = useState([
    { id: 1, content: "content1" },
    { id: 2, content: "content2" },
    { id: 3, content: "content3" },
    { id: 4, content: "content4" },
  ]);
  const [showChat, setShowChat] = useState(0);
  const token = localStorage.getItem("token");
  return (
    <BrowserRouter>
      <Routes>
        <Route>
          {/* <Route
            path="/"
            element={
              token ? (
                <ChatRoutesPages
                  chats={chats}
                  setChats={setChats}
                  showChat={showChat}
                  setShowChat={setShowChat}
                />
              ) : (
                <SignIn />
              )
            }
          /> */}
          {/* <Route
            path="/"
            element={<CreatePhoto />}
          /> */}
          <Route
            path="/signin"
            element={<SignIn />}
          />
          {/* <Route
            path="/signin"
            element={{isLoggedIn ? <Redirect to="/dashboard" /> : <LoginPage />}}
          /> */}
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
            path="/newpassword/:id"
            element={<NewPassword />}
          />
          <Route
            path="/"
            element={
              !token ? (
                <SignIn />
              ) : (
                <Protection>
                  <AppLayout
                    chats={chats}
                    setChats={setChats}
                    showChat={showChat}
                    setShowChat={setShowChat}
                  />
                </Protection>
              )
            }>
            <Route
              path="control"
              element={<Control />}
            />
            <Route
              path="packages"
              element={<Packages />}
            />
            <Route
              path="/editor"
              element={<Editor />}
            />
            <Route
              path="WriteArticle"
              element={<WriteArticle />}
            />
            <Route
              path="/edit"
              element={<Edit />}
            />
            <Route
              path="/createPhoto"
              element={<CreatePhoto />}
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
