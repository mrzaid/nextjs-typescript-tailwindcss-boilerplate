import React from "react";
import Link from "next/link";

const Header = () => {
  const mymenu = ["Our App", "For Business", "About Us", "English"];

  return (
    <div className=" flex items-center h-24 	">
      <div className=" max-w-[940px] w-full  mx-auto ">
        <div className="flex justify-between items-center  ">
          <div className="flex  items-center">
            {" "}
            <img src={"/assets/logo.png"}></img>
          </div>
          <div>
            <div className="flex  justify-items-center gap-16 items-center  ">
              {mymenu.map((value) => (
                <Link href="/">{value}</Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
