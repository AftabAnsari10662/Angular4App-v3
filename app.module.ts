import { HttpClientModule } from "@angular/common/http";
import { MovieData } from "./movie-data";
import { NewMovie } from "./movie-new.component";
import { MovieList } from "./movie-list.component";
import { AppComponent } from "./app.component";

import { Component, NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { FormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";

@NgModule({
  declarations: [AppComponent, MovieList, NewMovie],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(
      [
        {
          path: "list",
          component: MovieList
        },
        {
          path: "new",
          component: NewMovie
        }
      ],
      {
        useHash: true
      }
    )
  ],
  providers: [MovieData],
  bootstrap: [AppComponent]
})
export class AppModule {}
