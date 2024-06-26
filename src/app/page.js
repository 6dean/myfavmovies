"use client";
import Link from "next/link";
import MenuFilter from "./menufilters/menufilter";
import ApiMovies from "./api/movies";
import { useState, useEffect } from "react";
import { HiOutlineTrophy } from "react-icons/hi2";
import { MdOutlineStar } from "react-icons/md";

export default function Home() {
  const [objFilters, setObjFilters] = useState({
    genre: "",
    alphabetic: "",
    year: "",
    note: "",
    topSearch: false,
  });
  const [research, setResearch] = useState("");
  const [safeLoad, setSafeLoad] = useState(null);
  const [isVisible, setIsVisible] = useState(false);
  const [alreadyVisit, setAlreadyvisit] = useState(false);
  const [movies, setMovies] = useState([]);

  let newMovies = [];
  let alertWillbeTrue = false;

  const fetchMovies = async () => {
    try {
      const moviesData = await ApiMovies();
      if (moviesData) {
        setMovies(moviesData);
        setSafeLoad(true);
      } else {
        setSafeLoad(false);
      }
    } catch (error) {
      console.error("Error fetching movies:", error);
    }
  };

  if (objFilters.genre !== "") {
    if (objFilters.topSearch) {
      const genreTopMovies = movies.filter(
        (search) =>
          search.Movie.genre.includes(objFilters.genre) &&
          search.Movie.top === objFilters.topSearch
      );

      genreTopMovies.forEach((search) => newMovies.push(search));

      if (newMovies.length === 0) {
        alertWillbeTrue = true;
      }
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
      searchMovies.length === 0 ? fetchMovies() : null;
    } else {
      fetchMovies();

      const timeout = setTimeout(() => {
        setIsVisible(true);
      }, 400);

      return () => clearTimeout(timeout);
    }

    if (localStorage.getItem("visitconfirm") === "true") {
      setAlreadyvisit(true);
    }
  }, [research]);

  const renderingStars = (item) => {
    let stars = [];
    for (let index = 1; index <= 5; index++) {
      if (index <= item) {
        stars.push(<MdOutlineStar key={index} color="yellow" />);
      } else {
        stars.push(<MdOutlineStar key={index} color="white" opacity={"30%"} />);
      }
    }
    return (
      <div style={{ display: "flex", flexDirection: "row" }}>
        {[...Array(5)].map((_, index) => (
          <MdOutlineStar key={index} color={index < item ? "yellow" : "grey"} />
        ))}
      </div>
    );
  };

  useEffect(() => {
    if (safeLoad === false) {
      setTimeout(() => {
        alert`ALERT API ERROR - LOAD MOVIES IMPOSSIBLE`;
      }, 2000);
    }
  }, [safeLoad]);

  return (
    <div className="">
      <MenuFilter
        setObjFilters={setObjFilters}
        objFilters={objFilters}
        setResearch={setResearch}
        alertWillbeTrue={alertWillbeTrue}
      />
      {safeLoad ? (
        <div className="list-s grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6">
          {newMovies.length === 0
            ? movies.map((elem, i) => (
                <Link key={i} href={`/info/${elem.Movie.ID}`}>
                  <div
                    className={`${
                      alreadyVisit
                        ? `movieEffectSeen ${isVisible ? "visible" : ""}`
                        : `movieEffect ${isVisible ? "visible" : ""}`
                    }`}
                    style={
                      alreadyVisit ? null : { transitionDelay: `${i * 0.3}s` }
                    }
                  >
                    <div>
                      {elem.Movie.images.map((image, imgIndex) => (
                        <img
                          key={imgIndex}
                          className="imgMovies"
                          src={image.img}
                          alt="img"
                        />
                      ))}
                    </div>
                    <div className="p-1">
                      <div className="flex justify-between items-center">
                        {elem.Movie.title.length > 28 ? (
                          <div className="scrolling-container">
                            <div className="scrolling-content">
                              <div className="movieTitle">
                                {elem.Movie.title}
                              </div>{" "}
                            </div>
                          </div>
                        ) : (
                          <div className="movieTitle">{elem.Movie.title}</div>
                        )}
                        <div className="movieYear">{elem.Movie.year}</div>
                      </div>
                      <div className="stars-style">
                        <div>{renderingStars(elem.Movie.note)}</div>
                        <div className="">
                          {elem.Movie.top ? (
                            <HiOutlineTrophy color="orange" size={20} />
                          ) : null}
                        </div>{" "}
                      </div>
                    </div>
                  </div>
                </Link>
              ))
            : newMovies.map((elem, i) => (
                <Link key={i} href={`/info/${elem.Movie.ID}`}>
                  <div
                    className={`movieEffect ${isVisible ? "visible" : ""}`}
                    style={{ transitionDelay: `${i * 0.3}s` }}
                  >
                    <div>
                      {elem.Movie.images.map((image, imgIndex) => (
                        <img
                          key={imgIndex}
                          className="imgMovies"
                          src={image.img}
                          alt="img"
                        />
                      ))}
                    </div>
                    <div className="p-1">
                      <div className="flex justify-between items-center">
                        {elem.Movie.title.length > 25 ? (
                          <div className="scrolling-container">
                            <div className="scrolling-content">
                              <div className="movieTitle">
                                {elem.Movie.title}
                              </div>{" "}
                            </div>
                          </div>
                        ) : (
                          <div className="movieTitle">{elem.Movie.title}</div>
                        )}
                        <div className="movieYear">{elem.Movie.year}</div>
                      </div>
                      <div className="stars-style">
                        <div>{renderingStars(elem.Movie.note)}</div>
                        <div className="">
                          {elem.Movie.top ? (
                            <HiOutlineTrophy color="orange" size={20} />
                          ) : null}
                        </div>{" "}
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
        </div>
      ) : (
        <div></div>
      )}
    </div>
  );
}
