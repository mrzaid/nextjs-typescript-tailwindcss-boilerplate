import React from "react";
import Button from "./Button";
import Input from "./Input";

const WeFresh = () => {
  return (
    <React.Fragment>
      <div className=" w-[1440px] h-[336px] mx-auto">
        <div className="w-[600px] mx-auto flex items-center justify-items-center">
          <div className=" ">
            <h1 className="text-6xl	font-normal	mt-32 text-bluee ">
              <span className="font-bold"> WeFresh</span>
              <span className=""> for business</span>
            </h1>
            <p className=" text-grey wrap text-center">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque
              pariatur et aspernatur, voluptatibus quibusdam voluptate autem id,
              debitis ab vitae sit sint fugit impedit earum unde harum.
              Inventore, magni optio?
            </p>
            <div className="mt-10 flex gap-5 ">
              <div className=" text-base ">
                <Input
                  className="abc h-8 p-4 w-[300px] rounded"
                  placeholder="Enter phone number"
                  type="text"
                  id="1"
                />
              </div>
              <div>
                <Button
                  onClick={() =>
                    console.log("You clicked on the orange button!")
                  }
                >
                  Send
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default WeFresh;
