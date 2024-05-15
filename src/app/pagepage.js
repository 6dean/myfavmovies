"use client";
import Link from "next/link";
import Filters from "./menufilters/menufilter";
import Listing from "./listing/listing-movies";
import { useParams } from "next/navigation";
import { useState } from "react";

export default function Home() {
  useParams();

  const [objFilters, setObjFilters] = useState({
    alphabetic: "",
    genre: "",
    year: "",
  });

  const listMovies = Listing();
  let newListMovies = [];
  let newListMoviesAZ = [];

  // TRI PAR GENRE ------------------------------------

  if (objFilters.genre !== "") {
    const actionMovies = listMovies.filter((search) =>
      search.Movie.genre.includes(objFilters.genre)
    );
    actionMovies.map((search) => newListMovies.push(search));
  }

  // TRI PAR ALPHAB ------------------------------------

  if (newListMovies.length === 0) {
    if (objFilters.alphabetic === "A") {
      listMovies.sort((a, b) => {
        const nameA = a.Movie.title.toLowerCase();
        const nameB = b.Movie.title.toLowerCase();

        if (nameA < nameB) {
          return -1;
        }
        if (nameA > nameB) {
          return 1;
        }
        return 0;
      });

      listMovies.forEach((movie) => {
        newListMovies.push(movie);
      });
    } else if (objFilters.alphabetic === "Z") {
      listMovies.sort((a, b) => {
        const nameA = a.Movie.title.toLowerCase();
        const nameB = b.Movie.title.toLowerCase();

        if (nameA < nameB) {
          return +1;
        }
        if (nameA > nameB) {
          return -1;
        }
        return 0;
      });

      listMovies.forEach((movie) => {
        newListMovies.push(movie);
      });
    } else {
      null;
    }
  } else {
    if (objFilters.alphabetic === "A") {
      newListMovies.sort((a, b) => {
        const nameA = a.Movie.title.toLowerCase();
        const nameB = b.Movie.title.toLowerCase();

        if (nameA < nameB) {
          return -1;
        }
        if (nameA > nameB) {
          return 1;
        }
        return 0;
      });

      newListMovies.forEach((movie) => {
        newListMoviesAZ.push(movie);
      });
    } else if (objFilters.alphabetic === "Z") {
      newListMovies.sort((a, b) => {
        const nameA = a.Movie.title.toLowerCase();
        const nameB = b.Movie.title.toLowerCase();

        if (nameA < nameB) {
          return +1;
        }
        if (nameA > nameB) {
          return -1;
        }
        return 0;
      });

      newListMovies.forEach((movie) => {
        newListMoviesAZ.push(movie);
      });
    } else {
      null;
    }
  }

  // TRI PAR ANNÉE ------------------------------------

  // NOTE SUR 5 ------------------------------------

  const renderingStars = (item) => {
    let stars = [];
    for (let index = 1; index < 6; index++) {
      if (index <= item) {
        stars.push("*");
      } else {
        stars.push(null);
      }
    }
    return stars;
  };

  if (objFilters.genre !== "") {
    return (
      <div className="flex">
        <Filters setObjFilters={setObjFilters} objFilters={objFilters} />
        <div className="list-s grid grid-cols-7 gap-4">
          {newListMoviesAZ.length !== 0
            ? newListMoviesAZ.map((elem, i) => (
                <Link key={i} href={`/info/${elem.Movie.ID}`}>
                  <div className="">
                    <div>
                      {elem.Movie.images.map((image, imgIndex) => (
                        <img key={imgIndex} src={image.img} alt="img" />
                      ))}
                    </div>
                    <div className="">{elem.Movie.title}</div>
                    <div className="">{renderingStars(elem.Movie.note)}</div>
                  </div>
                </Link>
              ))
            : newListMovies.map((elem, i) => (
                <Link key={i} href={`/info/${elem.Movie.ID}`}>
                  <div className="">
                    <div>
                      {elem.Movie.images.map((image, imgIndex) => (
                        <img key={imgIndex} src={image.img} alt="img" />
                      ))}
                    </div>
                    <div className="">{elem.Movie.title}</div>
                    <div className="">{renderingStars(elem.Movie.note)}</div>
                  </div>
                </Link>
              ))}
        </div>
      </div>
    );
  } else {
    return (
      <div className="flex">
        <Filters setObjFilters={setObjFilters} objFilters={objFilters} />
        <div className="list-s grid grid-cols-7 gap-4">
          {newListMoviesAZ.length === 0
            ? listMovies.map((elem, i) => (
                <Link key={i} href={`/info/${elem.Movie.ID}`}>
                  <div className="">
                    <div>
                      {elem.Movie.images.map((image, imgIndex) => (
                        <img key={imgIndex} src={image.img} alt="img" />
                      ))}
                    </div>
                    <div className="">{elem.Movie.title}</div>
                    <div className="">{renderingStars(elem.Movie.note)}</div>
                  </div>
                </Link>
              ))
            : newListMoviesAZ.map((elem, i) => (
                <Link key={i} href={`/info/${elem.Movie.ID}`}>
                  <div className="">
                    <div>
                      {elem.Movie.images.map((image, imgIndex) => (
                        <img key={imgIndex} src={image.img} alt="img" />
                      ))}
                    </div>
                    <div className="">{elem.Movie.title}</div>
                    <div className="">{renderingStars(elem.Movie.note)}</div>
                  </div>
                </Link>
              ))}
        </div>
      </div>
    );
  }
}
