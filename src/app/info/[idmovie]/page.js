"use client";
import { useRouter } from "next/navigation";
import { MdOutlineStar } from "react-icons/md";
import ListingMovies from "@/app/listing/listingmovies";

const moviesListing = ListingMovies();

export default function Details({ params }) {
  const router = useRouter();

  let movieInfo;
  let foundMovieName;

  for (let i = 0; i < moviesListing.length; i++) {
    if (moviesListing[i].Movie.ID === params.idmovie) {
      const foundMovieId = moviesListing[i].Movie;
      foundMovieName = true;
      movieInfo = foundMovieId;
    }
  }

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

  if (foundMovieName) {
    return (
      <main className="flex justify-center mt-5 p-10">
        <div>
          <div className="flex">
            <div>
              {movieInfo.images.map((image, imgIndex) => (
                <img key={imgIndex} src={image.img} alt="img" width={"360"} />
              ))}
            </div>
            <div className="flex flex-col p-6">
              <div className="">
                <div className="title-style">{movieInfo.title}</div>
              </div>
              <div className="">
                <div className="">
                  <div className="key-style">Genre</div>
                  <div className="info-style">{movieInfo.genre}</div>
                </div>
                <div className="">
                  <div className="key-style">Note</div>
                  <div>{renderingStars(movieInfo.note)}</div>
                </div>
                <div className="">
                  <div className="key-style">Année</div>
                  <div className="info-style">{movieInfo.year}</div>
                </div>
                <div className="">
                  <div className="key-style">Restriction</div>
                  <div className="info-style">{movieInfo.ageRestriction}</div>
                </div>
                <div className="">
                  <div className="key-style">Durée</div>
                  <div className="info-style">{movieInfo.duration}</div>
                </div>
                {movieInfo.actors ? (
                  <div className="">
                    <div className="key-style">Acteurs</div>
                    <div className="info-style">
                      {movieInfo.actors.map((actors, index) => (
                        <span key={index}>
                          {actors}
                          {index !== movieInfo.actors.length - 1 && ", "}
                        </span>
                      ))}
                    </div>
                  </div>
                ) : null}
                <div className="">
                  <div className="key-style">Pays</div>
                  <div className="info-style">
                    {movieInfo.countries.map((country, index) => (
                      <span key={index}>
                        {country}
                        {index !== movieInfo.countries.length - 1 && ", "}
                      </span>
                    ))}
                  </div>
                </div>
                <div>
                  <div className="key-style">Lien</div>
                  <a
                    href={movieInfo.link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      src="https://upload.wikimedia.org/wikipedia/fr/thumb/3/35/Allocin%C3%A9_Logo.svg/1200px-Allocin%C3%A9_Logo.svg.png"
                      alt="allocine"
                      width={100}
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="desc-style">{movieInfo.description}</div>
        </div>
      </main>
    );
  } else {
    return router.push("/");
  }
}
