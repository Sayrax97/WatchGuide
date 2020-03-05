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
}
