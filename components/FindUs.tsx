import React from "react";
import Button from "./Button";
import Input from "./Input";
const FindUs = () => {
  return (
    <div className=" w-[1440px] h-[702px] mx-auto flex">
      <div className="w-[746px] h-[702px] flex justify-center items-center  ">
        <div className="pb-32">
          <h1 className="text-6xl	font-normal	mt-32 text-bluee  ">
            <span className="">Find us in these</span>
            <span className="font-bold"> Area</span>
          </h1>

          <div className="mt-10 flex gap-5 ">
            <div className=" text-base ">
              <Input
                className="abc h-8 p-4 w-[300px] rounded	"
                placeholder="Enter your area"
                type="text"
                id="1"
              />
            </div>
            <div>
              <Button
                onClick={() => console.log("You clicked on the orange button!")}
              >
                Search
              </Button>
            </div>
          </div>
        </div>
      </div>
      <div className=" w-[694px] h-[702px] flex justify-center items-center relative">
      <img
            src={"/assets/findusblue.png"}
            className="findusblue"
          />
           <img
            src={"/assets/findusyellow.png"}
            className="findusyellow"
          />
        <div className="">
          <img
            src={"/assets/findus.png"}
            className="w-[620px] h-[413px] "
          />
        </div>
   
      </div>
    </div>
  );
};

export default FindUs;
