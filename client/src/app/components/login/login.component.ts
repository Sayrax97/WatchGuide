import { Component, OnInit } from "@angular/core";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { UserServiceService } from "src/app/services/user-service/user-service.service";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"]
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  constructor(private userService: UserServiceService) {}

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
  login() {
    this.userService
      .login(this.getUsername(), this.getPassword())
      .subscribe(data => {
        console.log(data);
        console.log("Zavrseno");
      });
  }
}
