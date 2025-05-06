export const RightSideBar = () => {
  return (
    <div className="w-full flex flex-col gap-6 p-2 sticky top-16 z-10">
      <div className=" h-[300px] w-full shadow-md p-2">
        <h2 className=" font-bold text-center">Advertisement</h2>
        <img
          src="https://images-static.nykaa.com/uploads/a2135133-34f7-48f8-93ed-040bddb0ce99.jpg?tr=cm-pad_resize,w-300"
          alt=""
        />
      </div>

      <div className=" h-[300px] w-full shadow-md p-2">
        <h2 className=" font-bold text-center">Top Offers</h2>
        <img
          src="https://images-static.nykaa.com/uploads/042a94f5-2a3c-4d14-b226-fe960881ef65.jpg?tr=cm-pad_resize,w-600"
          alt=""
          className="h-full"
        />
      </div>

      <div></div>
    </div>
  );
};
