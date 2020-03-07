import { UserServiceService } from "./../../services/user-service/user-service.service";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-profile",
  templateUrl: "./profile.component.html",
  styleUrls: ["./profile.component.css"]
})
export class ProfileComponent implements OnInit {
  user;
  constructor(private uService: UserServiceService) {}

  ngOnInit(): void {
    this.uService.getUser(1).subscribe(res => {
      this.user = res;
      console.log(res);
    });
  }
}
