"use client";
import Link from "next/link";
import Listing from "./Listing/listing-movies";
import { useParams } from "next/navigation";

export default function Home() {
  useParams();

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
  );
}
