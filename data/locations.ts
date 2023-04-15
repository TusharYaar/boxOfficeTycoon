import { Country } from "../types";
const LOCATIONS: Country[] = [
  {
    name: "United States",
    cities: [
      {
        name: "Bismarck",
        box_offices: [
          { name: "Grand Theatres Bismarck", price: 45000 },
          { name: "Carmike 8", price: 45000 },
        ],
      },
      {
        name: "Fargo",
        box_offices: [
          { name: "Marcus West Acres Cinema", price: 45000 },
          { name: "Century Cinema", price: 45000 },
        ],
      },
      {
        name: "Rapid City",
        box_offices: [
          { name: "Cinemark Rapid City", price: 45000 },
          { name: "Elks Theatre", price: 45000 },
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
          { name: "Cineplex Cinemas Normanview", price: 45000 },
          { name: "Rainbow Cinemas Golden Mile", price: 45000 },
        ],
      },
      {
        name: "Saskatoon",
        box_offices: [
          { name: "Cineplex Cinemas Centre", price: 45000 },
          { name: "Landmark Cinemas Saskatoon", price: 45000 },
        ],
      },
      {
        name: "Winnipeg",
        box_offices: [
          { name: "Scotiabank Theatre Winnipeg", price: 45000 },
          // { name: "Cinematheque Winnipeg", price: 45000, },
        ],
      },
    ],
  },
];
export default LOCATIONS;
