"use client";
import { useRouter, usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { MdOutlineStar } from "react-icons/md";
import ApiMovies from "@/app/api/movies";

export default function Details({ params }) {
  const [movieInfo, setMovieInfo] = useState([]);
  const [safeLoad, setSafeLoad] = useState(null);

  const router = useRouter();
  const pathname = usePathname();

  const fetchMovies = async () => {
    try {
      const moviesData = await ApiMovies(params);
      if (moviesData) {
        setMovieInfo(moviesData);
        setSafeLoad(true);
      } else {
        setSafeLoad(false);
        setTimeout(() => {
          router.push("/");
        }, 1000);
      }
    } catch (error) {
      console.error("Error fetching movies:", error);
    }
  };

  useEffect(() => {
    fetchMovies();
    if (pathname.includes("info")) {
      localStorage.setItem("visitconfirm", true);
    }
  }, [pathname]);

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

  if (safeLoad) {
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
                      src="https://res.cloudinary.com/dlfp2xvis/image/upload/v1716033014/FILMS/1200px-Allocin_C3_A9_Logo.svg_to8ebi.png"
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
    null;
  }
}
