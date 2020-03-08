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
}
