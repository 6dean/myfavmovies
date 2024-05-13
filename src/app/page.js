import Image from "next/image";
import Listing from "./Listing/listing-movies";

export default function Home() {
  const listMovies = Listing();

  return (
    <div>
      {listMovies.map((elem, i) => (
        <div key={i}>
          <div>{elem.Movie.title}</div>
          <div>{elem.Movie.year}</div>
          <div>
            {elem.Movie.images.map((image, imgIndex) => (
              <img key={imgIndex} src={image.img} alt="img" width={180} />
            ))}{" "}
          </div>
        </div>
      ))}
    </div>
  );
}
