import { Film } from "./../../Models/filmModel";
import { FilmService } from "./../../services/film-service/film.service";
import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-film",
  templateUrl: "./film.component.html",
  styleUrls: ["./film.component.css"]
})
export class FilmComponent implements OnInit {
  film: Film;

  constructor(
    private fService: FilmService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      let film_id = params.id;
      this.fService.getFilm(film_id).subscribe(res => {
        this.film = res;
        console.log(res);
      });
    });
  }
}
