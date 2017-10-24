import { Component } from "@angular/core";

@Component({
  selector: "hello-world",
  templateUrl: "./app.component.html",
  styleUrls: []
})
export class AppComponent {
  public message: string;
  constructor() {
    this.message = "Hello World!";
  }
}
