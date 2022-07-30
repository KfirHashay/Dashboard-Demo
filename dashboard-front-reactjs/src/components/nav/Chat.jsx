import React from "react";
import { MdOutlineCancel } from "../../components";

import { chatData } from "../../data/dummy";
import { Button } from "../index";
import { useStateContext } from "../../context/ContextProvider";

const Chat = () => {
  const { currentColor } = useStateContext();

  return (
    <div className="Chat_Container">
      <div className="Chat_Header">
        <div className="header-text">
          <p>Messages</p>
          <button type="button">5 New</button>
        </div>

        <Button
          icon={<MdOutlineCancel />}
          color="rgb(153, 171, 180)"
          borderRadius="100%"
        />
      </div>

      <div className="Chat_Content">
        {chatData?.map((item, index) => (
          <div key={index} className="massages">
            <div className="massages-img">
              <img src={item.image} alt={item.message} />
              <span style={{ background: "#03C9D7" }} />
            </div>
            <div className="massages-msg">
              <p className="massage">{item.message}</p>
              <p className="desc">{item.desc}</p>
              <p className="time">{item.time}</p>
            </div>
          </div>
        ))}
        <div className="allBtn">
          <Button
            color="white"
            bgColor={currentColor}
            text="See all messages"
            borderRadius="10px"
            width="100%"
          />
        </div>
      </div>
    </div>
  );
};

export default Chat;
