import { createSlice } from "@reduxjs/toolkit";
import { IMovie } from "../types";
interface MovieState {
  movies: IMovie[];
  genres: string[];
}

const initialState: MovieState = {
  movies: [
    {
      id: 1,
      title: "Khartoum",
      genre: ["Action", "Adventure", "Drama", "War"],
      duration: 84,
      date: 2001,
      rating: 2,
      image: "https://robohash.org/etquised.png?size=200x200&set=set1",
    },
    {
      id: 2,
      title: "Norte, El",
      genre: ["Adventure", "Drama"],
      duration: 66,
      date: 1953,
      rating: 5,
      image:
        "https://robohash.org/dignissimosrerumquia.png?size=200x200&set=set1",
    },
    {
      id: 3,
      title: "Total Recall",
      genre: ["Action", "Sci-Fi", "Thriller"],
      duration: 248,
      date: 1915,
      rating: 4,
      image: "https://robohash.org/distinctiononquis.png?size=200x200&set=set1",
    },
    {
      id: 4,
      title: "Hell's Kitchen",
      genre: ["Drama"],
      duration: 105,
      date: 1996,
      rating: 3,
      image: "https://robohash.org/optioquamaut.png?size=200x200&set=set1",
    },
    {
      id: 5,
      title: "Samsara",
      genre: ["Documentary"],
      duration: 297,
      date: 2016,
      rating: 5,
      image: "https://robohash.org/etinid.png?size=200x200&set=set1",
    },
    {
      id: 6,
      title: "10",
      genre: ["Comedy", "Romance"],
      duration: 187,
      date: 1959,
      rating: 4,
      image: "https://robohash.org/voluptatemearerum.png?size=200x200&set=set1",
    },
    {
      id: 7,
      title: "Electric Shadows (Meng ying tong nian)",
      genre: ["Drama"],
      duration: 135,
      date: 1942,
      rating: 1,
      image:
        "https://robohash.org/aspernaturimpeditminima.png?size=200x200&set=set1",
    },
    {
      id: 8,
      title: "Casino Royale",
      genre: ["Action", "Adventure", "Comedy"],
      duration: 84,
      date: 1993,
      rating: 2,
      image:
        "https://robohash.org/nostrumcorruptivoluptates.png?size=200x200&set=set1",
    },
    {
      id: 9,
      title: "In Darkness",
      genre: ["Drama"],
      duration: 81,
      date: 1961,
      rating: 5,
      image: "https://robohash.org/enimcumquein.png?size=200x200&set=set1",
    },
    {
      id: 10,
      title: "Reincarnation",
      genre: ["Horror", "Mystery"],
      duration: 249,
      date: 1954,
      rating: 3,
      image:
        "https://robohash.org/solutadebitiscupiditate.png?size=200x200&set=set1",
    },
  ],
  genres: [
    "Action",
    "Adventure",
    "Drama",
    "War",
    "Horror",
    "Mystery",
    "Comedy",
    "Sci-Fi",
    "Thriller",
    "Documentary",
    "Romance",
  ],
};

const movieSlice = createSlice({
  name: "movie",
  initialState,
  reducers: {
    addMovie(state, action) {
      state.movies.push(action.payload);
    },
  },
});

export const { addMovie } = movieSlice.actions;

export default movieSlice.reducer;
