import { Movie } from "../types";
const MOVIES: Movie[] = [
  {
    title: "Hello",
    id: "helo",
    maxShows: 5,
    release: 0,
    runtime: 2 * 60 + 40,
    popularity: {
      max: 56,
      min: 3,
      duration: 5,
    },
  },
];

export default MOVIES;
