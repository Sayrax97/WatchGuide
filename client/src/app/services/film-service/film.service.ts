import { Watchlist } from "./../../Models/watchlistModel";
import { Film } from "./../../Models/filmModel";
import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root"
})
export class FilmService {
  private url = "http://localhost:3000/film";
  private watchListUrl = "http://localhost:3000/watchList";
  private reviewUrl = "http://localhost:3000/review";
  constructor(private httpClient: HttpClient) {}

  getFilms() {
    return this.httpClient.get<Array<Film>>(this.url);
  }
  getFilm(id: number) {
    return this.httpClient.get<Film>(this.url + `/${id}`);
  }

  postToWatchlist(watchlist: Watchlist) {
    return this.httpClient.post<Watchlist>(this.watchListUrl, watchlist);
  }
  postReview(user: number, film: number, stars: number) {
    return this.httpClient.post(this.reviewUrl, {
      user: user,
      film: film,
      stars: stars
    });
  }
  getReview(user: number, film: number) {
    return this.httpClient.get<any>(this.reviewUrl + `/${user}/${film}`);
  }
}
