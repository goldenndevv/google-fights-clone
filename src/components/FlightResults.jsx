import { KeyboardArrowDown, RefreshRounded } from "@mui/icons-material";
import { IconButton } from "@mui/material";
import moment from "moment";
import React from "react";

// const RESULT = [
//   {
//     id: "9629-2410141622--32348-2-10002-2410160245",
//     price: {
//       raw: 20069.59,
//       formatted: "$20,070",
//       pricingOptionId: "lBSjnuA8r0m4",
//     },
//     legs: [
//       {
//         id: "9629-2410141622--32348-2-10002-2410160245",
//         origin: {
//           id: "AUS",
//           entityId: "95673643",
//           name: "Austin-Bergstrom",
//           displayCode: "AUS",
//           city: "Austin",
//           country: "United States",
//           isHighlighted: false,
//         },
//         destination: {
//           id: "BLR",
//           entityId: "95673351",
//           name: "Bengaluru",
//           displayCode: "BLR",
//           city: "Bengaluru",
//           country: "India",
//           isHighlighted: false,
//         },
//         durationInMinutes: 1433,
//         stopCount: 2,
//         isSmallestStops: false,
//         departure: "2024-10-14T16:22:00",
//         arrival: "2024-10-16T02:45:00",
//         timeDeltaInDays: 2,
//         carriers: {
//           marketing: [
//             {
//               id: -32348,
//               logoUrl:
//                 "https://logos.skyscnr.com/images/airlines/favicon/EK.png",
//               name: "Emirates",
//             },
//           ],
//           operating: [
//             {
//               id: -31722,
//               logoUrl:
//                 "https://logos.skyscnr.com/images/airlines/favicon/UA.png",
//               name: "United",
//             },
//           ],
//           operationType: "partially_operated",
//         },
//         segments: [
//           {
//             id: "9629-12389-2410141622-2410141725--32348",
//             origin: {
//               flightPlaceId: "AUS",
//               displayCode: "AUS",
//               parent: {
//                 flightPlaceId: "AUSA",
//                 displayCode: "AUS",
//                 name: "Austin",
//                 type: "City",
//               },
//               name: "Austin-Bergstrom",
//               type: "Airport",
//               country: "United States",
//             },
//             destination: {
//               flightPlaceId: "IAH",
//               displayCode: "IAH",
//               parent: {
//                 flightPlaceId: "HOUA",
//                 displayCode: "HOU",
//                 name: "Houston",
//                 type: "City",
//               },
//               name: "Houston George Bush Intercntl.",
//               type: "Airport",
//               country: "United States",
//             },
//             departure: "2024-10-14T16:22:00",
//             arrival: "2024-10-14T17:25:00",
//             durationInMinutes: 63,
//             flightNumber: "6009",
//             marketingCarrier: {
//               id: -32348,
//               name: "Emirates",
//               alternateId: "EK",
//               allianceId: 0,
//               displayCode: "EK",
//             },
//             operatingCarrier: {
//               id: -31722,
//               name: "United",
//               alternateId: "UA",
//               allianceId: -31999,
//               displayCode: "UA",
//             },
//           },
//           {
//             id: "12389-11182-2410141955-2410151945--32348",
//             origin: {
//               flightPlaceId: "IAH",
//               displayCode: "IAH",
//               parent: {
//                 flightPlaceId: "HOUA",
//                 displayCode: "HOU",
//                 name: "Houston",
//                 type: "City",
//               },
//               name: "Houston George Bush Intercntl.",
//               type: "Airport",
//               country: "United States",
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
//             departure: "2024-10-14T19:55:00",
//             arrival: "2024-10-15T19:45:00",
//             durationInMinutes: 890,
//             flightNumber: "212",
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
//             id: "11182-10002-2410152115-2410160245--32348",
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
//               flightPlaceId: "BLR",
//               displayCode: "BLR",
//               parent: {
//                 flightPlaceId: "IBLR",
//                 displayCode: "BLR",
//                 name: "Bengaluru",
//                 type: "City",
//               },
//               name: "Bengaluru",
//               type: "Airport",
//               country: "India",
//             },
//             departure: "2024-10-15T21:15:00",
//             arrival: "2024-10-16T02:45:00",
//             durationInMinutes: 240,
//             flightNumber: "568",
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
//         agentIds: ["cust"],
//         price: {
//           updateStatus: "current",
//           amount: 20069.59,
//         },
//         items: [
//           {
//             price: {
//               updateStatus: "current",
//               amount: 20069.59,
//             },
//             segmentIds: [
//               "9629-12389-2410141622-2410141725--32348",
//               "12389-11182-2410141955-2410151945--32348",
//               "11182-10002-2410152115-2410160245--32348",
//             ],
//             bookingProposition: "PBOOK",
//             agentId: "cust",
//             url: "/transport_deeplink/4.0/US/en-US/USD/cust/1/9629.10002.2024-10-14/air/trava/flights?itinerary=flight|-32348|6009|9629|2024-10-14T16:22|12389|2024-10-14T17:25|63|-|-|-;flight|-32348|212|12389|2024-10-14T19:55|11182|2024-10-15T19:45|890|-|-|-;flight|-32348|568|11182|2024-10-15T21:15|10002|2024-10-16T02:45|240|-|-|-&carriers=-32348&operators=-31722;-32348;-32348&passengers=1&channel=website&cabin_class=first&fps_session_id=7db00d32-e89f-4ee7-a95f-1c06a11f87bb&ticket_price=20069.59&is_npt=false&is_multipart=false&client_id=skyscanner_website&request_id=dee41384-651f-e405-fb57-45f9feddef46&q_ids=H4sIAAAAAAAA_-PS4GJJLi0uEWLmmOstxcwxyU-hYd_GHWxGTAqMFsxFrKl5uqHBVcyhwS4A3_I7sCoAAAA|-6359895999541217813|2&q_sources=JACQUARD&commercial_filters=false&q_datetime_utc=2024-10-14T15:59:12&pqid=true",
//           },
//         ],
//         pricingOptionId: "lBSjnuA8r0m4",
//       },
//       {
//         agentIds: ["emir"],
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
//               "9629-12389-2410141622-2410141725--32348",
//               "12389-11182-2410141955-2410151945--32348",
//               "11182-10002-2410152115-2410160245--32348",
//             ],
//             bookingProposition: "PBOOK",
//             agentId: "emir",
//             url: "/transport_deeplink/4.0/US/en-US/USD/emir/1/9629.10002.2024-10-14/air/airli/flights_np?itinerary=flight|-32348|6009|9629|2024-10-14T16:22|12389|2024-10-14T17:25|63|-|-|-;flight|-32348|212|12389|2024-10-14T19:55|11182|2024-10-15T19:45|890|-|-|-;flight|-32348|568|11182|2024-10-15T21:15|10002|2024-10-16T02:45|240|-|-|-&carriers=-32348&operators=-31722;-32348;-32348&passengers=1&channel=website&cabin_class=first&fps_session_id=7db00d32-e89f-4ee7-a95f-1c06a11f87bb&is_npt=false&is_multipart=false&client_id=skyscanner_website&request_id=dee41384-651f-e405-fb57-45f9feddef46&pqid=false",
//           },
//         ],
//         pricingOptionId: "z0Jes0bykEGK",
//       },
//     ],
//   },
//   {
//     id: "9629-2410141730--32090-2-10002-2410170120",
//     price: {
//       raw: 16345.8,
//       formatted: "$16,346",
//       pricingOptionId: "ZEDOKfqMfebN",
//     },
//     legs: [
//       {
//         id: "9629-2410141730--32090-2-10002-2410170120",
//         origin: {
//           id: "AUS",
//           entityId: "95673643",
//           name: "Austin-Bergstrom",
//           displayCode: "AUS",
//           city: "Austin",
//           country: "United States",
//           isHighlighted: false,
//         },
//         destination: {
//           id: "BLR",
//           entityId: "95673351",
//           name: "Bengaluru",
//           displayCode: "BLR",
//           city: "Bengaluru",
//           country: "India",
//           isHighlighted: false,
//         },
//         durationInMinutes: 2720,
//         stopCount: 2,
//         isSmallestStops: false,
//         departure: "2024-10-14T17:30:00",
//         arrival: "2024-10-17T01:20:00",
//         timeDeltaInDays: 3,
//         carriers: {
//           marketing: [
//             {
//               id: -32090,
//               logoUrl:
//                 "https://logos.skyscnr.com/images/airlines/favicon/LH.png",
//               name: "Lufthansa",
//             },
//           ],
//           operating: [
//             {
//               id: -31722,
//               logoUrl:
//                 "https://logos.skyscnr.com/images/airlines/favicon/UA.png",
//               name: "United",
//             },
//           ],
//           operationType: "partially_operated",
//         },
//         segments: [
//           {
//             id: "9629-15062-2410141730-2410142020--32090",
//             origin: {
//               flightPlaceId: "AUS",
//               displayCode: "AUS",
//               parent: {
//                 flightPlaceId: "AUSA",
//                 displayCode: "AUS",
//                 name: "Austin",
//                 type: "City",
//               },
//               name: "Austin-Bergstrom",
//               type: "Airport",
//               country: "United States",
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
//             departure: "2024-10-14T17:30:00",
//             arrival: "2024-10-14T20:20:00",
//             durationInMinutes: 170,
//             flightNumber: "7861",
//             marketingCarrier: {
//               id: -32090,
//               name: "Lufthansa",
//               alternateId: "LH",
//               allianceId: -31999,
//               displayCode: "LH",
//             },
//             operatingCarrier: {
//               id: -31722,
//               name: "United",
//               alternateId: "UA",
//               allianceId: -31999,
//               displayCode: "UA",
//             },
//           },
//           {
//             id: "15062-11616-2410151545-2410160720--32090",
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
//             departure: "2024-10-15T15:45:00",
//             arrival: "2024-10-16T07:20:00",
//             durationInMinutes: 515,
//             flightNumber: "431",
//             marketingCarrier: {
//               id: -32090,
//               name: "Lufthansa",
//               alternateId: "LH",
//               allianceId: -31999,
//               displayCode: "LH",
//             },
//             operatingCarrier: {
//               id: -32090,
//               name: "Lufthansa",
//               alternateId: "LH",
//               allianceId: -31999,
//               displayCode: "LH",
//             },
//           },
//           {
//             id: "11616-10002-2410161300-2410170120--32090",
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
//               flightPlaceId: "BLR",
//               displayCode: "BLR",
//               parent: {
//                 flightPlaceId: "IBLR",
//                 displayCode: "BLR",
//                 name: "Bengaluru",
//                 type: "City",
//               },
//               name: "Bengaluru",
//               type: "Airport",
//               country: "India",
//             },
//             departure: "2024-10-16T13:00:00",
//             arrival: "2024-10-17T01:20:00",
//             durationInMinutes: 530,
//             flightNumber: "754",
//             marketingCarrier: {
//               id: -32090,
//               name: "Lufthansa",
//               alternateId: "LH",
//               allianceId: -31999,
//               displayCode: "LH",
//             },
//             operatingCarrier: {
//               id: -32090,
//               name: "Lufthansa",
//               alternateId: "LH",
//               allianceId: -31999,
//               displayCode: "LH",
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
//     tags: ["cheapest", "second_shortest"],
//     isMashUp: false,
//     hasFlexibleOptions: false,
//     score: 0.656843,
//     pricingOptions: [
//       {
//         agentIds: ["bcom"],
//         price: {
//           updateStatus: "current",
//           amount: 16345.8,
//         },
//         items: [
//           {
//             price: {
//               updateStatus: "current",
//               amount: 16345.8,
//             },
//             segmentIds: [
//               "9629-15062-2410141730-2410142020--32090",
//               "15062-11616-2410151545-2410160720--32090",
//               "11616-10002-2410161300-2410170120--32090",
//             ],
//             bookingProposition: "PBOOK",
//             agentId: "bcom",
//             url: "/transport_deeplink/4.0/US/en-US/USD/bcom/1/9629.10002.2024-10-14/air/trava/flights?itinerary=flight|-32090|7861|9629|2024-10-14T17:30|15062|2024-10-14T20:20|170|-|-|-;flight|-32090|431|15062|2024-10-15T15:45|11616|2024-10-16T07:20|515|-|-|-;flight|-32090|754|11616|2024-10-16T13:00|10002|2024-10-17T01:20|530|-|-|-&carriers=-32090&operators=-31722;-32090;-32090&passengers=1&channel=website&cabin_class=first&fps_session_id=7db00d32-e89f-4ee7-a95f-1c06a11f87bb&ticket_price=16345.80&is_npt=false&is_multipart=false&client_id=skyscanner_website&request_id=dee41384-651f-e405-fb57-45f9feddef46&q_ids=H4sIAAAAAAAA_-NS5GJJSs7PFWLmmOstxcwxyU-hYd_GHWxGTAqMFsxVzKHBLgDHYhCLIwAAAA|8543709455265056091|2&q_sources=JACQUARD&commercial_filters=false&q_datetime_utc=2024-10-14T15:57:37&pqid=true",
//           },
//         ],
//         pricingOptionId: "ZEDOKfqMfebN",
//       },
//       {
//         agentIds: ["jfus"],
//         price: {
//           updateStatus: "current",
//           amount: 16468.12,
//         },
//         items: [
//           {
//             price: {
//               updateStatus: "current",
//               amount: 16468.12,
//             },
//             segmentIds: [
//               "9629-15062-2410141730-2410142020--32090",
//               "15062-11616-2410151545-2410160720--32090",
//               "11616-10002-2410161300-2410170120--32090",
//             ],
//             bookingProposition: "PBOOK",
//             agentId: "jfus",
//             url: "/transport_deeplink/4.0/US/en-US/USD/jfus/1/9629.10002.2024-10-14/air/trava/flights?itinerary=flight|-32090|7861|9629|2024-10-14T17:30|15062|2024-10-14T20:20|170|F1|J|-;flight|-32090|431|15062|2024-10-15T15:45|11616|2024-10-16T07:20|515|F1|F|-;flight|-32090|754|11616|2024-10-16T13:00|10002|2024-10-17T01:20|530|F1|F|-&carriers=-32090&operators=-31722;-32090;-32090&passengers=1&channel=website&cabin_class=first&fps_session_id=7db00d32-e89f-4ee7-a95f-1c06a11f87bb&ticket_price=16468.12&is_npt=false&is_multipart=false&client_id=skyscanner_website&request_id=dee41384-651f-e405-fb57-45f9feddef46&q_ids=H4sIAAAAAAAA_-OS4WLJSistFmLmmOstxcwxyU-hYd_GHWxGTAqMFswA0yCdxh4AAAA|-1291590953503637471|2&q_sources=JACQUARD&commercial_filters=false&q_datetime_utc=2024-10-14T15:57:36&pqid=false",
//           },
//         ],
//         pricingOptionId: "ziGEgbq3_W2H",
//       },
//       {
//         agentIds: ["fnus"],
//         price: {
//           updateStatus: "current",
//           amount: 16669.99,
//         },
//         items: [
//           {
//             price: {
//               updateStatus: "current",
//               amount: 16669.99,
//             },
//             segmentIds: [
//               "9629-15062-2410141730-2410142020--32090",
//               "15062-11616-2410151545-2410160720--32090",
//               "11616-10002-2410161300-2410170120--32090",
//             ],
//             bookingProposition: "PBOOK",
//             agentId: "fnus",
//             url: "/transport_deeplink/4.0/US/en-US/USD/fnus/1/9629.10002.2024-10-14/air/trava/flights?itinerary=flight|-32090|7861|9629|2024-10-14T17:30|15062|2024-10-14T20:20|170|-|-|-;flight|-32090|431|15062|2024-10-15T15:45|11616|2024-10-16T07:20|515|-|-|-;flight|-32090|754|11616|2024-10-16T13:00|10002|2024-10-17T01:20|530|-|-|-&carriers=-32090&operators=-31722;-32090;-32090&passengers=1&channel=website&cabin_class=first&fps_session_id=7db00d32-e89f-4ee7-a95f-1c06a11f87bb&ticket_price=16669.99&is_npt=false&is_multipart=false&client_id=skyscanner_website&request_id=dee41384-651f-e405-fb57-45f9feddef46&q_ids=H4sIAAAAAAAA_-NS5GJJyystFmLmmOstxcwxyU-hYd_GHWxGTAqMFsxVzKHBLgAzfU24IwAAAA|8543709455265056091|2&q_sources=JACQUARD&commercial_filters=false&q_datetime_utc=2024-10-14T15:57:36&pqid=true",
//           },
//         ],
//         pricingOptionId: "Li2NpzLh6xWR",
//       },
//       {
//         agentIds: ["arus"],
//         price: {
//           updateStatus: "current",
//           amount: 16678.99,
//         },
//         items: [
//           {
//             price: {
//               updateStatus: "current",
//               amount: 16678.99,
//             },
//             segmentIds: [
//               "9629-15062-2410141730-2410142020--32090",
//               "15062-11616-2410151545-2410160720--32090",
//               "11616-10002-2410161300-2410170120--32090",
//             ],
//             bookingProposition: "PBOOK",
//             agentId: "arus",
//             url: "/transport_deeplink/4.0/US/en-US/USD/arus/1/9629.10002.2024-10-14/air/trava/flights?itinerary=flight|-32090|7861|9629|2024-10-14T17:30|15062|2024-10-14T20:20|170|-|-|-;flight|-32090|431|15062|2024-10-15T15:45|11616|2024-10-16T07:20|515|-|-|-;flight|-32090|754|11616|2024-10-16T13:00|10002|2024-10-17T01:20|530|-|-|-&carriers=-32090&operators=-31722;-32090;-32090&passengers=1&channel=website&cabin_class=first&fps_session_id=7db00d32-e89f-4ee7-a95f-1c06a11f87bb&ticket_price=16678.99&is_npt=false&is_multipart=false&client_id=skyscanner_website&request_id=dee41384-651f-e405-fb57-45f9feddef46&q_ids=H4sIAAAAAAAA_-NS5GJJLCotFmLmmOstxcwxyU-hYd_GHWxGTAqMFsxVzKHBLgAnSeMpIwAAAA|8543709455265056091|2&q_sources=JACQUARD&commercial_filters=false&q_datetime_utc=2024-10-14T15:57:36&pqid=true",
//           },
//         ],
//         pricingOptionId: "wPYQFwHGPp3G",
//       },
//       {
//         agentIds: ["cust"],
//         price: {
//           updateStatus: "current",
//           amount: 17825.32,
//         },
//         items: [
//           {
//             price: {
//               updateStatus: "current",
//               amount: 17825.32,
//             },
//             segmentIds: [
//               "9629-15062-2410141730-2410142020--32090",
//               "15062-11616-2410151545-2410160720--32090",
//               "11616-10002-2410161300-2410170120--32090",
//             ],
//             bookingProposition: "PBOOK",
//             agentId: "cust",
//             url: "/transport_deeplink/4.0/US/en-US/USD/cust/1/9629.10002.2024-10-14/air/trava/flights?itinerary=flight|-32090|7861|9629|2024-10-14T17:30|15062|2024-10-14T20:20|170|-|-|-;flight|-32090|431|15062|2024-10-15T15:45|11616|2024-10-16T07:20|515|-|-|-;flight|-32090|754|11616|2024-10-16T13:00|10002|2024-10-17T01:20|530|-|-|-&carriers=-32090&operators=-31722;-32090;-32090&passengers=1&channel=website&cabin_class=first&fps_session_id=7db00d32-e89f-4ee7-a95f-1c06a11f87bb&ticket_price=17825.32&is_npt=false&is_multipart=false&client_id=skyscanner_website&request_id=dee41384-651f-e405-fb57-45f9feddef46&q_ids=H4sIAAAAAAAA_-PS4GJJLi0uEWLmmOstxcwxyU-hYd_GHWxGTAqMFsxFrKl5uqHBVcyhwS4A3_I7sCoAAAA|3704071500338001757|2&q_sources=JACQUARD&commercial_filters=false&q_datetime_utc=2024-10-14T15:59:12&pqid=true",
//           },
//         ],
//         pricingOptionId: "4Jgvr8fvACdQ",
//       },
//       {
//         agentIds: ["luft"],
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
//               "9629-15062-2410141730-2410142020--32090",
//               "15062-11616-2410151545-2410160720--32090",
//               "11616-10002-2410161300-2410170120--32090",
//             ],
//             bookingProposition: "PBOOK",
//             agentId: "luft",
//             url: "/transport_deeplink/4.0/US/en-US/USD/luft/1/9629.10002.2024-10-14/air/airli/flights_np?itinerary=flight|-32090|7861|9629|2024-10-14T17:30|15062|2024-10-14T20:20|170|-|-|-;flight|-32090|431|15062|2024-10-15T15:45|11616|2024-10-16T07:20|515|-|-|-;flight|-32090|754|11616|2024-10-16T13:00|10002|2024-10-17T01:20|530|-|-|-&carriers=-32090&operators=-31722;-32090;-32090&passengers=1&channel=website&cabin_class=first&fps_session_id=7db00d32-e89f-4ee7-a95f-1c06a11f87bb&is_npt=false&is_multipart=false&client_id=skyscanner_website&request_id=dee41384-651f-e405-fb57-45f9feddef46&pqid=false",
//           },
//         ],
//         pricingOptionId: "VayEiAIqDdN5",
//       },
//     ],
//   },
//   {
//     id: "9629-2410141640--32090-2-10002-2410170120",
//     price: {
//       raw: 16679.99,
//       formatted: "$16,680",
//       pricingOptionId: "OT1JrhPpIDA9",
//     },
//     legs: [
//       {
//         id: "9629-2410141640--32090-2-10002-2410170120",
//         origin: {
//           id: "AUS",
//           entityId: "95673643",
//           name: "Austin-Bergstrom",
//           displayCode: "AUS",
//           city: "Austin",
//           country: "United States",
//           isHighlighted: false,
//         },
//         destination: {
//           id: "BLR",
//           entityId: "95673351",
//           name: "Bengaluru",
//           displayCode: "BLR",
//           city: "Bengaluru",
//           country: "India",
//           isHighlighted: false,
//         },
//         durationInMinutes: 2770,
//         stopCount: 2,
//         isSmallestStops: false,
//         departure: "2024-10-14T16:40:00",
//         arrival: "2024-10-17T01:20:00",
//         timeDeltaInDays: 3,
//         carriers: {
//           marketing: [
//             {
//               id: -32090,
//               logoUrl:
//                 "https://logos.skyscnr.com/images/airlines/favicon/LH.png",
//               name: "Lufthansa",
//             },
//           ],
//           operating: [
//             {
//               id: -31722,
//               logoUrl:
//                 "https://logos.skyscnr.com/images/airlines/favicon/UA.png",
//               name: "United",
//             },
//           ],
//           operationType: "partially_operated",
//         },
//         segments: [
//           {
//             id: "9629-12387-2410141640-2410142055--32090",
//             origin: {
//               flightPlaceId: "AUS",
//               displayCode: "AUS",
//               parent: {
//                 flightPlaceId: "AUSA",
//                 displayCode: "AUS",
//                 name: "Austin",
//                 type: "City",
//               },
//               name: "Austin-Bergstrom",
//               type: "Airport",
//               country: "United States",
//             },
//             destination: {
//               flightPlaceId: "IAD",
//               displayCode: "IAD",
//               parent: {
//                 flightPlaceId: "WASA",
//                 displayCode: "WAS",
//                 name: "Washington, D.C.",
//                 type: "City",
//               },
//               name: "Washington Dulles",
//               type: "Airport",
//               country: "United States",
//             },
//             departure: "2024-10-14T16:40:00",
//             arrival: "2024-10-14T20:55:00",
//             durationInMinutes: 195,
//             flightNumber: "7549",
//             marketingCarrier: {
//               id: -32090,
//               name: "Lufthansa",
//               alternateId: "LH",
//               allianceId: -31999,
//               displayCode: "LH",
//             },
//             operatingCarrier: {
//               id: -31722,
//               name: "United",
//               alternateId: "UA",
//               allianceId: -31999,
//               displayCode: "UA",
//             },
//           },
//           {
//             id: "12387-11616-2410151800-2410160805--32090",
//             origin: {
//               flightPlaceId: "IAD",
//               displayCode: "IAD",
//               parent: {
//                 flightPlaceId: "WASA",
//                 displayCode: "WAS",
//                 name: "Washington, D.C.",
//                 type: "City",
//               },
//               name: "Washington Dulles",
//               type: "Airport",
//               country: "United States",
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
//             departure: "2024-10-15T18:00:00",
//             arrival: "2024-10-16T08:05:00",
//             durationInMinutes: 485,
//             flightNumber: "419",
//             marketingCarrier: {
//               id: -32090,
//               name: "Lufthansa",
//               alternateId: "LH",
//               allianceId: -31999,
//               displayCode: "LH",
//             },
//             operatingCarrier: {
//               id: -32090,
//               name: "Lufthansa",
//               alternateId: "LH",
//               allianceId: -31999,
//               displayCode: "LH",
//             },
//           },
//           {
//             id: "11616-10002-2410161300-2410170120--32090",
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
//               flightPlaceId: "BLR",
//               displayCode: "BLR",
//               parent: {
//                 flightPlaceId: "IBLR",
//                 displayCode: "BLR",
//                 name: "Bengaluru",
//                 type: "City",
//               },
//               name: "Bengaluru",
//               type: "Airport",
//               country: "India",
//             },
//             departure: "2024-10-16T13:00:00",
//             arrival: "2024-10-17T01:20:00",
//             durationInMinutes: 530,
//             flightNumber: "754",
//             marketingCarrier: {
//               id: -32090,
//               name: "Lufthansa",
//               alternateId: "LH",
//               allianceId: -31999,
//               displayCode: "LH",
//             },
//             operatingCarrier: {
//               id: -32090,
//               name: "Lufthansa",
//               alternateId: "LH",
//               allianceId: -31999,
//               displayCode: "LH",
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
//     score: 0.56265,
//     pricingOptions: [
//       {
//         agentIds: ["fnus"],
//         price: {
//           updateStatus: "current",
//           amount: 16679.99,
//         },
//         items: [
//           {
//             price: {
//               updateStatus: "current",
//               amount: 16679.99,
//             },
//             segmentIds: [
//               "9629-12387-2410141640-2410142055--32090",
//               "12387-11616-2410151800-2410160805--32090",
//               "11616-10002-2410161300-2410170120--32090",
//             ],
//             bookingProposition: "PBOOK",
//             agentId: "fnus",
//             url: "/transport_deeplink/4.0/US/en-US/USD/fnus/1/9629.10002.2024-10-14/air/trava/flights?itinerary=flight|-32090|7549|9629|2024-10-14T16:40|12387|2024-10-14T20:55|195|-|-|-;flight|-32090|419|12387|2024-10-15T18:00|11616|2024-10-16T08:05|485|-|-|-;flight|-32090|754|11616|2024-10-16T13:00|10002|2024-10-17T01:20|530|-|-|-&carriers=-32090&operators=-31722;-32090;-32090&passengers=1&channel=website&cabin_class=first&fps_session_id=7db00d32-e89f-4ee7-a95f-1c06a11f87bb&ticket_price=16679.99&is_npt=false&is_multipart=false&client_id=skyscanner_website&request_id=dee41384-651f-e405-fb57-45f9feddef46&q_ids=H4sIAAAAAAAA_-NS5GJJyystFmLmmOstxcwxyU-hYd_GHWxGTAqMFsxVzKHBLgAzfU24IwAAAA|-3229138732399264840|2&q_sources=JACQUARD&commercial_filters=false&q_datetime_utc=2024-10-14T15:57:36&pqid=true",
//           },
//         ],
//         pricingOptionId: "OT1JrhPpIDA9",
//       },
//       {
//         agentIds: ["gtus"],
//         price: {
//           updateStatus: "current",
//           amount: 16679.99,
//         },
//         items: [
//           {
//             price: {
//               updateStatus: "current",
//               amount: 16679.99,
//             },
//             segmentIds: [
//               "9629-12387-2410141640-2410142055--32090",
//               "12387-11616-2410151800-2410160805--32090",
//               "11616-10002-2410161300-2410170120--32090",
//             ],
//             bookingProposition: "PBOOK",
//             agentId: "gtus",
//             url: "/transport_deeplink/4.0/US/en-US/USD/gtus/1/9629.10002.2024-10-14/air/trava/flights?itinerary=flight|-32090|7549|9629|2024-10-14T16:40|12387|2024-10-14T20:55|195|-|-|-;flight|-32090|419|12387|2024-10-15T18:00|11616|2024-10-16T08:05|485|-|-|-;flight|-32090|754|11616|2024-10-16T13:00|10002|2024-10-17T01:20|530|-|-|-&carriers=-32090&operators=-31722;-32090;-32090&passengers=1&channel=website&cabin_class=first&fps_session_id=7db00d32-e89f-4ee7-a95f-1c06a11f87bb&ticket_price=16679.99&is_npt=false&is_multipart=false&client_id=skyscanner_website&request_id=dee41384-651f-e405-fb57-45f9feddef46&q_ids=H4sIAAAAAAAA_-NS5GJJLyktFmLmmOstxcwxyU-hYd_GHWxGTAqMFsxVzKHBLgDxcfGGIwAAAA|-3229138732399264840|2&q_sources=JACQUARD&commercial_filters=false&q_datetime_utc=2024-10-14T15:57:36&pqid=true",
//           },
//         ],
//         pricingOptionId: "oGsDB7Ken1rM",
//       },
//       {
//         agentIds: ["arus"],
//         price: {
//           updateStatus: "current",
//           amount: 16681.99,
//         },
//         items: [
//           {
//             price: {
//               updateStatus: "current",
//               amount: 16681.99,
//             },
//             segmentIds: [
//               "9629-12387-2410141640-2410142055--32090",
//               "12387-11616-2410151800-2410160805--32090",
//               "11616-10002-2410161300-2410170120--32090",
//             ],
//             bookingProposition: "PBOOK",
//             agentId: "arus",
//             url: "/transport_deeplink/4.0/US/en-US/USD/arus/1/9629.10002.2024-10-14/air/trava/flights?itinerary=flight|-32090|7549|9629|2024-10-14T16:40|12387|2024-10-14T20:55|195|-|-|-;flight|-32090|419|12387|2024-10-15T18:00|11616|2024-10-16T08:05|485|-|-|-;flight|-32090|754|11616|2024-10-16T13:00|10002|2024-10-17T01:20|530|-|-|-&carriers=-32090&operators=-31722;-32090;-32090&passengers=1&channel=website&cabin_class=first&fps_session_id=7db00d32-e89f-4ee7-a95f-1c06a11f87bb&ticket_price=16681.99&is_npt=false&is_multipart=false&client_id=skyscanner_website&request_id=dee41384-651f-e405-fb57-45f9feddef46&q_ids=H4sIAAAAAAAA_-NS5GJJLCotFmLmmOstxcwxyU-hYd_GHWxGTAqMFsxVzKHBLgAnSeMpIwAAAA|-3229138732399264840|2&q_sources=JACQUARD&commercial_filters=false&q_datetime_utc=2024-10-14T15:57:36&pqid=true",
//           },
//         ],
//         pricingOptionId: "gqxSFzuWHxo4",
//       },
//       {
//         agentIds: ["cust"],
//         price: {
//           updateStatus: "current",
//           amount: 17861.34,
//         },
//         items: [
//           {
//             price: {
//               updateStatus: "current",
//               amount: 17861.34,
//             },
//             segmentIds: [
//               "9629-12387-2410141640-2410142055--32090",
//               "12387-11616-2410151800-2410160805--32090",
//               "11616-10002-2410161300-2410170120--32090",
//             ],
//             bookingProposition: "PBOOK",
//             agentId: "cust",
//             url: "/transport_deeplink/4.0/US/en-US/USD/cust/1/9629.10002.2024-10-14/air/trava/flights?itinerary=flight|-32090|7549|9629|2024-10-14T16:40|12387|2024-10-14T20:55|195|-|-|-;flight|-32090|419|12387|2024-10-15T18:00|11616|2024-10-16T08:05|485|-|-|-;flight|-32090|754|11616|2024-10-16T13:00|10002|2024-10-17T01:20|530|-|-|-&carriers=-32090&operators=-31722;-32090;-32090&passengers=1&channel=website&cabin_class=first&fps_session_id=7db00d32-e89f-4ee7-a95f-1c06a11f87bb&ticket_price=17861.34&is_npt=false&is_multipart=false&client_id=skyscanner_website&request_id=dee41384-651f-e405-fb57-45f9feddef46&q_ids=H4sIAAAAAAAA_-PS4GJJLi0uEWLmmOstxcwxyU-hYd_GHWxGTAqMFsxFrKl5uqHBVcyhwS4A3_I7sCoAAAA|3828479345124930028|2&q_sources=JACQUARD&commercial_filters=false&q_datetime_utc=2024-10-14T15:59:12&pqid=true",
//           },
//         ],
//         pricingOptionId: "JOjiLDll8hvc",
//       },
//       {
//         agentIds: ["luft"],
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
//               "9629-12387-2410141640-2410142055--32090",
//               "12387-11616-2410151800-2410160805--32090",
//               "11616-10002-2410161300-2410170120--32090",
//             ],
//             bookingProposition: "PBOOK",
//             agentId: "luft",
//             url: "/transport_deeplink/4.0/US/en-US/USD/luft/1/9629.10002.2024-10-14/air/airli/flights_np?itinerary=flight|-32090|7549|9629|2024-10-14T16:40|12387|2024-10-14T20:55|195|-|-|-;flight|-32090|419|12387|2024-10-15T18:00|11616|2024-10-16T08:05|485|-|-|-;flight|-32090|754|11616|2024-10-16T13:00|10002|2024-10-17T01:20|530|-|-|-&carriers=-32090&operators=-31722;-32090;-32090&passengers=1&channel=website&cabin_class=first&fps_session_id=7db00d32-e89f-4ee7-a95f-1c06a11f87bb&is_npt=false&is_multipart=false&client_id=skyscanner_website&request_id=dee41384-651f-e405-fb57-45f9feddef46&pqid=false",
//           },
//         ],
//         pricingOptionId: "fou1Q1-BwJaO",
//       },
//     ],
//   },
//   {
//     id: "9629-2410141405--32090-2-10002-2410170120",
//     price: {
//       raw: 16527.93,
//       formatted: "$16,528",
//       pricingOptionId: "gq9gsHo83fqP",
//     },
//     legs: [
//       {
//         id: "9629-2410141405--32090-2-10002-2410170120",
//         origin: {
//           id: "AUS",
//           entityId: "95673643",
//           name: "Austin-Bergstrom",
//           displayCode: "AUS",
//           city: "Austin",
//           country: "United States",
//           isHighlighted: false,
//         },
//         destination: {
//           id: "BLR",
//           entityId: "95673351",
//           name: "Bengaluru",
//           displayCode: "BLR",
//           city: "Bengaluru",
//           country: "India",
//           isHighlighted: false,
//         },
//         durationInMinutes: 2925,
//         stopCount: 2,
//         isSmallestStops: false,
//         departure: "2024-10-14T14:05:00",
//         arrival: "2024-10-17T01:20:00",
//         timeDeltaInDays: 3,
//         carriers: {
//           marketing: [
//             {
//               id: -32090,
//               logoUrl:
//                 "https://logos.skyscnr.com/images/airlines/favicon/LH.png",
//               name: "Lufthansa",
//             },
//           ],
//           operating: [
//             {
//               id: -31722,
//               logoUrl:
//                 "https://logos.skyscnr.com/images/airlines/favicon/UA.png",
//               name: "United",
//             },
//           ],
//           operationType: "partially_operated",
//         },
//         segments: [
//           {
//             id: "9629-11442-2410141405-2410141851--32090",
//             origin: {
//               flightPlaceId: "AUS",
//               displayCode: "AUS",
//               parent: {
//                 flightPlaceId: "AUSA",
//                 displayCode: "AUS",
//                 name: "Austin",
//                 type: "City",
//               },
//               name: "Austin-Bergstrom",
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
//             departure: "2024-10-14T14:05:00",
//             arrival: "2024-10-14T18:51:00",
//             durationInMinutes: 226,
//             flightNumber: "7534",
//             marketingCarrier: {
//               id: -32090,
//               name: "Lufthansa",
//               alternateId: "LH",
//               allianceId: -31999,
//               displayCode: "LH",
//             },
//             operatingCarrier: {
//               id: -31722,
//               name: "United",
//               alternateId: "UA",
//               allianceId: -31999,
//               displayCode: "UA",
//             },
//           },
//           {
//             id: "11442-11616-2410151800-2410160730--32090",
//             origin: {
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
//             departure: "2024-10-15T18:00:00",
//             arrival: "2024-10-16T07:30:00",
//             durationInMinutes: 450,
//             flightNumber: "403",
//             marketingCarrier: {
//               id: -32090,
//               name: "Lufthansa",
//               alternateId: "LH",
//               allianceId: -31999,
//               displayCode: "LH",
//             },
//             operatingCarrier: {
//               id: -32090,
//               name: "Lufthansa",
//               alternateId: "LH",
//               allianceId: -31999,
//               displayCode: "LH",
//             },
//           },
//           {
//             id: "11616-10002-2410161300-2410170120--32090",
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
//               flightPlaceId: "BLR",
//               displayCode: "BLR",
//               parent: {
//                 flightPlaceId: "IBLR",
//                 displayCode: "BLR",
//                 name: "Bengaluru",
//                 type: "City",
//               },
//               name: "Bengaluru",
//               type: "Airport",
//               country: "India",
//             },
//             departure: "2024-10-16T13:00:00",
//             arrival: "2024-10-17T01:20:00",
//             durationInMinutes: 530,
//             flightNumber: "754",
//             marketingCarrier: {
//               id: -32090,
//               name: "Lufthansa",
//               alternateId: "LH",
//               allianceId: -31999,
//               displayCode: "LH",
//             },
//             operatingCarrier: {
//               id: -32090,
//               name: "Lufthansa",
//               alternateId: "LH",
//               allianceId: -31999,
//               displayCode: "LH",
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
//     tags: ["third_cheapest"],
//     isMashUp: false,
//     hasFlexibleOptions: false,
//     score: 0.484478,
//     pricingOptions: [
//       {
//         agentIds: ["jfus"],
//         price: {
//           updateStatus: "current",
//           amount: 16527.93,
//         },
//         items: [
//           {
//             price: {
//               updateStatus: "current",
//               amount: 16527.93,
//             },
//             segmentIds: [
//               "9629-11442-2410141405-2410141851--32090",
//               "11442-11616-2410151800-2410160730--32090",
//               "11616-10002-2410161300-2410170120--32090",
//             ],
//             bookingProposition: "PBOOK",
//             agentId: "jfus",
//             url: "/transport_deeplink/4.0/US/en-US/USD/jfus/1/9629.10002.2024-10-14/air/trava/flights?itinerary=flight|-32090|7534|9629|2024-10-14T14:05|11442|2024-10-14T18:51|226|F1|Y|-;flight|-32090|403|11442|2024-10-15T18:00|11616|2024-10-16T07:30|450|F1|F|-;flight|-32090|754|11616|2024-10-16T13:00|10002|2024-10-17T01:20|530|F1|F|-&carriers=-32090&operators=-31722;-32090;-32090&passengers=1&channel=website&cabin_class=first&fps_session_id=7db00d32-e89f-4ee7-a95f-1c06a11f87bb&ticket_price=16527.93&is_npt=false&is_multipart=false&client_id=skyscanner_website&request_id=dee41384-651f-e405-fb57-45f9feddef46&q_ids=H4sIAAAAAAAA_-OS4WLJSistFmLmmOstxcwxyU-hYd_GHWxGTAqMFswA0yCdxh4AAAA|4174074602037948727|2&q_sources=JACQUARD&commercial_filters=false&q_datetime_utc=2024-10-14T15:57:36&pqid=false",
//           },
//         ],
//         pricingOptionId: "gq9gsHo83fqP",
//       },
//       {
//         agentIds: ["cust"],
//         price: {
//           updateStatus: "current",
//           amount: 18094.8,
//         },
//         items: [
//           {
//             price: {
//               updateStatus: "current",
//               amount: 18094.8,
//             },
//             segmentIds: [
//               "9629-11442-2410141405-2410141851--32090",
//               "11442-11616-2410151800-2410160730--32090",
//               "11616-10002-2410161300-2410170120--32090",
//             ],
//             bookingProposition: "PBOOK",
//             agentId: "cust",
//             url: "/transport_deeplink/4.0/US/en-US/USD/cust/1/9629.10002.2024-10-14/air/trava/flights?itinerary=flight|-32090|7534|9629|2024-10-14T14:05|11442|2024-10-14T18:51|226|-|-|-;flight|-32090|403|11442|2024-10-15T18:00|11616|2024-10-16T07:30|450|-|-|-;flight|-32090|754|11616|2024-10-16T13:00|10002|2024-10-17T01:20|530|-|-|-&carriers=-32090&operators=-31722;-32090;-32090&passengers=1&channel=website&cabin_class=first&fps_session_id=7db00d32-e89f-4ee7-a95f-1c06a11f87bb&ticket_price=18094.80&is_npt=false&is_multipart=false&client_id=skyscanner_website&request_id=dee41384-651f-e405-fb57-45f9feddef46&q_ids=H4sIAAAAAAAA_-PS4GJJLi0uEWLmmOstxcwxyU-hYd_GHWxGTAqMFsxFrKl5uqHBVcyhwS4A3_I7sCoAAAA|-2281472902355223306|2&q_sources=JACQUARD&commercial_filters=false&q_datetime_utc=2024-10-14T15:59:12&pqid=true",
//           },
//         ],
//         pricingOptionId: "-jfXUepwwmC0",
//       },
//       {
//         agentIds: ["luft"],
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
//               "9629-11442-2410141405-2410141851--32090",
//               "11442-11616-2410151800-2410160730--32090",
//               "11616-10002-2410161300-2410170120--32090",
//             ],
//             bookingProposition: "PBOOK",
//             agentId: "luft",
//             url: "/transport_deeplink/4.0/US/en-US/USD/luft/1/9629.10002.2024-10-14/air/airli/flights_np?itinerary=flight|-32090|7534|9629|2024-10-14T14:05|11442|2024-10-14T18:51|226|-|-|-;flight|-32090|403|11442|2024-10-15T18:00|11616|2024-10-16T07:30|450|-|-|-;flight|-32090|754|11616|2024-10-16T13:00|10002|2024-10-17T01:20|530|-|-|-&carriers=-32090&operators=-31722;-32090;-32090&passengers=1&channel=website&cabin_class=first&fps_session_id=7db00d32-e89f-4ee7-a95f-1c06a11f87bb&is_npt=false&is_multipart=false&client_id=skyscanner_website&request_id=dee41384-651f-e405-fb57-45f9feddef46&pqid=false",
//           },
//         ],
//         pricingOptionId: "Pew_TkgBPQCl",
//       },
//     ],
//   },
// ];

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
