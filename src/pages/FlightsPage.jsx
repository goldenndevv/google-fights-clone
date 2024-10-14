import React, { useState } from "react";
import { fetchFlights } from "../api/flights";
import SearchForm from "../components/SearchForm";
import FlightResults from "../components/FlightResults";
import { Typography } from "@mui/material";

// const results = [
//   {
//     id: "13554-2410131535--32480-1-11442-2410140001",
//     price: {
//       raw: 13748.11,
//       formatted: "$13,749",
//       pricingOptionId: "HBHqR5s1xbBZ",
//     },
//     legs: [
//       {
//         id: "13554-2410131535--32480-1-11442-2410140001",
//         origin: {
//           id: "LHR",
//           entityId: "95565050",
//           name: "London Heathrow",
//           displayCode: "LHR",
//           city: "London",
//           country: "United Kingdom",
//           isHighlighted: false,
//         },
//         destination: {
//           id: "EWR",
//           entityId: "95565059",
//           name: "New York Newark",
//           displayCode: "EWR",
//           city: "New York",
//           country: "United States",
//           isHighlighted: false,
//         },
//         durationInMinutes: 806,
//         stopCount: 1,
//         isSmallestStops: false,
//         departure: "2024-10-13T15:35:00",
//         arrival: "2024-10-14T00:01:00",
//         timeDeltaInDays: 1,
//         carriers: {
//           marketing: [
//             {
//               id: -32480,
//               logoUrl:
//                 "https://logos.skyscnr.com/images/airlines/favicon/BA.png",
//               name: "British Airways",
//             },
//           ],
//           operating: [
//             {
//               id: -32573,
//               logoUrl:
//                 "https://logos.skyscnr.com/images/airlines/favicon/AA.png",
//               name: "American Airlines",
//             },
//           ],
//           operationType: "partially_operated",
//         },
//         segments: [
//           {
//             id: "13554-15062-2410131535-2410131815--32480",
//             origin: {
//               flightPlaceId: "LHR",
//               displayCode: "LHR",
//               parent: {
//                 flightPlaceId: "LOND",
//                 displayCode: "LON",
//                 name: "London",
//                 type: "City",
//               },
//               name: "London Heathrow",
//               type: "Airport",
//               country: "United Kingdom",
//             },
//             destination: {
//               flightPlaceId: "ORD",
//               displayCode: "ORD",
//               parent: {
//                 flightPlaceId: "CHIA",
//                 displayCode: "CHI",
//                 name: "Chicago",
//                 type: "City",
//               },
//               name: "Chicago O'Hare International",
//               type: "Airport",
//               country: "United States",
//             },
//             departure: "2024-10-13T15:35:00",
//             arrival: "2024-10-13T18:15:00",
//             durationInMinutes: 520,
//             flightNumber: "297",
//             marketingCarrier: {
//               id: -32480,
//               name: "British Airways",
//               alternateId: "BA",
//               allianceId: -32000,
//               displayCode: "BA",
//             },
//             operatingCarrier: {
//               id: -32480,
//               name: "British Airways",
//               alternateId: "BA",
//               allianceId: -32000,
//               displayCode: "BA",
//             },
//           },
//           {
//             id: "15062-11442-2410132040-2410140001--32480",
//             origin: {
//               flightPlaceId: "ORD",
//               displayCode: "ORD",
//               parent: {
//                 flightPlaceId: "CHIA",
//                 displayCode: "CHI",
//                 name: "Chicago",
//                 type: "City",
//               },
//               name: "Chicago O'Hare International",
//               type: "Airport",
//               country: "United States",
//             },
//             destination: {
//               flightPlaceId: "EWR",
//               displayCode: "EWR",
//               parent: {
//                 flightPlaceId: "NYCA",
//                 displayCode: "NYC",
//                 name: "New York",
//                 type: "City",
//               },
//               name: "New York Newark",
//               type: "Airport",
//               country: "United States",
//             },
//             departure: "2024-10-13T20:40:00",
//             arrival: "2024-10-14T00:01:00",
//             durationInMinutes: 141,
//             flightNumber: "4904",
//             marketingCarrier: {
//               id: -32480,
//               name: "British Airways",
//               alternateId: "BA",
//               allianceId: -32000,
//               displayCode: "BA",
//             },
//             operatingCarrier: {
//               id: -32573,
//               name: "American Airlines",
//               alternateId: "AA",
//               allianceId: -32000,
//               displayCode: "AA",
//             },
//           },
//         ],
//       },
//     ],
//     isSelfTransfer: false,
//     isProtectedSelfTransfer: false,
//     farePolicy: {
//       isChangeAllowed: false,
//       isPartiallyChangeable: false,
//       isCancellationAllowed: false,
//       isPartiallyRefundable: false,
//     },
//     fareAttributes: {},
//     tags: ["shortest"],
//     isMashUp: false,
//     hasFlexibleOptions: false,
//     score: 0.999,
//     pricingOptions: [
//       {
//         agentIds: ["ba__"],
//         price: {
//           updateStatus: "current",
//           amount: 13748.11,
//         },
//         items: [
//           {
//             price: {
//               updateStatus: "current",
//               amount: 13748.11,
//             },
//             segmentIds: [
//               "13554-15062-2410131535-2410131815--32480",
//               "15062-11442-2410132040-2410140001--32480",
//             ],
//             bookingProposition: "PBOOK",
//             agentId: "ba__",
//             url: "/transport_deeplink/4.0/US/en-US/USD/ba__/1/13554.11442.2024-10-13/air/airli/flights?itinerary=flight|-32480|297|13554|2024-10-13T15:35|15062|2024-10-13T18:15|520|F1N0C9S0|F|First;flight|-32480|4904|15062|2024-10-13T20:40|11442|2024-10-14T00:01|141|F1N0C9S0|J|Business&carriers=-32480&operators=-32480;-32573&passengers=1&channel=website&cabin_class=first&fps_session_id=fc939195-260a-4138-8503-0f6e1ddc479f&ticket_price=13748.11&is_npt=false&is_multipart=false&client_id=skyscanner_website&request_id=24d14144-e16e-ebc3-3df4-d860f2d7d551&q_ids=H4sIAAAAAAAA_-OS4WJJSoyPF2LmuKUixczRo6vQMHvNDjYjJgVGC2YAtKhtVh4AAAA|-5896319068832590799|2&q_sources=JACQUARD&commercial_filters=false&q_datetime_utc=2024-10-13T09:29:24&pqid=false",
//           },
//         ],
//         pricingOptionId: "HBHqR5s1xbBZ",
//       },
//       {
//         agentIds: ["bcom"],
//         price: {
//           updateStatus: "current",
//           amount: 13752.61,
//         },
//         items: [
//           {
//             price: {
//               updateStatus: "current",
//               amount: 13752.61,
//             },
//             segmentIds: [
//               "13554-15062-2410131535-2410131815--32480",
//               "15062-11442-2410132040-2410140001--32480",
//             ],
//             bookingProposition: "PBOOK",
//             agentId: "bcom",
//             url: "/transport_deeplink/4.0/US/en-US/USD/bcom/1/13554.11442.2024-10-13/air/trava/flights?itinerary=flight|-32480|297|13554|2024-10-13T15:35|15062|2024-10-13T18:15|520|-|-|-;flight|-32480|4904|15062|2024-10-13T20:40|11442|2024-10-14T00:01|141|-|-|-&carriers=-32480&operators=-32480;-32573&passengers=1&channel=website&cabin_class=first&fps_session_id=fc939195-260a-4138-8503-0f6e1ddc479f&ticket_price=13752.61&is_npt=false&is_multipart=false&client_id=skyscanner_website&request_id=24d14144-e16e-ebc3-3df4-d860f2d7d551&q_ids=H4sIAAAAAAAA_-NS5GJJSs7PFWLmuKUixczRo6vQMHvNDjYjJgVGC-Yq5tBgFwCplYMNIwAAAA|-2975918449545514860|2&q_sources=JACQUARD&commercial_filters=false&q_datetime_utc=2024-10-13T09:29:29&pqid=true",
//           },
//         ],
//         pricingOptionId: "fT3f7fkTWhZ4",
//       },
//       {
//         agentIds: ["edus"],
//         price: {
//           updateStatus: "current",
//           amount: 13771.97,
//         },
//         items: [
//           {
//             price: {
//               updateStatus: "current",
//               amount: 13771.97,
//             },
//             segmentIds: [
//               "13554-15062-2410131535-2410131815--32480",
//               "15062-11442-2410132040-2410140001--32480",
//             ],
//             bookingProposition: "PBOOK",
//             agentId: "edus",
//             url: "/transport_deeplink/4.0/US/en-US/USD/edus/1/13554.11442.2024-10-13/air/trava/flights?itinerary=flight|-32480|297|13554|2024-10-13T15:35|15062|2024-10-13T18:15|520|-|-|-;flight|-32480|4904|15062|2024-10-13T20:40|11442|2024-10-14T00:01|141|-|-|-&carriers=-32480&operators=-32480;-32573&passengers=1&channel=website&cabin_class=first&fps_session_id=fc939195-260a-4138-8503-0f6e1ddc479f&ticket_price=13771.97&is_npt=false&is_multipart=false&client_id=skyscanner_website&request_id=24d14144-e16e-ebc3-3df4-d860f2d7d551&q_ids=H4sIAAAAAAAA_-OS4WJJTSktFmLmuKUixczRo6vQMHvNDjYjJgVGC2YAgel4Jx4AAAA|-4175261953166636812|2&q_sources=JACQUARD&commercial_filters=false&q_datetime_utc=2024-10-13T09:29:26&pqid=true",
//           },
//         ],
//         pricingOptionId: "RcRwZuZe3rqt",
//       },
//       {
//         agentIds: ["arus"],
//         price: {
//           updateStatus: "current",
//           amount: 14031.99,
//         },
//         items: [
//           {
//             price: {
//               updateStatus: "current",
//               amount: 14031.99,
//             },
//             segmentIds: [
//               "13554-15062-2410131535-2410131815--32480",
//               "15062-11442-2410132040-2410140001--32480",
//             ],
//             bookingProposition: "PBOOK",
//             agentId: "arus",
//             url: "/transport_deeplink/4.0/US/en-US/USD/arus/1/13554.11442.2024-10-13/air/trava/flights?itinerary=flight|-32480|297|13554|2024-10-13T15:35|15062|2024-10-13T18:15|520|-|-|-;flight|-32480|4904|15062|2024-10-13T20:40|11442|2024-10-14T00:01|141|-|-|-&carriers=-32480&operators=-32480;-32573&passengers=1&channel=website&cabin_class=first&fps_session_id=fc939195-260a-4138-8503-0f6e1ddc479f&ticket_price=14031.99&is_npt=false&is_multipart=false&client_id=skyscanner_website&request_id=24d14144-e16e-ebc3-3df4-d860f2d7d551&q_ids=H4sIAAAAAAAA_-NS5GJJLCotFmLmuKUixczRo6vQMHvNDjYjJgVGC-Yq5tBgFwBJvnCvIwAAAA|-2975918449545514860|2&q_sources=JACQUARD&commercial_filters=false&q_datetime_utc=2024-10-13T09:29:29&pqid=true",
//           },
//         ],
//         pricingOptionId: "FLT7uSd_IM6d",
//       },
//       {
//         agentIds: ["fnus"],
//         price: {
//           updateStatus: "current",
//           amount: 14033.99,
//         },
//         items: [
//           {
//             price: {
//               updateStatus: "current",
//               amount: 14033.99,
//             },
//             segmentIds: [
//               "13554-15062-2410131535-2410131815--32480",
//               "15062-11442-2410132040-2410140001--32480",
//             ],
//             bookingProposition: "PBOOK",
//             agentId: "fnus",
//             url: "/transport_deeplink/4.0/US/en-US/USD/fnus/1/13554.11442.2024-10-13/air/trava/flights?itinerary=flight|-32480|297|13554|2024-10-13T15:35|15062|2024-10-13T18:15|520|-|-|-;flight|-32480|4904|15062|2024-10-13T20:40|11442|2024-10-14T00:01|141|-|-|-&carriers=-32480&operators=-32480;-32573&passengers=1&channel=website&cabin_class=first&fps_session_id=fc939195-260a-4138-8503-0f6e1ddc479f&ticket_price=14033.99&is_npt=false&is_multipart=false&client_id=skyscanner_website&request_id=24d14144-e16e-ebc3-3df4-d860f2d7d551&q_ids=H4sIAAAAAAAA_-NS5GJJyystFmLmuKUixczRo6vQMHvNDjYjJgVGC-Yq5tBgFwBdit4-IwAAAA|-2975918449545514860|2&q_sources=JACQUARD&commercial_filters=false&q_datetime_utc=2024-10-13T09:29:29&pqid=true",
//           },
//         ],
//         pricingOptionId: "N1pncWcKM7h0",
//       },
//       {
//         agentIds: ["gtus"],
//         price: {
//           updateStatus: "current",
//           amount: 14034.99,
//         },
//         items: [
//           {
//             price: {
//               updateStatus: "current",
//               amount: 14034.99,
//             },
//             segmentIds: [
//               "13554-15062-2410131535-2410131815--32480",
//               "15062-11442-2410132040-2410140001--32480",
//             ],
//             bookingProposition: "PBOOK",
//             agentId: "gtus",
//             url: "/transport_deeplink/4.0/US/en-US/USD/gtus/1/13554.11442.2024-10-13/air/trava/flights?itinerary=flight|-32480|297|13554|2024-10-13T15:35|15062|2024-10-13T18:15|520|-|-|-;flight|-32480|4904|15062|2024-10-13T20:40|11442|2024-10-14T00:01|141|-|-|-&carriers=-32480&operators=-32480;-32573&passengers=1&channel=website&cabin_class=first&fps_session_id=fc939195-260a-4138-8503-0f6e1ddc479f&ticket_price=14034.99&is_npt=false&is_multipart=false&client_id=skyscanner_website&request_id=24d14144-e16e-ebc3-3df4-d860f2d7d551&q_ids=H4sIAAAAAAAA_-NS5GJJLyktFmLmuKUixczRo6vQMHvNDjYjJgVGC-Yq5tBgFwCfhmIAIwAAAA|-2975918449545514860|2&q_sources=JACQUARD&commercial_filters=false&q_datetime_utc=2024-10-13T09:29:28&pqid=true",
//           },
//         ],
//         pricingOptionId: "pN2uISO4xCCi",
//       },
//     ],
//   },
//   {
//     id: "13554-2410131535--32573-1-11442-2410140001",
//     price: {
//       raw: 13752.61,
//       formatted: "$13,753",
//       pricingOptionId: "iE_hvVpN6Iib",
//     },
//     legs: [
//       {
//         id: "13554-2410131535--32573-1-11442-2410140001",
//         origin: {
//           id: "LHR",
//           entityId: "95565050",
//           name: "London Heathrow",
//           displayCode: "LHR",
//           city: "London",
//           country: "United Kingdom",
//           isHighlighted: false,
//         },
//         destination: {
//           id: "EWR",
//           entityId: "95565059",
//           name: "New York Newark",
//           displayCode: "EWR",
//           city: "New York",
//           country: "United States",
//           isHighlighted: false,
//         },
//         durationInMinutes: 806,
//         stopCount: 1,
//         isSmallestStops: false,
//         departure: "2024-10-13T15:35:00",
//         arrival: "2024-10-14T00:01:00",
//         timeDeltaInDays: 1,
//         carriers: {
//           marketing: [
//             {
//               id: -32573,
//               logoUrl:
//                 "https://logos.skyscnr.com/images/airlines/favicon/AA.png",
//               name: "American Airlines",
//             },
//           ],
//           operating: [
//             {
//               id: -32480,
//               logoUrl:
//                 "https://logos.skyscnr.com/images/airlines/favicon/BA.png",
//               name: "British Airways",
//             },
//           ],
//           operationType: "partially_operated",
//         },
//         segments: [
//           {
//             id: "13554-15062-2410131535-2410131815--32573",
//             origin: {
//               flightPlaceId: "LHR",
//               displayCode: "LHR",
//               parent: {
//                 flightPlaceId: "LOND",
//                 displayCode: "LON",
//                 name: "London",
//                 type: "City",
//               },
//               name: "London Heathrow",
//               type: "Airport",
//               country: "United Kingdom",
//             },
//             destination: {
//               flightPlaceId: "ORD",
//               displayCode: "ORD",
//               parent: {
//                 flightPlaceId: "CHIA",
//                 displayCode: "CHI",
//                 name: "Chicago",
//                 type: "City",
//               },
//               name: "Chicago O'Hare International",
//               type: "Airport",
//               country: "United States",
//             },
//             departure: "2024-10-13T15:35:00",
//             arrival: "2024-10-13T18:15:00",
//             durationInMinutes: 520,
//             flightNumber: "7006",
//             marketingCarrier: {
//               id: -32573,
//               name: "American Airlines",
//               alternateId: "AA",
//               allianceId: -32000,
//               displayCode: "AA",
//             },
//             operatingCarrier: {
//               id: -32480,
//               name: "British Airways",
//               alternateId: "BA",
//               allianceId: -32000,
//               displayCode: "BA",
//             },
//           },
//           {
//             id: "15062-11442-2410132040-2410140001--32573",
//             origin: {
//               flightPlaceId: "ORD",
//               displayCode: "ORD",
//               parent: {
//                 flightPlaceId: "CHIA",
//                 displayCode: "CHI",
//                 name: "Chicago",
//                 type: "City",
//               },
//               name: "Chicago O'Hare International",
//               type: "Airport",
//               country: "United States",
//             },
//             destination: {
//               flightPlaceId: "EWR",
//               displayCode: "EWR",
//               parent: {
//                 flightPlaceId: "NYCA",
//                 displayCode: "NYC",
//                 name: "New York",
//                 type: "City",
//               },
//               name: "New York Newark",
//               type: "Airport",
//               country: "United States",
//             },
//             departure: "2024-10-13T20:40:00",
//             arrival: "2024-10-14T00:01:00",
//             durationInMinutes: 141,
//             flightNumber: "2918",
//             marketingCarrier: {
//               id: -32573,
//               name: "American Airlines",
//               alternateId: "AA",
//               allianceId: -32000,
//               displayCode: "AA",
//             },
//             operatingCarrier: {
//               id: -32573,
//               name: "American Airlines",
//               alternateId: "AA",
//               allianceId: -32000,
//               displayCode: "AA",
//             },
//           },
//         ],
//       },
//     ],
//     isSelfTransfer: false,
//     isProtectedSelfTransfer: false,
//     farePolicy: {
//       isChangeAllowed: false,
//       isPartiallyChangeable: false,
//       isCancellationAllowed: false,
//       isPartiallyRefundable: false,
//     },
//     fareAttributes: {},
//     tags: ["second_shortest"],
//     isMashUp: false,
//     hasFlexibleOptions: false,
//     score: 0.788341,
//     pricingOptions: [
//       {
//         agentIds: ["aaus"],
//         price: {
//           updateStatus: "current",
//           amount: 13752.61,
//         },
//         items: [
//           {
//             price: {
//               updateStatus: "current",
//               amount: 13752.61,
//             },
//             segmentIds: [
//               "13554-15062-2410131535-2410131815--32573",
//               "15062-11442-2410132040-2410140001--32573",
//             ],
//             bookingProposition: "PBOOK",
//             agentId: "aaus",
//             url: "/transport_deeplink/4.0/US/en-US/USD/aaus/1/13554.11442.2024-10-13/air/airli/flights?itinerary=flight|-32573|7006|13554|2024-10-13T15:35|15062|2024-10-13T18:15|520|F1N0C9S0|F|FLAGSHIP+FIRST+FLEXIBLE;flight|-32573|2918|15062|2024-10-13T20:40|11442|2024-10-14T00:01|141|F1N0C9S0|J|FLAGSHIP+FIRST+FLEXIBLE&carriers=-32573&operators=-32480;-32573&passengers=1&channel=website&cabin_class=first&fps_session_id=fc939195-260a-4138-8503-0f6e1ddc479f&ticket_price=13752.61&is_npt=false&is_multipart=false&client_id=skyscanner_website&request_id=24d14144-e16e-ebc3-3df4-d860f2d7d551&q_ids=H4sIAAAAAAAA_-OS4WJJTCwtFmLmuKUixczRo6vQMHvNDjYjJgVGC2YAqqXaUx4AAAA|-4108072245083829926|2&q_sources=JACQUARD&commercial_filters=false&q_datetime_utc=2024-10-13T09:29:24&pqid=false",
//           },
//         ],
//         pricingOptionId: "iE_hvVpN6Iib",
//       },
//     ],
//   },
//   {
//     id: "13542-2410131845--31799-1-12712-2410141245",
//     price: {
//       raw: 10505.99,
//       formatted: "$10,506",
//       pricingOptionId: "R6aVOy-Txg4V",
//     },
//     legs: [
//       {
//         id: "13542-2410131845--31799-1-12712-2410141245",
//         origin: {
//           id: "LGW",
//           entityId: "95565051",
//           name: "London Gatwick",
//           displayCode: "LGW",
//           city: "London",
//           country: "United Kingdom",
//           isHighlighted: false,
//         },
//         destination: {
//           id: "JFK",
//           entityId: "95565058",
//           name: "New York John F. Kennedy",
//           displayCode: "JFK",
//           city: "New York",
//           country: "United States",
//           isHighlighted: false,
//         },
//         durationInMinutes: 1380,
//         stopCount: 1,
//         isSmallestStops: false,
//         departure: "2024-10-13T18:45:00",
//         arrival: "2024-10-14T12:45:00",
//         timeDeltaInDays: 1,
//         carriers: {
//           marketing: [
//             {
//               id: -31799,
//               logoUrl:
//                 "https://logos.skyscnr.com/images/airlines/favicon/LX.png",
//               name: "SWISS",
//             },
//           ],
//           operating: [
//             {
//               id: -32238,
//               logoUrl:
//                 "https://logos.skyscnr.com/images/airlines/favicon/2L.png",
//               name: "helvetic",
//             },
//           ],
//           operationType: "partially_operated",
//         },
//         segments: [
//           {
//             id: "13542-18563-2410131845-2410132125--31799",
//             origin: {
//               flightPlaceId: "LGW",
//               displayCode: "LGW",
//               parent: {
//                 flightPlaceId: "LOND",
//                 displayCode: "LON",
//                 name: "London",
//                 type: "City",
//               },
//               name: "London Gatwick",
//               type: "Airport",
//               country: "United Kingdom",
//             },
//             destination: {
//               flightPlaceId: "ZRH",
//               displayCode: "ZRH",
//               parent: {
//                 flightPlaceId: "ZURI",
//                 displayCode: "ZRH",
//                 name: "Zurich",
//                 type: "City",
//               },
//               name: "Zurich",
//               type: "Airport",
//               country: "Switzerland",
//             },
//             departure: "2024-10-13T18:45:00",
//             arrival: "2024-10-13T21:25:00",
//             durationInMinutes: 100,
//             flightNumber: "433",
//             marketingCarrier: {
//               id: -31799,
//               name: "SWISS",
//               alternateId: "LX",
//               allianceId: -31999,
//               displayCode: "LX",
//             },
//             operatingCarrier: {
//               id: -32238,
//               name: "helvetic",
//               alternateId: "2L",
//               allianceId: 0,
//               displayCode: "2L",
//             },
//           },
//           {
//             id: "18563-12712-2410141000-2410141245--31799",
//             origin: {
//               flightPlaceId: "ZRH",
//               displayCode: "ZRH",
//               parent: {
//                 flightPlaceId: "ZURI",
//                 displayCode: "ZRH",
//                 name: "Zurich",
//                 type: "City",
//               },
//               name: "Zurich",
//               type: "Airport",
//               country: "Switzerland",
//             },
//             destination: {
//               flightPlaceId: "JFK",
//               displayCode: "JFK",
//               parent: {
//                 flightPlaceId: "NYCA",
//                 displayCode: "NYC",
//                 name: "New York",
//                 type: "City",
//               },
//               name: "New York John F. Kennedy",
//               type: "Airport",
//               country: "United States",
//             },
//             departure: "2024-10-14T10:00:00",
//             arrival: "2024-10-14T12:45:00",
//             durationInMinutes: 525,
//             flightNumber: "16",
//             marketingCarrier: {
//               id: -31799,
//               name: "SWISS",
//               alternateId: "LX",
//               allianceId: -31999,
//               displayCode: "LX",
//             },
//             operatingCarrier: {
//               id: -31799,
//               name: "SWISS",
//               alternateId: "LX",
//               allianceId: -31999,
//               displayCode: "LX",
//             },
//           },
//         ],
//       },
//     ],
//     isSelfTransfer: false,
//     isProtectedSelfTransfer: false,
//     farePolicy: {
//       isChangeAllowed: false,
//       isPartiallyChangeable: false,
//       isCancellationAllowed: false,
//       isPartiallyRefundable: false,
//     },
//     fareAttributes: {},
//     tags: ["cheapest"],
//     isMashUp: false,
//     hasFlexibleOptions: false,
//     score: 0.654212,
//     pricingOptions: [
//       {
//         agentIds: ["bcom"],
//         price: {
//           updateStatus: "current",
//           amount: 10505.99,
//         },
//         items: [
//           {
//             price: {
//               updateStatus: "current",
//               amount: 10505.99,
//             },
//             segmentIds: [
//               "13542-18563-2410131845-2410132125--31799",
//               "18563-12712-2410141000-2410141245--31799",
//             ],
//             bookingProposition: "PBOOK",
//             agentId: "bcom",
//             url: "/transport_deeplink/4.0/US/en-US/USD/bcom/1/13542.12712.2024-10-13/air/trava/flights?itinerary=flight|-31799|433|13542|2024-10-13T18:45|18563|2024-10-13T21:25|100|-|-|-;flight|-31799|16|18563|2024-10-14T10:00|12712|2024-10-14T12:45|525|-|-|-&carriers=-31799&operators=-32238;-31799&passengers=1&channel=website&cabin_class=first&fps_session_id=fc939195-260a-4138-8503-0f6e1ddc479f&ticket_price=10505.99&is_npt=false&is_multipart=false&client_id=skyscanner_website&request_id=24d14144-e16e-ebc3-3df4-d860f2d7d551&q_ids=H4sIAAAAAAAA_-NS5GJJSs7PFWLmuKUixczRo6vQMHvNDjYjJgVGC-Yq5tBgFwCplYMNIwAAAA|-779642780286823466|2&q_sources=JACQUARD&commercial_filters=false&q_datetime_utc=2024-10-13T09:29:29&pqid=true",
//           },
//         ],
//         pricingOptionId: "R6aVOy-Txg4V",
//       },
//       {
//         agentIds: ["swis"],
//         price: {
//           updateStatus: "current",
//           amount: 10508.61,
//         },
//         items: [
//           {
//             price: {
//               updateStatus: "current",
//               amount: 10508.61,
//             },
//             segmentIds: [
//               "13542-18563-2410131845-2410132125--31799",
//               "18563-12712-2410141000-2410141245--31799",
//             ],
//             bookingProposition: "PBOOK",
//             agentId: "swis",
//             url: "/transport_deeplink/4.0/US/en-US/USD/swis/1/13542.12712.2024-10-13/air/airli/flights?itinerary=flight|-31799|433|13542|2024-10-13T18:45|18563|2024-10-13T21:25|100|FNCBOWW|Y|FIRST+SAVER;flight|-31799|16|18563|2024-10-14T10:00|12712|2024-10-14T12:45|525|FNCBOWW|F|FIRST+SAVER&carriers=-31799&operators=-32238;-31799&passengers=1&channel=website&cabin_class=first&fps_session_id=fc939195-260a-4138-8503-0f6e1ddc479f&ticket_price=10508.61&is_npt=false&is_multipart=false&client_id=skyscanner_website&request_id=24d14144-e16e-ebc3-3df4-d860f2d7d551&q_ids=H4sIAAAAAAAA_-OS4WIpLs8sFmLmuKUixczRo6vQMHvNDjYjJgVGC2YAqSNuGx4AAAA|-662266065306700628|2&q_sources=JACQUARD&commercial_filters=false&q_datetime_utc=2024-10-13T09:29:24&pqid=false",
//           },
//         ],
//         pricingOptionId: "y-xBqD5dSYbE",
//       },
//       {
//         agentIds: ["orbz"],
//         price: {
//           updateStatus: "current",
//           amount: 10528.21,
//         },
//         items: [
//           {
//             price: {
//               updateStatus: "current",
//               amount: 10528.21,
//             },
//             segmentIds: [
//               "13542-18563-2410131845-2410132125--31799",
//               "18563-12712-2410141000-2410141245--31799",
//             ],
//             bookingProposition: "PBOOK",
//             agentId: "orbz",
//             url: "/transport_deeplink/4.0/US/en-US/USD/orbz/1/13542.12712.2024-10-13/air/trava/flights?itinerary=flight|-31799|433|13542|2024-10-13T18:45|18563|2024-10-13T21:25|100|FNCBOWW|J|FIRST+SAVER;flight|-31799|16|18563|2024-10-14T10:00|12712|2024-10-14T12:45|525|FNCBOWW|F|FIRST+SAVER&carriers=-31799&operators=-32238;-31799&passengers=1&channel=website&cabin_class=first&fps_session_id=fc939195-260a-4138-8503-0f6e1ddc479f&ticket_price=10528.21&is_npt=false&is_multipart=false&client_id=skyscanner_website&request_id=24d14144-e16e-ebc3-3df4-d860f2d7d551&q_ids=H4sIAAAAAAAA_-OS4WLJL0qqEmLmuKUixczRo6vQMHvNDjYjJgVGC2YAIiVugR4AAAA|4823277977526111281|2&q_sources=JACQUARD&commercial_filters=false&q_datetime_utc=2024-10-13T09:29:29&pqid=true",
//           },
//         ],
//         pricingOptionId: "c47yEEmYvnAT",
//       },
//       {
//         agentIds: ["xpus"],
//         price: {
//           updateStatus: "current",
//           amount: 10528.21,
//         },
//         items: [
//           {
//             price: {
//               updateStatus: "current",
//               amount: 10528.21,
//             },
//             segmentIds: [
//               "13542-18563-2410131845-2410132125--31799",
//               "18563-12712-2410141000-2410141245--31799",
//             ],
//             bookingProposition: "PBOOK",
//             agentId: "xpus",
//             url: "/transport_deeplink/4.0/US/en-US/USD/xpus/1/13542.12712.2024-10-13/air/trava/flights?itinerary=flight|-31799|433|13542|2024-10-13T18:45|18563|2024-10-13T21:25|100|FNCBOWW|J|FIRST+SAVER;flight|-31799|16|18563|2024-10-14T10:00|12712|2024-10-14T12:45|525|FNCBOWW|F|FIRST+SAVER&carriers=-31799&operators=-32238;-31799&passengers=1&channel=website&cabin_class=first&fps_session_id=fc939195-260a-4138-8503-0f6e1ddc479f&ticket_price=10528.21&is_npt=false&is_multipart=false&client_id=skyscanner_website&request_id=24d14144-e16e-ebc3-3df4-d860f2d7d551&q_ids=H4sIAAAAAAAA_-OS4WKpKCgtFmLmuKUixczRo6vQMHvNDjYjJgVGC2YAmcIgth4AAAA|4823277977526111281|2&q_sources=JACQUARD&commercial_filters=false&q_datetime_utc=2024-10-13T09:29:29&pqid=true",
//           },
//         ],
//         pricingOptionId: "hpfGNLy4hp3M",
//       },
//       {
//         agentIds: ["tlcy"],
//         price: {
//           updateStatus: "current",
//           amount: 10528.21,
//         },
//         items: [
//           {
//             price: {
//               updateStatus: "current",
//               amount: 10528.21,
//             },
//             segmentIds: [
//               "13542-18563-2410131845-2410132125--31799",
//               "18563-12712-2410141000-2410141245--31799",
//             ],
//             bookingProposition: "PBOOK",
//             agentId: "tlcy",
//             url: "/transport_deeplink/4.0/US/en-US/USD/tlcy/1/13542.12712.2024-10-13/air/trava/flights?itinerary=flight|-31799|433|13542|2024-10-13T18:45|18563|2024-10-13T21:25|100|FNCBOWW|J|FIRST+SAVER;flight|-31799|16|18563|2024-10-14T10:00|12712|2024-10-14T12:45|525|FNCBOWW|F|FIRST+SAVER&carriers=-31799&operators=-32238;-31799&passengers=1&channel=website&cabin_class=first&fps_session_id=fc939195-260a-4138-8503-0f6e1ddc479f&ticket_price=10528.21&is_npt=false&is_multipart=false&client_id=skyscanner_website&request_id=24d14144-e16e-ebc3-3df4-d860f2d7d551&q_ids=H4sIAAAAAAAA_-OS4WIpyUmuFGLmuKUixczRo6vQMHvNDjYjJgVGC2YAezpFZB4AAAA|4823277977526111281|2&q_sources=JACQUARD&commercial_filters=false&q_datetime_utc=2024-10-13T09:29:29&pqid=true",
//           },
//         ],
//         pricingOptionId: "9wMObK_1UpWy",
//       },
//       {
//         agentIds: ["arus"],
//         price: {
//           updateStatus: "current",
//           amount: 10661.99,
//         },
//         items: [
//           {
//             price: {
//               updateStatus: "current",
//               amount: 10661.99,
//             },
//             segmentIds: [
//               "13542-18563-2410131845-2410132125--31799",
//               "18563-12712-2410141000-2410141245--31799",
//             ],
//             bookingProposition: "PBOOK",
//             agentId: "arus",
//             url: "/transport_deeplink/4.0/US/en-US/USD/arus/1/13542.12712.2024-10-13/air/trava/flights?itinerary=flight|-31799|433|13542|2024-10-13T18:45|18563|2024-10-13T21:25|100|-|-|-;flight|-31799|16|18563|2024-10-14T10:00|12712|2024-10-14T12:45|525|-|-|-&carriers=-31799&operators=-32238;-31799&passengers=1&channel=website&cabin_class=first&fps_session_id=fc939195-260a-4138-8503-0f6e1ddc479f&ticket_price=10661.99&is_npt=false&is_multipart=false&client_id=skyscanner_website&request_id=24d14144-e16e-ebc3-3df4-d860f2d7d551&q_ids=H4sIAAAAAAAA_-NS5GJJLCotFmLmuKUixczRo6vQMHvNDjYjJgVGC-Yq5tBgFwBJvnCvIwAAAA|-779642780286823466|2&q_sources=JACQUARD&commercial_filters=false&q_datetime_utc=2024-10-13T09:29:29&pqid=true",
//           },
//         ],
//         pricingOptionId: "vtVoRrqybPE4",
//       },
//       {
//         agentIds: ["fnus"],
//         price: {
//           updateStatus: "current",
//           amount: 10662.99,
//         },
//         items: [
//           {
//             price: {
//               updateStatus: "current",
//               amount: 10662.99,
//             },
//             segmentIds: [
//               "13542-18563-2410131845-2410132125--31799",
//               "18563-12712-2410141000-2410141245--31799",
//             ],
//             bookingProposition: "PBOOK",
//             agentId: "fnus",
//             url: "/transport_deeplink/4.0/US/en-US/USD/fnus/1/13542.12712.2024-10-13/air/trava/flights?itinerary=flight|-31799|433|13542|2024-10-13T18:45|18563|2024-10-13T21:25|100|-|-|-;flight|-31799|16|18563|2024-10-14T10:00|12712|2024-10-14T12:45|525|-|-|-&carriers=-31799&operators=-32238;-31799&passengers=1&channel=website&cabin_class=first&fps_session_id=fc939195-260a-4138-8503-0f6e1ddc479f&ticket_price=10662.99&is_npt=false&is_multipart=false&client_id=skyscanner_website&request_id=24d14144-e16e-ebc3-3df4-d860f2d7d551&q_ids=H4sIAAAAAAAA_-NS5GJJyystFmLmuKUixczRo6vQMHvNDjYjJgVGC-Yq5tBgFwBdit4-IwAAAA|-779642780286823466|2&q_sources=JACQUARD&commercial_filters=false&q_datetime_utc=2024-10-13T09:29:29&pqid=true",
//           },
//         ],
//         pricingOptionId: "CwxO1HM4GOrA",
//       },
//       {
//         agentIds: ["gtus"],
//         price: {
//           updateStatus: "current",
//           amount: 10665.99,
//         },
//         items: [
//           {
//             price: {
//               updateStatus: "current",
//               amount: 10665.99,
//             },
//             segmentIds: [
//               "13542-18563-2410131845-2410132125--31799",
//               "18563-12712-2410141000-2410141245--31799",
//             ],
//             bookingProposition: "PBOOK",
//             agentId: "gtus",
//             url: "/transport_deeplink/4.0/US/en-US/USD/gtus/1/13542.12712.2024-10-13/air/trava/flights?itinerary=flight|-31799|433|13542|2024-10-13T18:45|18563|2024-10-13T21:25|100|-|-|-;flight|-31799|16|18563|2024-10-14T10:00|12712|2024-10-14T12:45|525|-|-|-&carriers=-31799&operators=-32238;-31799&passengers=1&channel=website&cabin_class=first&fps_session_id=fc939195-260a-4138-8503-0f6e1ddc479f&ticket_price=10665.99&is_npt=false&is_multipart=false&client_id=skyscanner_website&request_id=24d14144-e16e-ebc3-3df4-d860f2d7d551&q_ids=H4sIAAAAAAAA_-NS5GJJLyktFmLmuKUixczRo6vQMHvNDjYjJgVGC-Yq5tBgFwCfhmIAIwAAAA|-779642780286823466|2&q_sources=JACQUARD&commercial_filters=false&q_datetime_utc=2024-10-13T09:29:28&pqid=true",
//           },
//         ],
//         pricingOptionId: "QtlsIcz2B0a8",
//       },
//       {
//         agentIds: ["cust"],
//         price: {
//           updateStatus: "current",
//           amount: 10938.8,
//         },
//         items: [
//           {
//             price: {
//               updateStatus: "current",
//               amount: 10938.8,
//             },
//             segmentIds: [
//               "13542-18563-2410131845-2410132125--31799",
//               "18563-12712-2410141000-2410141245--31799",
//             ],
//             bookingProposition: "PBOOK",
//             agentId: "cust",
//             url: "/transport_deeplink/4.0/US/en-US/USD/cust/1/13542.12712.2024-10-13/air/trava/flights?itinerary=flight|-31799|433|13542|2024-10-13T18:45|18563|2024-10-13T21:25|100|-|-|-;flight|-31799|16|18563|2024-10-14T10:00|12712|2024-10-14T12:45|525|-|-|-&carriers=-31799&operators=-32238;-31799&passengers=1&channel=website&cabin_class=first&fps_session_id=fc939195-260a-4138-8503-0f6e1ddc479f&ticket_price=10938.80&is_npt=false&is_multipart=false&client_id=skyscanner_website&request_id=24d14144-e16e-ebc3-3df4-d860f2d7d551&q_ids=H4sIAAAAAAAA_-PS4GJJLi0uEWLmuKUixczRo6vQMHvNDjYjJgVGC-Yi1tQ83dDgKubQYBcA4VixPSoAAAA|3981833581508835471|2&q_sources=JACQUARD&commercial_filters=false&q_datetime_utc=2024-10-13T09:34:52&pqid=true",
//           },
//         ],
//         pricingOptionId: "RPvLm8tA3JBa",
//       },
//     ],
//   },
//   {
//     id: "13465-2410131755--31799-1-12712-2410141245",
//     price: {
//       raw: 10520.99,
//       formatted: "$10,521",
//       pricingOptionId: "3bnxStbbzX1H",
//     },
//     legs: [
//       {
//         id: "13465-2410131755--31799-1-12712-2410141245",
//         origin: {
//           id: "LCY",
//           entityId: "95565047",
//           name: "London City",
//           displayCode: "LCY",
//           city: "London",
//           country: "United Kingdom",
//           isHighlighted: false,
//         },
//         destination: {
//           id: "JFK",
//           entityId: "95565058",
//           name: "New York John F. Kennedy",
//           displayCode: "JFK",
//           city: "New York",
//           country: "United States",
//           isHighlighted: false,
//         },
//         durationInMinutes: 1430,
//         stopCount: 1,
//         isSmallestStops: false,
//         departure: "2024-10-13T17:55:00",
//         arrival: "2024-10-14T12:45:00",
//         timeDeltaInDays: 1,
//         carriers: {
//           marketing: [
//             {
//               id: -31799,
//               logoUrl:
//                 "https://logos.skyscnr.com/images/airlines/favicon/LX.png",
//               name: "SWISS",
//             },
//           ],
//           operationType: "fully_operated",
//         },
//         segments: [
//           {
//             id: "13465-18563-2410131755-2410132035--31799",
//             origin: {
//               flightPlaceId: "LCY",
//               displayCode: "LCY",
//               parent: {
//                 flightPlaceId: "LOND",
//                 displayCode: "LON",
//                 name: "London",
//                 type: "City",
//               },
//               name: "London City",
//               type: "Airport",
//               country: "United Kingdom",
//             },
//             destination: {
//               flightPlaceId: "ZRH",
//               displayCode: "ZRH",
//               parent: {
//                 flightPlaceId: "ZURI",
//                 displayCode: "ZRH",
//                 name: "Zurich",
//                 type: "City",
//               },
//               name: "Zurich",
//               type: "Airport",
//               country: "Switzerland",
//             },
//             departure: "2024-10-13T17:55:00",
//             arrival: "2024-10-13T20:35:00",
//             durationInMinutes: 100,
//             flightNumber: "465",
//             marketingCarrier: {
//               id: -31799,
//               name: "SWISS",
//               alternateId: "LX",
//               allianceId: -31999,
//               displayCode: "LX",
//             },
//             operatingCarrier: {
//               id: -31799,
//               name: "SWISS",
//               alternateId: "LX",
//               allianceId: -31999,
//               displayCode: "LX",
//             },
//           },
//           {
//             id: "18563-12712-2410141000-2410141245--31799",
//             origin: {
//               flightPlaceId: "ZRH",
//               displayCode: "ZRH",
//               parent: {
//                 flightPlaceId: "ZURI",
//                 displayCode: "ZRH",
//                 name: "Zurich",
//                 type: "City",
//               },
//               name: "Zurich",
//               type: "Airport",
//               country: "Switzerland",
//             },
//             destination: {
//               flightPlaceId: "JFK",
//               displayCode: "JFK",
//               parent: {
//                 flightPlaceId: "NYCA",
//                 displayCode: "NYC",
//                 name: "New York",
//                 type: "City",
//               },
//               name: "New York John F. Kennedy",
//               type: "Airport",
//               country: "United States",
//             },
//             departure: "2024-10-14T10:00:00",
//             arrival: "2024-10-14T12:45:00",
//             durationInMinutes: 525,
//             flightNumber: "16",
//             marketingCarrier: {
//               id: -31799,
//               name: "SWISS",
//               alternateId: "LX",
//               allianceId: -31999,
//               displayCode: "LX",
//             },
//             operatingCarrier: {
//               id: -31799,
//               name: "SWISS",
//               alternateId: "LX",
//               allianceId: -31999,
//               displayCode: "LX",
//             },
//           },
//         ],
//       },
//     ],
//     isSelfTransfer: false,
//     isProtectedSelfTransfer: false,
//     farePolicy: {
//       isChangeAllowed: false,
//       isPartiallyChangeable: false,
//       isCancellationAllowed: false,
//       isPartiallyRefundable: false,
//     },
//     fareAttributes: {},
//     isMashUp: false,
//     hasFlexibleOptions: false,
//     score: 0.48218,
//     pricingOptions: [
//       {
//         agentIds: ["bcom"],
//         price: {
//           updateStatus: "current",
//           amount: 10520.99,
//         },
//         items: [
//           {
//             price: {
//               updateStatus: "current",
//               amount: 10520.99,
//             },
//             segmentIds: [
//               "13465-18563-2410131755-2410132035--31799",
//               "18563-12712-2410141000-2410141245--31799",
//             ],
//             bookingProposition: "PBOOK",
//             agentId: "bcom",
//             url: "/transport_deeplink/4.0/US/en-US/USD/bcom/1/13465.12712.2024-10-13/air/trava/flights?itinerary=flight|-31799|465|13465|2024-10-13T17:55|18563|2024-10-13T20:35|100|-|-|-;flight|-31799|16|18563|2024-10-14T10:00|12712|2024-10-14T12:45|525|-|-|-&carriers=-31799&operators=-31799;-31799&passengers=1&channel=website&cabin_class=first&fps_session_id=fc939195-260a-4138-8503-0f6e1ddc479f&ticket_price=10520.99&is_npt=false&is_multipart=false&client_id=skyscanner_website&request_id=24d14144-e16e-ebc3-3df4-d860f2d7d551&q_ids=H4sIAAAAAAAA_-NS5GJJSs7PFWLmuKUixczRo6vQMHvNDjYjJgVGC-Yq5tBgFwCplYMNIwAAAA|6215135972292251690|2&q_sources=JACQUARD&commercial_filters=false&q_datetime_utc=2024-10-13T09:29:29&pqid=true",
//           },
//         ],
//         pricingOptionId: "3bnxStbbzX1H",
//       },
//       {
//         agentIds: ["xpus"],
//         price: {
//           updateStatus: "current",
//           amount: 10543.11,
//         },
//         items: [
//           {
//             price: {
//               updateStatus: "current",
//               amount: 10543.11,
//             },
//             segmentIds: [
//               "13465-18563-2410131755-2410132035--31799",
//               "18563-12712-2410141000-2410141245--31799",
//             ],
//             bookingProposition: "PBOOK",
//             agentId: "xpus",
//             url: "/transport_deeplink/4.0/US/en-US/USD/xpus/1/13465.12712.2024-10-13/air/trava/flights?itinerary=flight|-31799|465|13465|2024-10-13T17:55|18563|2024-10-13T20:35|100|FNCBOWW|J|FIRST+SAVER;flight|-31799|16|18563|2024-10-14T10:00|12712|2024-10-14T12:45|525|FNCBOWW|F|FIRST+SAVER&carriers=-31799&operators=-31799;-31799&passengers=1&channel=website&cabin_class=first&fps_session_id=fc939195-260a-4138-8503-0f6e1ddc479f&ticket_price=10543.11&is_npt=false&is_multipart=false&client_id=skyscanner_website&request_id=24d14144-e16e-ebc3-3df4-d860f2d7d551&q_ids=H4sIAAAAAAAA_-OS4WKpKCgtFmLmuKUixczRo6vQMHvNDjYjJgVGC2YAmcIgth4AAAA|1511321693529952018|2&q_sources=JACQUARD&commercial_filters=false&q_datetime_utc=2024-10-13T09:29:29&pqid=true",
//           },
//         ],
//         pricingOptionId: "uIeSrbSYTr7N",
//       },
//       {
//         agentIds: ["orbz"],
//         price: {
//           updateStatus: "current",
//           amount: 10543.11,
//         },
//         items: [
//           {
//             price: {
//               updateStatus: "current",
//               amount: 10543.11,
//             },
//             segmentIds: [
//               "13465-18563-2410131755-2410132035--31799",
//               "18563-12712-2410141000-2410141245--31799",
//             ],
//             bookingProposition: "PBOOK",
//             agentId: "orbz",
//             url: "/transport_deeplink/4.0/US/en-US/USD/orbz/1/13465.12712.2024-10-13/air/trava/flights?itinerary=flight|-31799|465|13465|2024-10-13T17:55|18563|2024-10-13T20:35|100|FNCBOWW|J|FIRST+SAVER;flight|-31799|16|18563|2024-10-14T10:00|12712|2024-10-14T12:45|525|FNCBOWW|F|FIRST+SAVER&carriers=-31799&operators=-31799;-31799&passengers=1&channel=website&cabin_class=first&fps_session_id=fc939195-260a-4138-8503-0f6e1ddc479f&ticket_price=10543.11&is_npt=false&is_multipart=false&client_id=skyscanner_website&request_id=24d14144-e16e-ebc3-3df4-d860f2d7d551&q_ids=H4sIAAAAAAAA_-OS4WLJL0qqEmLmuKUixczRo6vQMHvNDjYjJgVGC2YAIiVugR4AAAA|1511321693529952018|2&q_sources=JACQUARD&commercial_filters=false&q_datetime_utc=2024-10-13T09:29:29&pqid=true",
//           },
//         ],
//         pricingOptionId: "AvKXhOcvWdFo",
//       },
//       {
//         agentIds: ["tlcy"],
//         price: {
//           updateStatus: "current",
//           amount: 10543.11,
//         },
//         items: [
//           {
//             price: {
//               updateStatus: "current",
//               amount: 10543.11,
//             },
//             segmentIds: [
//               "13465-18563-2410131755-2410132035--31799",
//               "18563-12712-2410141000-2410141245--31799",
//             ],
//             bookingProposition: "PBOOK",
//             agentId: "tlcy",
//             url: "/transport_deeplink/4.0/US/en-US/USD/tlcy/1/13465.12712.2024-10-13/air/trava/flights?itinerary=flight|-31799|465|13465|2024-10-13T17:55|18563|2024-10-13T20:35|100|FNCBOWW|J|FIRST+SAVER;flight|-31799|16|18563|2024-10-14T10:00|12712|2024-10-14T12:45|525|FNCBOWW|F|FIRST+SAVER&carriers=-31799&operators=-31799;-31799&passengers=1&channel=website&cabin_class=first&fps_session_id=fc939195-260a-4138-8503-0f6e1ddc479f&ticket_price=10543.11&is_npt=false&is_multipart=false&client_id=skyscanner_website&request_id=24d14144-e16e-ebc3-3df4-d860f2d7d551&q_ids=H4sIAAAAAAAA_-OS4WIpyUmuFGLmuKUixczRo6vQMHvNDjYjJgVGC2YAezpFZB4AAAA|1511321693529952018|2&q_sources=JACQUARD&commercial_filters=false&q_datetime_utc=2024-10-13T09:29:29&pqid=true",
//           },
//         ],
//         pricingOptionId: "XCljnvLfMAdt",
//       },
//       {
//         agentIds: ["fnus"],
//         price: {
//           updateStatus: "current",
//           amount: 10677.99,
//         },
//         items: [
//           {
//             price: {
//               updateStatus: "current",
//               amount: 10677.99,
//             },
//             segmentIds: [
//               "13465-18563-2410131755-2410132035--31799",
//               "18563-12712-2410141000-2410141245--31799",
//             ],
//             bookingProposition: "PBOOK",
//             agentId: "fnus",
//             url: "/transport_deeplink/4.0/US/en-US/USD/fnus/1/13465.12712.2024-10-13/air/trava/flights?itinerary=flight|-31799|465|13465|2024-10-13T17:55|18563|2024-10-13T20:35|100|-|-|-;flight|-31799|16|18563|2024-10-14T10:00|12712|2024-10-14T12:45|525|-|-|-&carriers=-31799&operators=-31799;-31799&passengers=1&channel=website&cabin_class=first&fps_session_id=fc939195-260a-4138-8503-0f6e1ddc479f&ticket_price=10677.99&is_npt=false&is_multipart=false&client_id=skyscanner_website&request_id=24d14144-e16e-ebc3-3df4-d860f2d7d551&q_ids=H4sIAAAAAAAA_-NS5GJJyystFmLmuKUixczRo6vQMHvNDjYjJgVGC-Yq5tBgFwBdit4-IwAAAA|6215135972292251690|2&q_sources=JACQUARD&commercial_filters=false&q_datetime_utc=2024-10-13T09:29:29&pqid=true",
//           },
//         ],
//         pricingOptionId: "9w7otVy_eLZu",
//       },
//       {
//         agentIds: ["arus"],
//         price: {
//           updateStatus: "current",
//           amount: 10677.99,
//         },
//         items: [
//           {
//             price: {
//               updateStatus: "current",
//               amount: 10677.99,
//             },
//             segmentIds: [
//               "13465-18563-2410131755-2410132035--31799",
//               "18563-12712-2410141000-2410141245--31799",
//             ],
//             bookingProposition: "PBOOK",
//             agentId: "arus",
//             url: "/transport_deeplink/4.0/US/en-US/USD/arus/1/13465.12712.2024-10-13/air/trava/flights?itinerary=flight|-31799|465|13465|2024-10-13T17:55|18563|2024-10-13T20:35|100|-|-|-;flight|-31799|16|18563|2024-10-14T10:00|12712|2024-10-14T12:45|525|-|-|-&carriers=-31799&operators=-31799;-31799&passengers=1&channel=website&cabin_class=first&fps_session_id=fc939195-260a-4138-8503-0f6e1ddc479f&ticket_price=10677.99&is_npt=false&is_multipart=false&client_id=skyscanner_website&request_id=24d14144-e16e-ebc3-3df4-d860f2d7d551&q_ids=H4sIAAAAAAAA_-NS5GJJLCotFmLmuKUixczRo6vQMHvNDjYjJgVGC-Yq5tBgFwBJvnCvIwAAAA|6215135972292251690|2&q_sources=JACQUARD&commercial_filters=false&q_datetime_utc=2024-10-13T09:29:29&pqid=true",
//           },
//         ],
//         pricingOptionId: "wBNgU7Zm0Qtm",
//       },
//       {
//         agentIds: ["gtus"],
//         price: {
//           updateStatus: "current",
//           amount: 10681.99,
//         },
//         items: [
//           {
//             price: {
//               updateStatus: "current",
//               amount: 10681.99,
//             },
//             segmentIds: [
//               "13465-18563-2410131755-2410132035--31799",
//               "18563-12712-2410141000-2410141245--31799",
//             ],
//             bookingProposition: "PBOOK",
//             agentId: "gtus",
//             url: "/transport_deeplink/4.0/US/en-US/USD/gtus/1/13465.12712.2024-10-13/air/trava/flights?itinerary=flight|-31799|465|13465|2024-10-13T17:55|18563|2024-10-13T20:35|100|-|-|-;flight|-31799|16|18563|2024-10-14T10:00|12712|2024-10-14T12:45|525|-|-|-&carriers=-31799&operators=-31799;-31799&passengers=1&channel=website&cabin_class=first&fps_session_id=fc939195-260a-4138-8503-0f6e1ddc479f&ticket_price=10681.99&is_npt=false&is_multipart=false&client_id=skyscanner_website&request_id=24d14144-e16e-ebc3-3df4-d860f2d7d551&q_ids=H4sIAAAAAAAA_-NS5GJJLyktFmLmuKUixczRo6vQMHvNDjYjJgVGC-Yq5tBgFwCfhmIAIwAAAA|6215135972292251690|2&q_sources=JACQUARD&commercial_filters=false&q_datetime_utc=2024-10-13T09:29:28&pqid=true",
//           },
//         ],
//         pricingOptionId: "rQTbiUWfOeD6",
//       },
//       {
//         agentIds: ["cust"],
//         price: {
//           updateStatus: "current",
//           amount: 10975.7,
//         },
//         items: [
//           {
//             price: {
//               updateStatus: "current",
//               amount: 10975.7,
//             },
//             segmentIds: [
//               "13465-18563-2410131755-2410132035--31799",
//               "18563-12712-2410141000-2410141245--31799",
//             ],
//             bookingProposition: "PBOOK",
//             agentId: "cust",
//             url: "/transport_deeplink/4.0/US/en-US/USD/cust/1/13465.12712.2024-10-13/air/trava/flights?itinerary=flight|-31799|465|13465|2024-10-13T17:55|18563|2024-10-13T20:35|100|-|-|-;flight|-31799|16|18563|2024-10-14T10:00|12712|2024-10-14T12:45|525|-|-|-&carriers=-31799&operators=-31799;-31799&passengers=1&channel=website&cabin_class=first&fps_session_id=fc939195-260a-4138-8503-0f6e1ddc479f&ticket_price=10975.70&is_npt=false&is_multipart=false&client_id=skyscanner_website&request_id=24d14144-e16e-ebc3-3df4-d860f2d7d551&q_ids=H4sIAAAAAAAA_-PS4GJJLi0uEWLmuKUixczRo6vQMHvNDjYjJgVGC-Yi1tQ83dDgKubQYBcA4VixPSoAAAA|-5522559700265329577|2&q_sources=JACQUARD&commercial_filters=false&q_datetime_utc=2024-10-13T09:34:52&pqid=true",
//           },
//         ],
//         pricingOptionId: "8Wpv_gDUHzq3",
//       },
//       {
//         agentIds: ["swis"],
//         price: {
//           updateStatus: "current",
//           amount: 0,
//         },
//         unpricedType: "itinerary_not_returned",
//         items: [
//           {
//             price: {
//               updateStatus: "current",
//               amount: 0,
//             },
//             segmentIds: [
//               "13465-18563-2410131755-2410132035--31799",
//               "18563-12712-2410141000-2410141245--31799",
//             ],
//             bookingProposition: "PBOOK",
//             agentId: "swis",
//             url: "/transport_deeplink/4.0/US/en-US/USD/swis/1/13465.12712.2024-10-13/air/airli/flights_np?itinerary=flight|-31799|465|13465|2024-10-13T17:55|18563|2024-10-13T20:35|100|-|-|-;flight|-31799|16|18563|2024-10-14T10:00|12712|2024-10-14T12:45|525|-|-|-&carriers=-31799&operators=-31799;-31799&passengers=1&channel=website&cabin_class=first&fps_session_id=fc939195-260a-4138-8503-0f6e1ddc479f&is_npt=false&is_multipart=false&client_id=skyscanner_website&request_id=24d14144-e16e-ebc3-3df4-d860f2d7d551&pqid=false",
//           },
//         ],
//         pricingOptionId: "knt219NYlP7T",
//       },
//     ],
//   },
//   {
//     id: "13554-2410131840--31799-1-12712-2410141245",
//     price: {
//       raw: 10507.99,
//       formatted: "$10,508",
//       pricingOptionId: "qD94LlSMguZk",
//     },
//     legs: [
//       {
//         id: "13554-2410131840--31799-1-12712-2410141245",
//         origin: {
//           id: "LHR",
//           entityId: "95565050",
//           name: "London Heathrow",
//           displayCode: "LHR",
//           city: "London",
//           country: "United Kingdom",
//           isHighlighted: false,
//         },
//         destination: {
//           id: "JFK",
//           entityId: "95565058",
//           name: "New York John F. Kennedy",
//           displayCode: "JFK",
//           city: "New York",
//           country: "United States",
//           isHighlighted: false,
//         },
//         durationInMinutes: 1385,
//         stopCount: 1,
//         isSmallestStops: false,
//         departure: "2024-10-13T18:40:00",
//         arrival: "2024-10-14T12:45:00",
//         timeDeltaInDays: 1,
//         carriers: {
//           marketing: [
//             {
//               id: -31799,
//               logoUrl:
//                 "https://logos.skyscnr.com/images/airlines/favicon/LX.png",
//               name: "SWISS",
//             },
//           ],
//           operationType: "fully_operated",
//         },
//         segments: [
//           {
//             id: "13554-18563-2410131840-2410132125--31799",
//             origin: {
//               flightPlaceId: "LHR",
//               displayCode: "LHR",
//               parent: {
//                 flightPlaceId: "LOND",
//                 displayCode: "LON",
//                 name: "London",
//                 type: "City",
//               },
//               name: "London Heathrow",
//               type: "Airport",
//               country: "United Kingdom",
//             },
//             destination: {
//               flightPlaceId: "ZRH",
//               displayCode: "ZRH",
//               parent: {
//                 flightPlaceId: "ZURI",
//                 displayCode: "ZRH",
//                 name: "Zurich",
//                 type: "City",
//               },
//               name: "Zurich",
//               type: "Airport",
//               country: "Switzerland",
//             },
//             departure: "2024-10-13T18:40:00",
//             arrival: "2024-10-13T21:25:00",
//             durationInMinutes: 105,
//             flightNumber: "327",
//             marketingCarrier: {
//               id: -31799,
//               name: "SWISS",
//               alternateId: "LX",
//               allianceId: -31999,
//               displayCode: "LX",
//             },
//             operatingCarrier: {
//               id: -31799,
//               name: "SWISS",
//               alternateId: "LX",
//               allianceId: -31999,
//               displayCode: "LX",
//             },
//           },
//           {
//             id: "18563-12712-2410141000-2410141245--31799",
//             origin: {
//               flightPlaceId: "ZRH",
//               displayCode: "ZRH",
//               parent: {
//                 flightPlaceId: "ZURI",
//                 displayCode: "ZRH",
//                 name: "Zurich",
//                 type: "City",
//               },
//               name: "Zurich",
//               type: "Airport",
//               country: "Switzerland",
//             },
//             destination: {
//               flightPlaceId: "JFK",
//               displayCode: "JFK",
//               parent: {
//                 flightPlaceId: "NYCA",
//                 displayCode: "NYC",
//                 name: "New York",
//                 type: "City",
//               },
//               name: "New York John F. Kennedy",
//               type: "Airport",
//               country: "United States",
//             },
//             departure: "2024-10-14T10:00:00",
//             arrival: "2024-10-14T12:45:00",
//             durationInMinutes: 525,
//             flightNumber: "16",
//             marketingCarrier: {
//               id: -31799,
//               name: "SWISS",
//               alternateId: "LX",
//               allianceId: -31999,
//               displayCode: "LX",
//             },
//             operatingCarrier: {
//               id: -31799,
//               name: "SWISS",
//               alternateId: "LX",
//               allianceId: -31999,
//               displayCode: "LX",
//             },
//           },
//         ],
//       },
//     ],
//     isSelfTransfer: false,
//     isProtectedSelfTransfer: false,
//     farePolicy: {
//       isChangeAllowed: false,
//       isPartiallyChangeable: false,
//       isCancellationAllowed: false,
//       isPartiallyRefundable: false,
//     },
//     fareAttributes: {},
//     tags: ["second_cheapest"],
//     isMashUp: false,
//     hasFlexibleOptions: false,
//     score: 0.468299,
//     pricingOptions: [
//       {
//         agentIds: ["bcom"],
//         price: {
//           updateStatus: "current",
//           amount: 10507.99,
//         },
//         items: [
//           {
//             price: {
//               updateStatus: "current",
//               amount: 10507.99,
//             },
//             segmentIds: [
//               "13554-18563-2410131840-2410132125--31799",
//               "18563-12712-2410141000-2410141245--31799",
//             ],
//             bookingProposition: "PBOOK",
//             agentId: "bcom",
//             url: "/transport_deeplink/4.0/US/en-US/USD/bcom/1/13554.12712.2024-10-13/air/trava/flights?itinerary=flight|-31799|327|13554|2024-10-13T18:40|18563|2024-10-13T21:25|105|-|-|-;flight|-31799|16|18563|2024-10-14T10:00|12712|2024-10-14T12:45|525|-|-|-&carriers=-31799&operators=-31799;-31799&passengers=1&channel=website&cabin_class=first&fps_session_id=fc939195-260a-4138-8503-0f6e1ddc479f&ticket_price=10507.99&is_npt=false&is_multipart=false&client_id=skyscanner_website&request_id=24d14144-e16e-ebc3-3df4-d860f2d7d551&q_ids=H4sIAAAAAAAA_-NS5GJJSs7PFWLmuKUixczRo6vQMHvNDjYjJgVGC-Yq5tBgFwCplYMNIwAAAA|-4562781721982145394|2&q_sources=JACQUARD&commercial_filters=false&q_datetime_utc=2024-10-13T09:29:29&pqid=true",
//           },
//         ],
//         pricingOptionId: "qD94LlSMguZk",
//       },
//       {
//         agentIds: ["tlcy"],
//         price: {
//           updateStatus: "current",
//           amount: 10530.51,
//         },
//         items: [
//           {
//             price: {
//               updateStatus: "current",
//               amount: 10530.51,
//             },
//             segmentIds: [
//               "13554-18563-2410131840-2410132125--31799",
//               "18563-12712-2410141000-2410141245--31799",
//             ],
//             bookingProposition: "PBOOK",
//             agentId: "tlcy",
//             url: "/transport_deeplink/4.0/US/en-US/USD/tlcy/1/13554.12712.2024-10-13/air/trava/flights?itinerary=flight|-31799|327|13554|2024-10-13T18:40|18563|2024-10-13T21:25|105|FNCBOWW|J|FIRST+SAVER;flight|-31799|16|18563|2024-10-14T10:00|12712|2024-10-14T12:45|525|FNCBOWW|F|FIRST+SAVER&carriers=-31799&operators=-31799;-31799&passengers=1&channel=website&cabin_class=first&fps_session_id=fc939195-260a-4138-8503-0f6e1ddc479f&ticket_price=10530.51&is_npt=false&is_multipart=false&client_id=skyscanner_website&request_id=24d14144-e16e-ebc3-3df4-d860f2d7d551&q_ids=H4sIAAAAAAAA_-OS4WIpyUmuFGLmuKUixczRo6vQMHvNDjYjJgVGC2YAezpFZB4AAAA|-3318684406543405743|2&q_sources=JACQUARD&commercial_filters=false&q_datetime_utc=2024-10-13T09:29:29&pqid=true",
//           },
//         ],
//         pricingOptionId: "01j08rNA8_DT",
//       },
//       {
//         agentIds: ["xpus"],
//         price: {
//           updateStatus: "current",
//           amount: 10530.51,
//         },
//         items: [
//           {
//             price: {
//               updateStatus: "current",
//               amount: 10530.51,
//             },
//             segmentIds: [
//               "13554-18563-2410131840-2410132125--31799",
//               "18563-12712-2410141000-2410141245--31799",
//             ],
//             bookingProposition: "PBOOK",
//             agentId: "xpus",
//             url: "/transport_deeplink/4.0/US/en-US/USD/xpus/1/13554.12712.2024-10-13/air/trava/flights?itinerary=flight|-31799|327|13554|2024-10-13T18:40|18563|2024-10-13T21:25|105|FNCBOWW|J|FIRST+SAVER;flight|-31799|16|18563|2024-10-14T10:00|12712|2024-10-14T12:45|525|FNCBOWW|F|FIRST+SAVER&carriers=-31799&operators=-31799;-31799&passengers=1&channel=website&cabin_class=first&fps_session_id=fc939195-260a-4138-8503-0f6e1ddc479f&ticket_price=10530.51&is_npt=false&is_multipart=false&client_id=skyscanner_website&request_id=24d14144-e16e-ebc3-3df4-d860f2d7d551&q_ids=H4sIAAAAAAAA_-OS4WKpKCgtFmLmuKUixczRo6vQMHvNDjYjJgVGC2YAmcIgth4AAAA|-3318684406543405743|2&q_sources=JACQUARD&commercial_filters=false&q_datetime_utc=2024-10-13T09:29:29&pqid=true",
//           },
//         ],
//         pricingOptionId: "9PEd8ZAlup48",
//       },
//       {
//         agentIds: ["orbz"],
//         price: {
//           updateStatus: "current",
//           amount: 10530.51,
//         },
//         items: [
//           {
//             price: {
//               updateStatus: "current",
//               amount: 10530.51,
//             },
//             segmentIds: [
//               "13554-18563-2410131840-2410132125--31799",
//               "18563-12712-2410141000-2410141245--31799",
//             ],
//             bookingProposition: "PBOOK",
//             agentId: "orbz",
//             url: "/transport_deeplink/4.0/US/en-US/USD/orbz/1/13554.12712.2024-10-13/air/trava/flights?itinerary=flight|-31799|327|13554|2024-10-13T18:40|18563|2024-10-13T21:25|105|FNCBOWW|J|FIRST+SAVER;flight|-31799|16|18563|2024-10-14T10:00|12712|2024-10-14T12:45|525|FNCBOWW|F|FIRST+SAVER&carriers=-31799&operators=-31799;-31799&passengers=1&channel=website&cabin_class=first&fps_session_id=fc939195-260a-4138-8503-0f6e1ddc479f&ticket_price=10530.51&is_npt=false&is_multipart=false&client_id=skyscanner_website&request_id=24d14144-e16e-ebc3-3df4-d860f2d7d551&q_ids=H4sIAAAAAAAA_-OS4WLJL0qqEmLmuKUixczRo6vQMHvNDjYjJgVGC2YAIiVugR4AAAA|-3318684406543405743|2&q_sources=JACQUARD&commercial_filters=false&q_datetime_utc=2024-10-13T09:29:29&pqid=true",
//           },
//         ],
//         pricingOptionId: "EHaiakipt3LE",
//       },
//       {
//         agentIds: ["fnus"],
//         price: {
//           updateStatus: "current",
//           amount: 10664.99,
//         },
//         items: [
//           {
//             price: {
//               updateStatus: "current",
//               amount: 10664.99,
//             },
//             segmentIds: [
//               "13554-18563-2410131840-2410132125--31799",
//               "18563-12712-2410141000-2410141245--31799",
//             ],
//             bookingProposition: "PBOOK",
//             agentId: "fnus",
//             url: "/transport_deeplink/4.0/US/en-US/USD/fnus/1/13554.12712.2024-10-13/air/trava/flights?itinerary=flight|-31799|327|13554|2024-10-13T18:40|18563|2024-10-13T21:25|105|-|-|-;flight|-31799|16|18563|2024-10-14T10:00|12712|2024-10-14T12:45|525|-|-|-&carriers=-31799&operators=-31799;-31799&passengers=1&channel=website&cabin_class=first&fps_session_id=fc939195-260a-4138-8503-0f6e1ddc479f&ticket_price=10664.99&is_npt=false&is_multipart=false&client_id=skyscanner_website&request_id=24d14144-e16e-ebc3-3df4-d860f2d7d551&q_ids=H4sIAAAAAAAA_-NS5GJJyystFmLmuKUixczRo6vQMHvNDjYjJgVGC-Yq5tBgFwBdit4-IwAAAA|-4562781721982145394|2&q_sources=JACQUARD&commercial_filters=false&q_datetime_utc=2024-10-13T09:29:29&pqid=true",
//           },
//         ],
//         pricingOptionId: "CpZKFygjhY-t",
//       },
//       {
//         agentIds: ["arus"],
//         price: {
//           updateStatus: "current",
//           amount: 10664.99,
//         },
//         items: [
//           {
//             price: {
//               updateStatus: "current",
//               amount: 10664.99,
//             },
//             segmentIds: [
//               "13554-18563-2410131840-2410132125--31799",
//               "18563-12712-2410141000-2410141245--31799",
//             ],
//             bookingProposition: "PBOOK",
//             agentId: "arus",
//             url: "/transport_deeplink/4.0/US/en-US/USD/arus/1/13554.12712.2024-10-13/air/trava/flights?itinerary=flight|-31799|327|13554|2024-10-13T18:40|18563|2024-10-13T21:25|105|-|-|-;flight|-31799|16|18563|2024-10-14T10:00|12712|2024-10-14T12:45|525|-|-|-&carriers=-31799&operators=-31799;-31799&passengers=1&channel=website&cabin_class=first&fps_session_id=fc939195-260a-4138-8503-0f6e1ddc479f&ticket_price=10664.99&is_npt=false&is_multipart=false&client_id=skyscanner_website&request_id=24d14144-e16e-ebc3-3df4-d860f2d7d551&q_ids=H4sIAAAAAAAA_-NS5GJJLCotFmLmuKUixczRo6vQMHvNDjYjJgVGC-Yq5tBgFwBJvnCvIwAAAA|-4562781721982145394|2&q_sources=JACQUARD&commercial_filters=false&q_datetime_utc=2024-10-13T09:29:29&pqid=true",
//           },
//         ],
//         pricingOptionId: "T_YepDjesTjd",
//       },
//       {
//         agentIds: ["gtus"],
//         price: {
//           updateStatus: "current",
//           amount: 10668.99,
//         },
//         items: [
//           {
//             price: {
//               updateStatus: "current",
//               amount: 10668.99,
//             },
//             segmentIds: [
//               "13554-18563-2410131840-2410132125--31799",
//               "18563-12712-2410141000-2410141245--31799",
//             ],
//             bookingProposition: "PBOOK",
//             agentId: "gtus",
//             url: "/transport_deeplink/4.0/US/en-US/USD/gtus/1/13554.12712.2024-10-13/air/trava/flights?itinerary=flight|-31799|327|13554|2024-10-13T18:40|18563|2024-10-13T21:25|105|-|-|-;flight|-31799|16|18563|2024-10-14T10:00|12712|2024-10-14T12:45|525|-|-|-&carriers=-31799&operators=-31799;-31799&passengers=1&channel=website&cabin_class=first&fps_session_id=fc939195-260a-4138-8503-0f6e1ddc479f&ticket_price=10668.99&is_npt=false&is_multipart=false&client_id=skyscanner_website&request_id=24d14144-e16e-ebc3-3df4-d860f2d7d551&q_ids=H4sIAAAAAAAA_-NS5GJJLyktFmLmuKUixczRo6vQMHvNDjYjJgVGC-Yq5tBgFwCfhmIAIwAAAA|-4562781721982145394|2&q_sources=JACQUARD&commercial_filters=false&q_datetime_utc=2024-10-13T09:29:28&pqid=true",
//           },
//         ],
//         pricingOptionId: "0u7SeM1abEtP",
//       },
//       {
//         agentIds: ["cust"],
//         price: {
//           updateStatus: "current",
//           amount: 10941.4,
//         },
//         items: [
//           {
//             price: {
//               updateStatus: "current",
//               amount: 10941.4,
//             },
//             segmentIds: [
//               "13554-18563-2410131840-2410132125--31799",
//               "18563-12712-2410141000-2410141245--31799",
//             ],
//             bookingProposition: "PBOOK",
//             agentId: "cust",
//             url: "/transport_deeplink/4.0/US/en-US/USD/cust/1/13554.12712.2024-10-13/air/trava/flights?itinerary=flight|-31799|327|13554|2024-10-13T18:40|18563|2024-10-13T21:25|105|-|-|-;flight|-31799|16|18563|2024-10-14T10:00|12712|2024-10-14T12:45|525|-|-|-&carriers=-31799&operators=-31799;-31799&passengers=1&channel=website&cabin_class=first&fps_session_id=fc939195-260a-4138-8503-0f6e1ddc479f&ticket_price=10941.40&is_npt=false&is_multipart=false&client_id=skyscanner_website&request_id=24d14144-e16e-ebc3-3df4-d860f2d7d551&q_ids=H4sIAAAAAAAA_-PS4GJJLi0uEWLmuKUixczRo6vQMHvNDjYjJgVGC-Yi1tQ83dDgKubQYBcA4VixPSoAAAA|-7834552264051658252|2&q_sources=JACQUARD&commercial_filters=false&q_datetime_utc=2024-10-13T09:34:52&pqid=true",
//           },
//         ],
//         pricingOptionId: "fyXhuOY3Q706",
//       },
//       {
//         agentIds: ["swis"],
//         price: {
//           updateStatus: "current",
//           amount: 0,
//         },
//         unpricedType: "itinerary_not_returned",
//         items: [
//           {
//             price: {
//               updateStatus: "current",
//               amount: 0,
//             },
//             segmentIds: [
//               "13554-18563-2410131840-2410132125--31799",
//               "18563-12712-2410141000-2410141245--31799",
//             ],
//             bookingProposition: "PBOOK",
//             agentId: "swis",
//             url: "/transport_deeplink/4.0/US/en-US/USD/swis/1/13554.12712.2024-10-13/air/airli/flights_np?itinerary=flight|-31799|327|13554|2024-10-13T18:40|18563|2024-10-13T21:25|105|-|-|-;flight|-31799|16|18563|2024-10-14T10:00|12712|2024-10-14T12:45|525|-|-|-&carriers=-31799&operators=-31799;-31799&passengers=1&channel=website&cabin_class=first&fps_session_id=fc939195-260a-4138-8503-0f6e1ddc479f&is_npt=false&is_multipart=false&client_id=skyscanner_website&request_id=24d14144-e16e-ebc3-3df4-d860f2d7d551&pqid=false",
//           },
//         ],
//         pricingOptionId: "WtqBDAybti00",
//       },
//     ],
//   },
//   {
//     id: "13554-2410131915--31799-2-12712-2410141245",
//     price: {
//       raw: 10740.99,
//       formatted: "$10,741",
//       pricingOptionId: "TUQm2Ap48Qzz",
//     },
//     legs: [
//       {
//         id: "13554-2410131915--31799-2-12712-2410141245",
//         origin: {
//           id: "LHR",
//           entityId: "95565050",
//           name: "London Heathrow",
//           displayCode: "LHR",
//           city: "London",
//           country: "United Kingdom",
//           isHighlighted: false,
//         },
//         destination: {
//           id: "JFK",
//           entityId: "95565058",
//           name: "New York John F. Kennedy",
//           displayCode: "JFK",
//           city: "New York",
//           country: "United States",
//           isHighlighted: false,
//         },
//         durationInMinutes: 1350,
//         stopCount: 2,
//         isSmallestStops: false,
//         departure: "2024-10-13T19:15:00",
//         arrival: "2024-10-14T12:45:00",
//         timeDeltaInDays: 1,
//         carriers: {
//           marketing: [
//             {
//               id: -31799,
//               logoUrl:
//                 "https://logos.skyscnr.com/images/airlines/favicon/LX.png",
//               name: "SWISS",
//             },
//           ],
//           operationType: "fully_operated",
//         },
//         segments: [
//           {
//             id: "13554-12015-2410131915-2410132200--31799",
//             origin: {
//               flightPlaceId: "LHR",
//               displayCode: "LHR",
//               parent: {
//                 flightPlaceId: "LOND",
//                 displayCode: "LON",
//                 name: "London",
//                 type: "City",
//               },
//               name: "London Heathrow",
//               type: "Airport",
//               country: "United Kingdom",
//             },
//             destination: {
//               flightPlaceId: "GVA",
//               displayCode: "GVA",
//               parent: {
//                 flightPlaceId: "GENE",
//                 displayCode: "GVA",
//                 name: "Geneva",
//                 type: "City",
//               },
//               name: "Geneva",
//               type: "Airport",
//               country: "Switzerland",
//             },
//             departure: "2024-10-13T19:15:00",
//             arrival: "2024-10-13T22:00:00",
//             durationInMinutes: 105,
//             flightNumber: "357",
//             marketingCarrier: {
//               id: -31799,
//               name: "SWISS",
//               alternateId: "LX",
//               allianceId: -31999,
//               displayCode: "LX",
//             },
//             operatingCarrier: {
//               id: -31799,
//               name: "SWISS",
//               alternateId: "LX",
//               allianceId: -31999,
//               displayCode: "LX",
//             },
//           },
//           {
//             id: "12015-18563-2410140600-2410140645--31799",
//             origin: {
//               flightPlaceId: "GVA",
//               displayCode: "GVA",
//               parent: {
//                 flightPlaceId: "GENE",
//                 displayCode: "GVA",
//                 name: "Geneva",
//                 type: "City",
//               },
//               name: "Geneva",
//               type: "Airport",
//               country: "Switzerland",
//             },
//             destination: {
//               flightPlaceId: "ZRH",
//               displayCode: "ZRH",
//               parent: {
//                 flightPlaceId: "ZURI",
//                 displayCode: "ZRH",
//                 name: "Zurich",
//                 type: "City",
//               },
//               name: "Zurich",
//               type: "Airport",
//               country: "Switzerland",
//             },
//             departure: "2024-10-14T06:00:00",
//             arrival: "2024-10-14T06:45:00",
//             durationInMinutes: 45,
//             flightNumber: "2801",
//             marketingCarrier: {
//               id: -31799,
//               name: "SWISS",
//               alternateId: "LX",
//               allianceId: -31999,
//               displayCode: "LX",
//             },
//             operatingCarrier: {
//               id: -31799,
//               name: "SWISS",
//               alternateId: "LX",
//               allianceId: -31999,
//               displayCode: "LX",
//             },
//           },
//           {
//             id: "18563-12712-2410141000-2410141245--31799",
//             origin: {
//               flightPlaceId: "ZRH",
//               displayCode: "ZRH",
//               parent: {
//                 flightPlaceId: "ZURI",
//                 displayCode: "ZRH",
//                 name: "Zurich",
//                 type: "City",
//               },
//               name: "Zurich",
//               type: "Airport",
//               country: "Switzerland",
//             },
//             destination: {
//               flightPlaceId: "JFK",
//               displayCode: "JFK",
//               parent: {
//                 flightPlaceId: "NYCA",
//                 displayCode: "NYC",
//                 name: "New York",
//                 type: "City",
//               },
//               name: "New York John F. Kennedy",
//               type: "Airport",
//               country: "United States",
//             },
//             departure: "2024-10-14T10:00:00",
//             arrival: "2024-10-14T12:45:00",
//             durationInMinutes: 525,
//             flightNumber: "16",
//             marketingCarrier: {
//               id: -31799,
//               name: "SWISS",
//               alternateId: "LX",
//               allianceId: -31999,
//               displayCode: "LX",
//             },
//             operatingCarrier: {
//               id: -31799,
//               name: "SWISS",
//               alternateId: "LX",
//               allianceId: -31999,
//               displayCode: "LX",
//             },
//           },
//         ],
//       },
//     ],
//     isSelfTransfer: false,
//     isProtectedSelfTransfer: false,
//     farePolicy: {
//       isChangeAllowed: false,
//       isPartiallyChangeable: false,
//       isCancellationAllowed: false,
//       isPartiallyRefundable: false,
//     },
//     fareAttributes: {},
//     tags: ["third_shortest"],
//     isMashUp: false,
//     hasFlexibleOptions: false,
//     score: 0.461794,
//     pricingOptions: [
//       {
//         agentIds: ["bcom"],
//         price: {
//           updateStatus: "current",
//           amount: 10740.99,
//         },
//         items: [
//           {
//             price: {
//               updateStatus: "current",
//               amount: 10740.99,
//             },
//             segmentIds: [
//               "13554-12015-2410131915-2410132200--31799",
//               "12015-18563-2410140600-2410140645--31799",
//               "18563-12712-2410141000-2410141245--31799",
//             ],
//             bookingProposition: "PBOOK",
//             agentId: "bcom",
//             url: "/transport_deeplink/4.0/US/en-US/USD/bcom/1/13554.12712.2024-10-13/air/trava/flights?itinerary=flight|-31799|357|13554|2024-10-13T19:15|12015|2024-10-13T22:00|105|-|-|-;flight|-31799|2801|12015|2024-10-14T06:00|18563|2024-10-14T06:45|45|-|-|-;flight|-31799|16|18563|2024-10-14T10:00|12712|2024-10-14T12:45|525|-|-|-&carriers=-31799&operators=-31799;-31799;-31799&passengers=1&channel=website&cabin_class=first&fps_session_id=fc939195-260a-4138-8503-0f6e1ddc479f&ticket_price=10740.99&is_npt=false&is_multipart=false&client_id=skyscanner_website&request_id=24d14144-e16e-ebc3-3df4-d860f2d7d551&q_ids=H4sIAAAAAAAA_-NS5GJJSs7PFWLmuKUixczRo6vQMHvNDjYjJgVGC-Yq5tBgFwCplYMNIwAAAA|1935445190429256631|2&q_sources=JACQUARD&commercial_filters=false&q_datetime_utc=2024-10-13T09:29:29&pqid=true",
//           },
//         ],
//         pricingOptionId: "TUQm2Ap48Qzz",
//       },
//       {
//         agentIds: ["arus"],
//         price: {
//           updateStatus: "current",
//           amount: 10897.99,
//         },
//         items: [
//           {
//             price: {
//               updateStatus: "current",
//               amount: 10897.99,
//             },
//             segmentIds: [
//               "13554-12015-2410131915-2410132200--31799",
//               "12015-18563-2410140600-2410140645--31799",
//               "18563-12712-2410141000-2410141245--31799",
//             ],
//             bookingProposition: "PBOOK",
//             agentId: "arus",
//             url: "/transport_deeplink/4.0/US/en-US/USD/arus/1/13554.12712.2024-10-13/air/trava/flights?itinerary=flight|-31799|357|13554|2024-10-13T19:15|12015|2024-10-13T22:00|105|-|-|-;flight|-31799|2801|12015|2024-10-14T06:00|18563|2024-10-14T06:45|45|-|-|-;flight|-31799|16|18563|2024-10-14T10:00|12712|2024-10-14T12:45|525|-|-|-&carriers=-31799&operators=-31799;-31799;-31799&passengers=1&channel=website&cabin_class=first&fps_session_id=fc939195-260a-4138-8503-0f6e1ddc479f&ticket_price=10897.99&is_npt=false&is_multipart=false&client_id=skyscanner_website&request_id=24d14144-e16e-ebc3-3df4-d860f2d7d551&q_ids=H4sIAAAAAAAA_-NS5GJJLCotFmLmuKUixczRo6vQMHvNDjYjJgVGC-Yq5tBgFwBJvnCvIwAAAA|1935445190429256631|2&q_sources=JACQUARD&commercial_filters=false&q_datetime_utc=2024-10-13T09:29:29&pqid=true",
//           },
//         ],
//         pricingOptionId: "wTD3ozSObBeV",
//       },
//       {
//         agentIds: ["swis"],
//         price: {
//           updateStatus: "current",
//           amount: 0,
//         },
//         unpricedType: "itinerary_not_returned",
//         items: [
//           {
//             price: {
//               updateStatus: "current",
//               amount: 0,
//             },
//             segmentIds: [
//               "13554-12015-2410131915-2410132200--31799",
//               "12015-18563-2410140600-2410140645--31799",
//               "18563-12712-2410141000-2410141245--31799",
//             ],
//             bookingProposition: "PBOOK",
//             agentId: "swis",
//             url: "/transport_deeplink/4.0/US/en-US/USD/swis/1/13554.12712.2024-10-13/air/airli/flights_np?itinerary=flight|-31799|357|13554|2024-10-13T19:15|12015|2024-10-13T22:00|105|-|-|-;flight|-31799|2801|12015|2024-10-14T06:00|18563|2024-10-14T06:45|45|-|-|-;flight|-31799|16|18563|2024-10-14T10:00|12712|2024-10-14T12:45|525|-|-|-&carriers=-31799&operators=-31799;-31799;-31799&passengers=1&channel=website&cabin_class=first&fps_session_id=fc939195-260a-4138-8503-0f6e1ddc479f&is_npt=false&is_multipart=false&client_id=skyscanner_website&request_id=24d14144-e16e-ebc3-3df4-d860f2d7d551&pqid=false",
//           },
//         ],
//         pricingOptionId: "LYOkdEHD42Sw",
//       },
//     ],
//   },
//   {
//     id: "13554-2410131915--31799-1-12712-2410141420",
//     price: {
//       raw: 10526.99,
//       formatted: "$10,527",
//       pricingOptionId: "eQ0TkZi5YhGf",
//     },
//     legs: [
//       {
//         id: "13554-2410131915--31799-1-12712-2410141420",
//         origin: {
//           id: "LHR",
//           entityId: "95565050",
//           name: "London Heathrow",
//           displayCode: "LHR",
//           city: "London",
//           country: "United Kingdom",
//           isHighlighted: false,
//         },
//         destination: {
//           id: "JFK",
//           entityId: "95565058",
//           name: "New York John F. Kennedy",
//           displayCode: "JFK",
//           city: "New York",
//           country: "United States",
//           isHighlighted: false,
//         },
//         durationInMinutes: 1445,
//         stopCount: 1,
//         isSmallestStops: false,
//         departure: "2024-10-13T19:15:00",
//         arrival: "2024-10-14T14:20:00",
//         timeDeltaInDays: 1,
//         carriers: {
//           marketing: [
//             {
//               id: -31799,
//               logoUrl:
//                 "https://logos.skyscnr.com/images/airlines/favicon/LX.png",
//               name: "SWISS",
//             },
//           ],
//           operationType: "fully_operated",
//         },
//         segments: [
//           {
//             id: "13554-12015-2410131915-2410132200--31799",
//             origin: {
//               flightPlaceId: "LHR",
//               displayCode: "LHR",
//               parent: {
//                 flightPlaceId: "LOND",
//                 displayCode: "LON",
//                 name: "London",
//                 type: "City",
//               },
//               name: "London Heathrow",
//               type: "Airport",
//               country: "United Kingdom",
//             },
//             destination: {
//               flightPlaceId: "GVA",
//               displayCode: "GVA",
//               parent: {
//                 flightPlaceId: "GENE",
//                 displayCode: "GVA",
//                 name: "Geneva",
//                 type: "City",
//               },
//               name: "Geneva",
//               type: "Airport",
//               country: "Switzerland",
//             },
//             departure: "2024-10-13T19:15:00",
//             arrival: "2024-10-13T22:00:00",
//             durationInMinutes: 105,
//             flightNumber: "357",
//             marketingCarrier: {
//               id: -31799,
//               name: "SWISS",
//               alternateId: "LX",
//               allianceId: -31999,
//               displayCode: "LX",
//             },
//             operatingCarrier: {
//               id: -31799,
//               name: "SWISS",
//               alternateId: "LX",
//               allianceId: -31999,
//               displayCode: "LX",
//             },
//           },
//           {
//             id: "12015-12712-2410141145-2410141420--31799",
//             origin: {
//               flightPlaceId: "GVA",
//               displayCode: "GVA",
//               parent: {
//                 flightPlaceId: "GENE",
//                 displayCode: "GVA",
//                 name: "Geneva",
//                 type: "City",
//               },
//               name: "Geneva",
//               type: "Airport",
//               country: "Switzerland",
//             },
//             destination: {
//               flightPlaceId: "JFK",
//               displayCode: "JFK",
//               parent: {
//                 flightPlaceId: "NYCA",
//                 displayCode: "NYC",
//                 name: "New York",
//                 type: "City",
//               },
//               name: "New York John F. Kennedy",
//               type: "Airport",
//               country: "United States",
//             },
//             departure: "2024-10-14T11:45:00",
//             arrival: "2024-10-14T14:20:00",
//             durationInMinutes: 515,
//             flightNumber: "22",
//             marketingCarrier: {
//               id: -31799,
//               name: "SWISS",
//               alternateId: "LX",
//               allianceId: -31999,
//               displayCode: "LX",
//             },
//             operatingCarrier: {
//               id: -31799,
//               name: "SWISS",
//               alternateId: "LX",
//               allianceId: -31999,
//               displayCode: "LX",
//             },
//           },
//         ],
//       },
//     ],
//     isSelfTransfer: false,
//     isProtectedSelfTransfer: false,
//     farePolicy: {
//       isChangeAllowed: false,
//       isPartiallyChangeable: false,
//       isCancellationAllowed: false,
//       isPartiallyRefundable: false,
//     },
//     fareAttributes: {},
//     isMashUp: false,
//     hasFlexibleOptions: false,
//     score: 0.46139,
//     pricingOptions: [
//       {
//         agentIds: ["bcom"],
//         price: {
//           updateStatus: "current",
//           amount: 10526.99,
//         },
//         items: [
//           {
//             price: {
//               updateStatus: "current",
//               amount: 10526.99,
//             },
//             segmentIds: [
//               "13554-12015-2410131915-2410132200--31799",
//               "12015-12712-2410141145-2410141420--31799",
//             ],
//             bookingProposition: "PBOOK",
//             agentId: "bcom",
//             url: "/transport_deeplink/4.0/US/en-US/USD/bcom/1/13554.12712.2024-10-13/air/trava/flights?itinerary=flight|-31799|357|13554|2024-10-13T19:15|12015|2024-10-13T22:00|105|-|-|-;flight|-31799|22|12015|2024-10-14T11:45|12712|2024-10-14T14:20|515|-|-|-&carriers=-31799&operators=-31799;-31799&passengers=1&channel=website&cabin_class=first&fps_session_id=fc939195-260a-4138-8503-0f6e1ddc479f&ticket_price=10526.99&is_npt=false&is_multipart=false&client_id=skyscanner_website&request_id=24d14144-e16e-ebc3-3df4-d860f2d7d551&q_ids=H4sIAAAAAAAA_-NS5GJJSs7PFWLmuKUixczRo6vQMHvNDjYjJgVGC-Yq5tBgFwCplYMNIwAAAA|4072496172943536810|2&q_sources=JACQUARD&commercial_filters=false&q_datetime_utc=2024-10-13T09:29:29&pqid=true",
//           },
//         ],
//         pricingOptionId: "eQ0TkZi5YhGf",
//       },
//       {
//         agentIds: ["swis"],
//         price: {
//           updateStatus: "current",
//           amount: 10529.61,
//         },
//         items: [
//           {
//             price: {
//               updateStatus: "current",
//               amount: 10529.61,
//             },
//             segmentIds: [
//               "13554-12015-2410131915-2410132200--31799",
//               "12015-12712-2410141145-2410141420--31799",
//             ],
//             bookingProposition: "PBOOK",
//             agentId: "swis",
//             url: "/transport_deeplink/4.0/US/en-US/USD/swis/1/13554.12712.2024-10-13/air/airli/flights?itinerary=flight|-31799|357|13554|2024-10-13T19:15|12015|2024-10-13T22:00|105|FNCBOWW|Y|FIRST+SAVER;flight|-31799|22|12015|2024-10-14T11:45|12712|2024-10-14T14:20|515|FNCBOWW|F|FIRST+SAVER&carriers=-31799&operators=-31799;-31799&passengers=1&channel=website&cabin_class=first&fps_session_id=fc939195-260a-4138-8503-0f6e1ddc479f&ticket_price=10529.61&is_npt=false&is_multipart=false&client_id=skyscanner_website&request_id=24d14144-e16e-ebc3-3df4-d860f2d7d551&q_ids=H4sIAAAAAAAA_-OS4WIpLs8sFmLmuKUixczRo6vQMHvNDjYjJgVGC2YAqSNuGx4AAAA|2936040979694466683|2&q_sources=JACQUARD&commercial_filters=false&q_datetime_utc=2024-10-13T09:29:24&pqid=false",
//           },
//         ],
//         pricingOptionId: "qJFGGtbf-d1M",
//       },
//       {
//         agentIds: ["tlcy"],
//         price: {
//           updateStatus: "current",
//           amount: 10549.21,
//         },
//         items: [
//           {
//             price: {
//               updateStatus: "current",
//               amount: 10549.21,
//             },
//             segmentIds: [
//               "13554-12015-2410131915-2410132200--31799",
//               "12015-12712-2410141145-2410141420--31799",
//             ],
//             bookingProposition: "PBOOK",
//             agentId: "tlcy",
//             url: "/transport_deeplink/4.0/US/en-US/USD/tlcy/1/13554.12712.2024-10-13/air/trava/flights?itinerary=flight|-31799|357|13554|2024-10-13T19:15|12015|2024-10-13T22:00|105|FNCBOWW|J|FIRST+SAVER;flight|-31799|22|12015|2024-10-14T11:45|12712|2024-10-14T14:20|515|FNCBOWW|F|FIRST+SAVER&carriers=-31799&operators=-31799;-31799&passengers=1&channel=website&cabin_class=first&fps_session_id=fc939195-260a-4138-8503-0f6e1ddc479f&ticket_price=10549.21&is_npt=false&is_multipart=false&client_id=skyscanner_website&request_id=24d14144-e16e-ebc3-3df4-d860f2d7d551&q_ids=H4sIAAAAAAAA_-OS4WIpyUmuFGLmuKUixczRo6vQMHvNDjYjJgVGC2YAezpFZB4AAAA|-8496475088604465565|2&q_sources=JACQUARD&commercial_filters=false&q_datetime_utc=2024-10-13T09:29:29&pqid=true",
//           },
//         ],
//         pricingOptionId: "JNYJAXinfUod",
//       },
//       {
//         agentIds: ["orbz"],
//         price: {
//           updateStatus: "current",
//           amount: 10549.21,
//         },
//         items: [
//           {
//             price: {
//               updateStatus: "current",
//               amount: 10549.21,
//             },
//             segmentIds: [
//               "13554-12015-2410131915-2410132200--31799",
//               "12015-12712-2410141145-2410141420--31799",
//             ],
//             bookingProposition: "PBOOK",
//             agentId: "orbz",
//             url: "/transport_deeplink/4.0/US/en-US/USD/orbz/1/13554.12712.2024-10-13/air/trava/flights?itinerary=flight|-31799|357|13554|2024-10-13T19:15|12015|2024-10-13T22:00|105|FNCBOWW|J|FIRST+SAVER;flight|-31799|22|12015|2024-10-14T11:45|12712|2024-10-14T14:20|515|FNCBOWW|F|FIRST+SAVER&carriers=-31799&operators=-31799;-31799&passengers=1&channel=website&cabin_class=first&fps_session_id=fc939195-260a-4138-8503-0f6e1ddc479f&ticket_price=10549.21&is_npt=false&is_multipart=false&client_id=skyscanner_website&request_id=24d14144-e16e-ebc3-3df4-d860f2d7d551&q_ids=H4sIAAAAAAAA_-OS4WLJL0qqEmLmuKUixczRo6vQMHvNDjYjJgVGC2YAIiVugR4AAAA|-8496475088604465565|2&q_sources=JACQUARD&commercial_filters=false&q_datetime_utc=2024-10-13T09:29:29&pqid=true",
//           },
//         ],
//         pricingOptionId: "gY6HXZTRibep",
//       },
//       {
//         agentIds: ["xpus"],
//         price: {
//           updateStatus: "current",
//           amount: 10549.21,
//         },
//         items: [
//           {
//             price: {
//               updateStatus: "current",
//               amount: 10549.21,
//             },
//             segmentIds: [
//               "13554-12015-2410131915-2410132200--31799",
//               "12015-12712-2410141145-2410141420--31799",
//             ],
//             bookingProposition: "PBOOK",
//             agentId: "xpus",
//             url: "/transport_deeplink/4.0/US/en-US/USD/xpus/1/13554.12712.2024-10-13/air/trava/flights?itinerary=flight|-31799|357|13554|2024-10-13T19:15|12015|2024-10-13T22:00|105|FNCBOWW|J|FIRST+SAVER;flight|-31799|22|12015|2024-10-14T11:45|12712|2024-10-14T14:20|515|FNCBOWW|F|FIRST+SAVER&carriers=-31799&operators=-31799;-31799&passengers=1&channel=website&cabin_class=first&fps_session_id=fc939195-260a-4138-8503-0f6e1ddc479f&ticket_price=10549.21&is_npt=false&is_multipart=false&client_id=skyscanner_website&request_id=24d14144-e16e-ebc3-3df4-d860f2d7d551&q_ids=H4sIAAAAAAAA_-OS4WKpKCgtFmLmuKUixczRo6vQMHvNDjYjJgVGC2YAmcIgth4AAAA|-8496475088604465565|2&q_sources=JACQUARD&commercial_filters=false&q_datetime_utc=2024-10-13T09:29:29&pqid=true",
//           },
//         ],
//         pricingOptionId: "lKX0Ba7-6f97",
//       },
//       {
//         agentIds: ["arus"],
//         price: {
//           updateStatus: "current",
//           amount: 10683.99,
//         },
//         items: [
//           {
//             price: {
//               updateStatus: "current",
//               amount: 10683.99,
//             },
//             segmentIds: [
//               "13554-12015-2410131915-2410132200--31799",
//               "12015-12712-2410141145-2410141420--31799",
//             ],
//             bookingProposition: "PBOOK",
//             agentId: "arus",
//             url: "/transport_deeplink/4.0/US/en-US/USD/arus/1/13554.12712.2024-10-13/air/trava/flights?itinerary=flight|-31799|357|13554|2024-10-13T19:15|12015|2024-10-13T22:00|105|-|-|-;flight|-31799|22|12015|2024-10-14T11:45|12712|2024-10-14T14:20|515|-|-|-&carriers=-31799&operators=-31799;-31799&passengers=1&channel=website&cabin_class=first&fps_session_id=fc939195-260a-4138-8503-0f6e1ddc479f&ticket_price=10683.99&is_npt=false&is_multipart=false&client_id=skyscanner_website&request_id=24d14144-e16e-ebc3-3df4-d860f2d7d551&q_ids=H4sIAAAAAAAA_-NS5GJJLCotFmLmuKUixczRo6vQMHvNDjYjJgVGC-Yq5tBgFwBJvnCvIwAAAA|4072496172943536810|2&q_sources=JACQUARD&commercial_filters=false&q_datetime_utc=2024-10-13T09:29:29&pqid=true",
//           },
//         ],
//         pricingOptionId: "8I0QZ7FPbjt4",
//       },
//       {
//         agentIds: ["fnus"],
//         price: {
//           updateStatus: "current",
//           amount: 10683.99,
//         },
//         items: [
//           {
//             price: {
//               updateStatus: "current",
//               amount: 10683.99,
//             },
//             segmentIds: [
//               "13554-12015-2410131915-2410132200--31799",
//               "12015-12712-2410141145-2410141420--31799",
//             ],
//             bookingProposition: "PBOOK",
//             agentId: "fnus",
//             url: "/transport_deeplink/4.0/US/en-US/USD/fnus/1/13554.12712.2024-10-13/air/trava/flights?itinerary=flight|-31799|357|13554|2024-10-13T19:15|12015|2024-10-13T22:00|105|-|-|-;flight|-31799|22|12015|2024-10-14T11:45|12712|2024-10-14T14:20|515|-|-|-&carriers=-31799&operators=-31799;-31799&passengers=1&channel=website&cabin_class=first&fps_session_id=fc939195-260a-4138-8503-0f6e1ddc479f&ticket_price=10683.99&is_npt=false&is_multipart=false&client_id=skyscanner_website&request_id=24d14144-e16e-ebc3-3df4-d860f2d7d551&q_ids=H4sIAAAAAAAA_-NS5GJJyystFmLmuKUixczRo6vQMHvNDjYjJgVGC-Yq5tBgFwBdit4-IwAAAA|4072496172943536810|2&q_sources=JACQUARD&commercial_filters=false&q_datetime_utc=2024-10-13T09:29:29&pqid=true",
//           },
//         ],
//         pricingOptionId: "eyS9ozpvjwXQ",
//       },
//       {
//         agentIds: ["gtus"],
//         price: {
//           updateStatus: "current",
//           amount: 10687.99,
//         },
//         items: [
//           {
//             price: {
//               updateStatus: "current",
//               amount: 10687.99,
//             },
//             segmentIds: [
//               "13554-12015-2410131915-2410132200--31799",
//               "12015-12712-2410141145-2410141420--31799",
//             ],
//             bookingProposition: "PBOOK",
//             agentId: "gtus",
//             url: "/transport_deeplink/4.0/US/en-US/USD/gtus/1/13554.12712.2024-10-13/air/trava/flights?itinerary=flight|-31799|357|13554|2024-10-13T19:15|12015|2024-10-13T22:00|105|-|-|-;flight|-31799|22|12015|2024-10-14T11:45|12712|2024-10-14T14:20|515|-|-|-&carriers=-31799&operators=-31799;-31799&passengers=1&channel=website&cabin_class=first&fps_session_id=fc939195-260a-4138-8503-0f6e1ddc479f&ticket_price=10687.99&is_npt=false&is_multipart=false&client_id=skyscanner_website&request_id=24d14144-e16e-ebc3-3df4-d860f2d7d551&q_ids=H4sIAAAAAAAA_-NS5GJJLyktFmLmuKUixczRo6vQMHvNDjYjJgVGC-Yq5tBgFwCfhmIAIwAAAA|4072496172943536810|2&q_sources=JACQUARD&commercial_filters=false&q_datetime_utc=2024-10-13T09:29:28&pqid=true",
//           },
//         ],
//         pricingOptionId: "vREmXYzHTYxr",
//       },
//       {
//         agentIds: ["cust"],
//         price: {
//           updateStatus: "current",
//           amount: 10982.2,
//         },
//         items: [
//           {
//             price: {
//               updateStatus: "current",
//               amount: 10982.2,
//             },
//             segmentIds: [
//               "13554-12015-2410131915-2410132200--31799",
//               "12015-12712-2410141145-2410141420--31799",
//             ],
//             bookingProposition: "PBOOK",
//             agentId: "cust",
//             url: "/transport_deeplink/4.0/US/en-US/USD/cust/1/13554.12712.2024-10-13/air/trava/flights?itinerary=flight|-31799|357|13554|2024-10-13T19:15|12015|2024-10-13T22:00|105|-|-|-;flight|-31799|22|12015|2024-10-14T11:45|12712|2024-10-14T14:20|515|-|-|-&carriers=-31799&operators=-31799;-31799&passengers=1&channel=website&cabin_class=first&fps_session_id=fc939195-260a-4138-8503-0f6e1ddc479f&ticket_price=10982.20&is_npt=false&is_multipart=false&client_id=skyscanner_website&request_id=24d14144-e16e-ebc3-3df4-d860f2d7d551&q_ids=H4sIAAAAAAAA_-PS4GJJLi0uEWLmuKUixczRo6vQMHvNDjYjJgVGC-Yi1tQ83dDgKubQYBcA4VixPSoAAAA|-2800881519733534618|2&q_sources=JACQUARD&commercial_filters=false&q_datetime_utc=2024-10-13T09:34:52&pqid=true",
//           },
//         ],
//         pricingOptionId: "yEamS4sFr_2m",
//       },
//     ],
//   },
//   {
//     id: "13554-2410131710--31799-1-12712-2410141245",
//     price: {
//       raw: 10530.51,
//       formatted: "$10,531",
//       pricingOptionId: "dGAVA3__sKhn",
//     },
//     legs: [
//       {
//         id: "13554-2410131710--31799-1-12712-2410141245",
//         origin: {
//           id: "LHR",
//           entityId: "95565050",
//           name: "London Heathrow",
//           displayCode: "LHR",
//           city: "London",
//           country: "United Kingdom",
//           isHighlighted: false,
//         },
//         destination: {
//           id: "JFK",
//           entityId: "95565058",
//           name: "New York John F. Kennedy",
//           displayCode: "JFK",
//           city: "New York",
//           country: "United States",
//           isHighlighted: false,
//         },
//         durationInMinutes: 1475,
//         stopCount: 1,
//         isSmallestStops: false,
//         departure: "2024-10-13T17:10:00",
//         arrival: "2024-10-14T12:45:00",
//         timeDeltaInDays: 1,
//         carriers: {
//           marketing: [
//             {
//               id: -31799,
//               logoUrl:
//                 "https://logos.skyscnr.com/images/airlines/favicon/LX.png",
//               name: "SWISS",
//             },
//           ],
//           operationType: "fully_operated",
//         },
//         segments: [
//           {
//             id: "13554-18563-2410131710-2410131955--31799",
//             origin: {
//               flightPlaceId: "LHR",
//               displayCode: "LHR",
//               parent: {
//                 flightPlaceId: "LOND",
//                 displayCode: "LON",
//                 name: "London",
//                 type: "City",
//               },
//               name: "London Heathrow",
//               type: "Airport",
//               country: "United Kingdom",
//             },
//             destination: {
//               flightPlaceId: "ZRH",
//               displayCode: "ZRH",
//               parent: {
//                 flightPlaceId: "ZURI",
//                 displayCode: "ZRH",
//                 name: "Zurich",
//                 type: "City",
//               },
//               name: "Zurich",
//               type: "Airport",
//               country: "Switzerland",
//             },
//             departure: "2024-10-13T17:10:00",
//             arrival: "2024-10-13T19:55:00",
//             durationInMinutes: 105,
//             flightNumber: "325",
//             marketingCarrier: {
//               id: -31799,
//               name: "SWISS",
//               alternateId: "LX",
//               allianceId: -31999,
//               displayCode: "LX",
//             },
//             operatingCarrier: {
//               id: -31799,
//               name: "SWISS",
//               alternateId: "LX",
//               allianceId: -31999,
//               displayCode: "LX",
//             },
//           },
//           {
//             id: "18563-12712-2410141000-2410141245--31799",
//             origin: {
//               flightPlaceId: "ZRH",
//               displayCode: "ZRH",
//               parent: {
//                 flightPlaceId: "ZURI",
//                 displayCode: "ZRH",
//                 name: "Zurich",
//                 type: "City",
//               },
//               name: "Zurich",
//               type: "Airport",
//               country: "Switzerland",
//             },
//             destination: {
//               flightPlaceId: "JFK",
//               displayCode: "JFK",
//               parent: {
//                 flightPlaceId: "NYCA",
//                 displayCode: "NYC",
//                 name: "New York",
//                 type: "City",
//               },
//               name: "New York John F. Kennedy",
//               type: "Airport",
//               country: "United States",
//             },
//             departure: "2024-10-14T10:00:00",
//             arrival: "2024-10-14T12:45:00",
//             durationInMinutes: 525,
//             flightNumber: "16",
//             marketingCarrier: {
//               id: -31799,
//               name: "SWISS",
//               alternateId: "LX",
//               allianceId: -31999,
//               displayCode: "LX",
//             },
//             operatingCarrier: {
//               id: -31799,
//               name: "SWISS",
//               alternateId: "LX",
//               allianceId: -31999,
//               displayCode: "LX",
//             },
//           },
//         ],
//       },
//     ],
//     isSelfTransfer: false,
//     isProtectedSelfTransfer: false,
//     farePolicy: {
//       isChangeAllowed: false,
//       isPartiallyChangeable: false,
//       isCancellationAllowed: false,
//       isPartiallyRefundable: false,
//     },
//     fareAttributes: {},
//     isMashUp: false,
//     hasFlexibleOptions: false,
//     score: 0.450435,
//     pricingOptions: [
//       {
//         agentIds: ["tlcy"],
//         price: {
//           updateStatus: "current",
//           amount: 10530.51,
//         },
//         items: [
//           {
//             price: {
//               updateStatus: "current",
//               amount: 10530.51,
//             },
//             segmentIds: [
//               "13554-18563-2410131710-2410131955--31799",
//               "18563-12712-2410141000-2410141245--31799",
//             ],
//             bookingProposition: "PBOOK",
//             agentId: "tlcy",
//             url: "/transport_deeplink/4.0/US/en-US/USD/tlcy/1/13554.12712.2024-10-13/air/trava/flights?itinerary=flight|-31799|325|13554|2024-10-13T17:10|18563|2024-10-13T19:55|105|FNCBOWW|J|FIRST+SAVER;flight|-31799|16|18563|2024-10-14T10:00|12712|2024-10-14T12:45|525|FNCBOWW|F|FIRST+SAVER&carriers=-31799&operators=-31799;-31799&passengers=1&channel=website&cabin_class=first&fps_session_id=fc939195-260a-4138-8503-0f6e1ddc479f&ticket_price=10530.51&is_npt=false&is_multipart=false&client_id=skyscanner_website&request_id=24d14144-e16e-ebc3-3df4-d860f2d7d551&q_ids=H4sIAAAAAAAA_-OS4WIpyUmuFGLmuKUixczRo6vQMHvNDjYjJgVGC2YAezpFZB4AAAA|-1997764443176818853|2&q_sources=JACQUARD&commercial_filters=false&q_datetime_utc=2024-10-13T09:29:29&pqid=true",
//           },
//         ],
//         pricingOptionId: "dGAVA3__sKhn",
//       },
//       {
//         agentIds: ["xpus"],
//         price: {
//           updateStatus: "current",
//           amount: 10530.51,
//         },
//         items: [
//           {
//             price: {
//               updateStatus: "current",
//               amount: 10530.51,
//             },
//             segmentIds: [
//               "13554-18563-2410131710-2410131955--31799",
//               "18563-12712-2410141000-2410141245--31799",
//             ],
//             bookingProposition: "PBOOK",
//             agentId: "xpus",
//             url: "/transport_deeplink/4.0/US/en-US/USD/xpus/1/13554.12712.2024-10-13/air/trava/flights?itinerary=flight|-31799|325|13554|2024-10-13T17:10|18563|2024-10-13T19:55|105|FNCBOWW|J|FIRST+SAVER;flight|-31799|16|18563|2024-10-14T10:00|12712|2024-10-14T12:45|525|FNCBOWW|F|FIRST+SAVER&carriers=-31799&operators=-31799;-31799&passengers=1&channel=website&cabin_class=first&fps_session_id=fc939195-260a-4138-8503-0f6e1ddc479f&ticket_price=10530.51&is_npt=false&is_multipart=false&client_id=skyscanner_website&request_id=24d14144-e16e-ebc3-3df4-d860f2d7d551&q_ids=H4sIAAAAAAAA_-OS4WKpKCgtFmLmuKUixczRo6vQMHvNDjYjJgVGC2YAmcIgth4AAAA|-1997764443176818853|2&q_sources=JACQUARD&commercial_filters=false&q_datetime_utc=2024-10-13T09:29:29&pqid=true",
//           },
//         ],
//         pricingOptionId: "n5EYwYappQKL",
//       },
//       {
//         agentIds: ["orbz"],
//         price: {
//           updateStatus: "current",
//           amount: 10530.51,
//         },
//         items: [
//           {
//             price: {
//               updateStatus: "current",
//               amount: 10530.51,
//             },
//             segmentIds: [
//               "13554-18563-2410131710-2410131955--31799",
//               "18563-12712-2410141000-2410141245--31799",
//             ],
//             bookingProposition: "PBOOK",
//             agentId: "orbz",
//             url: "/transport_deeplink/4.0/US/en-US/USD/orbz/1/13554.12712.2024-10-13/air/trava/flights?itinerary=flight|-31799|325|13554|2024-10-13T17:10|18563|2024-10-13T19:55|105|FNCBOWW|J|FIRST+SAVER;flight|-31799|16|18563|2024-10-14T10:00|12712|2024-10-14T12:45|525|FNCBOWW|F|FIRST+SAVER&carriers=-31799&operators=-31799;-31799&passengers=1&channel=website&cabin_class=first&fps_session_id=fc939195-260a-4138-8503-0f6e1ddc479f&ticket_price=10530.51&is_npt=false&is_multipart=false&client_id=skyscanner_website&request_id=24d14144-e16e-ebc3-3df4-d860f2d7d551&q_ids=H4sIAAAAAAAA_-OS4WLJL0qqEmLmuKUixczRo6vQMHvNDjYjJgVGC2YAIiVugR4AAAA|-1997764443176818853|2&q_sources=JACQUARD&commercial_filters=false&q_datetime_utc=2024-10-13T09:29:29&pqid=true",
//           },
//         ],
//         pricingOptionId: "YvoNozlM46aW",
//       },
//       {
//         agentIds: ["fnus"],
//         price: {
//           updateStatus: "current",
//           amount: 10664.99,
//         },
//         items: [
//           {
//             price: {
//               updateStatus: "current",
//               amount: 10664.99,
//             },
//             segmentIds: [
//               "13554-18563-2410131710-2410131955--31799",
//               "18563-12712-2410141000-2410141245--31799",
//             ],
//             bookingProposition: "PBOOK",
//             agentId: "fnus",
//             url: "/transport_deeplink/4.0/US/en-US/USD/fnus/1/13554.12712.2024-10-13/air/trava/flights?itinerary=flight|-31799|325|13554|2024-10-13T17:10|18563|2024-10-13T19:55|105|-|-|-;flight|-31799|16|18563|2024-10-14T10:00|12712|2024-10-14T12:45|525|-|-|-&carriers=-31799&operators=-31799;-31799&passengers=1&channel=website&cabin_class=first&fps_session_id=fc939195-260a-4138-8503-0f6e1ddc479f&ticket_price=10664.99&is_npt=false&is_multipart=false&client_id=skyscanner_website&request_id=24d14144-e16e-ebc3-3df4-d860f2d7d551&q_ids=H4sIAAAAAAAA_-NS5GJJyystFmLmuKUixczRo6vQMHvNDjYjJgVGC-Yq5tBgFwBdit4-IwAAAA|2961718200133642326|2&q_sources=JACQUARD&commercial_filters=false&q_datetime_utc=2024-10-13T09:29:29&pqid=true",
//           },
//         ],
//         pricingOptionId: "dnttBk7SEmst",
//       },
//       {
//         agentIds: ["arus"],
//         price: {
//           updateStatus: "current",
//           amount: 10664.99,
//         },
//         items: [
//           {
//             price: {
//               updateStatus: "current",
//               amount: 10664.99,
//             },
//             segmentIds: [
//               "13554-18563-2410131710-2410131955--31799",
//               "18563-12712-2410141000-2410141245--31799",
//             ],
//             bookingProposition: "PBOOK",
//             agentId: "arus",
//             url: "/transport_deeplink/4.0/US/en-US/USD/arus/1/13554.12712.2024-10-13/air/trava/flights?itinerary=flight|-31799|325|13554|2024-10-13T17:10|18563|2024-10-13T19:55|105|-|-|-;flight|-31799|16|18563|2024-10-14T10:00|12712|2024-10-14T12:45|525|-|-|-&carriers=-31799&operators=-31799;-31799&passengers=1&channel=website&cabin_class=first&fps_session_id=fc939195-260a-4138-8503-0f6e1ddc479f&ticket_price=10664.99&is_npt=false&is_multipart=false&client_id=skyscanner_website&request_id=24d14144-e16e-ebc3-3df4-d860f2d7d551&q_ids=H4sIAAAAAAAA_-NS5GJJLCotFmLmuKUixczRo6vQMHvNDjYjJgVGC-Yq5tBgFwBJvnCvIwAAAA|2961718200133642326|2&q_sources=JACQUARD&commercial_filters=false&q_datetime_utc=2024-10-13T09:29:29&pqid=true",
//           },
//         ],
//         pricingOptionId: "BdedkF4ILiq7",
//       },
//       {
//         agentIds: ["cust"],
//         price: {
//           updateStatus: "current",
//           amount: 10962.8,
//         },
//         items: [
//           {
//             price: {
//               updateStatus: "current",
//               amount: 10962.8,
//             },
//             segmentIds: [
//               "13554-18563-2410131710-2410131955--31799",
//               "18563-12712-2410141000-2410141245--31799",
//             ],
//             bookingProposition: "PBOOK",
//             agentId: "cust",
//             url: "/transport_deeplink/4.0/US/en-US/USD/cust/1/13554.12712.2024-10-13/air/trava/flights?itinerary=flight|-31799|325|13554|2024-10-13T17:10|18563|2024-10-13T19:55|105|-|-|-;flight|-31799|16|18563|2024-10-14T10:00|12712|2024-10-14T12:45|525|-|-|-&carriers=-31799&operators=-31799;-31799&passengers=1&channel=website&cabin_class=first&fps_session_id=fc939195-260a-4138-8503-0f6e1ddc479f&ticket_price=10962.80&is_npt=false&is_multipart=false&client_id=skyscanner_website&request_id=24d14144-e16e-ebc3-3df4-d860f2d7d551&q_ids=H4sIAAAAAAAA_-PS4GJJLi0uEWLmuKUixczRo6vQMHvNDjYjJgVGC-Yi1tQ83dDgKubQYBcA4VixPSoAAAA|3361181130741120171|2&q_sources=JACQUARD&commercial_filters=false&q_datetime_utc=2024-10-13T09:34:52&pqid=true",
//           },
//         ],
//         pricingOptionId: "6r3sT6wfxxx3",
//       },
//       {
//         agentIds: ["swis"],
//         price: {
//           updateStatus: "current",
//           amount: 0,
//         },
//         unpricedType: "itinerary_not_returned",
//         items: [
//           {
//             price: {
//               updateStatus: "current",
//               amount: 0,
//             },
//             segmentIds: [
//               "13554-18563-2410131710-2410131955--31799",
//               "18563-12712-2410141000-2410141245--31799",
//             ],
//             bookingProposition: "PBOOK",
//             agentId: "swis",
//             url: "/transport_deeplink/4.0/US/en-US/USD/swis/1/13554.12712.2024-10-13/air/airli/flights_np?itinerary=flight|-31799|325|13554|2024-10-13T17:10|18563|2024-10-13T19:55|105|-|-|-;flight|-31799|16|18563|2024-10-14T10:00|12712|2024-10-14T12:45|525|-|-|-&carriers=-31799&operators=-31799;-31799&passengers=1&channel=website&cabin_class=first&fps_session_id=fc939195-260a-4138-8503-0f6e1ddc479f&is_npt=false&is_multipart=false&client_id=skyscanner_website&request_id=24d14144-e16e-ebc3-3df4-d860f2d7d551&pqid=false",
//           },
//         ],
//         pricingOptionId: "xEGjpYnsBk8f",
//       },
//     ],
//   },
//   {
//     id: "13554-2410132000--32332,-31799-2-12712-2410141630",
//     price: {
//       raw: 10697.99,
//       formatted: "$10,698",
//       pricingOptionId: "YsKZU63Pnya6",
//     },
//     legs: [
//       {
//         id: "13554-2410132000--32332,-31799-2-12712-2410141630",
//         origin: {
//           id: "LHR",
//           entityId: "95565050",
//           name: "London Heathrow",
//           displayCode: "LHR",
//           city: "London",
//           country: "United Kingdom",
//           isHighlighted: false,
//         },
//         destination: {
//           id: "JFK",
//           entityId: "95565058",
//           name: "New York John F. Kennedy",
//           displayCode: "JFK",
//           city: "New York",
//           country: "United States",
//           isHighlighted: false,
//         },
//         durationInMinutes: 1530,
//         stopCount: 2,
//         isSmallestStops: false,
//         departure: "2024-10-13T20:00:00",
//         arrival: "2024-10-14T16:30:00",
//         timeDeltaInDays: 1,
//         carriers: {
//           marketing: [
//             {
//               id: -32332,
//               logoUrl:
//                 "https://logos.skyscnr.com/images/airlines/favicon/EW.png",
//               name: "Eurowings",
//             },
//             {
//               id: -31799,
//               logoUrl:
//                 "https://logos.skyscnr.com/images/airlines/favicon/LX.png",
//               name: "SWISS",
//             },
//           ],
//           operationType: "fully_operated",
//         },
//         segments: [
//           {
//             id: "13554-10487-2410132000-2410132220--32332",
//             origin: {
//               flightPlaceId: "LHR",
//               displayCode: "LHR",
//               parent: {
//                 flightPlaceId: "LOND",
//                 displayCode: "LON",
//                 name: "London",
//                 type: "City",
//               },
//               name: "London Heathrow",
//               type: "Airport",
//               country: "United Kingdom",
//             },
//             destination: {
//               flightPlaceId: "CGN",
//               displayCode: "CGN",
//               parent: {
//                 flightPlaceId: "COLO",
//                 displayCode: "CGN",
//                 name: "Cologne",
//                 type: "City",
//               },
//               name: "Cologne",
//               type: "Airport",
//               country: "Germany",
//             },
//             departure: "2024-10-13T20:00:00",
//             arrival: "2024-10-13T22:20:00",
//             durationInMinutes: 80,
//             flightNumber: "469",
//             marketingCarrier: {
//               id: -32332,
//               name: "Eurowings",
//               alternateId: "EW",
//               allianceId: 0,
//               displayCode: "EW",
//             },
//             operatingCarrier: {
//               id: -32332,
//               name: "Eurowings",
//               alternateId: "EW",
//               allianceId: 0,
//               displayCode: "EW",
//             },
//           },
//           {
//             id: "10487-18563-2410140625-2410140730--31799",
//             origin: {
//               flightPlaceId: "CGN",
//               displayCode: "CGN",
//               parent: {
//                 flightPlaceId: "COLO",
//                 displayCode: "CGN",
//                 name: "Cologne",
//                 type: "City",
//               },
//               name: "Cologne",
//               type: "Airport",
//               country: "Germany",
//             },
//             destination: {
//               flightPlaceId: "ZRH",
//               displayCode: "ZRH",
//               parent: {
//                 flightPlaceId: "ZURI",
//                 displayCode: "ZRH",
//                 name: "Zurich",
//                 type: "City",
//               },
//               name: "Zurich",
//               type: "Airport",
//               country: "Switzerland",
//             },
//             departure: "2024-10-14T06:25:00",
//             arrival: "2024-10-14T07:30:00",
//             durationInMinutes: 65,
//             flightNumber: "4427",
//             marketingCarrier: {
//               id: -31799,
//               name: "SWISS",
//               alternateId: "LX",
//               allianceId: -31999,
//               displayCode: "LX",
//             },
//             operatingCarrier: {
//               id: -32332,
//               name: "Eurowings",
//               alternateId: "EW",
//               allianceId: 0,
//               displayCode: "EW",
//             },
//           },
//           {
//             id: "18563-12712-2410141320-2410141630--31799",
//             origin: {
//               flightPlaceId: "ZRH",
//               displayCode: "ZRH",
//               parent: {
//                 flightPlaceId: "ZURI",
//                 displayCode: "ZRH",
//                 name: "Zurich",
//                 type: "City",
//               },
//               name: "Zurich",
//               type: "Airport",
//               country: "Switzerland",
//             },
//             destination: {
//               flightPlaceId: "JFK",
//               displayCode: "JFK",
//               parent: {
//                 flightPlaceId: "NYCA",
//                 displayCode: "NYC",
//                 name: "New York",
//                 type: "City",
//               },
//               name: "New York John F. Kennedy",
//               type: "Airport",
//               country: "United States",
//             },
//             departure: "2024-10-14T13:20:00",
//             arrival: "2024-10-14T16:30:00",
//             durationInMinutes: 550,
//             flightNumber: "14",
//             marketingCarrier: {
//               id: -31799,
//               name: "SWISS",
//               alternateId: "LX",
//               allianceId: -31999,
//               displayCode: "LX",
//             },
//             operatingCarrier: {
//               id: -31799,
//               name: "SWISS",
//               alternateId: "LX",
//               allianceId: -31999,
//               displayCode: "LX",
//             },
//           },
//         ],
//       },
//     ],
//     isSelfTransfer: false,
//     isProtectedSelfTransfer: false,
//     farePolicy: {
//       isChangeAllowed: false,
//       isPartiallyChangeable: false,
//       isCancellationAllowed: false,
//       isPartiallyRefundable: false,
//     },
//     fareAttributes: {},
//     isMashUp: false,
//     hasFlexibleOptions: false,
//     score: 0.408006,
//     pricingOptions: [
//       {
//         agentIds: ["bcom"],
//         price: {
//           updateStatus: "current",
//           amount: 10697.99,
//         },
//         items: [
//           {
//             price: {
//               updateStatus: "current",
//               amount: 10697.99,
//             },
//             segmentIds: [
//               "13554-10487-2410132000-2410132220--32332",
//               "10487-18563-2410140625-2410140730--31799",
//               "18563-12712-2410141320-2410141630--31799",
//             ],
//             bookingProposition: "PBOOK",
//             agentId: "bcom",
//             url: "/transport_deeplink/4.0/US/en-US/USD/bcom/1/13554.12712.2024-10-13/air/trava/flights?itinerary=flight|-32332|469|13554|2024-10-13T20:00|10487|2024-10-13T22:20|80|-|-|-;flight|-31799|4427|10487|2024-10-14T06:25|18563|2024-10-14T07:30|65|-|-|-;flight|-31799|14|18563|2024-10-14T13:20|12712|2024-10-14T16:30|550|-|-|-&carriers=-32332,-31799&operators=-32332;-32332;-31799&passengers=1&channel=website&cabin_class=first&fps_session_id=fc939195-260a-4138-8503-0f6e1ddc479f&ticket_price=10697.99&is_npt=false&is_multipart=false&client_id=skyscanner_website&request_id=24d14144-e16e-ebc3-3df4-d860f2d7d551&q_ids=H4sIAAAAAAAA_-NS5GJJSs7PFWLmuKUixczRo6vQMHvNDjYjJgVGC-Yq5tBgFwCplYMNIwAAAA|-7329098162595073828|2&q_sources=JACQUARD&commercial_filters=false&q_datetime_utc=2024-10-13T09:29:29&pqid=true",
//           },
//         ],
//         pricingOptionId: "YsKZU63Pnya6",
//       },
//       {
//         agentIds: ["arus"],
//         price: {
//           updateStatus: "current",
//           amount: 10849.99,
//         },
//         items: [
//           {
//             price: {
//               updateStatus: "current",
//               amount: 10849.99,
//             },
//             segmentIds: [
//               "13554-10487-2410132000-2410132220--32332",
//               "10487-18563-2410140625-2410140730--31799",
//               "18563-12712-2410141320-2410141630--31799",
//             ],
//             bookingProposition: "PBOOK",
//             agentId: "arus",
//             url: "/transport_deeplink/4.0/US/en-US/USD/arus/1/13554.12712.2024-10-13/air/trava/flights?itinerary=flight|-32332|469|13554|2024-10-13T20:00|10487|2024-10-13T22:20|80|-|-|-;flight|-31799|4427|10487|2024-10-14T06:25|18563|2024-10-14T07:30|65|-|-|-;flight|-31799|14|18563|2024-10-14T13:20|12712|2024-10-14T16:30|550|-|-|-&carriers=-32332,-31799&operators=-32332;-32332;-31799&passengers=1&channel=website&cabin_class=first&fps_session_id=fc939195-260a-4138-8503-0f6e1ddc479f&ticket_price=10849.99&is_npt=false&is_multipart=false&client_id=skyscanner_website&request_id=24d14144-e16e-ebc3-3df4-d860f2d7d551&q_ids=H4sIAAAAAAAA_-NS5GJJLCotFmLmuKUixczRo6vQMHvNDjYjJgVGC-Yq5tBgFwBJvnCvIwAAAA|-7329098162595073828|2&q_sources=JACQUARD&commercial_filters=false&q_datetime_utc=2024-10-13T09:29:29&pqid=true",
//           },
//         ],
//         pricingOptionId: "k0ENuSB79tgJ",
//       },
//     ],
//   },
//   {
//     id: "13554-2410132000--32480,-31799-1-12712-2410141420",
//     price: {
//       raw: 14471.3,
//       formatted: "$14,472",
//       pricingOptionId: "1cwuykncjI3H",
//     },
//     legs: [
//       {
//         id: "13554-2410132000--32480,-31799-1-12712-2410141420",
//         origin: {
//           id: "LHR",
//           entityId: "95565050",
//           name: "London Heathrow",
//           displayCode: "LHR",
//           city: "London",
//           country: "United Kingdom",
//           isHighlighted: false,
//         },
//         destination: {
//           id: "JFK",
//           entityId: "95565058",
//           name: "New York John F. Kennedy",
//           displayCode: "JFK",
//           city: "New York",
//           country: "United States",
//           isHighlighted: false,
//         },
//         durationInMinutes: 1400,
//         stopCount: 1,
//         isSmallestStops: false,
//         departure: "2024-10-13T20:00:00",
//         arrival: "2024-10-14T14:20:00",
//         timeDeltaInDays: 1,
//         carriers: {
//           marketing: [
//             {
//               id: -32480,
//               logoUrl:
//                 "https://logos.skyscnr.com/images/airlines/favicon/BA.png",
//               name: "British Airways",
//             },
//             {
//               id: -31799,
//               logoUrl:
//                 "https://logos.skyscnr.com/images/airlines/favicon/LX.png",
//               name: "SWISS",
//             },
//           ],
//           operationType: "fully_operated",
//         },
//         segments: [
//           {
//             id: "13554-12015-2410132000-2410132240--32480",
//             origin: {
//               flightPlaceId: "LHR",
//               displayCode: "LHR",
//               parent: {
//                 flightPlaceId: "LOND",
//                 displayCode: "LON",
//                 name: "London",
//                 type: "City",
//               },
//               name: "London Heathrow",
//               type: "Airport",
//               country: "United Kingdom",
//             },
//             destination: {
//               flightPlaceId: "GVA",
//               displayCode: "GVA",
//               parent: {
//                 flightPlaceId: "GENE",
//                 displayCode: "GVA",
//                 name: "Geneva",
//                 type: "City",
//               },
//               name: "Geneva",
//               type: "Airport",
//               country: "Switzerland",
//             },
//             departure: "2024-10-13T20:00:00",
//             arrival: "2024-10-13T22:40:00",
//             durationInMinutes: 100,
//             flightNumber: "738",
//             marketingCarrier: {
//               id: -32480,
//               name: "British Airways",
//               alternateId: "BA",
//               allianceId: -32000,
//               displayCode: "BA",
//             },
//             operatingCarrier: {
//               id: -32480,
//               name: "British Airways",
//               alternateId: "BA",
//               allianceId: -32000,
//               displayCode: "BA",
//             },
//           },
//           {
//             id: "12015-12712-2410141145-2410141420--31799",
//             origin: {
//               flightPlaceId: "GVA",
//               displayCode: "GVA",
//               parent: {
//                 flightPlaceId: "GENE",
//                 displayCode: "GVA",
//                 name: "Geneva",
//                 type: "City",
//               },
//               name: "Geneva",
//               type: "Airport",
//               country: "Switzerland",
//             },
//             destination: {
//               flightPlaceId: "JFK",
//               displayCode: "JFK",
//               parent: {
//                 flightPlaceId: "NYCA",
//                 displayCode: "NYC",
//                 name: "New York",
//                 type: "City",
//               },
//               name: "New York John F. Kennedy",
//               type: "Airport",
//               country: "United States",
//             },
//             departure: "2024-10-14T11:45:00",
//             arrival: "2024-10-14T14:20:00",
//             durationInMinutes: 515,
//             flightNumber: "22",
//             marketingCarrier: {
//               id: -31799,
//               name: "SWISS",
//               alternateId: "LX",
//               allianceId: -31999,
//               displayCode: "LX",
//             },
//             operatingCarrier: {
//               id: -31799,
//               name: "SWISS",
//               alternateId: "LX",
//               allianceId: -31999,
//               displayCode: "LX",
//             },
//           },
//         ],
//       },
//     ],
//     isSelfTransfer: false,
//     isProtectedSelfTransfer: false,
//     farePolicy: {
//       isChangeAllowed: false,
//       isPartiallyChangeable: false,
//       isCancellationAllowed: false,
//       isPartiallyRefundable: false,
//     },
//     fareAttributes: {},
//     isMashUp: false,
//     hasFlexibleOptions: false,
//     score: 0.370722,
//     pricingOptions: [
//       {
//         agentIds: ["cust"],
//         price: {
//           updateStatus: "current",
//           amount: 14471.3,
//         },
//         items: [
//           {
//             price: {
//               updateStatus: "current",
//               amount: 14471.3,
//             },
//             segmentIds: [
//               "13554-12015-2410132000-2410132240--32480",
//               "12015-12712-2410141145-2410141420--31799",
//             ],
//             bookingProposition: "PBOOK",
//             agentId: "cust",
//             url: "/transport_deeplink/4.0/US/en-US/USD/cust/1/13554.12712.2024-10-13/air/trava/flights?itinerary=flight|-32480|738|13554|2024-10-13T20:00|12015|2024-10-13T22:40|100|-|-|-;flight|-31799|22|12015|2024-10-14T11:45|12712|2024-10-14T14:20|515|-|-|-&carriers=-32480,-31799&operators=-32480;-31799&passengers=1&channel=website&cabin_class=first&fps_session_id=fc939195-260a-4138-8503-0f6e1ddc479f&ticket_price=14471.30&is_npt=false&is_multipart=false&client_id=skyscanner_website&request_id=24d14144-e16e-ebc3-3df4-d860f2d7d551&q_ids=H4sIAAAAAAAA_-PS4GJJLi0uEWLmuKUixczRo6vQMHvNDjYjJgVGC-Yi1tQ83dDgKubQYBcA4VixPSoAAAA|2700981249109900261|2&q_sources=JACQUARD&commercial_filters=false&q_datetime_utc=2024-10-13T09:34:52&pqid=true",
//           },
//         ],
//         pricingOptionId: "1cwuykncjI3H",
//       },
//     ],
//   },
//   {
//     id: "13465-2410132015--32086,-31799-2-12712-2410141630",
//     price: {
//       raw: 14114.99,
//       formatted: "$14,115",
//       pricingOptionId: "FhU5zNueuIOL",
//     },
//     legs: [
//       {
//         id: "13465-2410132015--32086,-31799-2-12712-2410141630",
//         origin: {
//           id: "LCY",
//           entityId: "95565047",
//           name: "London City",
//           displayCode: "LCY",
//           city: "London",
//           country: "United Kingdom",
//           isHighlighted: false,
//         },
//         destination: {
//           id: "JFK",
//           entityId: "95565058",
//           name: "New York John F. Kennedy",
//           displayCode: "JFK",
//           city: "New York",
//           country: "United States",
//           isHighlighted: false,
//         },
//         durationInMinutes: 1515,
//         stopCount: 2,
//         isSmallestStops: false,
//         departure: "2024-10-13T20:15:00",
//         arrival: "2024-10-14T16:30:00",
//         timeDeltaInDays: 1,
//         carriers: {
//           marketing: [
//             {
//               id: -32086,
//               logoUrl:
//                 "https://logos.skyscnr.com/images/airlines/favicon/LG.png",
//               name: "Luxair",
//             },
//             {
//               id: -31799,
//               logoUrl:
//                 "https://logos.skyscnr.com/images/airlines/favicon/LX.png",
//               name: "SWISS",
//             },
//           ],
//           operationType: "fully_operated",
//         },
//         segments: [
//           {
//             id: "13465-13805-2410132015-2410132225--32086",
//             origin: {
//               flightPlaceId: "LCY",
//               displayCode: "LCY",
//               parent: {
//                 flightPlaceId: "LOND",
//                 displayCode: "LON",
//                 name: "London",
//                 type: "City",
//               },
//               name: "London City",
//               type: "Airport",
//               country: "United Kingdom",
//             },
//             destination: {
//               flightPlaceId: "LUX",
//               displayCode: "LUX",
//               parent: {
//                 flightPlaceId: "LUXE",
//                 displayCode: "LUX",
//                 name: "Luxembourg",
//                 type: "City",
//               },
//               name: "Luxembourg",
//               type: "Airport",
//               country: "Luxembourg",
//             },
//             departure: "2024-10-13T20:15:00",
//             arrival: "2024-10-13T22:25:00",
//             durationInMinutes: 70,
//             flightNumber: "4598",
//             marketingCarrier: {
//               id: -32086,
//               name: "Luxair",
//               alternateId: "LG",
//               allianceId: 0,
//               displayCode: "LG",
//             },
//             operatingCarrier: {
//               id: -32086,
//               name: "Luxair",
//               alternateId: "LG",
//               allianceId: 0,
//               displayCode: "LG",
//             },
//           },
//           {
//             id: "13805-18563-2410141045-2410141145--31799",
//             origin: {
//               flightPlaceId: "LUX",
//               displayCode: "LUX",
//               parent: {
//                 flightPlaceId: "LUXE",
//                 displayCode: "LUX",
//                 name: "Luxembourg",
//                 type: "City",
//               },
//               name: "Luxembourg",
//               type: "Airport",
//               country: "Luxembourg",
//             },
//             destination: {
//               flightPlaceId: "ZRH",
//               displayCode: "ZRH",
//               parent: {
//                 flightPlaceId: "ZURI",
//                 displayCode: "ZRH",
//                 name: "Zurich",
//                 type: "City",
//               },
//               name: "Zurich",
//               type: "Airport",
//               country: "Switzerland",
//             },
//             departure: "2024-10-14T10:45:00",
//             arrival: "2024-10-14T11:45:00",
//             durationInMinutes: 60,
//             flightNumber: "751",
//             marketingCarrier: {
//               id: -31799,
//               name: "SWISS",
//               alternateId: "LX",
//               allianceId: -31999,
//               displayCode: "LX",
//             },
//             operatingCarrier: {
//               id: -31799,
//               name: "SWISS",
//               alternateId: "LX",
//               allianceId: -31999,
//               displayCode: "LX",
//             },
//           },
//           {
//             id: "18563-12712-2410141320-2410141630--31799",
//             origin: {
//               flightPlaceId: "ZRH",
//               displayCode: "ZRH",
//               parent: {
//                 flightPlaceId: "ZURI",
//                 displayCode: "ZRH",
//                 name: "Zurich",
//                 type: "City",
//               },
//               name: "Zurich",
//               type: "Airport",
//               country: "Switzerland",
//             },
//             destination: {
//               flightPlaceId: "JFK",
//               displayCode: "JFK",
//               parent: {
//                 flightPlaceId: "NYCA",
//                 displayCode: "NYC",
//                 name: "New York",
//                 type: "City",
//               },
//               name: "New York John F. Kennedy",
//               type: "Airport",
//               country: "United States",
//             },
//             departure: "2024-10-14T13:20:00",
//             arrival: "2024-10-14T16:30:00",
//             durationInMinutes: 550,
//             flightNumber: "14",
//             marketingCarrier: {
//               id: -31799,
//               name: "SWISS",
//               alternateId: "LX",
//               allianceId: -31999,
//               displayCode: "LX",
//             },
//             operatingCarrier: {
//               id: -31799,
//               name: "SWISS",
//               alternateId: "LX",
//               allianceId: -31999,
//               displayCode: "LX",
//             },
//           },
//         ],
//       },
//     ],
//     isSelfTransfer: false,
//     isProtectedSelfTransfer: false,
//     farePolicy: {
//       isChangeAllowed: false,
//       isPartiallyChangeable: false,
//       isCancellationAllowed: false,
//       isPartiallyRefundable: false,
//     },
//     fareAttributes: {},
//     isMashUp: false,
//     hasFlexibleOptions: false,
//     score: 0.353677,
//     pricingOptions: [
//       {
//         agentIds: ["bcom"],
//         price: {
//           updateStatus: "current",
//           amount: 14114.99,
//         },
//         items: [
//           {
//             price: {
//               updateStatus: "current",
//               amount: 14114.99,
//             },
//             segmentIds: [
//               "13465-13805-2410132015-2410132225--32086",
//               "13805-18563-2410141045-2410141145--31799",
//               "18563-12712-2410141320-2410141630--31799",
//             ],
//             bookingProposition: "PBOOK",
//             agentId: "bcom",
//             url: "/transport_deeplink/4.0/US/en-US/USD/bcom/1/13465.12712.2024-10-13/air/trava/flights?itinerary=flight|-32086|4598|13465|2024-10-13T20:15|13805|2024-10-13T22:25|70|-|-|-;flight|-31799|751|13805|2024-10-14T10:45|18563|2024-10-14T11:45|60|-|-|-;flight|-31799|14|18563|2024-10-14T13:20|12712|2024-10-14T16:30|550|-|-|-&carriers=-32086,-31799&operators=-32086;-31799;-31799&passengers=1&channel=website&cabin_class=first&fps_session_id=fc939195-260a-4138-8503-0f6e1ddc479f&ticket_price=14114.99&is_npt=false&is_multipart=false&client_id=skyscanner_website&request_id=24d14144-e16e-ebc3-3df4-d860f2d7d551&q_ids=H4sIAAAAAAAA_-NS5GJJSs7PFWLmuKUixczRo6vQMHvNDjYjJgVGC-Yq5tBgFwCplYMNIwAAAA|-3737780765195713676|2&q_sources=JACQUARD&commercial_filters=false&q_datetime_utc=2024-10-13T09:29:29&pqid=true",
//           },
//         ],
//         pricingOptionId: "FhU5zNueuIOL",
//       },
//       {
//         agentIds: ["arus"],
//         price: {
//           updateStatus: "current",
//           amount: 14354.99,
//         },
//         items: [
//           {
//             price: {
//               updateStatus: "current",
//               amount: 14354.99,
//             },
//             segmentIds: [
//               "13465-13805-2410132015-2410132225--32086",
//               "13805-18563-2410141045-2410141145--31799",
//               "18563-12712-2410141320-2410141630--31799",
//             ],
//             bookingProposition: "PBOOK",
//             agentId: "arus",
//             url: "/transport_deeplink/4.0/US/en-US/USD/arus/1/13465.12712.2024-10-13/air/trava/flights?itinerary=flight|-32086|4598|13465|2024-10-13T20:15|13805|2024-10-13T22:25|70|-|-|-;flight|-31799|751|13805|2024-10-14T10:45|18563|2024-10-14T11:45|60|-|-|-;flight|-31799|14|18563|2024-10-14T13:20|12712|2024-10-14T16:30|550|-|-|-&carriers=-32086,-31799&operators=-32086;-31799;-31799&passengers=1&channel=website&cabin_class=first&fps_session_id=fc939195-260a-4138-8503-0f6e1ddc479f&ticket_price=14354.99&is_npt=false&is_multipart=false&client_id=skyscanner_website&request_id=24d14144-e16e-ebc3-3df4-d860f2d7d551&q_ids=H4sIAAAAAAAA_-NS5GJJLCotFmLmuKUixczRo6vQMHvNDjYjJgVGC-Yq5tBgFwBJvnCvIwAAAA|-3737780765195713676|2&q_sources=JACQUARD&commercial_filters=false&q_datetime_utc=2024-10-13T09:29:29&pqid=true",
//           },
//         ],
//         pricingOptionId: "Av7PMVBhFBOl",
//       },
//       {
//         agentIds: ["fnus"],
//         price: {
//           updateStatus: "current",
//           amount: 14354.99,
//         },
//         items: [
//           {
//             price: {
//               updateStatus: "current",
//               amount: 14354.99,
//             },
//             segmentIds: [
//               "13465-13805-2410132015-2410132225--32086",
//               "13805-18563-2410141045-2410141145--31799",
//               "18563-12712-2410141320-2410141630--31799",
//             ],
//             bookingProposition: "PBOOK",
//             agentId: "fnus",
//             url: "/transport_deeplink/4.0/US/en-US/USD/fnus/1/13465.12712.2024-10-13/air/trava/flights?itinerary=flight|-32086|4598|13465|2024-10-13T20:15|13805|2024-10-13T22:25|70|-|-|-;flight|-31799|751|13805|2024-10-14T10:45|18563|2024-10-14T11:45|60|-|-|-;flight|-31799|14|18563|2024-10-14T13:20|12712|2024-10-14T16:30|550|-|-|-&carriers=-32086,-31799&operators=-32086;-31799;-31799&passengers=1&channel=website&cabin_class=first&fps_session_id=fc939195-260a-4138-8503-0f6e1ddc479f&ticket_price=14354.99&is_npt=false&is_multipart=false&client_id=skyscanner_website&request_id=24d14144-e16e-ebc3-3df4-d860f2d7d551&q_ids=H4sIAAAAAAAA_-NS5GJJyystFmLmuKUixczRo6vQMHvNDjYjJgVGC-Yq5tBgFwBdit4-IwAAAA|-3737780765195713676|2&q_sources=JACQUARD&commercial_filters=false&q_datetime_utc=2024-10-13T09:29:29&pqid=true",
//           },
//         ],
//         pricingOptionId: "MyZa8C2TuiSc",
//       },
//       {
//         agentIds: ["bscl"],
//         price: {
//           updateStatus: "current",
//           amount: 14570.99,
//         },
//         items: [
//           {
//             price: {
//               updateStatus: "current",
//               amount: 14570.99,
//             },
//             segmentIds: [
//               "13465-13805-2410132015-2410132225--32086",
//               "13805-18563-2410141045-2410141145--31799",
//               "18563-12712-2410141320-2410141630--31799",
//             ],
//             bookingProposition: "PBOOK",
//             agentId: "bscl",
//             url: "/transport_deeplink/4.0/US/en-US/USD/bscl/1/13465.12712.2024-10-13/air/trava/flights?itinerary=flight|-32086|4598|13465|2024-10-13T20:15|13805|2024-10-13T22:25|70|-|-|-;flight|-31799|751|13805|2024-10-14T10:45|18563|2024-10-14T11:45|60|-|-|-;flight|-31799|14|18563|2024-10-14T13:20|12712|2024-10-14T16:30|550|-|-|-&carriers=-32086,-31799&operators=-32086;-31799;-31799&passengers=1&channel=website&cabin_class=first&fps_session_id=fc939195-260a-4138-8503-0f6e1ddc479f&ticket_price=14570.99&is_npt=false&is_multipart=false&client_id=skyscanner_website&request_id=24d14144-e16e-ebc3-3df4-d860f2d7d551&q_ids=H4sIAAAAAAAA_-OS4WJJKk7OEWLmuKUixczRo6vQMHvNDjYjJgVGC2YAyDnY0R4AAAA|1107724348379360091|2&q_sources=JACQUARD&commercial_filters=false&q_datetime_utc=2024-10-13T09:34:50&pqid=false",
//           },
//         ],
//         pricingOptionId: "tEVy_t5QxgM5",
//       },
//     ],
//   },
//   {
//     id: "13554-2410132205--31876-2-12712-2410151110",
//     price: {
//       raw: 26295,
//       formatted: "$26,295",
//       pricingOptionId: "t0oLoPh1HsWF",
//     },
//     legs: [
//       {
//         id: "13554-2410132205--31876-2-12712-2410151110",
//         origin: {
//           id: "LHR",
//           entityId: "95565050",
//           name: "London Heathrow",
//           displayCode: "LHR",
//           city: "London",
//           country: "United Kingdom",
//           isHighlighted: false,
//         },
//         destination: {
//           id: "JFK",
//           entityId: "95565058",
//           name: "New York John F. Kennedy",
//           displayCode: "JFK",
//           city: "New York",
//           country: "United States",
//           isHighlighted: false,
//         },
//         durationInMinutes: 2525,
//         stopCount: 2,
//         isSmallestStops: false,
//         departure: "2024-10-13T22:05:00",
//         arrival: "2024-10-15T11:10:00",
//         timeDeltaInDays: 2,
//         carriers: {
//           marketing: [
//             {
//               id: -31876,
//               logoUrl:
//                 "https://logos.skyscnr.com/images/airlines/favicon/SQ.png",
//               name: "Singapore Airlines",
//             },
//           ],
//           operationType: "fully_operated",
//         },
//         segments: [
//           {
//             id: "13554-16292-2410132205-2410141810--31876",
//             origin: {
//               flightPlaceId: "LHR",
//               displayCode: "LHR",
//               parent: {
//                 flightPlaceId: "LOND",
//                 displayCode: "LON",
//                 name: "London",
//                 type: "City",
//               },
//               name: "London Heathrow",
//               type: "Airport",
//               country: "United Kingdom",
//             },
//             destination: {
//               flightPlaceId: "SIN",
//               displayCode: "SIN",
//               parent: {
//                 flightPlaceId: "SINS",
//                 displayCode: "SIN",
//                 name: "Singapore",
//                 type: "City",
//               },
//               name: "Singapore Changi",
//               type: "Airport",
//               country: "Singapore",
//             },
//             departure: "2024-10-13T22:05:00",
//             arrival: "2024-10-14T18:10:00",
//             durationInMinutes: 785,
//             flightNumber: "321",
//             marketingCarrier: {
//               id: -31876,
//               name: "Singapore Airlines",
//               alternateId: "SQ",
//               allianceId: -31999,
//               displayCode: "SQ",
//             },
//             operatingCarrier: {
//               id: -31876,
//               name: "Singapore Airlines",
//               alternateId: "SQ",
//               allianceId: -31999,
//               displayCode: "SQ",
//             },
//           },
//           {
//             id: "16292-11616-2410142355-2410150645--31876",
//             origin: {
//               flightPlaceId: "SIN",
//               displayCode: "SIN",
//               parent: {
//                 flightPlaceId: "SINS",
//                 displayCode: "SIN",
//                 name: "Singapore",
//                 type: "City",
//               },
//               name: "Singapore Changi",
//               type: "Airport",
//               country: "Singapore",
//             },
//             destination: {
//               flightPlaceId: "FRA",
//               displayCode: "FRA",
//               parent: {
//                 flightPlaceId: "FRAN",
//                 displayCode: "FRA",
//                 name: "Frankfurt",
//                 type: "City",
//               },
//               name: "Frankfurt am Main",
//               type: "Airport",
//               country: "Germany",
//             },
//             departure: "2024-10-14T23:55:00",
//             arrival: "2024-10-15T06:45:00",
//             durationInMinutes: 770,
//             flightNumber: "26",
//             marketingCarrier: {
//               id: -31876,
//               name: "Singapore Airlines",
//               alternateId: "SQ",
//               allianceId: -31999,
//               displayCode: "SQ",
//             },
//             operatingCarrier: {
//               id: -31876,
//               name: "Singapore Airlines",
//               alternateId: "SQ",
//               allianceId: -31999,
//               displayCode: "SQ",
//             },
//           },
//           {
//             id: "11616-12712-2410150835-2410151110--31876",
//             origin: {
//               flightPlaceId: "FRA",
//               displayCode: "FRA",
//               parent: {
//                 flightPlaceId: "FRAN",
//                 displayCode: "FRA",
//                 name: "Frankfurt",
//                 type: "City",
//               },
//               name: "Frankfurt am Main",
//               type: "Airport",
//               country: "Germany",
//             },
//             destination: {
//               flightPlaceId: "JFK",
//               displayCode: "JFK",
//               parent: {
//                 flightPlaceId: "NYCA",
//                 displayCode: "NYC",
//                 name: "New York",
//                 type: "City",
//               },
//               name: "New York John F. Kennedy",
//               type: "Airport",
//               country: "United States",
//             },
//             departure: "2024-10-15T08:35:00",
//             arrival: "2024-10-15T11:10:00",
//             durationInMinutes: 515,
//             flightNumber: "26",
//             marketingCarrier: {
//               id: -31876,
//               name: "Singapore Airlines",
//               alternateId: "SQ",
//               allianceId: -31999,
//               displayCode: "SQ",
//             },
//             operatingCarrier: {
//               id: -31876,
//               name: "Singapore Airlines",
//               alternateId: "SQ",
//               allianceId: -31999,
//               displayCode: "SQ",
//             },
//           },
//         ],
//       },
//     ],
//     isSelfTransfer: false,
//     isProtectedSelfTransfer: false,
//     farePolicy: {
//       isChangeAllowed: false,
//       isPartiallyChangeable: false,
//       isCancellationAllowed: false,
//       isPartiallyRefundable: false,
//     },
//     fareAttributes: {},
//     isMashUp: false,
//     hasFlexibleOptions: false,
//     score: 0.217263,
//     pricingOptions: [
//       {
//         agentIds: ["skyp"],
//         price: {
//           updateStatus: "current",
//           amount: 26295,
//         },
//         items: [
//           {
//             price: {
//               updateStatus: "current",
//               amount: 26295,
//             },
//             segmentIds: [
//               "13554-16292-2410132205-2410141810--31876",
//               "16292-11616-2410142355-2410150645--31876",
//               "11616-12712-2410150835-2410151110--31876",
//             ],
//             bookingProposition: "PBOOK",
//             agentId: "skyp",
//             url: "/transport_deeplink/4.0/US/en-US/USD/skyp/1/13554.12712.2024-10-13/air/trava/flights?itinerary=flight|-31876|321|13554|2024-10-13T22:05|16292|2024-10-14T18:10|785|F11GBR|F|-;flight|-31876|26|16292|2024-10-14T23:55|11616|2024-10-15T06:45|770|FIFSQ|F|-;flight|-31876|26|11616|2024-10-15T08:35|12712|2024-10-15T11:10|515|FIFSQ|F|-&carriers=-31876&operators=-31876;-31876;-31876&passengers=1&channel=website&cabin_class=first&fps_session_id=fc939195-260a-4138-8503-0f6e1ddc479f&ticket_price=26295.00&is_npt=false&is_multipart=false&client_id=skyscanner_website&request_id=24d14144-e16e-ebc3-3df4-d860f2d7d551&q_ids=H4sIAAAAAAAA_-OS4WIpzq4sEGLmuKUixczRo6vQMHvNDjYjJgVGC2YAi5tBnR4AAAA|4305103702539459301|2&q_sources=JACQUARD&commercial_filters=false&q_datetime_utc=2024-10-13T09:29:35&pqid=true",
//           },
//         ],
//         pricingOptionId: "t0oLoPh1HsWF",
//       },
//       {
//         agentIds: ["sing"],
//         price: {
//           updateStatus: "current",
//           amount: 0,
//         },
//         unpricedType: "itinerary_not_returned",
//         items: [
//           {
//             price: {
//               updateStatus: "current",
//               amount: 0,
//             },
//             segmentIds: [
//               "13554-16292-2410132205-2410141810--31876",
//               "16292-11616-2410142355-2410150645--31876",
//               "11616-12712-2410150835-2410151110--31876",
//             ],
//             bookingProposition: "PBOOK",
//             agentId: "sing",
//             url: "/transport_deeplink/4.0/US/en-US/USD/sing/1/13554.12712.2024-10-13/air/airli/flights_np?itinerary=flight|-31876|321|13554|2024-10-13T22:05|16292|2024-10-14T18:10|785|-|-|-;flight|-31876|26|16292|2024-10-14T23:55|11616|2024-10-15T06:45|770|-|-|-;flight|-31876|26|11616|2024-10-15T08:35|12712|2024-10-15T11:10|515|-|-|-&carriers=-31876&operators=-31876;-31876;-31876&passengers=1&channel=website&cabin_class=first&fps_session_id=fc939195-260a-4138-8503-0f6e1ddc479f&is_npt=false&is_multipart=false&client_id=skyscanner_website&request_id=24d14144-e16e-ebc3-3df4-d860f2d7d551&pqid=false",
//           },
//         ],
//         pricingOptionId: "v9vamlvNcOys",
//       },
//     ],
//   },
//   {
//     id: "16574-2410132110--32348,-31799-2-12712-2410151245",
//     price: {
//       raw: 25515,
//       formatted: "$25,515",
//       pricingOptionId: "ObnI8OIr3hlE",
//     },
//     legs: [
//       {
//         id: "16574-2410132110--32348,-31799-2-12712-2410151245",
//         origin: {
//           id: "STN",
//           entityId: "95565052",
//           name: "London Stansted",
//           displayCode: "STN",
//           city: "London",
//           country: "United Kingdom",
//           isHighlighted: false,
//         },
//         destination: {
//           id: "JFK",
//           entityId: "95565058",
//           name: "New York John F. Kennedy",
//           displayCode: "JFK",
//           city: "New York",
//           country: "United States",
//           isHighlighted: false,
//         },
//         durationInMinutes: 2675,
//         stopCount: 2,
//         isSmallestStops: false,
//         departure: "2024-10-13T21:10:00",
//         arrival: "2024-10-15T12:45:00",
//         timeDeltaInDays: 2,
//         carriers: {
//           marketing: [
//             {
//               id: -32348,
//               logoUrl:
//                 "https://logos.skyscnr.com/images/airlines/favicon/EK.png",
//               name: "Emirates",
//             },
//             {
//               id: -31799,
//               logoUrl:
//                 "https://logos.skyscnr.com/images/airlines/favicon/LX.png",
//               name: "SWISS",
//             },
//           ],
//           operationType: "fully_operated",
//         },
//         segments: [
//           {
//             id: "16574-11182-2410132110-2410140710--32348",
//             origin: {
//               flightPlaceId: "STN",
//               displayCode: "STN",
//               parent: {
//                 flightPlaceId: "LOND",
//                 displayCode: "LON",
//                 name: "London",
//                 type: "City",
//               },
//               name: "London Stansted",
//               type: "Airport",
//               country: "United Kingdom",
//             },
//             destination: {
//               flightPlaceId: "DXB",
//               displayCode: "DXB",
//               parent: {
//                 flightPlaceId: "DXBA",
//                 displayCode: "DXB",
//                 name: "Dubai",
//                 type: "City",
//               },
//               name: "Dubai",
//               type: "Airport",
//               country: "United Arab Emirates",
//             },
//             departure: "2024-10-13T21:10:00",
//             arrival: "2024-10-14T07:10:00",
//             durationInMinutes: 420,
//             flightNumber: "68",
//             marketingCarrier: {
//               id: -32348,
//               name: "Emirates",
//               alternateId: "EK",
//               allianceId: 0,
//               displayCode: "EK",
//             },
//             operatingCarrier: {
//               id: -32348,
//               name: "Emirates",
//               alternateId: "EK",
//               allianceId: 0,
//               displayCode: "EK",
//             },
//           },
//           {
//             id: "11182-18563-2410140840-2410141320--32348",
//             origin: {
//               flightPlaceId: "DXB",
//               displayCode: "DXB",
//               parent: {
//                 flightPlaceId: "DXBA",
//                 displayCode: "DXB",
//                 name: "Dubai",
//                 type: "City",
//               },
//               name: "Dubai",
//               type: "Airport",
//               country: "United Arab Emirates",
//             },
//             destination: {
//               flightPlaceId: "ZRH",
//               displayCode: "ZRH",
//               parent: {
//                 flightPlaceId: "ZURI",
//                 displayCode: "ZRH",
//                 name: "Zurich",
//                 type: "City",
//               },
//               name: "Zurich",
//               type: "Airport",
//               country: "Switzerland",
//             },
//             departure: "2024-10-14T08:40:00",
//             arrival: "2024-10-14T13:20:00",
//             durationInMinutes: 400,
//             flightNumber: "87",
//             marketingCarrier: {
//               id: -32348,
//               name: "Emirates",
//               alternateId: "EK",
//               allianceId: 0,
//               displayCode: "EK",
//             },
//             operatingCarrier: {
//               id: -32348,
//               name: "Emirates",
//               alternateId: "EK",
//               allianceId: 0,
//               displayCode: "EK",
//             },
//           },
//           {
//             id: "18563-12712-2410151000-2410151245--31799",
//             origin: {
//               flightPlaceId: "ZRH",
//               displayCode: "ZRH",
//               parent: {
//                 flightPlaceId: "ZURI",
//                 displayCode: "ZRH",
//                 name: "Zurich",
//                 type: "City",
//               },
//               name: "Zurich",
//               type: "Airport",
//               country: "Switzerland",
//             },
//             destination: {
//               flightPlaceId: "JFK",
//               displayCode: "JFK",
//               parent: {
//                 flightPlaceId: "NYCA",
//                 displayCode: "NYC",
//                 name: "New York",
//                 type: "City",
//               },
//               name: "New York John F. Kennedy",
//               type: "Airport",
//               country: "United States",
//             },
//             departure: "2024-10-15T10:00:00",
//             arrival: "2024-10-15T12:45:00",
//             durationInMinutes: 525,
//             flightNumber: "16",
//             marketingCarrier: {
//               id: -31799,
//               name: "SWISS",
//               alternateId: "LX",
//               allianceId: -31999,
//               displayCode: "LX",
//             },
//             operatingCarrier: {
//               id: -31799,
//               name: "SWISS",
//               alternateId: "LX",
//               allianceId: -31999,
//               displayCode: "LX",
//             },
//           },
//         ],
//       },
//     ],
//     isSelfTransfer: false,
//     isProtectedSelfTransfer: true,
//     farePolicy: {
//       isChangeAllowed: false,
//       isPartiallyChangeable: false,
//       isCancellationAllowed: false,
//       isPartiallyRefundable: false,
//     },
//     fareAttributes: {},
//     isMashUp: false,
//     hasFlexibleOptions: false,
//     score: 0.170756,
//     pricingOptions: [
//       {
//         agentIds: ["skyp"],
//         price: {
//           updateStatus: "current",
//           amount: 25515,
//         },
//         items: [
//           {
//             price: {
//               updateStatus: "current",
//               amount: 25515,
//             },
//             segmentIds: [
//               "16574-11182-2410132110-2410140710--32348",
//               "11182-18563-2410140840-2410141320--32348",
//               "18563-12712-2410151000-2410151245--31799",
//             ],
//             bookingProposition: "PBOOK",
//             agentId: "skyp",
//             url: "/transport_deeplink/4.0/US/en-US/USD/skyp/1/16574.12712.2024-10-13/air/trava/flights?itinerary=flight|-32348|68|16574|2024-10-13T21:10|11182|2024-10-14T07:10|420|AEEESGB1|A|-;flight|-32348|87|11182|2024-10-14T08:40|18563|2024-10-14T13:20|400|AEEESCH1|A|-;flight|-31799|16|18563|2024-10-15T10:00|12712|2024-10-15T12:45|525|FNCBOWW|F|-&carriers=-32348,-31799&operators=-32348;-32348;-31799&passengers=1&channel=website&cabin_class=first&fps_session_id=fc939195-260a-4138-8503-0f6e1ddc479f&ticket_price=25515.00&is_npt=false&is_multipart=false&client_id=skyscanner_website&request_id=24d14144-e16e-ebc3-3df4-d860f2d7d551&q_ids=H4sIAAAAAAAA_-OS4WIpzq4sEGLmuKUixczRo6vQMHvNDjYjJgVGC2YAi5tBnR4AAAA|-62622034338716850|2&q_sources=JACQUARD&commercial_filters=false&q_datetime_utc=2024-10-13T09:29:35&transfer_protection=protected&pqid=true",
//           },
//         ],
//         pricingOptionId: "ObnI8OIr3hlE",
//       },
//     ],
//   },
//   {
//     id: "13554-2410132010--32317,-31799-2-11442-2410152010",
//     price: {
//       raw: 42374,
//       formatted: "$42,374",
//       pricingOptionId: "7mgKRS6PxBCk",
//     },
//     legs: [
//       {
//         id: "13554-2410132010--32317,-31799-2-11442-2410152010",
//         origin: {
//           id: "LHR",
//           entityId: "95565050",
//           name: "London Heathrow",
//           displayCode: "LHR",
//           city: "London",
//           country: "United Kingdom",
//           isHighlighted: false,
//         },
//         destination: {
//           id: "EWR",
//           entityId: "95565059",
//           name: "New York Newark",
//           displayCode: "EWR",
//           city: "New York",
//           country: "United States",
//           isHighlighted: false,
//         },
//         durationInMinutes: 3180,
//         stopCount: 2,
//         isSmallestStops: false,
//         departure: "2024-10-13T20:10:00",
//         arrival: "2024-10-15T20:10:00",
//         timeDeltaInDays: 2,
//         carriers: {
//           marketing: [
//             {
//               id: -32317,
//               logoUrl:
//                 "https://logos.skyscnr.com/images/airlines/favicon/AY.png",
//               name: "Finnair",
//             },
//             {
//               id: -31799,
//               logoUrl:
//                 "https://logos.skyscnr.com/images/airlines/favicon/LX.png",
//               name: "SWISS",
//             },
//           ],
//           operating: [
//             {
//               id: -32480,
//               logoUrl:
//                 "https://logos.skyscnr.com/images/airlines/favicon/BA.png",
//               name: "British Airways",
//             },
//             {
//               id: -31799,
//               logoUrl:
//                 "https://logos.skyscnr.com/images/airlines/favicon/LX.png",
//               name: "SWISS",
//             },
//           ],
//           operationType: "partially_operated",
//         },
//         segments: [
//           {
//             id: "13554-10081-2410132010-2410132245--32317",
//             origin: {
//               flightPlaceId: "LHR",
//               displayCode: "LHR",
//               parent: {
//                 flightPlaceId: "LOND",
//                 displayCode: "LON",
//                 name: "London",
//                 type: "City",
//               },
//               name: "London Heathrow",
//               type: "Airport",
//               country: "United Kingdom",
//             },
//             destination: {
//               flightPlaceId: "BOS",
//               displayCode: "BOS",
//               parent: {
//                 flightPlaceId: "BOSA",
//                 displayCode: "BOS",
//                 name: "Boston",
//                 type: "City",
//               },
//               name: "Boston Logan International",
//               type: "Airport",
//               country: "United States",
//             },
//             departure: "2024-10-13T20:10:00",
//             arrival: "2024-10-13T22:45:00",
//             durationInMinutes: 455,
//             flightNumber: "5439",
//             marketingCarrier: {
//               id: -32317,
//               name: "Finnair",
//               alternateId: "AY",
//               allianceId: -32000,
//               displayCode: "AY",
//             },
//             operatingCarrier: {
//               id: -32480,
//               name: "British Airways",
//               alternateId: "BA",
//               allianceId: -32000,
//               displayCode: "BA",
//             },
//           },
//           {
//             id: "10081-18563-2410142145-2410151110--31799",
//             origin: {
//               flightPlaceId: "BOS",
//               displayCode: "BOS",
//               parent: {
//                 flightPlaceId: "BOSA",
//                 displayCode: "BOS",
//                 name: "Boston",
//                 type: "City",
//               },
//               name: "Boston Logan International",
//               type: "Airport",
//               country: "United States",
//             },
//             destination: {
//               flightPlaceId: "ZRH",
//               displayCode: "ZRH",
//               parent: {
//                 flightPlaceId: "ZURI",
//                 displayCode: "ZRH",
//                 name: "Zurich",
//                 type: "City",
//               },
//               name: "Zurich",
//               type: "Airport",
//               country: "Switzerland",
//             },
//             departure: "2024-10-14T21:45:00",
//             arrival: "2024-10-15T11:10:00",
//             durationInMinutes: 445,
//             flightNumber: "53",
//             marketingCarrier: {
//               id: -31799,
//               name: "SWISS",
//               alternateId: "LX",
//               allianceId: -31999,
//               displayCode: "LX",
//             },
//             operatingCarrier: {
//               id: -31799,
//               name: "SWISS",
//               alternateId: "LX",
//               allianceId: -31999,
//               displayCode: "LX",
//             },
//           },
//           {
//             id: "18563-11442-2410151720-2410152010--31799",
//             origin: {
//               flightPlaceId: "ZRH",
//               displayCode: "ZRH",
//               parent: {
//                 flightPlaceId: "ZURI",
//                 displayCode: "ZRH",
//                 name: "Zurich",
//                 type: "City",
//               },
//               name: "Zurich",
//               type: "Airport",
//               country: "Switzerland",
//             },
//             destination: {
//               flightPlaceId: "EWR",
//               displayCode: "EWR",
//               parent: {
//                 flightPlaceId: "NYCA",
//                 displayCode: "NYC",
//                 name: "New York",
//                 type: "City",
//               },
//               name: "New York Newark",
//               type: "Airport",
//               country: "United States",
//             },
//             departure: "2024-10-15T17:20:00",
//             arrival: "2024-10-15T20:10:00",
//             durationInMinutes: 530,
//             flightNumber: "18",
//             marketingCarrier: {
//               id: -31799,
//               name: "SWISS",
//               alternateId: "LX",
//               allianceId: -31999,
//               displayCode: "LX",
//             },
//             operatingCarrier: {
//               id: -31799,
//               name: "SWISS",
//               alternateId: "LX",
//               allianceId: -31999,
//               displayCode: "LX",
//             },
//           },
//         ],
//       },
//     ],
//     isSelfTransfer: false,
//     isProtectedSelfTransfer: true,
//     farePolicy: {
//       isChangeAllowed: false,
//       isPartiallyChangeable: false,
//       isCancellationAllowed: false,
//       isPartiallyRefundable: false,
//     },
//     fareAttributes: {},
//     isMashUp: false,
//     hasFlexibleOptions: false,
//     score: 0.057133,
//     pricingOptions: [
//       {
//         agentIds: ["skyp"],
//         price: {
//           updateStatus: "current",
//           amount: 42374,
//         },
//         items: [
//           {
//             price: {
//               updateStatus: "current",
//               amount: 42374,
//             },
//             segmentIds: [
//               "13554-10081-2410132010-2410132245--32317",
//               "10081-18563-2410142145-2410151110--31799",
//               "18563-11442-2410151720-2410152010--31799",
//             ],
//             bookingProposition: "PBOOK",
//             agentId: "skyp",
//             url: "/transport_deeplink/4.0/US/en-US/USD/skyp/1/13554.11442.2024-10-13/air/trava/flights?itinerary=flight|-32317|5439|13554|2024-10-13T20:10|10081|2024-10-13T22:45|455|F1N0C9S0|F|-;flight|-31799|53|10081|2024-10-14T21:45|18563|2024-10-15T11:10|445|FR1|F|-;flight|-31799|18|18563|2024-10-15T17:20|11442|2024-10-15T20:10|530|FR1|F|-&carriers=-32317,-31799&operators=-32480;-31799;-31799&passengers=1&channel=website&cabin_class=first&fps_session_id=fc939195-260a-4138-8503-0f6e1ddc479f&ticket_price=42374.00&is_npt=false&is_multipart=false&client_id=skyscanner_website&request_id=24d14144-e16e-ebc3-3df4-d860f2d7d551&q_ids=H4sIAAAAAAAA_-OS4WIpzq4sEGLmuKUixczRo6vQMHvNDjYjJgVGC2YAi5tBnR4AAAA|-8364913773352036977|2&q_sources=JACQUARD&commercial_filters=false&q_datetime_utc=2024-10-13T09:29:35&transfer_protection=protected&pqid=true",
//           },
//         ],
//         pricingOptionId: "7mgKRS6PxBCk",
//       },
//     ],
//   },
// ];

const FlightsPage = () => {
  const [flights, setFlights] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const handleSearch = async (params) => {
    setIsLoading(true);
    const results = await fetchFlights(params);
    // console.log({ results });
    setFlights(results || []); // Update to point to the correct structure
    setIsLoading(false);
  };

  return (
    <div className="flex flex-col justify-center">
      <img
        className="max-h-[300px]"
        src="https://www.gstatic.com/travel-frontend/animation/hero/flights_nc_4.svg"
      />
      <Typography className="z-10 !-mt-10 text-center" variant="h3">
        Flights
      </Typography>
      <SearchForm onSearch={handleSearch} />
      <FlightResults flights={flights} isLoading={isLoading} />
    </div>
  );
};

export default FlightsPage;
