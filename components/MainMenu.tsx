import Image from "next/image";
import React from "react";

const MainMenu = () => {
  return (
    <div className="container main-menu">
      <ul className="flex justify-between items-center py-4">
        <li>Home</li>
        <li>Our Story</li>
        <li
          className="bg-white p-2 rounded-full flex justify-center"
          style={{ height: "80px", width: "80px" }}
        >
          <Image
            src="/assests/baseri-beans-logo.svg"
            alt="Baseri beans"
            width={150}
            height={150}
          />
        </li>
        <li>Shop</li>
        <li>Cart</li>
      </ul>
    </div>
  );
};

export default MainMenu;
