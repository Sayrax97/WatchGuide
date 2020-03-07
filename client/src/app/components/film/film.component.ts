import { Film } from "./../../Models/filmModel";
import { FilmService } from "./../../services/film-service/film.service";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-film",
  templateUrl: "./film.component.html",
  styleUrls: ["./film.component.css"]
})
export class FilmComponent implements OnInit {
  films: Array<Film>;

  constructor(private fService: FilmService) {}

  ngOnInit(): void {
    this.fService.getFilms().subscribe(res => {
      this.films = res;
      console.log(res);
    });
  }
}
