import { Routes, Router } from "@angular/router";
import { Component, OnInit } from "@angular/core";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { UserServiceService } from "src/app/services/user-service/user-service.service";
import * as jwt_decode from "jwt-decode";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"]
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  constructor(
    private userService: UserServiceService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.loginForm = new FormGroup({
      username: new FormControl("", Validators.required),
      password: new FormControl("", Validators.required)
    });
  }
  getUsername() {
    return this.loginForm.get("username").value;
  }
  getPassword() {
    return this.loginForm.get("password").value;
  }

  getDecodedAccessToken(token: string): any {
    try {
      return jwt_decode(token);
    } catch (Error) {
      return null;
    }
  }

  login() {
    this.userService
      .login(this.getUsername(), this.getPassword())
      .subscribe(data => {
        let tokenInfo = this.getDecodedAccessToken(data.token);
        this.router.navigate(["profile", { id: tokenInfo.sub }]);
        console.log(data);
      });
  }
}
