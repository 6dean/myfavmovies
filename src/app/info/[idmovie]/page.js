"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import ListingMovies from "@/app/Listing/listing-movies";

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

  if (foundMovieName) {
    return (
      <main>
        <div>{movieInfo.title}</div>
        <div>{movieInfo.genre}</div>
        <div>{movieInfo.description}</div>
        <div>{movieInfo.note}</div>
        <div>{movieInfo.year}</div>
        <div>{movieInfo.top ? "SUPER" : null}</div>
        <div>{movieInfo.link}</div>
      </main>
    );
  } else {
    return router.push("/");
  }
}
