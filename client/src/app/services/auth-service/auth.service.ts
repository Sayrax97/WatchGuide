import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Router } from "@angular/router";
import * as jwt_decode from "jwt-decode";
@Injectable({
  providedIn: "root"
})
export class AuthService {
  private token: string;
  url: string = "localhost:3000/user";
  constructor(private http: HttpClient, private router: Router) {}
  saveToken(token: string): void {
    localStorage.setItem("userToken", token);
    this.token = token;
  }
  getToken(): string {
    if (!this.token) {
      this.token = localStorage.getItem("userToken");
    }
    return this.token;
  }
  getUser() {
    let token = this.getToken();
    if (token) {
      return this.getDecodedAccessToken(this.token);
    } else {
      return null;
    }
  }
  isLoggedIn() {
    let user = this.getUser();
    if (user) {
      //console.log(user.exp);
      //console.log(Date.now() / 1000);
      return user.exp > Date.now() / 1000;
    } else {
      return false;
    }
  }
  profile() {
    return this.getDecodedAccessToken(this.token).sub;
  }
  logout() {
    this.token = "";
    localStorage.removeItem("userToken");
    this.router.navigateByUrl("/");
  }
  getDecodedAccessToken(token: string): any {
    try {
      return jwt_decode(token);
    } catch (Error) {
      return null;
    }
  }
}
