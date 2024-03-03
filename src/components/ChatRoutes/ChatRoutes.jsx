import "./ChatRoutes.css";

import StartChat from "../StartChat/StartChat";
import "../../pages/ChatRoutes/StartChatPage.css";

function ChatRoutes() {
  return (
    <div style={{ display: "flex", flexDirection: "row-reverse" }}>
      <div style={{ flex: 1 }}>
        <div className=" rounded-4  bg-white ">
          <StartChat />
        </div>
      </div>
    </div>
  );
}

export default ChatRoutes;
