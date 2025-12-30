import React from "react";
import Moviecard from "./Moviecard";

const Moviespart3 = () => {
  const movies = [
    {
      imgUrl:
        "https://i.pinimg.com/736x/cf/40/44/cf40440f388ca20497316b1cf1f47b77.jpg",
      text: "batman never way home",
      isWatched: 80,
    },
    {
      imgUrl:
        "https://i.pinimg.com/736x/d7/2e/f5/d72ef5bc3439323e40bb28a2b0d4ea1e.jpg",
      text: "The boys",
      isWatched: 40,
    },
    {
      imgUrl:
        "https://i.pinimg.com/1200x/97/6c/9f/976c9f28572614f6975d1609f5590a28.jpg",
      text: "Jumanji ",
      isWatched: 20,
    },
    {
      imgUrl:
        "https://i.pinimg.com/736x/b9/0f/ff/b90fffec08f5991e455b083953e75314.jpg",
      text: "batman never way ",
      isWatched: 60,
    },
    {
      imgUrl:
        "https://i.pinimg.com/736x/1e/73/11/1e73113cbc535ac9c99d3c5df4112103.jpg",
      text: "Avengers no",
      isWatched: 55,
    },
    {
      imgUrl:
        "https://i.pinimg.com/1200x/ab/93/99/ab9399d4928087e66e3db782b554c70b.jpg",
      text: "Joker",
      isWatched: 10,
    },
  ];

  return (
    <div className="h-[30vh] w-full p-5  mt-6">
      <div className="flex justify-between items-center h-10">
        <div className="text-white font-bold text-2xl">Top 10 series  </div>
        <button className="px-5 py-1 rounded-full text-white font-semibold bg-white/20">
          See all
        </button>
      </div>

      <div className="w-full overflow-x-auto movie">
        <div className="w-full mt-4  flex gap-4 ">
          {movies.map(function (elem) {
            return (
              <div
                className="h-[20vh] w-[350px] bg-red-200 rounded-2xl relative shrink-0 "
                id="movie"
              >
                <div className="z-[1] h-full w-full rounded-2xl overflow-hidden absolute">
                  <img
                    className="h-full w-full object-cover"
                    src={elem.imgUrl}
                    alt=""
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Moviespart3;
