import React from "react";
import { MdOutlineCancel } from "../../components";

import { chatData } from "../../data/dummy";
import { Button } from "../index";
import { useStateContext } from "../../context/ContextProvider";

const Notification = () => {
  const { currentColor } = useStateContext();

  return (
    <div className="Notfication_Container">
      <div className="Notfication_Header">
        <div className="header-text">
          <p>Notifications</p>
          <button type="button">5 New</button>
        </div>
        <Button
          icon={<MdOutlineCancel />}
          color="rgb(153, 171, 180)"
          bgHoverColor="light-gray"
          borderRadius="50%"
        />
      </div>

      <div className="Notfication_Content">
        {chatData?.map((item, index) => (
          <div key={index} className="notfication">
            <img src={item.image} alt={item.message} />
            <div>
              <p className="p-1">{item.message}</p>
              <p className="p-2">{item.desc}</p>
            </div>
          </div>
        ))}
        <div className="allBtn">
          <Button
            color="white"
            bgColor={currentColor}
            text="See all notifications"
            borderRadius="10px"
            width="100%"
          />
        </div>
      </div>
    </div>
  );
};

export default Notification;
