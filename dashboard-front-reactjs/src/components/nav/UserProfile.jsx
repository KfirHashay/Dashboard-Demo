import React from "react";
import { MdOutlineCancel } from "../../components";

import { userProfileData } from "../../data/dummy";
import { useStateContext } from "../../context/ContextProvider";

import { Button } from "../index";
import avatar from "../../data/avatar.jpg";

const UserProfile = () => {
  const { currentColor } = useStateContext();

  return (
    <div className="UserProfile_Container">
      <div className="UserProfile_Header">
        <p>User Profile</p>
        <Button
          icon={<MdOutlineCancel />}
          color="rgb(153, 171, 180)"
          bgHoverColor="light-gray"
          borderRadius="50%"
        />
      </div>

      <div className="UserProfile_Details">
        <img src={avatar} alt="user-profile" />
        <div>
          <p className="p-1"> Michael Roberts </p>
          <p className="p-2"> Administrator </p>
          <p className="p-3"> admin@gmail.com </p>
        </div>
      </div>

      <div>
        {userProfileData.map((item, index) => (
          <div key={index} className="Navigation">
            <button
              type="button"
              style={{ color: item.iconColor, backgroundColor: item.iconBg }}
            >
              {item.icon}
            </button>

            <div>
              <p className="p-1">{item.title}</p>
              <p className="p-2">{item.desc}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="allBtn">
        <Button
          color="white"
          bgColor={currentColor}
          text="Logout"
          borderRadius="10px"
          width="100%"
        />
      </div>
    </div>
  );
};

export default UserProfile;
