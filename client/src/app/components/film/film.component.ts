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
  film_id;
  isOnUsersWatchlist: boolean;
  stars = 5;

  constructor(
    private fService: FilmService,
    private uService: UserServiceService,
    private activatedRoute: ActivatedRoute,
    public auth: AuthService
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      this.film_id = params.id;
      this.fService.getFilm(this.film_id).subscribe(res => {
        this.film = res;

        this.uService
          .isOnUsersWatchlist(this.auth.profile(), this.film_id)
          .subscribe(bool => {
            this.isOnUsersWatchlist = bool;
          });
        this.fService
          .getReview(this.auth.profile(), this.film_id)
          .subscribe(data => {
            console.log(data);
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
  rate() {
    this.fService
      .postReview(this.auth.profile(), this.film_id, this.stars)
      .subscribe(data => {
        console.log(data);
      });
  }
}
