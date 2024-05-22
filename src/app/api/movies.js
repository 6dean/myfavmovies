export default async function apiMovie() {
  const apiKey = process.env.NEXT_PUBLIC_API_KEY;
  const apiUrl = process.env.NEXT_PUBLIC_API_URL;

  if (apiKey !== undefined) {
    try {
      const response = await fetch(apiUrl, {
        headers: {
          "X-SILO-KEY": apiKey,
        },
      });
      const data = await response.json();
      return data;
    } catch (error) {
      console.error("Error fetching data:", error);
      return null;
    }
  } else {
    console.error("API_KEY is undefined");
    return null;
  }
}
