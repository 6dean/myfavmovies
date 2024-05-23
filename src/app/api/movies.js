export default async function apiMovie(params) {
  const apiKey = process.env.NEXT_PUBLIC_API_KEY;
  const apiUrl = process.env.NEXT_PUBLIC_API_URL;

  if (apiKey !== undefined) {
    try {
      const response = await fetch(apiUrl, {
        method: "GET",
        headers: {
          "X-SILO-KEY": apiKey,
        },
      });
      const data = await response.json();

      if (params !== undefined) {
        let foundMovieId = null;
        for (let i = 0; i < data.length; i++) {
          if (data[i].Movie.ID === params.idmovie) {
            foundMovieId = data[i].Movie;
            break;
          }
        }
        return foundMovieId;
      } else {
        return data;
      }
    } catch (error) {
      console.error("Error fetching data:", error);
      return null;
    }
  } else {
    console.error("API_KEY is undefined");
    return null;
  }
}
