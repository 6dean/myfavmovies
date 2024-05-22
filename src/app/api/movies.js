export default async function apiMovie({ setSafeLoad }) {
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
      data.length > 0 ? setSafeLoad(true) : setSafeLoad(false);
      return data;
    } catch (error) {
      console.error("Error fetching data:", error);
      return setSafeLoad(false);
    }
  } else {
    console.error("API_KEY is undefined");
    return null;
  }
}
