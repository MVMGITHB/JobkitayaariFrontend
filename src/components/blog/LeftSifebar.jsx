import React from 'react';

export const LeftSifebar = () => {
  return (
    <div className="w-full flex flex-col gap-6 p-2">
      {/* First Sticky Image Block */}
      <div className="sticky  bg-white rounded shadow p-2">
        <p className="font-bold mb-2">Ads</p>
        <img
          src="https://images-static.nykaa.com/uploads/30778a47-67cc-40db-8974-224f9eb65cfd.jpg?tr=cm-pad_resize,w-300"
          alt="Ad"
          className="w-full max-w-[300px] mx-auto object-contain"
        />
      </div>

      {/* Second Sticky Image Block */}
      <div className="sticky   bg-white rounded shadow p-2">
        <p className="font-bold mb-2">Top News</p>
        <img
          src="https://images-static.nykaa.com/creatives/c0a6a1ad-20ed-4ec5-9470-361bcb936925/default.jpg?tr=cm-pad_resize,w-300"
          alt="Top News"
          className="w-full max-w-[300px] mx-auto object-contain"
        />
      </div>
    </div>
  );
};
