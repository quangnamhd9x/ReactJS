import React from "react";
import img from "./img/dr1.png";

const CardTailwind = (props) => {
  const amountClasses = `text-lg font-bold text-transparent bg-clip-text bg-primary-gradient ${props.primary ? "bg-primary-gradient" : "bg-secondary-gradient"}`;
  return (
    <div className="relative">
      <div className="w-full rounded-lg h-[400px]">
        <img src={img} alt="" />
      </div>
      <div className="absolute left-2/4 -translate-x-2/4 translate-y-2/4 bottom-0 bg-white z-10 rounded-[20px] p-5 w-[calc(100%-36px)]">
        <div className="flex justify-between items-center mb-8">
          <div className="flex items-center gap-x-3">
            <img
              className="w-8 h-8 rounded-full object-cover flex-shink-0"
              src={img}
              alt=""
            /> 
            <span className="font-light text-base text-[#333]">@zndrson</span>
          </div>
          <div className="flex items-center gap-x-3">
            <img src="/icon-heart.svg" alt="" />
            <span>256</span>
          </div>
        </div>
        <div className="flex items-center justify-between">
          <h3 className={`font-medium ${props.fontSize || "text-lg" }`}>Cosmic Perspective</h3>
          <span className={amountClasses} fontSize="22px">
            12,000 PSL
          </span>
        </div>
      </div>
    </div>
  );
};

export default CardTailwind;
