import React from "react";

export const RightSide = () => {
  return (
    <div className="w-full flex flex-col shadow-md gap-6 p-2">
      
      <div className="h-[300px] w-full shadow-md overflow-hidden">
        <p className="font-bold text-center">Ads</p>
        <img
          src="https://images-static.nykaa.com/uploads/ce5ec2b8-2f59-4d60-927b-f6303e17e75d.jpg?tr=cm-pad_resize,w-300"
          alt=""
          className="w-full h-full object-cover"
        />
      </div>

      <div className="h-[200px] w-full shadow-md overflow-hidden">
        <p className="font-bold text-center">Trending News</p>
        <img
          src="https://images-static.nykaa.com/uploads/a2135133-34f7-48f8-93ed-040bddb0ce99.jpg?tr=cm-pad_resize,w-300"
          alt=""
          className="w-full h-full object-cover"
        />
      </div>

    </div>
  );
};
