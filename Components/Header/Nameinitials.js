"use client"
import { NameInitialsAvatar } from "react-name-initials-avatar";

const Nameinitials = ({ toggleProfileDropdown }) => {

  return (
    <div onClick={toggleProfileDropdown} className="name-initials text-re-500">

      <NameInitialsAvatar
        name={`${"Syed".toUpperCase()} ${"Uvais".toUpperCase()}`}
        bgColor="#02b290"
        textColor="white"
        borderColor="none"
      />
  </div>
  );
};

export default Nameinitials;
