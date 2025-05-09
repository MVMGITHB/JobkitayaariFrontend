import React from "react";

export const RightSide = () => {
  return (
    <div className="w-full flex flex-col gap-6 p-2">
      <div className="w-full text-center">
        <p className="font-bold mb-2">Ads</p>
        <img
          src="https://images-static.nykaa.com/uploads/ce5ec2b8-2f59-4d60-927b-f6303e17e75d.jpg?tr=cm-pad_resize,w-300"
          alt="Ad"
          className="w-full max-w-[300px] mx-auto object-contain"
        />
      </div>

      <div className="w-full text-center">
        <p className="font-bold mb-2">Trending News</p>
        <img
          src="https://images-static.nykaa.com/uploads/a2135133-34f7-48f8-93ed-040bddb0ce99.jpg?tr=cm-pad_resize,w-300"
          alt="Trending"
          className="w-full max-w-[300px] mx-auto object-contain"
        />
      </div>
    </div>
  );
};
  