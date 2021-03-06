import { User } from "./../../Models/userModel";
import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class UserServiceService {
  url = "http://localhost:3000/user";
  constructor(private httpClient: HttpClient) {}
  getAllUsers() {
    return this.httpClient.get<any>(this.url);
  }
  getUser(id) {
    return this.httpClient.get<any>(this.url + `/${id}`);
  }
  login(username: string, password: string) {
    return this.httpClient.post<any>(this.url + "/login", {
      username,
      password
    });
  }

  createUser(user: User) {
    return this.httpClient.post<any>(this.url, user);
  }
  uploadImage(data: FormData) {
    return this.httpClient.put(this.url + "/change", data);
  }

  getWatchList(id) {
    return this.httpClient.get<any>(this.url + "/watchlist" + `/${id}`);
  }
  isOnUsersWatchlist(user_id, film_id) {
    return this.httpClient.post<boolean>(this.url + "/watchlist", {
      id: user_id,
      film_id: film_id
    });
  }
}
