import React from "react";

const ChatBubble = ({side}) => {
  return (
    // {side  ""? }
    <div>
      <div className="chat chat-end">
        <div className="chat-image avatar">
          <div className="w-10 rounded-full">
            <img
              alt="Tailwind CSS chat bubble component"
              src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
            />
          </div>
        </div>

        <div className="chat-bubble">You were the Chosen One!</div>
        {/* <div className="opacity-50 chat-footer">Delivered</div> */}
      </div>
    </div>
  );
};

export default ChatBubble;
