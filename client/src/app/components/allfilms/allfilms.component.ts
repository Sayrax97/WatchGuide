import { Component, OnInit } from "@angular/core";
import { FilmService } from "src/app/services/film-service/film.service";
import { AuthService } from "src/app/services/auth-service/auth.service";
import { Film } from "src/app/Models/filmModel";

@Component({
  selector: "app-allfilms",
  templateUrl: "./allfilms.component.html",
  styleUrls: ["./allfilms.component.css"]
})
export class AllFilmsComponent implements OnInit {
  constructor(private fService: FilmService, private auth: AuthService) {}
  films: Array<Film>;
  ngOnInit(): void {
    this.fService.getFilms().subscribe(data => {
      this.films = data;
    });
  }
  isLoggedIn(): boolean {
    return this.auth.isLoggedIn();
  }
}
