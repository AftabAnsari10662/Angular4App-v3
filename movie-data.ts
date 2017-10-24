import { Movie } from "./Movie";
import { Observable } from "rxjs/Rx";
import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable()
export class MovieData {
  constructor(private httpClient: HttpClient) {}

  getAllMovies(): Observable<Movie[]> {
    return this.httpClient.get<Movie[]>(
      "https://moviestorecore.azurewebsites.net/api/movies"
    );
  }

  postMovie(movie: Movie): Observable<Movie> {
    return this.httpClient.post<Movie>(
      "https://moviestorecore.azurewebsites.net/api/movies",
      movie
    );
  }
}
