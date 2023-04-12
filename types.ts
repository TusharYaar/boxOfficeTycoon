export type Movie = {
  title: string;
  id: string;
  runtime: number;
  release: number;
  maxShows: number;
  popularity: {
    max: number;
    min: number;
    duration: number;
  };
  price: number;
};

// export type BoxOffice = {
//   title: string;
//   country: string;
//   state: string;
//   city: string;
//   area: string;
//   basePrice: number;
//   screens: number;
//   seats: number;
//   popularity: number;
// };

export type BoxOffice = {
  name: string;
  price: number;
  location: [number, number];
};

export type Country = {
  name: string;
  cities: City[];
};

export type City = {
  name: string;
  box_offices: BoxOffice[];
};
