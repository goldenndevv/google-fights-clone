import React, { useState } from "react";
import {
  AirplanemodeActive,
  LocationOnOutlined,
  Search,
  SwapHoriz,
} from "@mui/icons-material";
import {
  Autocomplete,
  Box,
  Button,
  FormControl,
  IconButton,
  MenuItem,
  Paper,
  Select,
  TextField,
} from "@mui/material";

import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { fetchCandidates } from "../api/flights";

import moment from "moment";

// const TOCANDIDATES = [
//   {
//     skyId: "LOND",
//     entityId: "27544008",
//     presentation: {
//       title: "London",
//       suggestionTitle: "London (Any)",
//       subtitle: "United Kingdom",
//     },
//     navigation: {
//       entityId: "27544008",
//       entityType: "CITY",
//       localizedName: "London",
//       relevantFlightParams: {
//         skyId: "LOND",
//         entityId: "27544008",
//         flightPlaceType: "CITY",
//         localizedName: "London",
//       },
//       relevantHotelParams: {
//         entityId: "27544008",
//         entityType: "CITY",
//         localizedName: "London",
//       },
//     },
//   },
//   {
//     skyId: "STN",
//     entityId: "95565052",
//     presentation: {
//       title: "London Stansted",
//       suggestionTitle: "London Stansted (STN)",
//       subtitle: "United Kingdom",
//     },
//     navigation: {
//       entityId: "95565052",
//       entityType: "AIRPORT",
//       localizedName: "London Stansted",
//       relevantFlightParams: {
//         skyId: "STN",
//         entityId: "95565052",
//         flightPlaceType: "AIRPORT",
//         localizedName: "London Stansted",
//       },
//       relevantHotelParams: {
//         entityId: "27544008",
//         entityType: "CITY",
//         localizedName: "London",
//       },
//     },
//   },
//   {
//     skyId: "LHR",
//     entityId: "95565050",
//     presentation: {
//       title: "London Heathrow",
//       suggestionTitle: "London Heathrow (LHR)",
//       subtitle: "United Kingdom",
//     },
//     navigation: {
//       entityId: "95565050",
//       entityType: "AIRPORT",
//       localizedName: "London Heathrow",
//       relevantFlightParams: {
//         skyId: "LHR",
//         entityId: "95565050",
//         flightPlaceType: "AIRPORT",
//         localizedName: "London Heathrow",
//       },
//       relevantHotelParams: {
//         entityId: "27544008",
//         entityType: "CITY",
//         localizedName: "London",
//       },
//     },
//   },
//   {
//     skyId: "LGW",
//     entityId: "95565051",
//     presentation: {
//       title: "London Gatwick",
//       suggestionTitle: "London Gatwick (LGW)",
//       subtitle: "United Kingdom",
//     },
//     navigation: {
//       entityId: "95565051",
//       entityType: "AIRPORT",
//       localizedName: "London Gatwick",
//       relevantFlightParams: {
//         skyId: "LGW",
//         entityId: "95565051",
//         flightPlaceType: "AIRPORT",
//         localizedName: "London Gatwick",
//       },
//       relevantHotelParams: {
//         entityId: "27544008",
//         entityType: "CITY",
//         localizedName: "London",
//       },
//     },
//   },
//   {
//     skyId: "LTN",
//     entityId: "95565053",
//     presentation: {
//       title: "London Luton",
//       suggestionTitle: "London Luton (LTN)",
//       subtitle: "United Kingdom",
//     },
//     navigation: {
//       entityId: "95565053",
//       entityType: "AIRPORT",
//       localizedName: "London Luton",
//       relevantFlightParams: {
//         skyId: "LTN",
//         entityId: "95565053",
//         flightPlaceType: "AIRPORT",
//         localizedName: "London Luton",
//       },
//       relevantHotelParams: {
//         entityId: "27544008",
//         entityType: "CITY",
//         localizedName: "London",
//       },
//     },
//   },
//   {
//     skyId: "LCY",
//     entityId: "95565047",
//     presentation: {
//       title: "London City",
//       suggestionTitle: "London City (LCY)",
//       subtitle: "United Kingdom",
//     },
//     navigation: {
//       entityId: "95565047",
//       entityType: "AIRPORT",
//       localizedName: "London City",
//       relevantFlightParams: {
//         skyId: "LCY",
//         entityId: "95565047",
//         flightPlaceType: "AIRPORT",
//         localizedName: "London City",
//       },
//       relevantHotelParams: {
//         entityId: "27544008",
//         entityType: "CITY",
//         localizedName: "London",
//       },
//     },
//   },
//   {
//     skyId: "SEN",
//     entityId: "95565054",
//     presentation: {
//       title: "London Southend",
//       suggestionTitle: "London Southend (SEN)",
//       subtitle: "United Kingdom",
//     },
//     navigation: {
//       entityId: "95565054",
//       entityType: "AIRPORT",
//       localizedName: "London Southend",
//       relevantFlightParams: {
//         skyId: "SEN",
//         entityId: "95565054",
//         flightPlaceType: "AIRPORT",
//         localizedName: "London Southend",
//       },
//       relevantHotelParams: {
//         entityId: "27544008",
//         entityType: "CITY",
//         localizedName: "London",
//       },
//     },
//   },
//   {
//     skyId: "SNR",
//     entityId: "128667662",
//     presentation: {
//       title: "St. Nazaire Montoir",
//       suggestionTitle: "St. Nazaire Montoir (SNR)",
//       subtitle: "France",
//     },
//     navigation: {
//       entityId: "128667662",
//       entityType: "AIRPORT",
//       localizedName: "St. Nazaire Montoir",
//       relevantFlightParams: {
//         skyId: "SNR",
//         entityId: "128667662",
//         flightPlaceType: "AIRPORT",
//         localizedName: "St. Nazaire Montoir",
//       },
//       relevantHotelParams: {
//         entityId: "32051605",
//         entityType: "CITY",
//         localizedName: "St. Nazaire Montoir",
//       },
//     },
//   },
// ];

