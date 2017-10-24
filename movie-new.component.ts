import { NgForm } from "@angular/forms/src/directives";
import { Router } from "@angular/router";
import { Movie } from "./Movie";
import { MovieData } from "./movie-data";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "movie-new",
  templateUrl: "./movie-new.component.html",
  styleUrls: ["./movie-new.component.css"]
})
export class NewMovie implements OnInit {
  public movie: Movie;
  constructor(private movieData: MovieData, private router: Router) {}

  ngOnInit() {
    this.movie = new Movie(0, "", 1998);
  }
  save(movieForm: NgForm) {
    if (movieForm.valid) {
      this.movieData
        .postMovie(this.movie)
        .subscribe(m => this.router.navigate(["/list"]));
    }
  }
}
