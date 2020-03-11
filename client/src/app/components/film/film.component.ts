import { Watchlist } from "./../../Models/watchlistModel";
import { Film } from "./../../Models/filmModel";
import { FilmService } from "./../../services/film-service/film.service";
import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { AuthService } from "src/app/services/auth-service/auth.service";
import { UserServiceService } from "src/app/services/user-service/user-service.service";

@Component({
  selector: "app-film",
  templateUrl: "./film.component.html",
  styleUrls: ["./film.component.css"]
})
export class FilmComponent implements OnInit {
  film: Film;
  isOnUsersWatchlist: boolean;

  constructor(
    private fService: FilmService,
    private uService: UserServiceService,
    private activatedRoute: ActivatedRoute,
    private auth: AuthService
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      let film_id = params.id;
      this.fService.getFilm(film_id).subscribe(res => {
        this.film = res;

        this.uService
          .isOnUsersWatchlist(this.auth.profile(), film_id)
          .subscribe(bool => {
            this.isOnUsersWatchlist = bool;
          });
      });
    });
  }
  addToWatchlist(): void {
    this.activatedRoute.params.subscribe(params => {
      let watchlist: Watchlist = {
        film_id: params.id,
        user_id: this.auth.profile(),
        watched: false
      };

      this.fService
        .postToWatchlist(watchlist)
        .subscribe(res => console.log(res));
    });
  }
}
