import { Country } from "../types";
const LOCATIONS: Country[] = [
  {
    name: "United States",
    cities: [
      {
        name: "Bismarck",
        box_offices: [
          { name: "Grand Theatres Bismarck", price: 45000, location: [46.8073, -100.7837] },
          { name: "Carmike 8", price: 45000, location: [46.8158, -100.7723] },
        ],
      },
      {
        name: "Fargo",
        box_offices: [
          { name: "Marcus West Acres Cinema", price: 45000, location: [46.8721, -96.8617] },
          { name: "Century Cinema", price: 45000, location: [46.8695, -96.9043] },
        ],
      },
      {
        name: "Rapid City",
        box_offices: [
          { name: "Cinemark Rapid City", price: 45000, location: [44.1068, -103.2263] },
          { name: "Elks Theatre", price: 45000, location: [44.0795, -103.2258] },
        ],
      },
    ],
  },
  {
    name: "Canada",
    cities: [
      {
        name: "Regina",
        box_offices: [
          { name: "Cineplex Cinemas Normanview", price: 45000, location: [50.4807, -104.6614] },
          { name: "Rainbow Cinemas Golden Mile", price: 45000, location: [50.4154, -104.6094] },
        ],
      },
      {
        name: "Saskatoon",
        box_offices: [
          { name: "Cineplex Cinemas Centre", price: 45000, location: [52.1245, -106.6326] },
          { name: "Landmark Cinemas Saskatoon", price: 45000, location: [52.1127, -106.6134] },
        ],
      },
      {
        name: "Winnipeg",
        box_offices: [
          { name: "Scotiabank Theatre Winnipeg", price: 45000, location: [49.8881, -97.1436] },
          // { name: "Cinematheque Winnipeg", price: 45000, location: [49.8902, -97.1418] },
        ],
      },
    ],
  },
];
export default LOCATIONS;
