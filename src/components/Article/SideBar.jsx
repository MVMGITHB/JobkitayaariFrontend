
export const SideBar = () => {
  return (
    <div className="w-full flex flex-col gap-6 p-2 sticky top-16 z-10">
      <div className=" h-[300px] w-full shadow-md p-2">
        <h2 className=" font-bold text-center">Latest News</h2>
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4ZOzVPR43BhdRWjLjWW4LbWxBXHaaD42Hyw&s"
          className="h-full"
          alt=""
        />
      </div>

      <div className=" h-[300px] w-full shadow-md">
        <h2 className=" font-bold text-center">Viral Stories</h2>
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfOv-_zk4HmJbRv5oQ0HYwh8FZ0znD6gzXsw&s"
          className="h-full"
          alt=""
        />
      </div>
    </div>
  );
};
