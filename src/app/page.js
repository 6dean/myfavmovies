"use client";
import Link from "next/link";
import MenuFilter from "./menufilters/menufilter";
import Listing from "./listing/listing-movies";
import { useState, useEffect } from "react";

export default function Home() {
  const [objFilters, setObjFilters] = useState({
    alphabetic: "",
    genre: "",
    top: false,
  });
  const [movies, setMovies] = useState(Listing());

  return (
    <div className="flex">
      <MenuFilter setObjFilters={setObjFilters} objFilters={objFilters} />
      <div className="list-s grid grid-cols-7 gap-4">
        {movies.map((elem, i) => (
          <Link key={i} href={`/info/${elem.Movie.ID}`}>
            <div className="">
              <div>
                {elem.Movie.images.map((image, imgIndex) => (
                  <img key={imgIndex} src={image.img} alt="img" />
                ))}
              </div>
              <div className="">{elem.Movie.title}</div>
              {/* Inclure la logique pour afficher les étoiles */}
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
