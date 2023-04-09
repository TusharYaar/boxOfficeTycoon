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

export type Location = {
  title: string;
  country: string;
  state: string;
  city: string;
  area: string;
  basePrice: number;
  screens: number;
  seats: number;
  popularity: number;
};
