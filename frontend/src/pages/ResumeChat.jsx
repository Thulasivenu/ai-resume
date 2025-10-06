import React from "react";
import ChatWindow from "../components/ChatWindow/ChatWindow";
import SideNavBar from "../components/SideNavBar/SideNavBar";

const ResumeChat = () => {
  return (
    <>
      <div className="chat-window-main">
        {/* <div className="sidebar-sec"> */}
          <SideNavBar />
        {/* </div> */}
        <div className="chatwindow-sec">
          <ChatWindow />
        </div>
      </div>
    </>
  );
};

export default ResumeChat;
