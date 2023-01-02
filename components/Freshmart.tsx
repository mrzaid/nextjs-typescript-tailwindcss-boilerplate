import React from "react";

export const Freshmart = () => {
  var data = [
    {
      title: "Lorem ipsum dolor sit",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud ",
      selected: false,
    },
    {
      title: "Adipiscing elit sed do eiusmod",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud ",
      selected: true,
    },
    {
      title: "Labore et dolore magna aliqua",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud ",
      selected: false,
    },
  ];
  return (
    <React.Fragment>
      <div className="max-w-[1440px] h-[770px] mx-auto">
        <div className="flex">
          <div className="w-[614px] h-auto flex items-center justify-center relative">
            <img src={"assets/iPhone_Black.svg"} alt="image of a" />
            <img className="absolute z-[-1]" src={'assets/freshmartcircle.png'}></img>
          </div>
          <div className="flex-1 ">
            <div className="w-[560px] h-[195px] mx-auto ">
              {data.map(({ title, desc, selected }) => {
                return (
                  <div className="h-[195px] w-[560px]">
                    <div className={`${selected ? "bg-lbluee" : ""}`}>
                      <h1 className="text-bluee font-normal text-2xl leading-8 px-12 pt-8	">
                        {title}
                      </h1>
                      <p className=" font-normal text-base	leading-8	px-12 pt-2.5	">{desc}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};
