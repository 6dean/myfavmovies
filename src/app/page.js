"use client";
import Link from "next/link";
import Filters from "./filters/filter";
import Listing from "./listing/listing-movies";
import { useParams } from "next/navigation";
import { useState } from "react";

export default function Home() {
  useParams();

  const [genreMovie, setGenreMovie] = useState("");

  console.log("home : ", genreMovie);

  const listMovies = Listing();

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
      <Filters setGenreMovie={setGenreMovie} />
      <div className="list-s grid grid-cols-7 gap-4">
        {listMovies.map((elem, i) => (
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
