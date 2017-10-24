import { Movie } from "./Movie";
import { MovieData } from "./movie-data";
import { Component } from "@angular/core";

@Component({
  selector: "movie-list",
  templateUrl: "./movie-list.component.html"
})
export class MovieList {
  movies: Movie[];
  constructor(private movieData: MovieData) {}

  ngOnInit() {
    this.movieData.getAllMovies().subscribe((movies: Movie[]) => {
      this.movies = movies;
    });
  }
}
