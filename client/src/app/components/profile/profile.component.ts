import { UserServiceService } from "./../../services/user-service/user-service.service";
import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { AuthService } from "src/app/services/auth-service/auth.service";
import { formatDate } from "@angular/common";

@Component({
  selector: "app-profile",
  templateUrl: "./profile.component.html",
  styleUrls: ["./profile.component.css"]
})
export class ProfileComponent implements OnInit {
  user;
  constructor(
    private uService: UserServiceService,
    private auth: AuthService
  ) {}

  ngOnInit(): void {
    let user_id = this.auth.profile();
    this.uService.getUser(user_id).subscribe(res => {
      this.user = res;
      this.user.birthday = this.getFormatedDate();
    });
  }
  getFormatedDate() {
    return formatDate(this.user.birthday, "dd.MM.yyyy", "en-US");
  }
}
