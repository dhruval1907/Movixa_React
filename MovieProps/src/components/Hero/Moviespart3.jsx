import React from "react";
import Moviecard from "./Moviecard";

const Moviespart3 = () => {
  const movies = [
    {
      imgUrl:
        "https://i.pinimg.com/1200x/ab/77/d2/ab77d2b713312df62e876018b9be0ea1.jpg",
      text: "batman never way home",
      isWatched: 80,
    },
    {
      imgUrl:
        "https://i.pinimg.com/1200x/6c/00/a4/6c00a43d018340664c03707e001d1c80.jpg",
      text: "The boys",
      isWatched: 40,
    },
    {
      imgUrl:
        "https://i.pinimg.com/736x/c0/7d/ff/c07dffc972f59c8238ba47bbdb76afc9.jpg",
      text: "Jumanji ",
      isWatched: 20,
    },
    {
      imgUrl:
        "https://i.pinimg.com/736x/0e/10/35/0e1035e4818ce2f47d09bea3bf95af41.jpg",
      text: "batman never way ",
      isWatched: 60,
    },
    {
      imgUrl:
        "https://i.pinimg.com/1200x/0f/59/49/0f59496b11746c54b937b5b2f98f7ac4.jpg",
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
        <div className="text-white font-bold text-2xl">Tranding series </div>
        <button className="px-5 py-1 rounded-full text-white font-semibold bg-white/20">
          See all
        </button>
      </div>

      <div className="w-full overflow-x-auto movie">
        <div className="w-full mt-4  flex gap-4 ">
          {movies.map(function (elem) {
            return (
              <div
                className="h-[25vh] w-[250px] bg-red-200 rounded-2xl relative shrink-0 "
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
