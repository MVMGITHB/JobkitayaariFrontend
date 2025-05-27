export const SideBar = () => {
  return (
    <div className="w-full flex flex-col gap-6 p-2 sticky top-16 z-10">
      <div>
        <p className=" font-bold text-center">Latest News</p>

        <div className="h-[300px]  w-full shadow-md  ">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4ZOzVPR43BhdRWjLjWW4LbWxBXHaaD42Hyw&s"
            className="h-[100%] "
            alt="latest news"
          />
        </div>
      </div>

      <div>
      <p className=" font-bold text-center">Viral Stories</p>

      <div className=" h-[300px] w-full shadow-md ">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfOv-_zk4HmJbRv5oQ0HYwh8FZ0znD6gzXsw&s"
          className="h-[100%]"
          alt="latest news"
        />
      </div>
      </div>
    </div>
  );
};
