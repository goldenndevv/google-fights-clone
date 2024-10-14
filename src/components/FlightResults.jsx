import { KeyboardArrowDown, RefreshRounded } from "@mui/icons-material";
import { IconButton } from "@mui/material";
import moment from "moment";
import React from "react";

const FlightResults = ({ flights, isLoading }) => {
  if (isLoading) {
    return (
      <div className="flex flex-row justify-center p-8 text-center">
        <RefreshRounded
          className="animate-spin text-sky-500"
          fontSize="medium"
        />
        <span className="ml-4">Searching...</span>
      </div>
    );
  }

  if (!Array.isArray(flights) || flights.length === 0) {
    return (
      <div className="p-8 text-center">
        <span variant="subtitle1">No flights found</span>
      </div>
    );
  }

  return (
    <>
      <div className="flex justify-center p-12">
        <div className="flex flex-col content-center justify-center rounded-lg border border-gray-400">
          {flights.map((flight, idx) => (
            <div
              key={idx}
              className="flex cursor-pointer flex-row justify-between gap-2 border-b-[1px] border-gray-400 px-2 py-2 duration-300 hover:-translate-y-1 hover:shadow-xl md:gap-4 md:px-8"
            >
              <img
                alt="image"
                className="aspect-square w-1/12 object-contain"
                src="https://www.gstatic.com/flights/airline_logos/70px/multi.png"
              />
              <div className="flex w-3/12 flex-col justify-center">
                <span className="text-lg font-bold">
                  {moment(flight.legs[0].departure).format("hh:mm A")} -{" "}
                  {moment(flight.legs[0].arrival).format("hh:mm A")}{" "}
                </span>
                <span className="text-sm">
                  {flight.legs[0].origin.id} - {flight.legs[0].destination.id}
                </span>
              </div>
              <div className="flex w-2/12 flex-col justify-center">
                <span className="text-lg">
                  {`${Math.floor(
                    moment
                      .duration(flight.legs[0].durationInMinutes, "minutes")
                      .asHours(),
                  )} hr ${Math.floor(
                    moment
                      .duration(flight.legs[0].durationInMinutes, "minutes")
                      .minutes(),
                  )} min`}
                </span>
                <span className="text-sm">JFK-CDG</span>
              </div>
              <div className="flex w-1/12 flex-col justify-center">
                <span className="text-lg">{flight.legs[0].stopCount} stop</span>
              </div>
              <div className="hidden w-2/12 flex-col justify-center lg:flex">
                <span className="text-lg">{flight.legs[0].origin.name}</span>
                <span className="text-sm">
                  {flight.legs[0].origin.displayCode}
                </span>
              </div>
              <div className="hidden w-2/12 flex-col justify-center lg:flex">
                <span className="text-lg">
                  {flight.legs[0].destination.name}
                </span>
                <span className="text-sm">
                  {flight.legs[0].destination.displayCode}
                </span>
              </div>
              <div className="flex w-1/12 flex-col justify-center">
                <span className="text-lg">{flight.price.formatted}</span>
                <span className="text-sm">entire trip</span>
              </div>
              <div className="flex grow-0 flex-col justify-center">
                <IconButton>
                  <KeyboardArrowDown />
                </IconButton>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default FlightResults;
