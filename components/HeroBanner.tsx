import React from "react";
import Button from "./Button";
import Input from "./Input";
const HeroBanner = () => {
  return (
    <React.Fragment>
      <div className=" w-[1440px] h-[800px] mx-auto">
        <div className={" absolute w-[1140px] h-[890px]"}>
          <img className={"fill4"} src={"/assets/hero/Fill4.png"} />
        </div>

        <div className={"relative"}>
          <img className={"fill5"} src={"/assets/hero/Fill5.png"} />
        </div>

        <div className=" max-w-[940px] mx-auto h-[]">
          <div className="flex">
            <div className="max-w-[481px]">
              <h1 className="text-[52px]	font-normal	mt-32  ">
                <span className="text-white	">The smarter way</span>
                <br></br>
                <span className=" text-white	 font-bold">
                  to order your food
                </span>
              </h1>
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
              <p className="text-white mt-8">Available on</p>
              <div className="mt-6 flex gap-5">
                <button>
                  <img src={"/assets/Apple.png"} />
                </button>
                <button>
                  <img src={"/assets/Googleplay.png"} />
                </button>
              </div>
            </div>
            <div className="flex-1 flex justify-end relative right-0">
              <div className={"fill0 "}>
                <img src={"/assets/hero/iPhone_Black.svg"} />
              </div>
            </div>
          </div>
        </div>
        <div className={"fill02 relative"}>
          <img className={"fill2"} src={"/assets/hero/Fill2.png"} />
        </div>

        <div className={"relative"}>
          <img className={"fill1"} src={"/assets/hero/Fill1.png"} />
        </div>

        <div className={"relative"}>
          <img className={"fill3"} src={"/assets/hero/Fill3.png"} />
        </div>
      </div>
    </React.Fragment>
  );
};

export default HeroBanner;
