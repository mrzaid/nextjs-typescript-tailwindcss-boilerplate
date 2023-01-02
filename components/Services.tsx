import React from "react";

const Services = () => {
  const content = [
    {
      title: "Store",
      image: "/assets/Store.svg",
    },
    {
      title: "Grocery",
      image: "/assets/Grocery.svg",
    },
    {
      title: "Cafe",
      image: "/assets/Cafe.svg",
    },
    {
      title: "Food",
      image: "/assets/Food.png",
    },
    
   
  ];

  return (
    <>
      <div className="w-[1440px] h-[566px] mx-auto">
        <div className="text-bluee">
          <h1 className="w-full text-5xl font-bold text-center py-24 ">
            We've more services
          </h1>
        </div>
        <div className=" max-w-[940px] mx-auto grid grid-cols-4 gap-3">
          {content.map(({ title, image }) => (
            <div className="flex flex-col text-center items-center  ">
              <img src={image} className="w-1/2 " />
              <p className="text-center text-lg text-greyy mt-4">{title}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Services;
























































