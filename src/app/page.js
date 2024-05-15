"use client";
import Link from "next/link";
import MenuFilter from "./menufilters/menufilter";
import Listing from "./listing/listing-movies";
import { useState, useEffect } from "react";

export default function Home() {
  const [objFilters, setObjFilters] = useState({
    genre: "",
    alphabetic: "",
    year: "",
    note: "",
    topSearch: false,
  });
  const [research, setResearch] = useState("");
  const [movies, setMovies] = useState(Listing());

  let newMovies = [];

  if (objFilters.genre !== "") {
    if (objFilters.topSearch) {
      const genreTopMovies = movies.filter(
        (search) =>
          search.Movie.genre.includes(objFilters.genre) &&
          search.Movie.top === objFilters.topSearch
      );

      genreTopMovies.forEach((search) => newMovies.push(search));
    } else {
      const genreMovies =
        newMovies.length > 0
          ? newMovies.filter((search) =>
              search.Movie.genre.includes(objFilters.genre)
            )
          : movies.filter((search) =>
              search.Movie.genre.includes(objFilters.genre)
            );
      genreMovies.map((search) => newMovies.push(search));
    }
  }

  if (objFilters.alphabetic === "A") {
    newMovies.length > 0
      ? newMovies.sort((a, b) => a.Movie.title.localeCompare(b.Movie.title))
      : movies.sort((a, b) => a.Movie.title.localeCompare(b.Movie.title));
  }

  if (objFilters.alphabetic === "Z") {
    newMovies.length > 0
      ? newMovies.sort((a, b) => b.Movie.title.localeCompare(a.Movie.title))
      : movies.sort((a, b) => b.Movie.title.localeCompare(a.Movie.title));
  }

  if (objFilters.year !== "") {
    if (objFilters.year === "2") {
      newMovies.length > 0
        ? newMovies.sort((a, b) => a.Movie.year - b.Movie.year)
        : movies.sort((a, b) => a.Movie.year - b.Movie.year);
    } else if (objFilters.year === "1") {
      newMovies.length > 0
        ? newMovies.sort((a, b) => b.Movie.year - a.Movie.year)
        : movies.sort((a, b) => b.Movie.year - a.Movie.year);
    }
  }

  if (objFilters.note !== "") {
    if (objFilters.note === "bad") {
      newMovies.length > 0
        ? newMovies.sort((a, b) => a.Movie.note - b.Movie.note)
        : movies.sort((a, b) => a.Movie.note - b.Movie.note);
    } else if (objFilters.note === "good") {
      newMovies.length > 0
        ? newMovies.sort((a, b) => b.Movie.note - a.Movie.note)
        : movies.sort((a, b) => b.Movie.note - a.Movie.note);
    }
  }

  if (objFilters.topSearch && objFilters.genre === "") {
    const genreMovies =
      newMovies.length > 0
        ? newMovies.filter(
            (search) => search.Movie.top === objFilters.topSearch
          )
        : movies.filter((search) => search.Movie.top === objFilters.topSearch);

    genreMovies.forEach((search) => newMovies.push(search));
  }

  useEffect(() => {
    if (research !== "") {
      const regex = new RegExp(research, "i");
      const searchMovies = movies.filter((search) =>
        regex.test(search.Movie.title)
      );
      setMovies(searchMovies);
    } else {
      setMovies(Listing());
    }
  }, [research]);

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

  return (
    <div className="flex">
      <MenuFilter
        setObjFilters={setObjFilters}
        objFilters={objFilters}
        setResearch={setResearch}
      />
      <div className="list-s grid grid-cols-7 gap-4">
        {newMovies.length === 0
          ? movies.map((elem, i) => (
              <Link key={i} href={`/info/${elem.Movie.ID}`}>
                <div className="">
                  <div>
                    {elem.Movie.images.map((image, imgIndex) => (
                      <img key={imgIndex} src={image.img} alt="img" />
                    ))}
                  </div>
                  <div className="">{elem.Movie.title}</div>
                  <div className="">{renderingStars(elem.Movie.note)}</div>
                  <div className="">{elem.Movie.top ? "✅" : null}</div>
                </div>
              </Link>
            ))
          : newMovies.map((elem, i) => (
              <Link key={i} href={`/info/${elem.Movie.ID}`}>
                <div className="">
                  <div>
                    {elem.Movie.images.map((image, imgIndex) => (
                      <img key={imgIndex} src={image.img} alt="img" />
                    ))}
                  </div>
                  <div className="">{elem.Movie.title}</div>
                  <div className="">{renderingStars(elem.Movie.note)}</div>
                  <div className="">{elem.Movie.top ? "✅" : null}</div>
                </div>
              </Link>
            ))}
      </div>
    </div>
  );
}
