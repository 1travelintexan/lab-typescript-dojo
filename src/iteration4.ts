//
// Iteration 4 | Type aliases
//
type Book = {
  title: string;
  year: number;
  genres: string[];
  rating?: number;
  author: string;
  numberOfPages?: number;
};
type Movie = {
  title: string;
  year: number;
  genres: string[];
  rating?: number;
  director: string;
  durationInMinutes?: number;
};

type MusicAlbum = {
  title: string;
  year: number;
  genres: string[];
  rating: number;
  artist: string;
  numberOfTracks: number;
  durationInMinutes: number;
  albumType: "Studio Album" | "Live Album" | "Soundtrack";
};

const ourBook: Book = {
  title: "Ragnars Trip",
  year: 2021,
  genres: ["action", "suspense"],
  rating: 5,
  author: "Joshua",
  numberOfPages: 222,
};
const ourMovie: Movie = {
  title: "Ragnars Movie Trip",
  year: 2022,
  genres: ["action", "suspense"],
  rating: 5,
  director: "Joshua",
  durationInMinutes: 90,
};
function getYearsSinceRelease(obj: Movie | MusicAlbum | Book): number {
  return 2024 - obj.year;
}
console.log(getYearsSinceRelease(ourBook));
console.log(getYearsSinceRelease(ourMovie));
