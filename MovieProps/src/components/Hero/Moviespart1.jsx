import React from "react";
import Moviecard from "./Moviecard";

const Moviespart1 = () => {
  const movies = [
    {
      imgUrl:
        "https://i.pinimg.com/736x/cf/40/44/cf40440f388ca20497316b1cf1f47b77.jpg",
      text: "Stranger things ",
      isWatched: 80,
    },
    {
      imgUrl:
        "https://i.pinimg.com/1200x/f4/5f/3e/f45f3ead280563de3e3a4d1c63a61c3a.jpg",
      text: "From no-way home ",
      isWatched: 40,
    },
    {
      imgUrl:
        "https://i.pinimg.com/736x/d7/2e/f5/d72ef5bc3439323e40bb28a2b0d4ea1e.jpg",
      text: "The Last of us ",
      isWatched: 20,
    },
    {
      imgUrl:
        "https://i.pinimg.com/736x/b3/27/dc/b327dc0862cc43d20f956be4a04a5374.jpg",
      text: "The family man ",
      isWatched: 60,
    },
    {
      imgUrl:
        "https://i.pinimg.com/1200x/0f/59/49/0f59496b11746c54b937b5b2f98f7ac4.jpg",
      text: "Avengers",
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
    <div className="h-[30vh] w-full p-5 ">
      <div className="flex justify-between items-center h-10">
        <div className="text-white font-bold text-2xl">Continue watching</div>
        <button className="px-5 py-1 rounded-full text-white font-semibold bg-white/20">
          See all
        </button>
      </div>

      <div className="w-full overflow-x-auto movie">
        <div className="w-full mt-4  flex gap-4 ">
          {movies.map(function (elem) {
            return (
              <div
                className="h-[20vh] w-[320px] bg-red-200 rounded-2xl relative shrink-0 "
                id="movie"
              >
                <div className="z-[1] h-full w-full rounded-2xl overflow-hidden absolute">
                  <img
                    className="h-full w-full "
                    src={elem.imgUrl}
                    alt=""
                  />
                </div>
                <div className="absolute z-[2] p-2 top-2/3 px-5 w-full">
                  <h1 className="text-white text-lg font-bold">
                    {elem.text}
                  </h1>
                  <div className="h-1 bg-white/40 w-[80%] rounded-2xl mt-2">
                    <div className="bg-blue-300 h-full rounded-full {isWatched ? w-[uses]}" style={{width : `${elem.isWatched}%`}} ></div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Moviespart1;
