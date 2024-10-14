import axios from "axios";

export const fetchFlights = async ({
  originSkyId,
  destinationSkyId,
  originEntityId,
  destinationEntityId,
  cabinClass,
  adults,
  sortBy,
  currency,
  market,
  countryCode,
  date,
}) => {
  const options = {
    method: "GET",
    url: "https://sky-scrapper.p.rapidapi.com/api/v2/flights/searchFlightsWebComplete",
    params: {
      originSkyId,
      destinationSkyId,
      originEntityId,
      destinationEntityId,
      cabinClass,
      adults: "1",
      sortBy: "best",
      currency: "USD",
      market: "en-US",
      countryCode: "US",
      date,
    },
    headers: {
      "X-Rapidapi-Key": "78e2d5dd5fmsh862322a7d9db786p1c5549jsn66ea7f1a8e85",
      "X-Rapidapi-Host": "sky-scrapper.p.rapidapi.com",
    },
  };

  try {
    const response = await axios.request(options);
    // console.log("API response:", response.data); // Log the entire response
    console.log(response.data.data.itineraries);
    return response.data.data.itineraries; // Adjust this based on the actual structure
  } catch (error) {
    // console.error("Error fetching flight data:", error);
    throw error;
  }
};

export const fetchCandidates = async (query) => {
  const options = {
    method: "GET",
    url: "https://sky-scrapper.p.rapidapi.com/api/v1/flights/searchAirport",
    params: {
      query,
    },
    headers: {
      "x-rapidapi-key": "78e2d5dd5fmsh862322a7d9db786p1c5549jsn66ea7f1a8e85",
      "x-rapidapi-host": "sky-scrapper.p.rapidapi.com",
    },
  };
  try {
    const response = await axios.request(options);
    // console.log("Candidates:", response.data); // Log the entire response
    return response.data.data; // Adjust this based on the actual structure
  } catch (error) {
    // console.error("Error fetching flight data:", error);
    throw error;
  }
};