const SearchForm = ({ onSearch }) => {
  const [from, setFrom] = useState({
    skyId: null,
    entityId: null,
    description: null,
  });
  const [to, setTo] = useState({
    skyId: null,
    entityId: null,
    description: null,
  });
  const [date, setDate] = useState(null);
  const [fromCandidates, setFromCandidates] = useState([]);
  const [toCandidates, setToCandidates] = useState([]);
  const [cabinClass, setCabinClass] = useState("first");

  const refreshCandidates = async (src, query) => {
    let _query = query;
    if (query === "") {
      if (src === "from") _query = from.skyId;
      else _query = to.skyId;
    }
    if (_query === "" || _query === null) return;

    const result = await fetchCandidates(_query);
    if (src === "from") {
      setFromCandidates(result);
    } else {
      setToCandidates(result);
    }
  };

  const handleSubmit = (e) => {
    if (from.skyId === null) return;
    if (to.skyId === null) return;
    if (date === null) return;
    onSearch({
      originSkyId: from.skyId,
      destinationSkyId: to.skyId,
      originEntityId: from.entityId,
      destinationEntityId: to.entityId,
      cabinClass,
      date: moment(date).format("YYYY-MM-DD"),
    });
  };

  return (
    <div className="flex flex-col items-center">
      <Paper className="m-8 flex flex-col p-4" elevation={3}>
        <div className="flex p-2">
          <FormControl className="!mr-8">
            <Select
              variant="standard"
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={"oneway"}
              label="Age"
            >
              <MenuItem value={"roundtrip"}>RoundTrip</MenuItem>
              <MenuItem value={"oneway"}>One Way</MenuItem>
              <MenuItem value={"business"}>Multi-city</MenuItem>
            </Select>
          </FormControl>
          <FormControl>
            <Select
              variant="standard"
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={cabinClass}
              label="Age"
              onChange={(e) => setCabinClass(e.target.value)}
            >
              <MenuItem value={"economy"}>Economy</MenuItem>
              <MenuItem value={"premium economy"}>Premium economy</MenuItem>
              <MenuItem value={"business"}>Business</MenuItem>
              <MenuItem value={"first"}>First</MenuItem>
            </Select>
          </FormControl>
        </div>
        <div className="mb-4 flex flex-col p-2 lg:flex-row lg:items-stretch">
          <div className="flex flex-col items-center md:flex-row">
            <div className="mt-2 md:mr-2">
              <Autocomplete
                fullWidth
                disablePortal
                options={fromCandidates}
                sx={{ minWidth: 300 }}
                getOptionLabel={(option) => option.presentation.suggestionTitle}
                onChange={(_, value) => {
                  setFrom({
                    entityId: value && value.entityId,
                    skyId: value && value.skyId,
                    description: value && value.presentation.suggestionTitle,
                  });
                }}
                onInputChange={(e, value, reason) => {
                  if (reason === "selectOption" || reason === "removeOption")
                    return;
                  refreshCandidates("from", value);
                }}
                onOpen={(e) => refreshCandidates("from", from.skyId)}
                renderOption={(props, option) => {
                  const { key, ...optionProps } = props;
                  return (
                    <Box key={key} component="li" {...optionProps}>
                      {option.navigation.entityType === "AIRPORT" ? (
                        <AirplanemodeActive className="mr-4" />
                      ) : (
                        <LocationOnOutlined className="mr-4" />
                      )}
                      {option.presentation.suggestionTitle}
                    </Box>
                  );
                }}
                renderInput={(params) => <TextField {...params} label="From" />}
              />
            </div>
            <div className="mt-2 hidden md:mr-2 md:block">
              <IconButton className="shrink-0" size="medium" color="primary">
                <SwapHoriz />
              </IconButton>
            </div>
            <div className="mt-2">
              <Autocomplete
                fullWidth
                disablePortal
                options={toCandidates}
                sx={{ minWidth: 300 }}
                getOptionLabel={(option) => option.presentation.suggestionTitle}
                onChange={(_, value) => {
                  setTo({
                    entityId: value && value.entityId,
                    skyId: value && value.skyId,
                  });
                }}
                onInputChange={(e, value, reason) => {
                  if (reason === "selectOption" || reason === "removeOption")
                    return;
                  refreshCandidates("to", value);
                }}
                onOpen={(e) => refreshCandidates("to", to.skyId)}
                renderOption={(props, option) => {
                  const { key, ...optionProps } = props;
                  return (
                    <Box key={key} component="li" {...optionProps}>
                      {option.navigation.entityType === "AIRPORT" ? (
                        <AirplanemodeActive className="mr-4" />
                      ) : (
                        <LocationOnOutlined className="mr-4" />
                      )}
                      {option.presentation.suggestionTitle}
                    </Box>
                  );
                }}
                renderInput={(params) => <TextField {...params} label="To" />}
              />
            </div>
          </div>
          <div className="mt-2 lg:ml-4 lg:mt-0">
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DemoContainer components={["DatePicker"]}>
                <DatePicker
                  sx={{ minWidth: 300 }}
                  label="Pick date"
                  value={date}
                  onChange={(newValue) => {
                    setDate(newValue);
                  }}
                  inputFormat="MM/DD/YYYY"
                />
              </DemoContainer>
            </LocalizationProvider>
          </div>
        </div>
      </Paper>
      <div className="-mt-[50px] flex justify-center">
        <Button
          className="content-center !rounded-full !capitalize"
          startIcon={<Search />}
          variant="contained"
          onClick={handleSubmit}
        >
          Explore
        </Button>
      </div>
    </div>
  );
};

export default SearchForm;
